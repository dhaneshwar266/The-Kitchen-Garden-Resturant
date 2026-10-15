import React, { useState } from 'react';
import type { ReservationFormData } from '../../types';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';
import { getTodayDateString, formatDisplayDate } from '../../utils/formatters';
import { buildReservationWhatsAppPayload } from '../../utils/whatsapp';
import { 
  CalendarCheck, 
  Clock, 
  Users, 
  Phone, 
  User, 
  MessageSquare, 
  Sparkles, 
  Send, 
  Copy, 
  Check, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import './ReservationSection.css';

const TIME_SLOTS = [
  '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM'
];

const OCCASIONS = [
  'Family Dinner / Lunch',
  'Birthday Celebration',
  'Anniversary',
  'Casual Dining',
  'Reunion / Group Gathering',
  'Business / Professional Meal',
  'Other Celebration'
];

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    phone: '',
    date: getTodayDateString(),
    time: '07:30 PM',
    guests: 4,
    occasion: 'Family Dinner / Lunch',
    specialRequests: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [preparedPayload, setPreparedPayload] = useState<ReturnType<typeof buildReservationWhatsAppPayload> | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your name (minimum 2 characters)';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number';
    }

    if (!formData.date) {
      errs.date = 'Please select a reservation date';
    } else {
      const today = getTodayDateString();
      if (formData.date < today) {
        errs.date = 'Reservation date cannot be in the past';
      }
    }

    if (!formData.time) {
      errs.time = 'Please select a preferred dining time';
    }

    if (!formData.guests || formData.guests < 1) {
      errs.guests = 'Please select at least 1 guest';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = buildReservationWhatsAppPayload(formData);
    setPreparedPayload(payload);
  };

  const handleCopySummary = () => {
    if (!preparedPayload) return;
    navigator.clipboard.writeText(preparedPayload.messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendWhatsApp = () => {
    if (preparedPayload?.isReady && preparedPayload.url) {
      window.open(preparedPayload.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleResetForm = () => {
    setPreparedPayload(null);
  };

  return (
    <section id="reserve" className="reservation-section section-wrapper" aria-label="Table Reservations">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <CalendarCheck size={13} />
            <span>Plan Your Visit</span>
          </span>
          <h2 className="section-title">Reserve a Table for Your Family</h2>
          <p className="section-subtitle">
            Secure your preferred table in advance, especially for weekend gatherings, family celebrations, 
            and large groups.
          </p>
        </div>

        <div className="reservation-card-grid">
          {/* Reservation Info / Advisory */}
          <div className="reservation-info-col">
            <div className="reservation-advisory-card">
              <h3 className="advisory-title">How Reservations Work</h3>
              <p className="advisory-intro">
                To guarantee smooth seating without automated errors or double-bookings, our reservations 
                are managed with direct personal confirmation.
              </p>

              <div className="advisory-steps">
                <div className="step-item">
                  <div className="step-num">1</div>
                  <div>
                    <h4 className="step-title">Submit Reservation Details</h4>
                    <p className="step-desc">Enter your date, time, group size, and any special seating requests.</p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-num">2</div>
                  <div>
                    <h4 className="step-title">Prepared for Confirmation</h4>
                    <p className="step-desc">Your request payload is generated instantly for direct restaurant review.</p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-num">3</div>
                  <div>
                    <h4 className="step-title">Confirmation Reply</h4>
                    <p className="step-desc">
                      The restaurant team verifies table availability and confirms your booking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Seating Policies */}
              <div className="seating-notes-box">
                <div className="seating-notes-header">
                  <HelpCircle size={15} className="notes-icon" />
                  <span>Important Dining Notes</span>
                </div>
                <ul className="seating-notes-list">
                  <li>Tables are held for 15 minutes past the reserved time slot.</li>
                  <li>For parties larger than 12 guests, advance notice is appreciated.</li>
                  <li>Child high-chairs and dietary adjustments available on request.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="reservation-form-col">
            {!preparedPayload ? (
              <form onSubmit={handleSubmit} className="reservation-form surface-card" noValidate>
                <div className="form-grid">
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="res-name" className="form-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <User size={16} className="input-icon" />
                      <input
                        id="res-name"
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                        required
                      />
                    </div>
                    {errors.fullName && <p className="error-text">{errors.fullName}</p>}
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="res-phone" className="form-label">
                      Phone Number <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <Phone size={16} className="input-icon" />
                      <input
                        id="res-phone"
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`form-input ${errors.phone ? 'has-error' : ''}`}
                        required
                      />
                    </div>
                    {errors.phone && <p className="error-text">{errors.phone}</p>}
                  </div>

                  {/* Date */}
                  <div className="form-group">
                    <label htmlFor="res-date" className="form-label">
                      Date <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <input
                        id="res-date"
                        type="date"
                        min={getTodayDateString()}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={`form-input ${errors.date ? 'has-error' : ''}`}
                        required
                      />
                    </div>
                    {errors.date && <p className="error-text">{errors.date}</p>}
                  </div>

                  {/* Time Slot */}
                  <div className="form-group">
                    <label htmlFor="res-time" className="form-label">
                      Preferred Time <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <Clock size={16} className="input-icon" />
                      <select
                        id="res-time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="form-input form-select"
                        required
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.time && <p className="error-text">{errors.time}</p>}
                  </div>

                  {/* Guests */}
                  <div className="form-group">
                    <label htmlFor="res-guests" className="form-label">
                      Number of Guests <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <Users size={16} className="input-icon" />
                      <select
                        id="res-guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                        className="form-input form-select"
                        required
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.guests && <p className="error-text">{errors.guests}</p>}
                  </div>

                  {/* Occasion */}
                  <div className="form-group">
                    <label htmlFor="res-occasion" className="form-label">
                      Occasion
                    </label>
                    <div className="input-wrap">
                      <Sparkles size={16} className="input-icon" />
                      <select
                        id="res-occasion"
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="form-input form-select"
                      >
                        {OCCASIONS.map((occ) => (
                          <option key={occ} value={occ}>
                            {occ}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="form-group full-width">
                  <label htmlFor="res-requests" className="form-label">
                    Special Requests / Dietary Notes (Optional)
                  </label>
                  <div className="input-wrap">
                    <MessageSquare size={16} className="input-icon textarea-icon" />
                    <textarea
                      id="res-requests"
                      rows={3}
                      placeholder="e.g. Quiet family booth, toddler high chair, mild spices for children..."
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      className="form-input form-textarea"
                    />
                  </div>
                </div>

                {/* Disclaimer & Submit */}
                <div className="form-submit-footer">
                  <p className="form-disclaimer">
                    * Preparing this request does not automatically confirm table booking. 
                    Reservations are confirmed only once verified by the restaurant.
                  </p>
                  <button type="submit" className="btn-primary form-submit-btn">
                    <span>Prepare Reservation Request</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Request Prepared Confirmation State */
              <div className="reservation-prepared-card surface-card">
                <div className="prepared-header">
                  <div className="prepared-icon-wrap">
                    <CalendarCheck size={28} />
                  </div>
                  <div>
                    <h3 className="prepared-title">Reservation Request Prepared</h3>
                    <p className="prepared-subtitle">
                      Your booking details have been formatted and are ready to be sent to the restaurant.
                    </p>
                  </div>
                </div>

                {/* Summary Box */}
                <div className="prepared-summary-box">
                  <div className="summary-row">
                    <span className="s-label">Guest Name:</span>
                    <span className="s-val">{formData.fullName}</span>
                  </div>
                  <div className="summary-row">
                    <span className="s-label">Phone:</span>
                    <span className="s-val">{formData.phone}</span>
                  </div>
                  <div className="summary-row">
                    <span className="s-label">Date & Time:</span>
                    <span className="s-val">{formatDisplayDate(formData.date)} at {formData.time}</span>
                  </div>
                  <div className="summary-row">
                    <span className="s-label">Party Size:</span>
                    <span className="s-val">{formData.guests} Guests ({formData.occasion})</span>
                  </div>
                  {formData.specialRequests && (
                    <div className="summary-row">
                      <span className="s-label">Notes:</span>
                      <span className="s-val">{formData.specialRequests}</span>
                    </div>
                  )}
                </div>

                {/* Confirmation Status Banner */}
                <div className="confirmation-status-banner">
                  <AlertCircle size={18} className="status-icon" />
                  <div>
                    <strong>Notice:</strong> Your table is not yet confirmed. 
                    Table bookings are confirmed only after the restaurant staff acknowledges availability.
                  </div>
                </div>

                {/* Actions */}
                <div className="prepared-actions">
                  {RESTAURANT_CONFIG.isWhatsAppConfigured ? (
                    <button
                      onClick={handleSendWhatsApp}
                      className="btn-primary w-full send-whatsapp-res-btn"
                    >
                      <Send size={16} />
                      <span>Send via WhatsApp for Confirmation</span>
                    </button>
                  ) : (
                    <div className="config-pending-box">
                      <p className="config-pending-text">
                        <strong>WhatsApp Config Pending:</strong> The official WhatsApp number for 
                        {RESTAURANT_CONFIG.brandName} is pending setup in <code>restaurantConfig.ts</code>.
                      </p>
                      <button
                        onClick={handleCopySummary}
                        className="btn-secondary w-full"
                      >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                        <span>{copied ? 'Reservation Summary Copied!' : 'Copy Reservation Details'}</span>
                      </button>
                    </div>
                  )}

                  <button
                    onClick={handleResetForm}
                    className="btn-secondary w-full edit-res-btn"
                  >
                    <span>Edit Reservation Details</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
