// src/utils/fbpixel.js
// Modular Facebook Pixel helper — Pixel ID: 1313245890565997

export const FB_PIXEL_ID = '1313245890565997';

/**
 * Track a standard Facebook Pixel PageView event.
 * Called on every route change via React Router.
 */
export const pageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

/**
 * Track a custom Facebook Pixel event.
 * @param {string} name  - Event name (e.g. 'Lead', 'Contact')
 * @param {object} params - Optional event parameters
 */
export const trackEvent = (name, params = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, params);
  }
};
