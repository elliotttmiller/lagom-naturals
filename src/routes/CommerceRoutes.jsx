import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {ArrowLeft,ArrowRight,ChevronRight,Minus,Plus,Store} from 'lucide-react'
import {m,Presence,Reveal,motionTokens,motionVariants} from '@/motionSystem'
import Shell from '@/storefront/StorefrontShell'
import {useCart} from '@/storefront/StorefrontContext'
import '@/styles/desktop-cart.css'
import '@/styles/desktop-checkout.css'
import '@/styles/mobile/60-commerce.css'
import '@/styles/mobile/65-checkout.css'

function EmptyState({title="Nothing here yet.",body="Check back soon for updated availability.",to="/shop",action="Browse products"}){return <m.div className="empty-state" initial="hidden" animate="visible" variants={motionVariants.softScale}><h2>{title}</h2><p>{body}</p>{to&&<Link className="primary-bar" to={to}>{action}</Link>}</m.div>}

function CartPage() {
  const { items, change, remove, subtotal } = useCart();
  return (
    <Shell>
      <div className="cart-page">
        <Reveal>
          <h1>
            Your Cart <span>({items.length})</span>
          </h1>
        </Reveal>
        {!items.length ? (
          <EmptyState
            title="Your cart is empty."
            body="Browse the current selection and add something that feels just right."
          />
        ) : (
          <>
            <m.div className="cart-list" layout>
              <Presence mode="popLayout">
                {items.map((item) => (
                  <m.div
                    className="cart-row"
                    key={item.cartKey}
                    layout
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -18, scale: 0.97 }}
                    transition={motionTokens.springSoft}
                  >
                  <img src={item.image} alt="" />
                  <div className="cart-item-copy">
                    <p>{item.brand || "Lagom Naturals"}</p>
                    <b>{item.name}</b>
                    <small>{item.weight || item.pack || item.color}</small>
                  </div>
                  <strong>${(item.price * item.qty).toFixed(2)}</strong>
                  <div className="cart-qty">
                    <m.button
                      type="button"
                      aria-label={`Decrease ${item.name} quantity`}
                      whileTap={{ scale: 0.85 }}
                      onClick={() => change(item.cartKey, item.qty - 1)}
                    >
                      <Minus />
                    </m.button>
                    <Presence mode="popLayout">
                      <m.span
                        key={item.qty}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                      >
                        {item.qty}
                      </m.span>
                    </Presence>
                    <m.button
                      type="button"
                      aria-label={`Increase ${item.name} quantity`}
                      whileTap={{ scale: 0.85 }}
                      onClick={() => change(item.cartKey, item.qty + 1)}
                    >
                      <Plus />
                    </m.button>
                  </div>
                  <m.button
                    type="button"
                    whileTap={{ scale: 0.8 }}
                    className="remove"
                    onClick={() => remove(item.cartKey)}
                    aria-label={`Remove ${item.name}`}
                  >
                    ×
                  </m.button>
                </m.div>
                ))}
              </Presence>
            </m.div>
            <Reveal className="cart-page__checkout">
              <textarea aria-label="Order note" placeholder="Add a note (optional)" />
              <m.div className="totals" layout>
                <p>
                  <span>Subtotal</span>
                  <b>${subtotal.toFixed(2)}</b>
                </p>
                <p>
                  <span>Estimated taxes</span>
                  <b>${(subtotal * 0.08).toFixed(2)}</b>
                </p>
              </m.div>
              <m.div whileHover={{ y: -2 }} whileTap={motionTokens.tap}>
                <Link className="primary-bar linkbar" to="/checkout">
                  CONTINUE
                </Link>
              </m.div>
            </Reveal>
          </>
        )}
      </div>
    </Shell>
  );
}
function CheckoutPage() {
  const { items } = useCart();
  const [step, setStep] = useState(1);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  if (!items.length)
    return (
      <Shell>
        <div className="checkout-page">
          <h1>Checkout</h1>
          <EmptyState title="Your cart is empty." body="Add products before continuing." />
        </div>
      </Shell>
    );
  return (
    <Shell>
      <div className="checkout-page">
        <Link className="checkout-back" to="/cart">
          <ArrowLeft /> Back to cart
        </Link>
        <h1>Checkout</h1>
        <div className="checkout-steps">
          <span className={step >= 1 ? "active" : ""}>
            1 <b>DETAILS</b>
          </span>
          <i />
          <span className={step >= 2 ? "active" : ""}>
            2 <b>REVIEW</b>
          </span>
        </div>
        <div className="checkout-layout">
          <div className="checkout-workflow">
            <Presence mode="wait">
              <m.div
                key={step}
                className="checkout-step"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{
                  duration: motionTokens.duration.base,
                  ease: motionTokens.ease,
                }}
              >
                {step === 1 && (
                  <>
                    <section className="checkout-section">
                      <div className="checkout-section__heading">
                        <span>01</span>
                        <div>
                          <h2>Contact information</h2>
                          <p>We’ll use this email for order communication.</p>
                        </div>
                      </div>
                      <label className="checkout-field">
                        Email address
                        <input
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                        />
                      </label>
                      <label className="checkbox">
                        <input type="checkbox" /> Send me order updates
                      </label>
                    </section>

                    <section className="checkout-section">
                      <div className="checkout-section__heading">
                        <span>02</span>
                        <div>
                          <h2>Fulfillment</h2>
                          <p>Final options are confirmed before completion.</p>
                        </div>
                      </div>
                      <m.div layout className="method-card active">
                        <Store />
                        <span>
                          <b>Online order</b>
                          <small>Fulfillment details confirmed before completion</small>
                        </span>
                      </m.div>
                      <div className="pickup-card">
                        <span>
                          <b>Availability</b>
                          <small>
                            Shipping, pickup, and age eligibility require backend
                            connection.
                          </small>
                        </span>
                        <Link to="/visit">View locations <ChevronRight /></Link>
                      </div>
                    </section>

                    <m.button
                      type="button"
                      whileHover={{ y: -2 }}
                      whileTap={motionTokens.tap}
                      className="primary-bar"
                      onClick={() => setStep(2)}
                    >
                      Review order <ArrowRight />
                    </m.button>
                  </>
                )}
                {step === 2 && (
                  <>
                    <section className="checkout-section checkout-section--review">
                      <div className="checkout-section__heading">
                        <span>02</span>
                        <div>
                          <h2>Review your order</h2>
                          <p>Confirm the available details before continuing.</p>
                        </div>
                      </div>
                      <div className="pickup-card">
                        <span>
                          <b>Payment connection required</b>
                          <small>
                            Current payment processing is not connected in this
                            frontend build.
                          </small>
                        </span>
                      </div>
                      <p className="muted">
                        Final inventory, taxes, shipping eligibility, age checks,
                        and payment are confirmed by the commerce backend before
                        any order can be submitted.
                      </p>
                    </section>
                    <div className="checkout-review-actions">
                      <button type="button" onClick={() => setStep(1)}>
                        <ArrowLeft /> Edit details
                      </button>
                      <m.button
                        type="button"
                        whileTap={motionTokens.tap}
                        className="primary-bar"
                        disabled
                      >
                        Payment required
                      </m.button>
                    </div>
                  </>
                )}
              </m.div>
            </Presence>
          </div>

          <aside className="checkout-summary" aria-labelledby="checkout-summary-title">
            <div className="checkout-summary__heading">
              <h2 id="checkout-summary-title">Order summary</h2>
              <Link to="/cart">Edit cart</Link>
            </div>
            <div className="checkout-summary__items">
              {items.map((item) => (
                <article className="checkout-summary__item" key={item.cartKey || item.id}>
                  <div className="checkout-summary__media">
                    <img src={item.image} alt="" />
                    <span>{item.qty}</span>
                  </div>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.weight || item.pack || item.category}</small>
                  </div>
                  <b>${(item.price * item.qty).toFixed(2)}</b>
                </article>
              ))}
            </div>
            <div className="checkout-summary__totals">
              <p><span>Subtotal</span><b>${subtotal.toFixed(2)}</b></p>
              <p><span>Shipping and taxes</span><small>Calculated at confirmation</small></p>
            </div>
            <p className="checkout-summary__notice">
              Must be 21+ to purchase. Final eligibility and availability are
              confirmed before completion.
            </p>
          </aside>
        </div>
      </div>
    </Shell>
  );
}

export {CartPage,CheckoutPage}
