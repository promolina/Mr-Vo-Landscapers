# Mr Vo Landscapers

Plain HTML/CSS/JS multi-page website build.

## How to run

Open the folder in VS Code and use the **Live Server** extension.

Important: this project uses JavaScript partials for the shared header and footer:

- `partials/header.html`
- `partials/footer.html`

Because of that, do not open pages directly with `file://`. Use Live Server so `fetch()` can load the partial files.

## Main files

- `index.html`
- `services.html`
- `about.html`
- `gallery.html`
- `faqs.html`
- `contact.html`

## Service pages

Located in:

`services/`

These are trust/SEO-style service pages.

## Landing pages

Located in:

`landing/`

These are ad/conversion pages.

## Design edits

Start with:

`assets/css/style.css`

The top of the CSS file has theme variables for colors, fonts, spacing, radius, and shadows.

## Form/backend notes

Forms currently prevent default submission and show a placeholder alert.

Connect later to:
- email endpoint
- CRM
- Google Tag Manager
- GA4 events
- Google Ads conversions
- UTM capture
- spam protection

## Branding placeholders

Replace:
- phone number
- email
- city/service area
- social links
- gallery images
- logo/business mark
