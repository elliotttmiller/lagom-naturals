const loadVisitPage = () => import("../routes/VisitPage");
const loadAboutPage = () => import("../routes/AboutPage");
const loadLearnPage = () => import("../routes/LearnPage");
const loadMerchRoutes = () => import("../routes/MerchRoutes");
const loadCommerceRoutes = () => import("../routes/CommerceRoutes");
const loadProductPage = () => import("../routes/ProductPage");

export function preloadStorefrontRoute(pathname) {
  if (pathname.startsWith("/product/")) return loadProductPage();
  if (pathname === "/visit") return loadVisitPage();
  if (pathname === "/about") return loadAboutPage();
  if (pathname === "/learn") return loadLearnPage();
  if (pathname === "/merch" || pathname.startsWith("/merch/")) return loadMerchRoutes();
  if (pathname === "/cart" || pathname === "/checkout") return loadCommerceRoutes();
  return Promise.resolve();
}
