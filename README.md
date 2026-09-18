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

## Executive Hub

The Executive Hub is the landing page for each selected domain. It contains the industry overview, sourced market context, market dynamics, key players, competitive signals, and the full **Market Landscape & Sizing** module including its research/data architecture, business questions, outputs, analytical cuts, category structure, and domain-specific intelligence lens.

## Competitive Intelligence sub-segments

Company Profiles; News & Alerts; Product & Portfolio Benchmarking; M&A Partnerships & Investment; Social & Digital Media; Strategy & Market Positioning; Conference & KOL Intelligence.

## Primary Market Research sub-segments

Voice of Customer Study; Expert & KOL Interview Analysis; Concept & Product Testing; Quantitative Survey Analysis; Pricing & Willingness-to-Pay.

## Interactive filters

The dashboard now includes persistent filters for **company**, **theme**, and **dataset layer**. Dataset layers include all evidence, public market data, competitive signals, PMR blueprint, and illustrative demo views. Filters persist as the user navigates between Executive Hub, CI, and PMR pages within the selected domain.

## Data note

Factual KPI cards and research statements are tied to external sources listed in the frontend. Trend charts, opportunity indices, competitor watch-intensity scores, and similar dashboard indices are deliberately labeled **illustrative** and are used only to demonstrate the visual and analytical experience. They should be replaced with approved client/project data in production.

## Files

- `index.html` – three-stage experience shell and app structure
- `styles-base.css`, `styles-app.css`, `styles-pages.css` – Evalueserve-inspired responsive design system and page layouts
- `data-base.js`, `data-domains-1.js` ... `data-domains-3.js` – domain research content
- `data-evidence.js` – current public-source evidence anchors for all six domains
- `data-enrichment.js` – market forecasts, competitor universes, current signals, domain themes, and domain-specific CI / PMR lenses
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


## Executive Hub industry dashboard

Each of the six domain landing pages now includes:
- source-backed burden / infrastructure facts;
- a clearly labeled illustrative 2022–2028 market model with YoY growth;
- regional opportunity map;
- segment-mix visualization;
- key-player capability matrix and placeholder share visualization;
- growth drivers and constraints;
- trends and source-linked developments;
- device / instrument / service ecosystem flow;
- opportunity scanner with CI watchpoints and PMR questions;
- explicit data labels separating public-source context, illustrative market models, placeholder share estimates, and directional interpretation.

The detailed content is stored in `data-executive.js`.


### Executive Hub interaction update

The landing page now uses five compact interactive tabs: **Overview**, **Market & Regions**, **Competition**, **Ecosystem & Drivers**, and **Strategy & Opportunities**. The former Company / Theme / Dataset dropdown filters and filter ribbon were removed from the top navigation. The domain selector remains.

The Executive Hub now uses:
- source-backed disease / infrastructure context;
- illustrative market-growth charts with strategic interpretation;
- a non-overlapping numbered regional opportunity map;
- a full-width segment-mix view;
- compact multi-step ecosystem cards;
- company logo / website links in competitor views;
- importance-tagged drivers, risks, trends, opportunities, and market-landscape takeaways.


## Company Profiles intelligence dashboard

The **Competitive Intelligence → Company Profiles** module is now a dedicated research experience rather than a generic capability page. It includes domain-specific competitor datasets across all six MedTech domains and interactive filters for **Company**, **Region**, **Portfolio & Services**, and **Focus of Company**.

Each profile includes:
- company overview, headquarters, founding year, ownership / listing, employees and geographic presence;
- official regional website links;
- latest revenue, business-unit revenue, multi-year revenue trend where publicly disclosed, regional / country revenue and financial-result insights;
- product / service portfolio with USP, features, company claims and market positioning;
- regional product and service portfolio;
- transformation timeline, technology stack, competitive USPs and representative devices / tests / services;
- business, product, channel, geographic, digital, R&D and expansion strategy;
- selected M&A / partnership events and strategic initiatives;
- direct links to official company filings, investor materials and product pages.

Private-company financial gaps are explicitly marked as **not publicly disclosed** rather than filled with synthetic values.


### Company Profiles v2

The Company Profiles module now covers **39 company/domain profiles** across the six MedTech domains:
- Autoimmunity & Allergy: 6
- Diabetes & Blood Glucose Monitoring: 6
- Ophthalmology & Eye Health: 6
- Orthopedics & Sports Medicine: 7
- Advanced Wound Management: 7
- Clinical Laboratory Services: 7

The four filters are cascading and dynamic. Selecting **Region**, **Portfolio & Services**, or **Focus of Company** changes the compatible company options and scopes the related regional / product evidence. The separate row of company buttons was removed; only the selected company's logo and profile are shown.

Additional visual analytics include revenue trendlines, annual revenue-growth bars, portfolio-breadth index, regional operating-footprint evidence, strategy-emphasis index, financial KPI tiles, competitive synthesis, risk watchpoints and expanded business-model / market-access content. Analyst indices are explicitly labeled as illustrative demo visualizations.
