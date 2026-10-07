import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { m, Presence, motionTokens, useReducedMotion } from "@/motionSystem";
import { useCart } from "./StorefrontContext";
import { OPEN_CART_DRAWER_EVENT } from "./cartDrawerEvents";
import "@/styles/cart-drawer.css";

export default function CartDrawer() {
  const { items, change, remove, count, subtotal } = useCart();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const returnFocusRef = useRef(null);

  useEffect(() => {
    const requestOpen = (event) => {
      returnFocusRef.current = event.detail?.trigger || document.activeElement;
      setOpen(true);
    };
    window.addEventListener(OPEN_CART_DRAWER_EVENT, requestOpen);
    return () => window.removeEventListener(OPEN_CART_DRAWER_EVENT, requestOpen);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    const appRoot = document.getElementById("root");
    const previousInert = appRoot?.inert ?? false;
    if (appRoot) appRoot.inert = true;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeRef.current?.focus());

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const controls = panelRef.current?.querySelectorAll("a[href],button:not([disabled])");
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (appRoot) appRoot.inert = previousInert;
      returnFocusRef.current?.focus?.();
    };
  }, [open]);

  const close = () => setOpen(false);
  const transition = reduceMotion ? { duration: 0 } : motionTokens.springDrawer;

  return createPortal(
    <Presence initial={false}>
      {open ? (
        <m.div
          className="cart-drawer-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: .22, ease: motionTokens.ease }}
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <m.aside
            ref={panelRef}
            className="cart-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-drawer-title"
            initial={reduceMotion ? { opacity: 0 } : { x: "100%", opacity: .94 }}
            animate={{ x: 0, opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { x: "100%", opacity: .97 }}
            transition={transition}
            onPointerDown={(event) => event.stopPropagation()}
          >
            <header className="cart-drawer__header">
              <div>
                <h2 id="cart-drawer-title">Your bag <span>({count})</span></h2>
              </div>
              <button ref={closeRef} type="button" className="cart-drawer__close" aria-label="Close cart" onClick={close}>
                <X aria-hidden="true" />
              </button>
            </header>

            {items.length ? (
              <>
                <div className="cart-drawer__items" aria-label="Cart items">
                  {items.map((item) => (
                    <article className="cart-drawer__item" key={item.cartKey}>
                      <div className="cart-drawer__item-image">
                        {item.image ? <img src={item.image} alt="" loading="lazy" decoding="async" /> : <ShoppingBag aria-hidden="true" />}
                      </div>
                      <div className="cart-drawer__item-main">
                        <div className="cart-drawer__item-heading">
                          <div>
                            <h3>{item.name}</h3>
                            <p>{item.weight || item.pack || item.color}</p>
                          </div>
                          <strong>${(item.price * item.qty).toFixed(2)}</strong>
                        </div>
                        <div className="cart-drawer__item-actions">
                          <div className="cart-drawer__quantity" aria-label={`Quantity for ${item.name}`}>
                            <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => change(item.cartKey, item.qty - 1)}><Minus aria-hidden="true" /></button>
                            <span aria-live="polite">{item.qty}</span>
                            <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => change(item.cartKey, item.qty + 1)}><Plus aria-hidden="true" /></button>
                          </div>
                          <button type="button" className="cart-drawer__remove" onClick={() => remove(item.cartKey)} aria-label={`Remove ${item.name}`}>
                            <Trash2 aria-hidden="true" /><span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <footer className="cart-drawer__footer">
                  <div className="cart-drawer__subtotal"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
                  <p>Shipping and applicable taxes are calculated at checkout.</p>
                  <Link className="cart-drawer__checkout" to="/checkout" onClick={close}>
                    <span>Continue to checkout</span><ArrowRight aria-hidden="true" />
                  </Link>
                  <Link className="cart-drawer__view-cart" to="/cart" onClick={close}>View full cart</Link>
                </footer>
              </>
            ) : (
              <div className="cart-drawer__empty">
                <span className="cart-drawer__empty-icon"><ShoppingBag aria-hidden="true" /></span>
                <h3>Your bag is taking a breather.</h3>
                <p>Explore the collection and find something for your next good moment.</p>
                <Link to="/shop" onClick={close}>Explore the collection <ArrowRight aria-hidden="true" /></Link>
              </div>
            )}
          </m.aside>
        </m.div>
      ) : null}
    </Presence>,
    document.body,
  );
}
