# QuoteCraft Business Plan

22 October 2026

### Overview

QuoteCraft helps buyers turn their requirements into comparable supplier quotations. It serves catering, printing, equipment rental and photography requests. Buyers review suitable suppliers and estimated costs, then ask selected suppliers to confirm price, availability and terms before accepting an offer.

We propose starting with a small trial involving local suppliers and buyers who need a quotation. This would show whether the service helps them find a suitable match. The current prototype uses fictional suppliers, so we still need to test demand and find out whether suppliers would pay for it.

### The problem

Buyers often repeat the same inquiry across several businesses, then compare responses with different inclusions, fees and specifications. Missing details make it difficult to tell whether a low price covers the same requirement. Suppliers spend time clarifying incomplete inquiries and responding to requests outside their service scope.

### Target customers

| **Customer group**               | **Primary need**                                                                 |
|----------------------------------|----------------------------------------------------------------------------------|
| Individuals and event organizers | Compare services for an event and confirm the full scope before committing.      |
| Businesses and schools           | Collect comparable quotations for operational needs, activities and procurement. |
| Local suppliers                  | Receive relevant inquiries with enough detail to prepare accurate quotations.    |

### What QuoteCraft offers

Buyers can see what each price includes and check extra charges before requesting a final quote. Suppliers receive the details they need in one request and can keep track of changes to their offer. A paid subscription would only make sense if suppliers find this useful in their regular work.

## How QuoteCraft works

### Quotation process

1.  Buyers choose a service category and enter their requirements, location, date and optional budget.

2.  Buyers check the request and fill in missing details. If AI is enabled, it can help fill out the form from their written inquiry.

3.  The system checks which suppliers meet the requirements and serve the location. It then calculates estimates using their listed prices.

4.  Buyers compare price breakdowns and request final quotations from selected suppliers.

5.  Suppliers review details, confirm availability and provide a final price and terms. Buyers can request a revision or accept the current offer version.

### Estimate and final offer

A catalog estimate helps a buyer compare options, but the supplier must review details that the catalog does not verify. These include dates, free text instructions and some material or service variations. Rental deposits remain separate from rental charges. An accepted quotation records the specific offer version the buyer approved.

### Current prototype

The implementation supports four category forms and 12 fictional suppliers. It includes supplier matching, price breakdowns, comparisons, saved requests, supplier pricing edits, quotation responses, revisions and printable offers. Records persist in localStorage within one browser profile.

The application uses browser JavaScript modules and a Node.js server with optional server-side extraction through an OpenAI-compatible API. Sample mode uses local patterns rather than a live AI model. Matching and pricing remain ordinary code.

### What needs to be added

The demo role switcher does not authenticate buyers or suppliers. A commercial version needs shared server storage, authenticated accounts, supplier-level permissions and a way to deliver requests across accounts. Payments, delivery tracking and inventory bookings remain outside the initial proposed pilot scope. Buyers and suppliers would arrange payment and fulfillment directly.

## Business model

### Proposed pricing

The proposed model is a monthly supplier subscription covering inquiries and quotation tools. Buyers would use the basic service for free. PHP 999 per month is a starting price to test with suppliers, rather than an agreed selling price. The prototype does not collect subscription payments.

| **Illustrative monthly scenario** | **Amount** |
|-----------------------------------|------------|
| Paying suppliers                  | 50         |
| Subscription per supplier         | PHP 999    |
| Revenue before expenses           | PHP 49,950 |

At PHP 999 per month, 50 paying suppliers would bring in PHP 49,950 before expenses. This is an example, not a sales forecast. We would need actual operating costs to work out whether the business could make a profit.

### Operating costs

Operating costs would include hosting, database storage, AI extraction, monitoring and support. Supplier onboarding requires time to enter catalogs and check pricing rules. Buyer acquisition and ongoing catalog maintenance may be significant costs and should be measured during the pilot.

### Finding the first customers

Start with three to five suppliers in one service area. Choose services with prices and specifications that buyers can compare. Ask suppliers to check their catalogs, fees and service areas before using them for real requests.

Recruit buyers through direct outreach to event organizers, schools and businesses with an active purchasing need. Help early buyers prepare complete requests, then track whether suppliers respond and whether the resulting quotations support a purchasing decision.

### Keeping customers

The trial should show whether buyers return because they can find suitable suppliers and understand the costs. Suppliers need enough relevant inquiries to justify a subscription. If paid listings are added later, they should still meet the buyer’s requirements.

## Testing the business

### Trial plan

Talk to potential buyers and suppliers first, then check the supplier catalogs. Run a small set of real requests with suppliers reviewing each offer. Look at requests that did not find a match and estimates that differed from the final quote. Once suppliers have tried the service, ask whether they would pay to keep using it.

### What to measure

| **Measure**        | **What to record**                                                       |
|--------------------|--------------------------------------------------------------------------|
| Quotation accuracy | Difference between catalog estimates and confirmed offers, with reasons. |
| Supplier response  | Time to first offer and share of requests receiving a response.          |
| Completed matches  | Requests that produce a suitable offer and buyer acceptance.             |
| Repeat use         | Buyers and suppliers who return for another request.                     |
| Willingness to pay | Explicit paid pilot commitments and subscription objections.             |

Set targets before the trial begins. Use the results to decide what needs improving and whether to test paid subscriptions. There are no customer results to report yet.

### Risks

Outdated catalogs can create misleading estimates. Require supplier review and keep a record of price changes. Thin supplier coverage can leave buyers without useful choices, so expand only where demand and supplier capacity overlap. Buyers may arrange repeat transactions directly, making quotation tools and ongoing supplier value important to retention.

AI can misread a request. Keep extracted fields editable, validate allowed specifications and require buyer review. For shared use, protect account access, restrict supplier permissions, rate-limit extraction and define data retention before accepting real customer information.

### Project references

Project references are BUSINESS.md for the original business concept and README.md for the current prototype. The subscription price and trial activities in this plan remain proposals.
