import React, { useState } from 'react';
import { useCart } from '../../context/useCart';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';
import { formatCurrency } from '../../utils/formatters';
import { buildOrderWhatsAppPayload } from '../../utils/whatsapp';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  Plus, 
  Minus, 
  ArrowRight, 
  Send, 
  AlertCircle, 
  Copy, 
  Check, 
  Utensils, 
  Package 
} from 'lucide-react';
import './CartDrawer.css';

export const CartDrawer: React.FC = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    subtotal 
  } = useCart();

  const [orderType, setOrderType] = useState<'Dine-In' | 'Takeaway' | 'Table Pre-Order'>('Dine-In');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialNote, setSpecialNote] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isCartOpen) return null;

  const orderPayload = buildOrderWhatsAppPayload(cartItems, subtotal, orderType, {
    name: guestName.trim() || undefined,
    contactPhone: guestPhone.trim() || undefined,
    note: specialNote.trim() || undefined
  });

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(orderPayload.messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendWhatsApp = () => {
    if (orderPayload.isReady && orderPayload.url) {
      window.open(orderPayload.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="cart-drawer-root" role="dialog" aria-modal="true" aria-label="Order Cart">
      {/* Backdrop */}
      <div 
        className="cart-backdrop" 
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <aside className="cart-drawer">
        {/* Header */}
        <div className="cart-header">
          <div className="cart-header-title-wrap">
            <ShoppingBag size={20} className="text-copper" />
            <h2 className="cart-header-title">Your Order</h2>
            <span className="cart-count-pill">{cartItems.length} items</span>
          </div>
          <div className="cart-header-actions">
            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="cart-clear-btn"
                title="Clear all items"
                aria-label="Clear all items"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsCartOpen(false)}
              className="cart-close-btn"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <div className="cart-empty-icon-wrap" aria-hidden="true">
                <ShoppingBag size={36} />
              </div>
              <h3 className="cart-empty-title">Your cart is empty</h3>
              <p className="cart-empty-desc">
                Explore our sizzling starters, claypot biryanis, and homestyle gravies to build your order.
              </p>
              <a
                href="#menu"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary cart-browse-btn"
              >
                <span>Browse Menu</span>
                <ArrowRight size={16} />
              </a>
            </div>
          ) : (
            <div className="cart-items-wrapper">
              {/* Order Type Toggle */}
              <div className="order-type-selector">
                <span className="selector-label">Dining Preference:</span>
                <div className="selector-options">
                  <button
                    type="button"
                    onClick={() => setOrderType('Dine-In')}
                    className={`order-type-btn ${orderType === 'Dine-In' ? 'active' : ''}`}
                  >
                    <Utensils size={14} />
                    <span>Dine-In</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('Takeaway')}
                    className={`order-type-btn ${orderType === 'Takeaway' ? 'active' : ''}`}
                  >
                    <Package size={14} />
                    <span>Takeaway</span>
                  </button>
                </div>
              </div>

              {/* Items List */}
              <ul className="cart-items-list">
                {cartItems.map(({ menuItem, quantity }) => (
                  <li key={menuItem.id} className="cart-item-row">
                    <img
                      src={menuItem.image}
                      alt={menuItem.name}
                      className="cart-item-thumb"
                      loading="lazy"
                    />
                    <div className="cart-item-info">
                      <div className="cart-item-top">
                        <h4 className="cart-item-name">{menuItem.name}</h4>
                        <button
                          onClick={() => removeFromCart(menuItem.id)}
                          className="cart-item-remove-btn"
                          aria-label={`Remove ${menuItem.name} from cart`}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <div className="cart-item-bottom">
                        <div className="cart-item-qty">
                          <button
                            onClick={() => updateQuantity(menuItem.id, quantity - 1)}
                            className="cart-qty-btn"
                            aria-label={`Decrease ${menuItem.name}`}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="cart-qty-val">{quantity}</span>
                          <button
                            onClick={() => updateQuantity(menuItem.id, quantity + 1)}
                            className="cart-qty-btn"
                            aria-label={`Increase ${menuItem.name}`}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="cart-item-pricing">
                          <span className="cart-item-unit-price">
                            {formatCurrency(menuItem.price)} each{menuItem.priceEstimated ? ' (Est.)' : ''}
                          </span>
                          <span className="cart-item-total-price">
                            {formatCurrency(menuItem.price * quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Optional Guest Notes Form */}
              <div className="cart-details-form">
                <h4 className="details-form-title">Order Details (Optional)</h4>
                <div className="cart-form-row">
                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="cart-input"
                  />
                  <input
                    type="tel"
                    placeholder="Contact Number (Optional)"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="cart-input"
                  />
                </div>
                <textarea
                  placeholder="Special instructions (e.g. less spicy, extra onions, preparation note)..."
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  className="cart-textarea"
                  rows={2}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span className="summary-label">Estimated Subtotal</span>
              <span className="summary-amount">{formatCurrency(subtotal)}</span>
            </div>
            <p className="cart-tax-notice">
              Applicable taxes and packaging may apply. Final bill confirmed by restaurant upon order acceptance.
            </p>

            {/* Config warning if WhatsApp is not set up */}
            {!RESTAURANT_CONFIG.isWhatsAppConfigured ? (
              <div className="cart-config-warning" role="alert">
                <div className="warning-header">
                  <AlertCircle size={15} className="warning-icon" />
                  <strong>WhatsApp Setup Notice:</strong>
                </div>
                <p>
                  Official WhatsApp order number is not configured in <code>restaurantConfig.ts</code>. 
                  Live WhatsApp messaging is disabled until the restaurant's phone is added.
                </p>
                <div className="warning-actions">
                  <button
                    onClick={handleCopyMessage}
                    className="btn-secondary w-full copy-btn"
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                    <span>{copied ? 'Order Summary Copied!' : 'Copy Order Text Preview'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="cart-checkout-actions">
                <button
                  onClick={handleSendWhatsApp}
                  className="btn-primary w-full send-whatsapp-btn"
                >
                  <Send size={16} />
                  <span>Send Order via WhatsApp</span>
                </button>
                <p className="cart-disclaimer">
                  * Opens WhatsApp with your prepared items. Your order is confirmed only when the restaurant replies.
                </p>
              </div>
            )}
          </div>
        )}
      </aside>
    </div>
  );
};
