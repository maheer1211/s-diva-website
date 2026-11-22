# S DIVA redesign — release checklist

## Automated checks

Run these on a Mac/CI runner after installing dependencies:

```bash
npm ci
npm run lint
npx tsc --noEmit
npm run build
```

The source was syntax checked and type-smoke-tested with temporary React/Next typings during preparation. A complete Next.js build could not run in the preparation environment because npm downloads were unavailable. Do not treat the temporary smoke check as a substitute for production validation.

## Browser review (before deploying)

- [ ] iPhone-size 375x812 and Android-size 412x915: hero text, imagery and booking actions fit without sideways scrolling
- [ ] Tablet around 768px and desktop 1440px: menu, typography and gallery layouts remain balanced
- [ ] Mobile menu opens, closes on link activation and Escape, and never traps keyboard focus
- [ ] All navigation anchors reach the expected sections
- [ ] Search and category filters return expected services; expand/collapse preserves prices
- [ ] `tel:` links launch the telephone dialer; Maps links open a correct search for the salon
- [ ] Original PDF menu link opens successfully
- [ ] WebGL scene is decorative, remains nonblocking, and renders or falls back gracefully
- [ ] Verify `prefers-reduced-motion: reduce` disables ongoing decorative animation
- [ ] Test on a midrange Android phone over a slow mobile connection; check loading and scrolling
- [ ] Lighthouse / Core Web Vitals: LCP <= 2.5s, CLS <= 0.1, INP <= 200ms (targets, not claimed results)
- [ ] Verify layout with real business-approved imagery and price information

## SEO / production

- [ ] `https://sdivasalon.com/robots.txt` still loads
- [ ] `https://sdivasalon.com/sitemap.xml` still loads
- [ ] Page metadata uses the `sdivasalon.com` canonical URL
- [ ] Google Search Console URL inspection indicates a crawlable page; indexing is handled by Google
- [ ] Vercel preview deployment is validated before merging to `main`

No DNS records, domain nameservers, Google Workspace settings, production environment variables, or existing live deployment were modified.
