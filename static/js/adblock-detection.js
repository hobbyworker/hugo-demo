(() => {
  const BAIT_CLASSES = 'ad ads adsbox ad-banner ad-placeholder ad-placement doubleclick';
  const AD_SCRIPT_URL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  const DISMISS_KEY = 'adblock-warning-dismissed';

  // 1) Cosmetic filtering: blockers hide elements whose class names look like ads.
  const isBaitHidden = () =>
    new Promise((resolve) => {
      const bait = document.createElement('div');
      bait.className = BAIT_CLASSES;
      bait.setAttribute('aria-hidden', 'true');
      bait.style.cssText = 'position:absolute;left:-10000px;top:-10000px;width:1px;height:1px;';
      bait.innerHTML = '&nbsp;';
      document.body.append(bait);

      // Give the blocker a moment to apply its rules.
      setTimeout(() => {
        const style = getComputedStyle(bait);
        const hidden = bait.offsetHeight === 0 || style.display === 'none' || style.visibility === 'hidden';
        bait.remove();
        resolve(hidden);
      }, 200);
    });

  // 2) Network filtering: blockers cancel requests to ad servers.
  const isAdScriptBlocked = async () => {
    try {
      await fetch(AD_SCRIPT_URL, { method: 'HEAD', mode: 'no-cors', cache: 'no-store' });
      return false;
    } catch {
      return true;
    }
  };

  const showWarning = () => {
    const warning = document.getElementById('adblock-warning');
    if (!warning) return;

    warning.hidden = false;
    warning.querySelector('.adblock-warning-close')?.addEventListener('click', () => {
      warning.hidden = true;
      try {
        sessionStorage.setItem(DISMISS_KEY, '1');
      } catch {}
    });
  };

  const detect = async () => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY)) return;
    } catch {}

    const [baitHidden, scriptBlocked] = await Promise.all([isBaitHidden(), isAdScriptBlocked()]);
    const blocked = baitHidden || scriptBlocked;
    console.log(blocked ? 'Ad blocker detected.' : 'No ad blocker detected.');
    if (blocked) showWarning();
  };

  window.addEventListener('load', detect);
})();
