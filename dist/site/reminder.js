/* The daily 12:00 reminder is switched off (10 Nov 2026).

   No page loads this file any more. It stays at /reminder.js only for pages a
   phone still has in its offline cache from before: there it draws nothing,
   and if this device had turned the reminder on, it turns it off, here and on
   the server, so nothing is left subscribed. */
(function () {
  if (window.__aifzReminder) return; window.__aifzReminder = 1;
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) return;
  navigator.serviceWorker.getRegistration().then(function (reg) {
    if (!reg || !reg.pushManager) return null;
    return reg.pushManager.getSubscription();
  }).then(function (sub) {
    if (!sub) return;
    var endpoint = sub.endpoint;
    return sub.unsubscribe().then(function () {
      return fetch('/api/nudge', { method: 'POST', credentials: 'same-origin',
        headers: { 'x-aifz': '1', 'content-type': 'application/json' },
        body: JSON.stringify({ unsubscribe: endpoint }) });
    });
  }).catch(function () {});
})();
