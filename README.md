# MedTech 360

MedTech 360 is an Evalueserve-themed, static interactive prototype for MedTech Competitive Intelligence (CI) and Primary Market Research (PMR). It is designed to work directly in a browser and can be hosted on GitHub Pages.

## User journey

1. **Login** – prototype enterprise SSO plus username/password access.
2. **Workspace setup** – the user selects both a MedTech domain and a role (Hub Owner, Contributor, Viewer).
3. **Interactive platform** – the **Executive Hub** is the landing page, followed by expandable CI and PMR segments. Clicking a segment reveals its sub-segments; every sub-segment opens a dedicated page.
4. **Log out** – available in the dashboard top bar and left navigation.

## MedTech domains

- Autoimmunity & Allergy
- Diabetes & Blood Glucose Monitoring
- Ophthalmology & Eye Health
- Orthopedics & Sports Medicine
- Advanced Wound Management
- Clinical Laboratory Services

## Executive Hub

The Executive Hub changes by selected domain and contains:

- Industry overview and category context
- Factual research datapoints with external source links
- Priority market dynamics
- Key-player watchlist
- Illustrative industry-momentum visualization
- Opportunity areas and cross-workstream business questions
- Links into CI and PMR capability pages

## Competitive Intelligence sub-segments

Market Landscape & Sizing; Company Profiles; News & Alerts; Strategy & Market Positioning; Product & Portfolio Benchmarking; Pipeline & Innovation Watch; Regulatory & Clinical Milestones; Pricing, Reimbursement & Access; M&A, Partnerships & Investment; Social & Digital Intelligence; Commercial & GTM Intelligence; Conference & KOL Intelligence; IP & R&D Signals.

## Primary Market Research sub-segments

Voice of Customer Study; Expert & KOL Interview Analysis; Concept & Product Testing; Quantitative Survey Analysis; Conjoint / Discrete Choice; Pricing & Willingness-to-Pay; Segmentation & Personas; Customer Journey & UX; Message & Claims Testing; Adoption & Readiness; Satisfaction & Loyalty; Workflow & Unmet Needs.

Each sub-segment has its own routed page (`#ci/...` or `#pmr/...`) with domain research context, relevant datapoints, analytical views, business questions, deliverables, recommended cuts, and source basis.

## Data note

Factual KPI cards and research statements are tied to external sources listed in the frontend. Trend charts, opportunity indices, competitor watch-intensity scores, and similar dashboard indices are deliberately labeled **illustrative** and are used only to demonstrate the visual and analytical experience. They should be replaced with approved client/project data in production.

## Files

- `index.html` – three-stage experience shell and app structure
- `styles-base.css`, `styles-app.css`, `styles-pages.css` – Evalueserve-inspired responsive design system and page layouts
- `data-base.js`, `data-domains-1.js` ... `data-domains-3.js` – domain research content
- `data-evidence.js` – current public-source evidence anchors for all six domains
- `data-ci.js`, `data-pmr.js` – CI/PMR capability taxonomy
- `data-pageviews.js` – module-specific datapoints, analytical lenses, and recommended visualizations for every sub-segment
- `app-core.js`, `app-executive.js`, `app-subpages.js` – navigation, routing, role/domain selection, page rendering and interactions
- `.nojekyll` – static GitHub Pages support

## Prototype credentials

- Email: `demo@evalueserve.com`
- Password: `MedTech360`

## GitHub Pages

The repository is published from the `gh-pages` branch. The expected URL is:

`https://atanubarik.github.io/MedTech-360/`

If GitHub Pages needs to be configured manually, open **Settings → Pages**, choose **Deploy from a branch**, select **gh-pages**, choose **/(root)**, and save.

## Production hardening

For client deployment, replace simulated authentication with enterprise SSO (e.g., Microsoft Entra ID / Okta), enforce server-side RBAC, move data and GenAI functions behind governed APIs, add source-level permissions and audit logs, and connect approved PMR/CI repositories and live data feeds.
