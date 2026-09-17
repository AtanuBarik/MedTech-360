# MedTech 360

MedTech 360 is an Evalueserve-themed MedTech intelligence and research platform prototype that brings Competitive Intelligence (CI) and Primary Market Research (PMR) into one role-based workspace.

## Priority MedTech domains

- Autoimmunity & Allergy
- Diabetes & Blood Glucose Monitoring
- Ophthalmology & Eye Health
- Orthopedics & Sports Medicine
- Advanced Wound Management
- Clinical Laboratory Services

## Experience flow

1. **Login** – enterprise SSO concept plus username/password demo access.
2. **Role selection** – Hub Owner, Contributor, or Viewer.
3. **Interactive dashboard** – domain switcher, executive hub, CI modules, PMR modules, intelligence signals, research views, reports, knowledge repository, and a prototype AI insights assistant.

## Competitive Intelligence modules

- Company Profiles
- News & Alerts
- Strategy & Market Positioning
- Product & Portfolio Benchmarking
- Pipeline & Innovation Watch
- Regulatory & Clinical Milestones
- Pricing, Reimbursement & Access
- M&A, Partnerships & Investment
- Social & Digital Intelligence
- Commercial & GTM Intelligence
- Conference & KOL Intelligence
- IP & R&D Signals

## Primary Market Research modules

- Voice of Customer
- Expert & KOL Interviews
- Concept & Product Testing
- Quantitative Survey Analysis
- Conjoint / Discrete Choice
- Pricing & Willingness-to-Pay
- Segmentation & Personas
- Customer Journey & UX
- Message & Claims Testing
- Adoption & Readiness
- Satisfaction & Loyalty
- Workflow & Unmet Needs

## Design language

The prototype follows an Evalueserve-inspired design system with deep purple surfaces, magenta accents, white content areas, strong typography, rounded modular cards, and dashboard-style information hierarchy. The visual direction was aligned to the Evalueserve website and the corporate template supplied for this work.

## Demo credentials

- Email: `demo@evalueserve.com`
- Password: `MedTech360`

> Authentication, SSO, roles, dashboard metrics, alerts, search, and AI responses are simulated in the frontend for prototype purposes. Production SSO/IAM and permissions require enterprise integration.

## Access locally

Download or clone this repository and open `index.html` directly in a modern browser. No Python, Node.js, package installation, or local server is required.

## Publish with GitHub Pages

1. Open this repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**.
5. Click **Save**.
6. Once deployment finishes, the expected URL is:
   `https://atanubarik.github.io/MedTech-360/`

The repository includes `.nojekyll` so GitHub Pages serves the static prototype directly without Jekyll processing.

## Production hardening

For a production implementation, connect the UI to an enterprise identity provider such as Microsoft Entra ID or Okta; enforce server-side role-based authorization; move intelligence, search, alerts, and AI workflows behind authenticated APIs; apply source-level permissions and audit logging; and replace all illustrative data with governed client-approved sources.

## Key file

- `index.html` – complete static frontend prototype
