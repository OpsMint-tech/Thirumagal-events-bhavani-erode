/**
 * Opens WhatsApp without leaving the current page where possible.
 * Uses the direct protocol for mobile/desktop apps and falls back to web.
 */
export const openWhatsApp = (message = '') => {
  const phone = '919488730758';
  const encodedText = encodeURIComponent(message);
  
  const protocolUrl = `whatsapp://send?phone=${phone}&text=${encodedText}`;
  const webUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${encodedText}`;

  // On mobile, always use the protocol
  const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = protocolUrl;
  } else {
    // On desktop, we try to open the protocol on the current page.
    // This will trigger the "Open WhatsApp?" browser dialog WITHOUT navigating away.
    // If the user doesn't have the app, we provide a fallback after a short delay.
    
    const start = Date.now();
    window.location.href = protocolUrl;
    
    // If the page is still visible after 500ms, it means the protocol might not have 
    // triggered an app or the browser is waiting. We fallback to Web WhatsApp in a new tab
    // only if the user hasn't switched away.
    setTimeout(() => {
      if (Date.now() - start < 1000) {
        // If the user wants to stay on the page, we should be careful about opening new tabs
        // but Web WhatsApp is the only alternative if the app isn't there.
        window.open(webUrl, '_blank', 'noopener,noreferrer');
      }
    }, 500);
  }
};
