import type { CartItem, ReservationFormData } from '../types';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';
import { formatCurrency, formatDisplayDate } from './formatters';

interface WhatsAppResult {
  url: string;
  isReady: boolean;
  messageText: string;
  warning?: string;
}

/**
 * Builds an encoded WhatsApp URL and message payload for ordering from the cart.
 */
export function buildOrderWhatsAppPayload(
  cartItems: CartItem[],
  subtotal: number,
  orderType: 'Dine-In' | 'Takeaway' | 'Table Pre-Order',
  customerDetails?: { name?: string; contactPhone?: string; note?: string }
): WhatsAppResult {
  const isConfigured = RESTAURANT_CONFIG.isWhatsAppConfigured && !!RESTAURANT_CONFIG.whatsAppPhone.trim();
  const cleanPhone = RESTAURANT_CONFIG.whatsAppPhone.replace(/\D/g, '');

  let text = `🌿 *${RESTAURANT_CONFIG.brandName} - Order Request*\n`;
  text += `──────────────────────\n`;
  text += `*Order Type:* ${orderType}\n`;

  if (customerDetails?.name) {
    text += `*Guest Name:* ${customerDetails.name}\n`;
  }
  if (customerDetails?.contactPhone) {
    text += `*Contact Phone:* ${customerDetails.contactPhone}\n`;
  }

  text += `\n*Selected Items:*\n`;
  cartItems.forEach((item, index) => {
    const itemTotal = item.menuItem.price * item.quantity;
    const vegBadge = item.menuItem.isVeg ? '[Veg]' : '[Non-Veg]';
    const estTag = item.menuItem.priceEstimated ? ' (Est.)' : '';
    text += `${index + 1}. ${item.menuItem.name} ${vegBadge}${estTag}\n`;
    text += `   Qty: ${item.quantity} × ${formatCurrency(item.menuItem.price)} = ${formatCurrency(itemTotal)}\n`;
  });

  text += `──────────────────────\n`;
  text += `*Estimated Total: ${formatCurrency(subtotal)}*\n`;

  if (customerDetails?.note) {
    text += `\n*Special Instructions:* ${customerDetails.note}\n`;
  }

  text += `\n_Note: This order request was prepared via the official website. Please confirm availability, preparation time, and acceptance._`;

  if (!isConfigured) {
    return {
      url: '',
      isReady: false,
      messageText: text,
      warning: 'Official WhatsApp order number has not been configured in restaurantConfig.ts yet.'
    };
  }

  const encodedMessage = encodeURIComponent(text);
  const url = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

  return {
    url,
    isReady: true,
    messageText: text
  };
}

/**
 * Builds an encoded WhatsApp URL and message payload for table reservations.
 */
export function buildReservationWhatsAppPayload(
  data: ReservationFormData
): WhatsAppResult {
  const isConfigured = RESTAURANT_CONFIG.isWhatsAppConfigured && !!RESTAURANT_CONFIG.whatsAppPhone.trim();
  const cleanPhone = RESTAURANT_CONFIG.whatsAppPhone.replace(/\D/g, '');

  let text = `🌿 *Table Reservation Request - ${RESTAURANT_CONFIG.brandName}*\n`;
  text += `──────────────────────\n`;
  text += `*Guest Name:* ${data.fullName}\n`;
  text += `*Phone:* ${data.phone}\n`;
  text += `*Date:* ${formatDisplayDate(data.date)} (${data.date})\n`;
  text += `*Preferred Time:* ${data.time}\n`;
  text += `*Number of Guests:* ${data.guests} person(s)\n`;
  text += `*Occasion:* ${data.occasion}\n`;

  if (data.specialRequests && data.specialRequests.trim().length > 0) {
    text += `*Special Requests / Dietary Notes:* ${data.specialRequests.trim()}\n`;
  }

  text += `──────────────────────\n`;
  text += `_Please check table availability and reply to confirm this reservation._`;

  if (!isConfigured) {
    return {
      url: '',
      isReady: false,
      messageText: text,
      warning: 'Official WhatsApp contact number is pending configuration in restaurantConfig.ts.'
    };
  }

  const encodedMessage = encodeURIComponent(text);
  const url = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

  return {
    url,
    isReady: true,
    messageText: text
  };
}
