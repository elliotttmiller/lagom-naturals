export const OPEN_CART_DRAWER_EVENT = "lagom:open-cart-drawer";

export function openCartDrawer(trigger) {
  window.dispatchEvent(new CustomEvent(OPEN_CART_DRAWER_EVENT, { detail: { trigger } }));
}
