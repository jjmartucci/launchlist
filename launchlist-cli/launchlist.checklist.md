# Site Launch Checklist

- [SEO](#SEO) 
- [Security](#Security) 
- [Performance](#Performance) 
- [General](#General) 
- [Accessibility](#Accessibility) 
- [Code Quality](#Code Quality) 
- [JavaScript](#JavaScript) 
- [CSS](#CSS) 

## SEO<a name="SEO"></a>
- [ ] Analytics: Analytics scripts are in place and working.
- [ ] `robots.txt` is in place.: A `robots.txt` file has been created.
- [ ] Site Title: The site title is correct
- [ ] 301 Redirects: 301 redirects are in place.
- [ ] XML Sitemap: [XML sitemap](https://support.google.com/webmasters/answer/156184?hl=en) has been generated and can be accessed at the root of the website.
## Security<a name="Security"></a>
- [ ] CMS Admin account is not the default: The admin account for the CMS has been changed to something other than the default login.
## Performance<a name="Performance"></a>
- [ ] CSS is Minified: CSS has been minified.
- [ ] Font Loading: Any webfonts have only used weights loaded, and are set for a production environment.
- [ ] Google Lighthouse: Google Lighthouse has been run on main layouts.
- [ ] SVG Images Have Been Optimized: SVG images have been optimized with [SVGO](https://github.com/svg/svgo)
- [ ] Bitmap Images Have Been Optimized: JPG, PNG, and GIF images have been optimized.
- [ ] Server Compression: Server compression has been enabled for assets.
## General<a name="General"></a>
- [ ] Error Pages Exist: 404 and 500 pages exist for the site.
- [ ] Favicons exist: 
- [ ] HTTPS: Production site is using HTTPS for all pages.
## Accessibility<a name="Accessibility"></a>
- [ ] Form Controls Have Labels: 
- [ ] Image Alt Text: Images have appropriate alt text.
- [ ] Video Closed Captions: All videos on the site have closed captions available.
- [ ] Video Transcriptions: Videos have transcriptions available.
## Code Quality<a name="Code Quality"></a>
- [ ] No JavaScript Console Logs: Nothing is being logged to the console in the production environment.
## JavaScript<a name="JavaScript"></a>
- [ ] Site works without JavaScript: A fall back experience exists for users without JavaScript enabled.
## CSS<a name="CSS"></a>
- [ ] Print Stylesheets: Print stylesheets exist for all content that could be printed.
