import React from 'react';
import type { MenuItem } from '../../types';
import { useCart } from '../../context/useCart';
import { formatCurrency } from '../../utils/formatters';
import { Plus, Minus, Flame, Sparkles } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  onSelectImage?: (imgUrl: string, title: string) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onSelectImage }) => {
  const { cartItems, addToCart, updateQuantity } = useCart();

  const cartEntry = cartItems.find((ci) => ci.menuItem.id === item.id);
  const currentQty = cartEntry ? cartEntry.quantity : 0;

  return (
    <article className="menu-card surface-card">
      {/* Dish Image */}
      <div 
        className="menu-card-image-wrap"
        onClick={() => {
          if (onSelectImage) {
            onSelectImage(item.image, item.name);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`View enlarged image for ${item.name}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            if (onSelectImage) {
              onSelectImage(item.image, item.name);
            }
          }
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="menu-card-image"
          loading="lazy"
          width="400"
          height="260"
        />
        <div className="menu-card-tags">
          {item.isVeg ? (
            <span className="badge-veg" title="Vegetarian Dish" aria-label="Vegetarian">
              <span className="badge-veg-dot"></span>
            </span>
          ) : (
            <span className="badge-nonveg" title="Non-Vegetarian Dish" aria-label="Non-Vegetarian">
              <span className="badge-nonveg-dot"></span>
            </span>
          )}

          {item.isChefSpecial && (
            <span className="menu-pill-special">
              <Sparkles size={11} />
              <span>Chef's Choice</span>
            </span>
          )}

          {item.isSpicy && (
            <span className="menu-pill-spicy" title="Spicy Dish">
              <Flame size={11} />
              <span>Spicy</span>
            </span>
          )}
        </div>
      </div>

      {/* Dish Details */}
      <div className="menu-card-body">
        <div className="menu-card-header">
          <h3 className="menu-card-title">{item.name}</h3>
          <div className="menu-card-price-wrap">
            <span className="menu-card-price">{formatCurrency(item.price)}</span>
            {item.priceEstimated && (
              <span className="price-est-badge" title="Estimated price pending final printed menu verification">
                Est.
              </span>
            )}
          </div>
        </div>

        <p className="menu-card-desc">{item.description}</p>

        {item.portionSize && (
          <span className="menu-card-portion">{item.portionSize}</span>
        )}

        {/* Action Controls */}
        <div className="menu-card-footer">
          {currentQty === 0 ? (
            <button
              onClick={() => addToCart(item, 1)}
              className="btn-outline-copper menu-add-btn"
              aria-label={`Add ${item.name} to cart`}
            >
              <Plus size={15} />
              <span>Add to Order</span>
            </button>
          ) : (
            <div className="menu-card-qty-control" aria-label={`Quantity for ${item.name}`}>
              <button
                onClick={() => updateQuantity(item.id, currentQty - 1)}
                className="qty-btn"
                aria-label={`Decrease quantity of ${item.name}`}
              >
                <Minus size={14} />
              </button>
              <span className="qty-number" aria-live="polite">{currentQty}</span>
              <button
                onClick={() => updateQuantity(item.id, currentQty + 1)}
                className="qty-btn"
                aria-label={`Increase quantity of ${item.name}`}
              >
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
