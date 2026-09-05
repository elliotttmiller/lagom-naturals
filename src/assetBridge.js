const assetMap = {
  '/assets/lagom-logo.png': '/lagom-logo.svg',
  '/assets/store-interior-display.jpg': 'https://lagomnaturals.com/wp-content/uploads/2024/10/IMG_6899-scaled.jpg',
  '/assets/store-service.jpg': 'https://lagomnaturals.com/wp-content/uploads/2024/11/IMG_7711.jpg',
  '/assets/store-day.jpg': 'https://cdn.prod.website-files.com/648010fbbd66e07f3adc0fd3/6716c51bdca0ac822256dcb2_Screen%20Shot%202024-10-21%20at%204.17.31%20PM.png',
  '/assets/store-wall.jpg': 'https://lagomnaturals.com/wp-content/uploads/2025/07/Untitled-1-02.png',
  '/assets/store-merch.jpg': 'https://lagomnaturals.com/wp-content/uploads/2025/07/Untitled-1-03-copy.png',
  '/assets/store-night.jpg': 'https://lagomnaturals.com/wp-content/uploads/2025/07/Untitled-1-04.png',
}

function rewriteImage(image) {
  const source = image.getAttribute('src')
  const replacement = assetMap[source]
  if (replacement && image.src !== replacement) image.src = replacement
}

export function installAssetBridge() {
  const rewriteAll = () => document.querySelectorAll('img[src]').forEach(rewriteImage)
  rewriteAll()
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes' && mutation.target instanceof HTMLImageElement) {
        rewriteImage(mutation.target)
      }
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) return
        if (node instanceof HTMLImageElement) rewriteImage(node)
        node.querySelectorAll?.('img[src]').forEach(rewriteImage)
      })
    }
  }).observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ['src'] })
}
