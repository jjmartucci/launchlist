# Site Launch Checklist

- [Accessibility](#accessibility) 
- [SEO](#seo) 
- [Security](#security) 
- [Performance](#performance) 
- [General](#general) 
- [Code Quality](#code-quality) 
- [JavaScript](#javascript) 
- [CSS](#css) 
- [Developer Happiness](#developer-happiness) 

## Accessibility<a name="accessibility"></a>
- [ ] Make SVGs accessible to assistive technology : SVGs are often used as icons on interactive elements in sites. When this is the case, the SVG should have a title or embedded text (that is visually hidden but available to assistive tech) to ensure that the information of the icon is available programmatically.
- [ ] Write good alt text for your images: Users with low vision often make use of a talking browser to “read” the web. These specialized browsers convert text to speech so that a user can hear the words on a site. When a talking browser lands on an image, it looks for alt text that it can read aloud; if it finds none, it will often just say “image,” leaving the user in the dark as to what the image is and how it matters to the story. 
 Describe all of the elements that explain what’s happening in the image, rather than just setting the alt text to be something like, “photograph”. 
 If you have to use an image of text, be sure to describe the design if relevant, as well as all of the words in the image. (Ex: Whiteboard drawing of the quote “This is a quote”)
- [ ] Use ARIA attributes when applicable: ARIA stands for Accessible Rich Internet Applications. It is an optional but helpful spec to define ways to markup HTML that has dynamic experiences (typically controlled by Javascript). The goal when using them is to communicate to the browser and assistive technology how content is going to change or what the purpose of the content is. Dynamic error messages can be called out to screenreaders, buttons can be linked to the content they affect and many other helpful states can be expressed on a code level.
- [ ] Use the correct HTML element for your content: HTML elements communicate to the browser what kind of content they contain and how the browser should render or treat that content. The [accessibility tree](https://developer.paciellogroup.com/blog/2015/01/the-browser-accessibility-tree/) is built off of assumptions about the elements and their structure. This is the browser feature which powers screen readers. Choosing the correct element for the current context is a simple way to create a good foundation for your experiences.
- [ ] Make links descriptive: Assistive technology is able to find all links on a page and present them in various forms, but these links are rather useless if it’s a long list of links that are just the text “click here.” A better way is to have the link describe where the user will go if they click it, giving them an idea of what’s on the other side of clicking.
- [ ] Design focus states to help users navigate and understand where they are: Your designs should never actively hide focus states. When people use the keyboard to navigate, your product should include highly visible focus states.
- [ ] Help users understand inputs, and help them avoid and correct mistakes: Labels should never completely go away when the focus is inside of an input. Users should always have clear instructions on what they should be inputting. Put error messages in text that explain the error and how to fix the error. Never rely solely on color to indicate errors.
- [ ] Hide decorative elements from screen readers: Decorative elements, such as dividing lines, pull-quotes, or non-informative icons, can be hidden from screen readers to ensure that a user only receives relevant information as they peruse the page. This is done by adding aria-hidden=”true”  to the element.
- [ ] Understand and use HTML landmarks: People who use assistive devices may not want to peruse your content linearly, instead preferring to use an outline view (generated from markup) to find the relevant content for their current needs. These landmarks, like main and form and navigation help define specific areas that a user might want to seek out and can save them a lot of time.
- [ ] HTML document should have a language attribute: The HTML lang attribute is used to identify the language of text content on the web. This information helps search engines return language specific results, and it is also used by screen readers that switch language profiles to provide the correct accent and pronunciation. e.g. `<html lang="en">`
- [ ] Support keyboard navigation: Browsers support tabbing through link, form, button elements. This is an easy way to move around the page, but it’s very easy to accidentally hinder this functionality: by relying on CSS to move elements around instead of actually reordering the HTML; hiding elements from tab flow, either by faking buttons (with Javascript) in lieu of using button elements or disabling tab via tabindex=”-1”; and hiding form elements (on a tabbed interface) but not removing them from the tab flow (so that hidden form elements can be focused).
- [ ] Links should be visually identifiable and have clear :focus and :active states: The outline property indicates when an element or selected or has focus. This is helpful to users who don't have the ability to use a mouse or are visually impaired.
- [ ] Avoid images and iconography in pseudo-elements: Assistive technology relies on HTML to find the content to present to users. It’s possible to create pseudo-elements with CSS, however, there is currently no way to provide alternative text if there are images or icons here.
- [ ] Give users a way to skip top level navigation to access main content: For keyboard users, it can be helpful to give them a way to skip past top level navigation to get to the main content. This is typically a button at the top of the page (it can only be visible if active), that, when clicked, shifts the current focus from the button to the top of the main content of the page. This saves the user from having to tab through many many elements of navigation.
- [ ] Video Closed Captions: All videos on the site have closed captions available.
- [ ] Video Transcriptions: Videos have transcriptions available.
## SEO<a name="seo"></a>
- [ ] Analytics: Analytics scripts are in place and working.
- [ ] `robots.txt` is in place.: A `robots.txt` file has been created.
- [ ] Site Title: The site title is correct
- [ ] 301 Redirects: 301 redirects are in place.
- [ ] XML Sitemap: [XML sitemap](https://support.google.com/webmasters/answer/156184?hl=en) has been generated and can be accessed at the root of the website.
## Security<a name="security"></a>
- [ ] CMS Admin account is not the default: The admin account for the CMS has been changed to something other than the default login.
- [ ] HTTPS: Production site is using HTTPS for all pages.
- [ ] All external links use `rel=noopener`: If window.opener is set, a page can trigger a navigation in the opener regardless of security origin. [Source](https://mathiasbynens.github.io/rel-noopener/)
## Performance<a name="performance"></a>
- [ ] CSS is Minified: CSS has been minified.
- [ ] Font Loading: Any webfonts have only used weights loaded, and are set for a production environment.
- [ ] Google Lighthouse: Google Lighthouse has been run on main layouts.
- [ ] SVG Images Have Been Optimized: SVG images have been optimized with [SVGO](https://github.com/svg/svgo)
- [ ] Bitmap Images Have Been Optimized: JPG, PNG, and GIF images have been optimized.
- [ ] Server Compression: Server compression has been enabled for assets.
## General<a name="general"></a>
- [ ] Error Pages Exist: 404 and 500 pages exist for the site.
- [ ] Favicons exist: You can generate a set of all necessary icons using [Real Favicon Generator](https://realfavicongenerator.net/)
## Code Quality<a name="code-quality"></a>
- [ ] No `console.log`: console.log has been removed from code.
## JavaScript<a name="javascript"></a>
- [ ] Site works without JavaScript: A fall back experience exists for users without JavaScript enabled.
## CSS<a name="css"></a>
- [ ] Print Stylesheets: Print stylesheets exist for all content that the user might want to print.
## Developer Happiness<a name="developer-happiness"></a>
- [ ] README.md exists at the root of the project: A README.md file exists at the root of the project outlining any project dependencies and steps to get the project running.
- [ ] The project can be built with one click: A new developer only needs to run one command (e.g. `npm start`) to install all dependencies for the project and have either a local development environment running, or have the project built
