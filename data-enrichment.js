window.DOMAIN_ENRICHMENT = {
  "Autoimmunity & Allergy": {
    market:{label:"Allergy & autoimmune disease diagnostics", current:13.20, currentYear:2026, forecast:25.00, forecastYear:2033, unit:"USD B", cagr:5.4, region:"North America 44.1% of 2024 revenue", scopeNote:"Publisher-defined combined allergy and autoimmune diagnostics market."},
    competitors:["Thermo Fisher / Phadia","Werfen / INOVA","EUROIMMUN / Revvity","HYCOR Biomedical","Bio-Rad","Siemens Healthineers","Roche","Abbott","Quest / Labcorp"],
    themes:["Component-resolved diagnostics","Menu breadth & multiplexing","Analyzer automation","LIS connectivity","Interpretive support","FDA / IVDR changes","Lab channel economics","Reimbursement","KOL & guideline evidence"],
    signals:[
      {date:"24 Jul 2026",type:"Regulatory",company:"HYCOR Biomedical",title:"NOVEOS menu expansion cleared by FDA",detail:"FDA 510(k) K261027 covers soybean, hazelnut and peanut components Ara h 8, Ara h 2 and Ara h 6.",url:"https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K261027"},
      {date:"Jul 2026",type:"Market",company:"Category",title:"2026 market estimate refreshed",detail:"Grand View Research estimates the market at $13.2B in 2026 and $25.0B by 2033; North America held 44.1% in 2024.",url:"https://www.grandviewresearch.com/industry-analysis/allergy-autoimmune-disease-diagnostics-market-report"}
    ],
    ciLenses:[
      {ids:["company-profiles","product-portfolio"],title:"Competitor 360 & assay-menu map",scope:"Assay menu breadth, disease areas, analyzer platform, service footprint, whole allergens, components, multiplex panels, autoimmune markers and gaps.",visual:"Portfolio heatmap + white-space matrix"},
      {ids:["product-portfolio","commercial-gtm"],title:"Platform & workflow benchmark",scope:"Throughput, random access, sample volume, automation, LIS connectivity, interpretive tools and lab service model.",visual:"Weighted workflow benchmark"},
      {ids:["regulatory-clinical"],title:"Regulatory & evidence monitor",scope:"New assays, allergen/component additions, labeling, IVDR/FDA events, diagnostic algorithms and guideline mentions.",visual:"Clearance timeline + evidence matrix"},
      {ids:["pricing-access"],title:"Lab economics & access",scope:"Reimbursement, test bundling, panel economics, lab pricing and payer acceptance.",visual:"Price corridor + payer-policy matrix"},
      {ids:["conference-kol","social-digital"],title:"KOL / conference / social",scope:"Scientific themes, diagnostic controversy, patient concerns and educational gaps.",visual:"Topic heatmap + sentiment/SOV"},
      {ids:["pipeline-innovation","ip-rd"],title:"Innovation radar",scope:"Multiplexing, digital immunoassays, AI interpretation and non-invasive testing.",visual:"Technology horizon + patent trend"}
    ],
    pmrLenses:[
      {ids:["voc","workflow-unmet"],stakeholders:"Allergists, rheumatologists, lab directors, PCPs, procurement",decision:"Diagnostic uncertainty, turnaround, interpretive burden and workflow friction"},
      {ids:["expert-interviews"],stakeholders:"KOLs, immunology lab experts, ex-industry experts",decision:"Future algorithms, component-testing adoption and test-menu gaps"},
      {ids:["quant-surveys","segmentation-personas"],stakeholders:"Specialists + laboratory decision makers",decision:"Awareness, testing mix, brand usage, switch triggers and adoption archetypes"},
      {ids:["concept-testing","message-claims"],stakeholders:"HCPs and lab buyers",decision:"Relevance, uniqueness, clinical utility, workflow claims and credibility"},
      {ids:["conjoint","pricing-wtp"],stakeholders:"Lab and HCP buyers",decision:"Trade-offs among accuracy, menu breadth, automation, TAT, analyzer footprint and price"},
      {ids:["journey-ux"],stakeholders:"Ordering clinician → laboratory → patient",decision:"Referral, ordering, sample, result interpretation and treatment handoffs"}
    ],
    sources:[
      {title:"Grand View Research — Allergy & Autoimmune Disease Diagnostics Market",url:"https://www.grandviewresearch.com/industry-analysis/allergy-autoimmune-disease-diagnostics-market-report"},
      {title:"FDA — HYCOR NOVEOS specific IgE 510(k) K261027",url:"https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K261027"}
    ]
  },
  "Diabetes & Blood Glucose Monitoring": {
    market:{label:"Blood glucose monitoring systems", current:18.93, currentYear:2026, forecast:32.59, forecastYear:2034, unit:"USD B", cagr:7.0, region:"North America 44.2% of 2025 market", scopeNote:"Publisher-defined BGM market including CGM and SMBG."},
    competitors:["Abbott","Dexcom","Medtronic","Senseonics","Roche / Ascensia","Insulet","Tandem Diabetes Care"],
    themes:["CGM vs SMBG","OTC vs prescription","Wear duration","Accuracy / MARD","AID interoperability","Pediatric indications","Payer access","Channel strategy","App / data experience","Non-invasive pipeline"],
    signals:[
      {date:"12 Jun 2026",type:"Regulatory",company:"Dexcom",title:"Stelo becomes first OTC CGM cleared for children",detail:"FDA cleared Stelo for people age 2+ who do not use insulin; Stelo had previously been OTC-cleared for adults.",url:"https://www.fda.gov/news-events/press-announcements/fda-clears-first-over-counter-continuous-glucose-monitor-children"},
      {date:"29 Jan 2026",type:"Regulatory",company:"Senseonics",title:"Eversense 365 receives CE Mark",detail:"European approval extends the implantable CGM model to a one-year sensor and supports European commercialization.",url:"https://www.senseonics.com/investor-relations/news-releases/2026/01-29-2026-210132082"},
      {date:"8 Jan 2026",type:"Ecosystem",company:"Senseonics",title:"Eversense 365 launches with twiist AID integration",detail:"Commercial integration links the one-year sensor to an automated insulin-delivery system.",url:"https://www.senseonics.com/investor-relations/news-releases/2026/01-08-2026"}
    ],
    ciLenses:[
      {ids:["product-portfolio"],title:"Device / sensor benchmark",scope:"CGM vs SMBG, Rx vs OTC, wear duration, calibration, alerts and age indications.",visual:"Specification heatmap + device cards"},
      {ids:["regulatory-clinical"],title:"Accuracy, evidence & indications",scope:"MARD/accuracy, sensor survival, lag, alarms, interference, pediatric expansions and software claims.",visual:"Evidence scorecard + clearance timeline"},
      {ids:["ma-partnerships","commercial-gtm"],title:"AID / interoperability ecosystem",scope:"Pump integrations, APIs, smart pens, digital therapeutics and partner ecosystems.",visual:"Ecosystem network + compatibility matrix"},
      {ids:["pricing-access"],title:"Pricing / reimbursement / access",scope:"Coverage, pharmacy vs DME, co-pay, prior authorization and employer/wellness access.",visual:"Coverage heatmap + patient-cost waterfall"},
      {ids:["social-digital"],title:"Consumer / digital experience",scope:"Wearability, skin reactions, alarm burden, app experience, lifestyle use, trust and advocacy.",visual:"Sentiment trend + theme heatmap"},
      {ids:["pipeline-innovation","ip-rd"],title:"Next-gen sensor radar",scope:"Implantables, analytes, miniaturization, self-powered sensors and non-invasive claims.",visual:"Technology horizon + patent trend"}
    ],
    pmrLenses:[
      {ids:["voc","satisfaction-loyalty"],stakeholders:"Insulin and non-insulin users, caregivers, wellness/OTC users",decision:"Wear experience, alarms, affordability, data burden and persistence"},
      {ids:["voc","expert-interviews"],stakeholders:"Endocrinologists, PCPs, diabetes educators",decision:"Clinical usefulness, patient selection and data-review burden"},
      {ids:["concept-testing"],stakeholders:"Patients + clinicians",decision:"New sensor formats, implantables, OTC propositions and coaching features"},
      {ids:["conjoint"],stakeholders:"Patients + HCPs",decision:"Trade-offs among accuracy, wear duration, insertion, alerts, app, interoperability and price"},
      {ids:["pricing-wtp"],stakeholders:"OTC and self-pay users",decision:"Monthly/annual acceptable price, feature premium and drop-off points"},
      {ids:["journey-ux","adoption-readiness"],stakeholders:"New users and care teams",decision:"Discovery, training, setup, data sharing, refill and persistence"}
    ],
    sources:[
      {title:"Fortune Business Insights — Blood Glucose Monitoring Market",url:"https://www.fortunebusinessinsights.com/industry-reports/blood-glucose-monitoring-market-100648"},
      {title:"FDA — First OTC CGM for Children",url:"https://www.fda.gov/news-events/press-announcements/fda-clears-first-over-counter-continuous-glucose-monitor-children"},
      {title:"Senseonics — Eversense 365 CE Mark",url:"https://www.senseonics.com/investor-relations/news-releases/2026/01-29-2026-210132082"}
    ]
  },
  "Ophthalmology & Eye Health": {
    market:{label:"Ophthalmic devices", current:21.90, currentYear:2026, forecast:39.10, forecastYear:2033, unit:"USD B", cagr:8.6, region:"North America 29.5% of 2025 revenue", scopeNote:"Publisher-defined ophthalmic devices market."},
    competitors:["Alcon","Johnson & Johnson Vision","ZEISS Medical Technology","Bausch + Lomb","Topcon","Heidelberg Engineering","Haag-Streit","RxSight","Glaukos"],
    themes:["OCT & imaging","Cataract workflow","Premium IOLs","Glaucoma","Retina","Installed base","Cloud / EMR interoperability","AI analytics","Capital economics","KOL / congress"],
    signals:[
      {date:"19 Aug 2026",type:"Regulatory / Digital",company:"ZEISS",title:"ZEISS CLINIC 360 receives FDA 510(k) clearance",detail:"The browser-based platform aggregates diagnostic and medical data and supports advanced analytics across ophthalmic workflows.",url:"https://www.zeiss.com/meditec-ag/en/media-news/press-releases/2026/zeiss-clinic-360.html"},
      {date:"Jun 2026",type:"Market",company:"Category",title:"Ophthalmic devices market estimate updated",detail:"Grand View Research estimates $21.9B in 2026 and $39.1B by 2033, with 8.6% CAGR.",url:"https://www.grandviewresearch.com/industry-analysis/ophthalmic-devices-market"}
    ],
    ciLenses:[
      {ids:["product-portfolio"],title:"Modality / portfolio map",scope:"OCT, fundus, visual field, biometers, microscopes, lasers, phaco, IOLs and glaucoma devices.",visual:"Portfolio matrix + indication map"},
      {ids:["commercial-gtm"],title:"Installed-base & replacement intelligence",scope:"Installed systems, upgrade cycles, service contracts and multi-site standardization.",visual:"Installed-base map + replacement funnel"},
      {ids:["product-portfolio","strategy-positioning"],title:"Connected workflow benchmark",scope:"Cloud vs on-prem, EMR integration, planning, image review, referrals and analytics.",visual:"Workflow heatmap + interoperability map"},
      {ids:["regulatory-clinical"],title:"Regulatory & clinical evidence",scope:"510(k), PMA supplements, software updates, visual outcomes, workflow efficiency and safety.",visual:"Approval tracker + evidence matrix"},
      {ids:["pricing-access"],title:"Capital equipment economics",scope:"Price, financing, subscription, service, utilization and ASC economics.",visual:"TCO waterfall + break-even simulator"},
      {ids:["conference-kol","social-digital"],title:"KOL / congress / perception",scope:"ASCRS, AAO, ESCRS, retina/glaucoma meetings plus surgeon and patient discussion.",visual:"Topic heatmap + KOL network"}
    ],
    pmrLenses:[
      {ids:["voc"],stakeholders:"Cataract/refractive, retina and glaucoma specialists",decision:"Outcome priorities, device preferences, workflow pain points and adoption barriers"},
      {ids:["workflow-unmet","journey-ux"],stakeholders:"Technicians, optometrists, nurses and schedulers",decision:"Data entry, image review, handoffs, training and throughput"},
      {ids:["pricing-wtp","conjoint"],stakeholders:"ASC / hospital administrators and surgeons",decision:"Capital vs subscription, service value, outcomes, speed and integration trade-offs"},
      {ids:["concept-testing"],stakeholders:"Surgeons + buyers",decision:"New imaging, IOL, software or workflow solution relevance and upgrade intent"},
      {ids:["message-claims"],stakeholders:"Surgeons, administrators and patients",decision:"Credibility of outcome, workflow and economic claims"},
      {ids:["adoption-readiness"],stakeholders:"Clinicians and practice leaders",decision:"AI explainability, interoperability, liability, alert burden and implementation readiness"}
    ],
    sources:[
      {title:"Grand View Research — Ophthalmic Devices Market",url:"https://www.grandviewresearch.com/industry-analysis/ophthalmic-devices-market"},
      {title:"ZEISS — CLINIC 360 FDA 510(k) clearance",url:"https://www.zeiss.com/meditec-ag/en/media-news/press-releases/2026/zeiss-clinic-360.html"}
    ]
  },
  "Orthopedics & Sports Medicine": {
    market:{label:"Orthopedic devices", current:68.48, currentYear:2026, forecast:105.45, forecastYear:2034, unit:"USD B", cagr:5.54, region:"North America 54.92% of 2025 market", scopeNote:"Publisher-defined orthopedic devices market; sports medicine is one component."},
    competitors:["Stryker","Zimmer Biomet","DePuy Synthes / J&J","Smith+Nephew","Arthrex","Enovis","Medacta","Globus Medical","THINK Surgical"],
    themes:["Joint reconstruction","Sports medicine","Trauma / extremities","Robotics","Navigation","ASC site of care","Contracting","Registries / PROMs","Digital rehab","M&A / portfolio shifts"],
    signals:[
      {date:"10 Feb 2026",type:"Financial",company:"Zimmer Biomet",title:"Zimmer Biomet reports $8.232B FY2025 net sales",detail:"Full-year sales rose 7.2% reported; enabling technology and digital initiatives remain relevant alongside implant performance.",url:"https://investor.zimmerbiomet.com/news-and-events/news/2026/02-10-2026-113027310"},
      {date:"Aug 2026",type:"Market",company:"Category",title:"Orthopedic devices market estimate updated",detail:"Fortune Business Insights estimates $68.48B in 2026 and $105.45B by 2034; joint reconstruction is projected at 37.51% of 2026 market.",url:"https://www.fortunebusinessinsights.com/orthopedic-devices-market-102586"},
      {date:"2026",type:"Innovation",company:"Smith+Nephew",title:"Smith+Nephew highlights M-TECH and Biologics innovation platforms",detail:"Smith+Nephew says it launched 75+ new products in 2021–25 and that more than 60% of 2025 revenue growth came from products launched in the prior five years, with CORI, TESSA, LEAF and biologics cited as strategic innovation platforms.",url:"https://www.smith-nephew.com/en/who-we-are/innovation"}
    ],
    ciLenses:[
      {ids:["product-portfolio"],title:"Implant portfolio & procedure map",scope:"Hip, knee, shoulder, sports, trauma, extremities, fixation and biologics.",visual:"Procedure-by-product matrix"},
      {ids:["pipeline-innovation","product-portfolio"],title:"Robotics / navigation benchmark",scope:"Compatibility, imaging, planning, accuracy, disposables, workflow and economics.",visual:"Feature heatmap + ecosystem map"},
      {ids:["commercial-gtm","pricing-access"],title:"ASC / site-of-care intelligence",scope:"Procedure migration, capital models, staffing, throughput and reimbursement.",visual:"Site-of-care shift + ASC opportunity map"},
      {ids:["regulatory-clinical"],title:"Clinical evidence / registry intelligence",scope:"Revision, function, PROMs, alignment, complications and return-to-sport.",visual:"Outcome benchmark + evidence-strength matrix"},
      {ids:["pricing-access"],title:"Contracting / pricing intelligence",scope:"Bundle economics, rebates, committed volume and capital + implant contracts.",visual:"Contract archetype map + price corridor"},
      {ids:["ma-partnerships"],title:"M&A / portfolio restructuring",scope:"Divestitures, acquisitions, separations and technology tuck-ins.",visual:"Deal timeline + capability adjacency map"}
    ],
    pmrLenses:[
      {ids:["voc"],stakeholders:"Joint, sports, trauma and extremity surgeons",decision:"Implant preference, enabling-tech value, workflow and training"},
      {ids:["workflow-unmet","journey-ux"],stakeholders:"OR staff, administrators and value analysis",decision:"Setup, instrument burden, turnover, sterilization, inventory and utilization"},
      {ids:["concept-testing"],stakeholders:"Surgeons + facilities",decision:"Implants, instruments, robotics/navigation and digital follow-up adoption"},
      {ids:["conjoint","pricing-wtp"],stakeholders:"Surgeons + economic buyers",decision:"Trade-offs among outcomes, instrumentation, robotics, service, price and contracts"},
      {ids:["quant-surveys","segmentation-personas"],stakeholders:"Surgeons and facilities",decision:"Procedure mix, current brands, utilization, switching barriers and adoption personas"},
      {ids:["satisfaction-loyalty"],stakeholders:"Patients, athletes and rehab stakeholders",decision:"Recovery expectations, return to activity, digital support and outcomes"}
    ],
    sources:[
      {title:"Fortune Business Insights — Orthopedic Devices Market",url:"https://www.fortunebusinessinsights.com/orthopedic-devices-market-102586"},
      {title:"Zimmer Biomet — FY2025 Results",url:"https://investor.zimmerbiomet.com/news-and-events/news/2026/02-10-2026-113027310"}
    ]
  },
  "Advanced Wound Management": {
    market:{label:"Advanced wound care", current:14.08, currentYear:2026, forecast:23.33, forecastYear:2034, unit:"USD B", cagr:6.52, region:"North America 42.52% of 2025 market", scopeNote:"Publisher-defined advanced wound care market."},
    competitors:["Solventum","Smith+Nephew","Convatec","Mölnlycke","Coloplast","Medline","Integra LifeSciences","Organogenesis","MiMedx","Urgo Medical"],
    themes:["Advanced dressings","NPWT","Bioactives","DFU / VLU / pressure injuries","Hospital formulary","Home care","Reimbursement / coding","Healing evidence","Smart dressings","Patient experience"],
    signals:[
      {date:"9 Apr 2026",type:"Strategy",company:"Convatec",title:"Convatec launches Accelerate strategy",detail:"The strategy targets 6–8% annual organic revenue growth overall and acceleration of Advanced Wound Care to high single-digit growth.",url:"https://www.convatecgroup.com/media/press-releases/2026/convatec-announces-accelerate-strategy-to-drive-the-next-chapter-of--sustainable-and-profitable-growth/"},
      {date:"Aug 2026",type:"Market",company:"Category",title:"Advanced wound care market estimate updated",detail:"Fortune Business Insights estimates $14.08B in 2026 and $23.33B by 2034; advanced wound dressings are projected to hold 61.96% in 2026.",url:"https://www.fortunebusinessinsights.com/industry-reports/advanced-wound-care-market-100060"}
    ],
    ciLenses:[
      {ids:["product-portfolio"],title:"Modality / wound-type map",scope:"Dressings, NPWT, antimicrobial, debridement, compression, skin substitutes, DFU, VLU, pressure injuries and surgical wounds.",visual:"Modality matrix + wound-type heatmap"},
      {ids:["regulatory-clinical"],title:"Clinical evidence intelligence",scope:"Healing rates, time-to-closure, infection, resource use, recurrence and patient outcomes.",visual:"Evidence scorecard + endpoint matrix"},
      {ids:["pricing-access"],title:"Reimbursement / coding monitor",scope:"NPWT, cellular/tissue products, home care, payer policies and bundling.",visual:"Coverage tracker + reimbursement waterfall"},
      {ids:["commercial-gtm"],title:"Hospital / home-care channel intelligence",scope:"Formulary, SKU rationalization, tenders, DME, home health, distributors and patient support.",visual:"Account tracker + channel footprint"},
      {ids:["pipeline-innovation","ip-rd"],title:"Innovation radar",scope:"Smart dressings, sensors, antimicrobial materials, single-use NPWT and digital wound measurement.",visual:"Technology horizon + patent trend"},
      {ids:["conference-kol","social-digital"],title:"KOL / congress / patient experience",scope:"EWMA, SAWC and wound-society themes plus pain, leakage, odor, wear time and mobility.",visual:"Topic heatmap + experience themes"}
    ],
    pmrLenses:[
      {ids:["voc"],stakeholders:"Wound nurses, podiatrists and vascular/plastic/general surgeons",decision:"Product selection, healing priorities, evidence gaps and workflow pain"},
      {ids:["voc","journey-ux"],stakeholders:"Community/home nurses and caregivers",decision:"Ease, training, dressing changes, supply and escalation"},
      {ids:["pricing-wtp","conjoint"],stakeholders:"Clinicians + hospital/home-care buyers",decision:"Trade-offs among healing, wear time, exudate handling, antimicrobial features, ease and price"},
      {ids:["concept-testing"],stakeholders:"Clinicians + buyers",decision:"Dressings, NPWT, digital wound tools and novel materials — relevance and willingness to trial"},
      {ids:["workflow-unmet"],stakeholders:"Acute, outpatient and home-care stakeholders",decision:"Handoffs, supply, documentation, escalation and follow-up"},
      {ids:["satisfaction-loyalty"],stakeholders:"Chronic-wound patients",decision:"Pain, odor, mobility, sleep, adherence, confidence and quality of life"}
    ],
    sources:[
      {title:"Fortune Business Insights — Advanced Wound Care Market",url:"https://www.fortunebusinessinsights.com/industry-reports/advanced-wound-care-market-100060"},
      {title:"Convatec — Accelerate Strategy",url:"https://www.convatecgroup.com/media/press-releases/2026/convatec-announces-accelerate-strategy-to-drive-the-next-chapter-of--sustainable-and-profitable-growth/"}
    ]
  },
  "Clinical Laboratory Services": {
    market:{label:"Clinical laboratory services", current:306.91, currentYear:2026, forecast:461.89, forecastYear:2034, unit:"USD B", cagr:5.2, region:"North America 36.46% of 2025 market", scopeNote:"Publisher-defined clinical laboratory services market; not directly comparable with device-only categories."},
    competitors:["Quest Diagnostics","Labcorp","Sonic Healthcare","Mayo Clinic Laboratories","ARUP Laboratories","Eurofins","NeoGenomics","SYNLAB / Unilabs"],
    themes:["Routine vs specialty testing","Health-system partnerships","Outreach","Reimbursement / PAMA","Automation","AI / analytics","Digital pathology","Consumer testing","EHR integration","Service experience"],
    signals:[
      {date:"2025 results",type:"Financial / Strategy",company:"Quest Diagnostics",title:"Quest reports $11.035B FY2025 revenue",detail:"Quest highlighted health-system collaborations, AI and automation, and a Google Cloud engagement to improve data management and analytics.",url:"https://ir.questdiagnostics.com/press-releases/press-release-details/2026/Quest-Diagnostics-Reports-Fourth-Quarter-and-Full-Year-2025-Financial-Results--Provides-Guidance-for-Full-Year-2026-Increases-Quarterly-Dividend-7-5-to-0-86-Per-Share/default.aspx"},
      {date:"17 Aug 2026",type:"Industry Survey",company:"Mayo Clinic Laboratories / Advisory Board",title:"Lab leaders expect investment despite automation cost barriers",detail:"64% of surveyed leaders expected near-term lab budget increases; 70% cited upfront automation implementation cost as a barrier.",url:"https://news.mayocliniclabs.com/2026/08/17/survey-reveals-four-strategies-for-laboratory-growth/"},
      {date:"Sep 2026",type:"Market",company:"Category",title:"Clinical laboratory services market estimate updated",detail:"Fortune Business Insights estimates $306.91B in 2026 and $461.89B by 2034.",url:"https://www.fortunebusinessinsights.com/industry-reports/clinical-laboratory-services-market-100725"}
    ],
    ciLenses:[
      {ids:["company-profiles"],title:"Competitor 360 & financials",scope:"Revenue, volume, price/mix, margins, M&A, strategic priorities and footprint.",visual:"Company scorecard + earnings trend"},
      {ids:["product-portfolio","pipeline-innovation"],title:"Test-menu / specialty intelligence",scope:"Routine vs specialty; oncology, genetics, autoimmune, neurology, women’s health and esoteric testing.",visual:"Menu-depth heatmap + launch tracker"},
      {ids:["ma-partnerships","commercial-gtm"],title:"Health-system partnership / outreach",scope:"Lab management, acquisitions, JVs, outsourcing, physician accounts, retention and growth.",visual:"Deal map + outreach opportunity view"},
      {ids:["pricing-access"],title:"Pricing / reimbursement / PAMA",scope:"CLFS changes, payer policies, denials, benefit management and test economics.",visual:"Reimbursement tracker + price waterfall"},
      {ids:["pipeline-innovation","strategy-positioning"],title:"Operational / automation intelligence",scope:"Robotics, AI, digital pathology, logistics, sample processing and workforce productivity.",visual:"Automation capability benchmark"},
      {ids:["social-digital","commercial-gtm"],title:"Digital / data / consumer experience",scope:"Ordering, portals, APIs, decision support, utilization analytics, DTC, phlebotomy, billing and turnaround.",visual:"Digital capability matrix + journey map"}
    ],
    pmrLenses:[
      {ids:["voc","workflow-unmet"],stakeholders:"Lab executives, operations leaders, pathologists and health-system executives",decision:"TAT, staffing, leakage, quality, analytics and partnership needs"},
      {ids:["voc","journey-ux"],stakeholders:"PCPs and specialists",decision:"Test choice, ordering friction, decision support, report usability and consultative support"},
      {ids:["satisfaction-loyalty","quant-surveys"],stakeholders:"Health systems, practices and clinicians",decision:"Service quality, logistics, pricing, NPS, switching risk and retention drivers"},
      {ids:["expert-interviews"],stakeholders:"Lab leaders, payers, ex-industry and informatics experts",decision:"Market structure, specialty growth, reimbursement and technology roadmap"},
      {ids:["concept-testing","message-claims"],stakeholders:"Health systems and physician buyers",decision:"Analytics, portals, specialty tests, consumer offerings and value proposition"},
      {ids:["conjoint","pricing-wtp"],stakeholders:"Health-system / physician buyers",decision:"Trade-offs among price, TAT, menu breadth, integration, service and analytics"}
    ],
    sources:[
      {title:"Fortune Business Insights — Clinical Laboratory Services Market",url:"https://www.fortunebusinessinsights.com/industry-reports/clinical-laboratory-services-market-100725"},
      {title:"Quest Diagnostics — FY2025 Results",url:"https://ir.questdiagnostics.com/press-releases/press-release-details/2026/Quest-Diagnostics-Reports-Fourth-Quarter-and-Full-Year-2025-Financial-Results--Provides-Guidance-for-Full-Year-2026-Increases-Quarterly-Dividend-7-5-to-0-86-Per-Share/default.aspx"},
      {title:"Mayo Clinic Laboratories — 2026 Laboratory Growth Survey",url:"https://news.mayocliniclabs.com/2026/08/17/survey-reveals-four-strategies-for-laboratory-growth/"}
    ]
  }
};