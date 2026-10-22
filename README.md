# QuoteCraft prototype

A multi-supplier quotation prototype for catering, printing, equipment rental, and photography. Buyers describe requirements, compare catalog estimates, and request supplier-confirmed offers.

## Run

Install Node.js 20 or newer. Extract this ZIP, open a terminal in this folder, then run:

```sh
npm start
```

Open **http://localhost:3000**. No npm install, accounts, database setup, or API key is required for sample mode. Do not open index.html directly; JavaScript modules need an HTTP server.

## Try the complete demo

1. Open **Find suppliers** and choose a category. Example specifications are prefilled for convenience.
2. Edit the request or use **Extract sample details**. In sample mode this is a transparent local pattern helper, not a live AI model. Fill missing fields and review all details.
3. Choose **Find matching suppliers**. Compare two suppliers or inspect price breakdowns. In printing, the polyester-only supplier is excluded when cotton is required.
4. Choose **Request final quote**, enter a buyer name, and save the request.
5. Open **Supplier desk**. The supplier you requested is selected automatically. Prepare a quotation, confirm availability, enter terms, and save.
6. Open **My requests**. View the offer, request a revision, or accept the exact current version. Print/save PDF through the offer dialog.
7. Reload the page to see saved requests and offers. **Reset demo** clears only this prototype's browser data.

Request the same configuration from another supplier through **Find more suppliers** in My requests to collect competing responses. Accepted offers cannot be edited. Expired offers cannot be accepted.

## Optional real AI extraction

1. Copy `.env.example` to `.env`.
2. Enter the organizers' exact `AI_BASE_URL`, `AI_API_KEY`, and `AI_MODEL`.
3. Restart `npm start`. The extraction button changes to **Extract with AI** when settings exist. This indicates configuration, not proof the endpoint is reachable.

The server appends `/chat/completions` to `AI_BASE_URL`; use a base URL without that suffix. The event page previously supplied `http://192.168.106.122:8080` for Open WebUI; its API base is commonly `/api`, but confirm the current route and model identifier with the organizers. That private address works only from an appropriate network. No credentials are included in the ZIP.

An AI request sends the inquiry and category to the configured provider. Use fictional or consented data. AI output is validated against allowed specifications. Pricing and matching remain ordinary code. On endpoint failure, the inquiry remains editable; fill the form manually.

## What is working

- Four category-specific request forms and 12 fictional suppliers.
- Required specification, service area, capacity, active-status, and optional budget filtering.
- Supplier-configured estimate calculation, quantity tiers, and separate rental deposits.
- Price breakdowns, comparisons, and explicit exclusion reasons.
- Saved requests, supplier pricing edits, quotation responses, revisions, and version-specific acceptance.
- Browser persistence and printable quotations.
- Optional server-side OpenAI-compatible AI extraction with no browser-exposed API key.

## Prototype boundaries

All businesses and prices are fictional. Records live in localStorage in **one browser profile**, not a shared database. Another device or browser will not see them. Supplier and buyer views are a demo role switcher, not authenticated accounts. No real messages, payments, notifications, inventory bookings, or website scraping occur.

Mandatory dropdown specifications are enforced. Free-text details, dietary counts, garment colors, dates, and special instructions are passed to suppliers for review, not automatically verified. The catalog does not model every material or printing cost variation. Suppliers can change the final offer after reviewing those details. All sample rates are treated as tax-inclusive; no extra tax is added. Never use these sample prices for real sales.

Do not deploy this development server publicly with an AI key: production requires authentication, API rate limits, server persistence, shop-level authorization, access controls, validated pricing administration, privacy/retention controls, and monitoring. The browser data can be edited by its owner and is not an authoritative transaction record.

## File structure

```text
quotecraft-prototype/
  README.md                    Setup, demo, and limitations
  BUSINESS.md                  Short business plan
  package.json                 Run and test scripts; no dependencies
  server.mjs                   Static server and optional AI proxy
  .env.example                 Configuration template; no secrets
  dist/
    index.html                 Application shell
    css/styles.css             Responsive layout and print styles
    js/app.mjs                 Buyer and supplier screens and interactions
    js/data.mjs                Categories, catalog, supplier rates
    js/matching.mjs            Pricing, filtering, and local extraction
    js/store.mjs               Browser persistence
  tests/matching.test.mjs       Business rule checks
```

## Customize and verify

Edit `dist/js/data.mjs` for supplier services, prices, fees, deposits, capacities, print rates, and quantity tiers. Use Reset demo after changing seed data; existing browser records otherwise remain. Add categories there and extend `matching.mjs` for their pricing/extraction logic. Styling is in `dist/css/styles.css`.

Run checks with:

```sh
npm test
```

No build step is required. For a frontend-only host, publish `dist`; sample mode still works, but `/api/extract` will be unavailable without deploying a compatible backend. Use a production server implementation before accepting real customer data.
