# QuoteCraft
## Product and business overview

QuoteCraft connects buyers with suppliers who can fulfill their requirements. Buyers describe what they need, compare suitable offers, and request confirmed quotations. Categories can include printing, catering, equipment rental, and photography.

## Problem and users

Buyers repeatedly contact businesses to ask about specifications, prices, and availability. Suppliers receive incomplete inquiries and spend time clarifying requests that may not fit their services.

**Buyers:** Individuals, businesses, schools, and event organizers.
**Suppliers:** Local businesses offering products, rentals, or services.

## Workflow

1. Suppliers register their services, service areas, options, inclusions, and pricing rules.
2. Buyers describe their requirements, location, date, and optional budget.
3. AI structures the request and asks for missing category-specific details.
4. Software filters suppliers against mandatory requirements and calculates comparable estimates where pricing is sufficient.
5. Buyers compare inclusions, exclusions, charges, and unresolved details.
6. Selected suppliers receive a quotation request and confirm price and availability.
7. Buyers accept an offer or request revisions. Payment and fulfillment are arranged directly for the MVP.

**Example:** A buyer requests an espresso machine and grinder for a one-day event. Results distinguish rental charges, delivery, setup, and refundable deposits. Suppliers confirm availability before the buyer commits.

## Core features

- Buyer requests with required and flexible specifications.
- Supplier profiles, catalogs, and pricing rules.
- Category-specific clarification questions.
- Supplier matching and side-by-side comparisons.
- Quotation requests, supplier responses, and revision tracking.

AI interprets requests and explains matches. Code enforces requirements and calculates prices. Missing information is marked unconfirmed; incompatible suppliers are excluded. Estimates are distinguished from supplier-confirmed offers. Budget never increases the price of an identical configuration.

## Hackathon MVP and implementation

Show several categories in the interface; fully support two with a small set of clearly labeled fictional suppliers. Implement request creation, clarification, filtering, comparison, supplier response, and selection.

Use React, Vite, TypeScript, Node/Express, SQLite, and event-provided Claude Haiku access. Keep API keys on the backend. Store supplier catalogs, category requirements, requests, quotation versions, and responses. Use a role switcher for the demo; real deployment requires authentication and access controls.

Leave payments, delivery tracking, automated web scraping, and booking guarantees for later. Check mandatory filtering, correct totals, missing prices, AI failure, and approval of the correct offer version.

## Business model

Test a supplier subscription for relevant inquiries, quotation tools, and response tracking. An illustrative price is **PHP 999 per month**; basic buyer access remains free. Fifty paying suppliers would generate **PHP 49,950 monthly revenue before expenses**, not profit or a forecast.

Costs include AI, hosting, supplier onboarding, support, and buyer acquisition. Avoid charging primarily for visibility that distorts matching. Validate willingness to pay before committing to pricing.

## Validation and risks

Recruit three to five real suppliers and process actual buyer requests. Measure pricing accuracy, response time, completed matches, repeat usage, and paid pilot commitments. Outdated catalogs, insufficient buyer demand, and transactions moving off-platform are key risks. Existing supplier marketplaces mean differentiation must be demonstrated.

## Pitch

“QuoteCraft turns a buyer’s requirements into comparable supplier offers. It checks specifications, makes costs and exclusions clear, and helps buyers request confirmed quotations from suitable local businesses.”
