# LM Holdings: Next.js site and dashboard prototype

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Structure
- `app/(site)/` public site (Home, Businesses, Contact) with shared Header and Footer
- `app/dashboard/` management dashboard prototype (fictional data)
- `app/api/contact/route.js` enquiry endpoint (validates only; connect email or a database)
- `components/Logo.js` the LM monogram and wordmark (same artwork as the approved logo)
- `public/logo/` monogram SVG; `public/images/` illustrated placeholders
- Design tokens: CSS variables at the top of `app/globals.css`

## Replace illustrations with photos
Drop photos in `public/images/` and change the `src` in `app/(site)/page.js`
(remove `unoptimized` for JPG or WebP so Next.js optimizes them).

## Before launch
- Add real contact details, registration info, leadership and ventures (all placeholders now).
- Dashboard has NO authentication. Add Auth.js or similar, a database, server-side role checks and audit logging before using real data.
- Privacy policy and terms still need drafting and legal review.
