window.DOMAIN_EVIDENCE = {
  "Autoimmunity & Allergy": {
    updated: "September 2026",
    evidenceNote: "Public-health burden metrics are sourced from CDC/NCHS and NIEHS. Competitive watchlists are representative, not market-share rankings.",
    facts: [
      {value:"31.7%", label:"U.S. adults with ≥1 selected allergic condition", note:"Seasonal allergy, eczema or food allergy; 2024 NHIS", source:0},
      {value:"29.5%", label:"U.S. children with ≥1 selected allergic condition", note:"Ages 0–17; 2024 NHIS", source:1},
      {value:"80+", label:"Known autoimmune diseases", note:"NIEHS describes more than 80 autoimmune diseases", source:2},
      {value:"25.2%", label:"Adults with seasonal allergy", note:"U.S. adults, 2024", source:0}
    ],
    segments:["Allergy diagnostics","Autoimmune serology","Component-resolved diagnostics","Laboratory automation","Interpretive & decision support"],
    forces:[
      "Growing need to distinguish sensitization from clinically relevant allergy increases the value of component-level testing and interpretation.",
      "Broader autoimmune menus and reflex algorithms raise the importance of workflow design, automation and standardized result interpretation.",
      "Laboratory staffing constraints favor consolidated, high-throughput systems and lower-touch workflows.",
      "Regulatory and evidence requirements increase lifecycle-management burden for broad assay portfolios."
    ],
    sources:[
      {title:"CDC/NCHS — Diagnosed Allergic Conditions in Adults: United States, 2024", url:"https://www.cdc.gov/nchs/products/databriefs/db545.htm", date:"January 2026", fact:"31.7% of adults had diagnosed seasonal allergy, eczema or food allergy in 2024; seasonal allergy was 25.2%."},
      {title:"CDC/NCHS — Diagnosed Allergic Conditions in Children Ages 0–17: United States, 2024", url:"https://www.cdc.gov/nchs/products/databriefs/db546.htm", date:"January 2026", fact:"29.5% of children had at least one of the selected allergic conditions in 2024."},
      {title:"NIEHS — Autoimmune Diseases", url:"https://www.niehs.nih.gov/health/topics/conditions/autoimmune", date:"Accessed September 2026", fact:"NIEHS notes that scientists know of more than 80 autoimmune diseases."}
    ]
  },
  "Diabetes & Blood Glucose Monitoring": {
    updated:"September 2026",
    evidenceNote:"Burden metrics use IDF and CDC; regulatory milestones use FDA. Market-share or revenue claims are not inferred from these sources.",
    facts:[
      {value:"589M", label:"Adults living with diabetes globally", note:"Ages 20–79; IDF 11th edition", source:0},
      {value:"853M", label:"Projected adults with diabetes by 2050", note:"IDF projection", source:0},
      {value:"40.1M", label:"People with diabetes in the U.S.", note:"Diagnosed + undiagnosed; 2023 estimate", source:1},
      {value:"115.2M", label:"U.S. adults with prediabetes", note:"CDC estimate", source:1}
    ],
    segments:["Blood glucose monitoring","Continuous glucose monitoring","Insulin delivery & AID","Connected diabetes data","OTC / consumer glucose sensing"],
    forces:[
      "CGM use continues to broaden across insulin-treated and selected non-insulin populations, expanding the addressable user base.",
      "Interoperability among sensors, pumps, algorithms and apps is becoming a platform-level competitive requirement.",
      "OTC CGM creates new consumer and channel models while increasing the need for education and responsible interpretation.",
      "Clinicians need standardized, action-oriented reports to manage larger volumes of longitudinal glucose data."
    ],
    sources:[
      {title:"International Diabetes Federation — Diabetes Atlas 11th Edition", url:"https://idf.org/news-and-resources/news/idf-diabetes-atlas-11th-edition/", date:"April 2025", fact:"IDF estimates 589 million adults aged 20–79 live with diabetes and projects 853 million by 2050."},
      {title:"CDC — National Diabetes Statistics Report", url:"https://cdc.gov/diabetes/php/data-research/index.html", date:"January 2026", fact:"CDC estimates 40.1 million people in the U.S. had diabetes in 2023 and 115.2 million adults had prediabetes."},
      {title:"FDA — First OTC Continuous Glucose Monitor", url:"https://www.fda.gov/news-events/press-announcements/fda-clears-first-over-counter-continuous-glucose-monitor", date:"March 2024", fact:"FDA cleared Dexcom Stelo as the first OTC CGM for adults not using insulin."},
      {title:"FDA — First OTC CGM for Children", url:"https://www.fda.gov/news-events/press-announcements/fda-clears-first-over-counter-continuous-glucose-monitor-children", date:"June 2026", fact:"FDA expanded OTC Stelo use to people aged two years and older who do not use insulin."}
    ]
  },
  "Ophthalmology & Eye Health": {
    updated:"September 2026",
    evidenceNote:"Global burden figures are from WHO. Player and technology views are representative and should not be interpreted as market-share estimates.",
    facts:[
      {value:"2.2B", label:"People with near or distance vision impairment", note:"Global WHO estimate", source:0},
      {value:"1.0B+", label:"Preventable or unaddressed cases", note:"At least one billion", source:0},
      {value:"$411B", label:"Annual global productivity loss", note:"Estimated impact of vision impairment", source:0},
      {value:"94M", label:"Distance vision impairment from cataract", note:"WHO estimate", source:0}
    ],
    segments:["Cataract & refractive surgery","Retina","Glaucoma","Diagnostic imaging","Digital planning & AI"],
    forces:[
      "Aging populations and chronic disease increase demand for cataract, retina and glaucoma care.",
      "Integrated diagnostic-to-surgical workflows are shifting differentiation from devices toward connected ecosystems.",
      "Premium refractive outcomes increase the importance of patient selection, counseling and willingness-to-pay research.",
      "AI and cloud-based imaging/data platforms are expanding research and workflow possibilities."
    ],
    sources:[
      {title:"WHO — Blindness and Vision Impairment", url:"https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment", date:"February 2026", fact:"At least 2.2 billion people have near or distance vision impairment; at least one billion cases could have been prevented or remain unaddressed."},
      {title:"WHO — Eye-care intervention technical brief", url:"https://www.who.int/publications/m/item/increasing-eye-care-interventions-to-address-vision-impairment", date:"March 2023", fact:"WHO estimates annual productivity losses from unaddressed vision impairment at about US$411 billion."}
    ]
  },
  "Orthopedics & Sports Medicine": {
    updated:"September 2026",
    evidenceNote:"Disease-burden figures are from WHO. Competitive profiles focus on representative orthopedic and sports-medicine manufacturers.",
    facts:[
      {value:"1.71B", label:"People with musculoskeletal conditions", note:"Global WHO estimate", source:0},
      {value:"528M", label:"People with osteoarthritis", note:"GBD 2019 estimate cited by WHO", source:0},
      {value:"149M", label:"Years lived with disability", note:"Musculoskeletal conditions globally", source:0},
      {value:"18M", label:"People with rheumatoid arthritis", note:"Global estimate cited by WHO", source:0}
    ],
    segments:["Joint reconstruction","Trauma & extremities","Sports medicine / arthroscopy","Robotics & navigation","Biologics & enabling technologies"],
    forces:[
      "Procedure growth and aging populations sustain demand across joint reconstruction, trauma and sports medicine.",
      "Robotics, navigation and digital planning are becoming integrated with implant portfolios and service models.",
      "Ambulatory surgery centers emphasize compact footprint, throughput, predictable economics and staff simplicity.",
      "Soft-tissue repair and minimally invasive sports-medicine technologies remain active innovation areas."
    ],
    sources:[
      {title:"WHO — Musculoskeletal Health", url:"https://www.who.int/news-room/fact-sheets/detail/musculoskeletal-conditions", date:"July 2022; accessed September 2026", fact:"WHO estimates 1.71 billion people live with musculoskeletal conditions, including 528 million with osteoarthritis and 18 million with rheumatoid arthritis."}
    ]
  },
  "Advanced Wound Management": {
    updated:"September 2026",
    evidenceNote:"Burden data use peer-reviewed public sources and NIDDK; device-regulatory framing uses FDA.",
    facts:[
      {value:"10.5M", label:"Medicare beneficiaries affected by chronic wounds", note:"U.S. estimate in 2025 compendium", source:0},
      {value:"$22.5B", label:"Estimated annual Medicare wound cost", note:"2025 compendium estimate", source:0},
      {value:"Up to 34%", label:"Lifetime diabetic-foot-ulcer risk", note:"Updated research cited by NIDDK", source:1},
      {value:"Class II", label:"NPWT device classification", note:"FDA special controls / 510(k) pathway", source:2}
    ],
    segments:["Advanced dressings","Negative pressure wound therapy","Bioactives / skin substitutes","Infection & exudate management","Compression, prevention & monitoring"],
    forces:[
      "Aging, diabetes and obesity sustain a high chronic-wound burden and increase demand for prevention and healing solutions.",
      "Evidence quality and reimbursement are critical to adoption, especially for higher-cost advanced therapies and skin substitutes.",
      "Care is decentralizing toward outpatient and home settings, increasing the value of portable, simple and connected solutions.",
      "Digital wound measurement and predictive analytics are emerging as complements to therapy portfolios."
    ],
    sources:[
      {title:"PubMed — Human Wound and Its Burden: Updated 2025 Compendium of Estimates", url:"https://pubmed.ncbi.nlm.nih.gov/40660772/", date:"2025", fact:"The review reports chronic wounds affecting about 10.5 million Medicare beneficiaries and estimated Medicare costs of US$22.5 billion annually."},
      {title:"NIDDK — Diabetes, Peripheral Arterial Disease, and Foot Ulcers", url:"https://www.niddk.nih.gov/health-information/professionals/diabetes-discoveries-practice/diabetes-peripheral-arterial-disease-and-foot-ulcers", date:"Accessed September 2026", fact:"NIDDK discussion cites updated research suggesting lifetime diabetic-foot-ulcer risk may be as high as 34%."},
      {title:"FDA — Non-powered NPWT Class II Special Controls", url:"https://www.fda.gov/medical-devices/guidance-documents-medical-devices-and-radiation-emitting-products/non-powered-suction-apparatus-device-intended-negative-pressure-wound-therapy-npwt-class-ii-special", date:"FDA guidance", fact:"FDA classifies specified non-powered negative-pressure wound therapy devices as Class II with special controls."}
    ]
  },
  "Clinical Laboratory Services": {
    updated:"September 2026",
    evidenceNote:"Scale metrics are from CDC clinical-standardization materials. Competitive players are representative of national/reference and specialty laboratory models.",
    facts:[
      {value:"14B", label:"Laboratory tests performed annually in the U.S.", note:"Approximate CDC figure", source:0},
      {value:"266K+", label:"CLIA-certified laboratories", note:"Approximate U.S. count cited by CDC", source:0},
      {value:"Multi-site", label:"Reference-lab operating model", note:"National networks + specialty centers", source:1},
      {value:"Data-rich", label:"Core strategic asset", note:"Longitudinal diagnostic data + analytics", source:1}
    ],
    segments:["National / reference laboratories","Hospital & health-system laboratories","Esoteric / molecular testing","Pathology & genomics","Analytics, decision support & consumer access"],
    forces:[
      "High test volumes and staffing pressure increase demand for automation, standardization and centralized operating models.",
      "Health systems increasingly expect analytics that connect laboratory data to utilization, workflow, quality and financial decisions.",
      "Esoteric, molecular and genomic testing raise the value of specialized expertise, logistics and interpretive support.",
      "Consumer access and digital ordering create new channels while increasing the importance of governance and care integration."
    ],
    sources:[
      {title:"CDC — Clinical Standardization Programs", url:"https://www.cdc.gov/clinical-standardization-programs/php/about/index.html", date:"April 2024", fact:"CDC states that approximately 14 billion laboratory tests are performed annually in more than 266,000 CLIA-certified laboratories in the U.S."},
      {title:"CDC — About Clinical Standardization Programs", url:"https://www.cdc.gov/clinical-standardization-programs/about/index.html", date:"April 2024", fact:"CDC emphasizes standardization of laboratory measurements for chronic-disease biomarkers to improve accuracy and comparability."}
    ]
  }
};