/* PMR v2 enrichment: synthetic project outputs designed to resemble completed primary research.
   All respondent results, counts, quotations and recommendations are demo data. */

window.PMR_V2_CONFIG={
  "Autoimmunity & Allergy":{
    vocHeadline:"Customers want fewer diagnostic dead ends and clearer interpretation, especially when symptoms overlap across autoimmune and allergic conditions.",
    preferenceLabels:["Actionable interpretation","Diagnostic confidence","Fast specialist pathway","Simple ordering","Coverage clarity","Patient-friendly explanation"],
    patternLabels:["Specialists value depth","Generalists value guidance","Labs value workflow fit","Patients value clarity","Access shapes advanced testing"],
    riskLabels:["Over-complex reporting","Coverage uncertainty","Specialist bottleneck","Panel overuse","Cross-platform inconsistency"],
    expertFeed:[
      ["Allergy KOL","Component-resolved testing is most valuable when it changes avoidance, challenge or immunotherapy decisions.","Diagnostic accuracy","High"],
      ["Rheumatology KOL","The real unmet need is earlier pattern recognition across overlapping symptoms, not simply a larger marker menu.","Time to diagnosis","High"],
      ["Immunology Lab Director","Reflex logic can reduce manual review if the algorithm is transparent and locally configurable.","Laboratory workflow","Medium"],
      ["Health-system Medical Director","Advanced panels will scale only when ordering pathways and interpretation are standardized.","Interpretation support","High"],
      ["Payer / Access Expert","Coverage scrutiny increases when broad panels are ordered without a clear diagnostic pathway.","Testing access & reimbursement","High"],
      ["Allergy KOL","Patient education matters because uncertainty between sensitization and clinical allergy drives anxiety and over-restriction.","Patient education","Medium"]
    ],
    quantNarratives:[
      "Interpretation support is the strongest stated improvement need among non-specialist physicians.",
      "Specialists show higher willingness to adopt multiplex testing when reflex logic and component-level evidence are transparent.",
      "Laboratory respondents prioritize automation and predictable hands-on time over menu breadth alone.",
      "Patients and caregivers report that uncertainty about what a positive result means is a larger friction than specimen collection.",
      "Coverage clarity materially increases stated adoption intent for higher-complexity testing."
    ]
  },
  "Diabetes & Blood Glucose Monitoring":{
    vocHeadline:"Users consistently prioritize lower daily burden, reliable data and clear next actions over adding more alerts or features.",
    preferenceLabels:["Reliable accuracy","Low daily burden","Simple app experience","Sensor comfort","Interoperability","Coverage / affordability"],
    patternLabels:["T1D values automation","T2D values guidance","Clinicians want triage","Educators want easy onboarding","Cost affects persistence"],
    riskLabels:["Alarm fatigue","Data overload","Skin / wear issues","Coverage drop-off","Ecosystem fragmentation"],
    expertFeed:[
      ["Endocrinology KOL","The next growth wave is not only more sensors; it is making the data actionable for people who are not intensive insulin users.","Data interpretation","High"],
      ["Diabetes Technology KOL","AID adoption accelerates when the user can trust automation without feeling trapped by alarms and manual correction.","Automated insulin delivery","High"],
      ["Diabetes Educator Leader","Onboarding quality is still a major predictor of whether people keep using a device beyond the first month.","Wearability & comfort","High"],
      ["Payer / Access Expert","Broader coverage will depend on demonstrating outcomes outside the traditional intensive-insulin population.","Affordability & coverage","High"],
      ["Digital Health Expert","The winning interface will prioritize the few patterns that need action rather than showing every available datapoint.","Data interpretation","High"],
      ["Endocrinology KOL","Interoperability is becoming part of the core clinical value proposition, not a technical extra.","Device interoperability","Medium"]
    ],
    quantNarratives:[
      "Accuracy, wear comfort and low alert burden explain the largest share of stated device preference.",
      "People with type 2 diabetes place more value on coaching and trend interpretation than on advanced pump integration.",
      "Endocrinologists rate interoperability and remote review higher than patients do.",
      "Affordability remains the largest stated barrier among prospective and intermittent users.",
      "Users with prior CGM experience show materially higher readiness for automated or AI-supported guidance."
    ]
  },
  "Ophthalmology & Eye Health":{
    vocHeadline:"Clinical users favor connected imaging and surgical workflows that improve confidence without adding acquisition, setup or documentation burden.",
    preferenceLabels:["Image quality","Fast acquisition","Workflow connectivity","Procedure predictability","Compact footprint","Patient communication"],
    patternLabels:["Surgeons value predictability","Technicians value automation","Retina values longitudinal view","ASCs value throughput","Patients value visual explanation"],
    riskLabels:["Capital budget","Workflow duplication","Training burden","Premium affordability","Disconnected data"],
    expertFeed:[
      ["Cataract KOL","Premium technology succeeds when planning and intraoperative execution feel like one workflow.","Procedure efficiency","High"],
      ["Retina KOL","Longitudinal imaging is becoming more important than isolated image quality because treatment decisions are trend based.","Longitudinal data","High"],
      ["Glaucoma KOL","Home and remote monitoring can add value, but false positives and follow-up burden must be controlled.","Diagnostic confidence","Medium"],
      ["Optometry Leader","Referral quality improves when image sharing and interpretation are embedded into the care pathway.","Workflow integration","High"],
      ["Ophthalmic Imaging Expert","Automation matters most when it reduces repeat scans and operator dependence.","Image quality","High"],
      ["Cataract KOL","Patient understanding is a key part of premium IOL conversion and expectation management.","Premium IOL counseling","Medium"]
    ],
    quantNarratives:[
      "Workflow connectivity and acquisition speed are the highest-rated attributes among technicians and high-volume practices.",
      "Surgeons place greater emphasis on predictability and integrated planning than on adding standalone imaging features.",
      "ASC respondents show the strongest sensitivity to capital economics and room utilization.",
      "Patients report higher confidence when treatment options are explained using their own images.",
      "Longitudinal data access is the most differentiated need among retina and glaucoma respondents."
    ]
  },
  "Orthopedics & Sports Medicine":{
    vocHeadline:"Surgeons and OR teams support enabling technology when it improves reproducibility and efficiency without increasing setup complexity.",
    preferenceLabels:["Procedure reproducibility","Surgeon control","OR efficiency","Training quality","ASC economics","Outcome evidence"],
    patternLabels:["High-volume surgeons value speed","ASCs value utilization","OR teams value setup simplicity","Patients value recovery","KOLs value reproducibility"],
    riskLabels:["Capital utilization","Setup burden","Learning curve","Implant lock-in","Evidence gap"],
    expertFeed:[
      ["Joint Reconstruction KOL","Robotics is moving from accuracy claims toward reproducibility, planning confidence and day-to-day efficiency.","Robotics / navigation","High"],
      ["Sports Medicine KOL","Biologic and repair technologies need better patient selection evidence before they become routine.","Evidence & outcomes","High"],
      ["Spine / Robotics KOL","Closed ecosystems can accelerate adoption but also create switching resistance at the account level.","Implant confidence","Medium"],
      ["ASC Leader","A technology platform has to prove that it works economically at outpatient volumes, not only in tertiary hospitals.","ASC suitability","High"],
      ["Orthopedic Health Economist","The next purchasing conversation will include utilization, staffing and episode economics alongside implant price.","Capital economics","High"],
      ["Joint Reconstruction KOL","The whole OR team determines whether a new system becomes routine after the first few cases.","OR efficiency","Medium"]
    ],
    quantNarratives:[
      "Procedure reproducibility and OR efficiency are the strongest cross-persona drivers of technology preference.",
      "ASC decision makers place significantly more importance on utilization and setup time than hospital-based surgeons.",
      "Surgeon willingness to switch increases when training is paired with peer evidence and workflow support.",
      "Patients value recovery confidence and return-to-activity expectations more than technical implant features.",
      "Capital technologies face the greatest adoption friction where projected procedure volume is uncertain."
    ]
  },
  "Advanced Wound Management":{
    vocHeadline:"Customers judge wound solutions by total care burden: healing progress, dressing-change effort, documentation, access and home-care practicality.",
    preferenceLabels:["Healing confidence","Ease of application","Wear time","Patient comfort","Reimbursement support","Documentation simplicity"],
    patternLabels:["Nurses value simplicity","Specialists value evidence","Home care values durability","Admins value total cost","Patients value fewer visits"],
    riskLabels:["Coverage complexity","Training variation","Home adherence","Product waste","Documentation burden"],
    expertFeed:[
      ["Wound Care KOL","The best product story combines healing trajectory with fewer visits and easier management between visits.","Healing progression","High"],
      ["Podiatry KOL","Escalation decisions are difficult when clinicians cannot see whether a wound is truly progressing.","Healing progression","High"],
      ["Vascular KOL","Patient selection and perfusion assessment remain critical before advanced therapies are expected to work.","Skin substitute evidence","High"],
      ["Reconstructive Surgery KOL","Regenerative products need credible comparative evidence and clear use criteria to avoid inconsistent adoption.","Skin substitute evidence","High"],
      ["Reimbursement / Access Expert","Documentation and coverage rules can shape product choice as strongly as clinical preference.","Reimbursement complexity","High"],
      ["Wound Care KOL","Home-care usability determines whether the theoretical product benefit survives outside the clinic.","Home-care adherence","Medium"]
    ],
    quantNarratives:[
      "Ease of application and fewer dressing changes rank highest among nursing respondents.",
      "Specialists place the greatest weight on healing evidence and appropriate patient selection.",
      "Home-health respondents show the highest sensitivity to durability, instructions and caregiver burden.",
      "Administrators prioritize total visit burden and product waste when comparing wound pathways.",
      "Reimbursement support is the strongest predictor of stated adoption for higher-cost advanced therapies."
    ]
  },
  "Clinical Laboratory Services":{
    vocHeadline:"Health-system customers want laboratory partners that combine reliable operations with specialty access, workflow integration and actionable analytics.",
    preferenceLabels:["Reliable TAT","EHR / LIS integration","Specialty access","Interpretive support","Service responsiveness","Utilization insight"],
    patternLabels:["Lab leaders value control","Clinicians value actionability","Admins value economics","Ops teams value visibility","Patients value clarity"],
    riskLabels:["Interface burden","Staff capacity","Send-out leakage","Result fragmentation","Reimbursement pressure"],
    expertFeed:[
      ["Laboratory Medicine KOL","Analytics only create value when they move from retrospective reporting to a specific operational or clinical action.","Utilization stewardship","High"],
      ["Pathology KOL","Specialty diagnostics are increasingly differentiated by interpretation and access to expertise, not the assay alone.","Result interpretation","High"],
      ["Health-system Lab Executive","Real-time operational visibility matters because problems are expensive before the monthly report arrives.","Turnaround time","High"],
      ["Utilization / Stewardship Expert","Ordering guidance works best when it is embedded in clinician workflow rather than delivered as a separate portal.","EHR / LIS integration","High"],
      ["Payer / Value-based Care Expert","Premium analytics need measurable utilization or outcome impact to sustain funding.","Utilization stewardship","Medium"],
      ["Laboratory Medicine KOL","Health systems will keep outsourcing selectively, but they want clearer control over send-outs, leakage and service quality.","Send-out management","High"]
    ],
    quantNarratives:[
      "Reliable turnaround time and EHR integration are the strongest overall drivers of laboratory partner preference.",
      "Lab directors place higher value on real-time operations and send-out visibility than ordering physicians.",
      "Ordering physicians prioritize interpretive support and ease of ordering for complex specialty tests.",
      "Administrators show stronger preference for solutions that demonstrate leakage reduction and staffing efficiency.",
      "Patients and consumers rate result clarity and digital access higher than breadth of available testing."
    ]
  }
};

function pmrV2Hash(str){let h=0;for(const c of String(str))h=(h*33+c.charCodeAt(0))>>>0;return h}
function pmrV2Pct(domain,label,min=35,max=88){return min+(pmrV2Hash(domain+"|"+label)%(max-min+1))}
function pmrV2Date(domain,i){
  const starts=["2025-10-06","2025-12-01","2026-01-12","2026-03-02","2026-04-20","2026-06-15","2026-08-03"];
  return starts[i]||"2026-01-01";
}
function pmrV2End(start,weeks){
  const d=new Date(start+"T00:00:00");d.setDate(d.getDate()+weeks*7);return d.toISOString().slice(0,10);
}

Object.entries(window.PMR_DEMO_DATA||{}).forEach(([domain,d])=>{
  const v2=window.PMR_V2_CONFIG[domain];
  const statuses=["Completed","Completed","Completed","Completed","Completed","In field","Analysis"];
  const progress=[100,100,100,100,100,68,84];
  const owners=["Qualitative Research","Patient Insights","UX / Workflow","KOL Research","Quantitative Research","Survey Analytics","Advanced Analytics"];
  d.projects=d.projects.map((p,i)=>{
    const start=pmrV2Date(domain,i),weeks=[8,7,7,8,9,10,9][i];
    return {...p,status:statuses[i],progress:progress[i],start,end:pmrV2End(start,weeks),owner:owners[i],
      stage:statuses[i]==="Completed"?"Final report delivered":statuses[i]==="In field"?"Fieldwork / quota fill":"Analysis / synthesis",
      nextMilestone:statuses[i]==="Completed"?"Insights available in hub":statuses[i]==="In field"?"Close remaining quotas":"Executive readout",
      health:statuses[i]==="Completed"?"On track":(i===5?"Watch":"On track"),
      deliverable:statuses[i]==="Completed"?"Final report + dashboard":statuses[i]==="In field"?"Interim fieldwork dashboard":"Draft insight report"
    };
  });

  d.v2={
    headline:v2.vocHeadline,
    preferenceLabels:v2.preferenceLabels,
    patternLabels:v2.patternLabels,
    riskLabels:v2.riskLabels,
    expertFeed:v2.expertFeed.map((x,i)=>({id:"EI"+(i+1),expert:x[0],insight:x[1],theme:x[2],priority:x[3],project:i%2?"kol-future":"workflow",region:d.config.regions[i%d.config.regions.length]})),
    quantNarratives:v2.quantNarratives,
    voc:{
      customerGoals:d.config.drivers.map((x,i)=>({label:x,mentions:pmrV2Pct(domain,x+"goal",46,86),note:[
        "Frequently raised as a primary reason for evaluating a new solution.",
        "Strongly linked to satisfaction with the current workflow.",
        "Often mentioned when respondents described an ideal future state."
      ][i%3]})),
      painPoints:d.config.barriers.map((x,i)=>({label:x,mentions:pmrV2Pct(domain,x+"pain",34,78),impact:["High","High","Medium","Medium","High","Medium"][i%6],
        consequence:["Delays decisions or creates repeat work.","Increases user effort and reduces confidence.","Creates avoidable handoffs or workarounds."][i%3]})),
      informationNeeds:d.config.themes.slice(0,6).map((x,i)=>({label:x,share:pmrV2Pct(domain,x+"info",38,81)})),
      channels:["Peer / KOL recommendation","Clinical evidence / publication","Company representative","Professional society / conference","Digital education","Patient / user community"].map((x,i)=>({label:x,share:pmrV2Pct(domain,x+"channel",28,74)})),
      support:["Hands-on onboarding","Clinical / technical education","Implementation support","Digital self-service","Peer case examples","Access / reimbursement support"].map((x,i)=>({label:x,share:pmrV2Pct(domain,x+"support",32,79)})),
      triggers:["Clear comparative evidence","Peer adoption","Lower workflow burden","Coverage / budget availability","Better digital integration","Patient / end-user request"].map((x,i)=>({label:x,share:pmrV2Pct(domain,x+"trigger",31,77)})),
      currentPatterns:v2.patternLabels.map((x,i)=>({label:x,detail:[
        "Observed consistently across multiple respondent types and settings.",
        "Most visible among experienced users comparing current and future workflows.",
        "Creates a clear segmentation opportunity for messaging and support."
      ][i%3]})),
      preferences:d.config.personas.map((persona,i)=>({
        persona,
        first:v2.preferenceLabels[i%v2.preferenceLabels.length],
        second:v2.preferenceLabels[(i+2)%v2.preferenceLabels.length],
        avoid:d.config.barriers[i%d.config.barriers.length],
        evidence:i%2?"Peer experience + workflow proof":"Clinical evidence + implementation proof"
      })),
      readiness:d.config.personas.map((persona,i)=>({
        persona,
        ready:pmrV2Pct(domain,persona+"ready",44,88),
        friction:pmrV2Pct(domain,persona+"friction",26,76)
      }))
    },
    risks:v2.riskLabels.map((label,i)=>({
      label,likelihood:["High","Medium","Medium","High","Low"][i%5],impact:["High","High","Medium","Medium","High"][i%5],
      signal:["Raised repeatedly in interviews","Visible in workflow observation","Emerges in subgroup survey cuts","Requires monitoring during implementation","Early-stage watchpoint"][i%5],
      mitigation:[
        "Address through workflow-specific evidence and implementation planning.",
        "Build targeted education and decision support before scale-up.",
        "Pilot with priority personas and measure adoption friction.",
        "Clarify ownership, process and success metrics before launch.",
        "Track with a focused follow-up research question."
      ][i%5]
    })),
    roadmap:[
      {phase:"Now",horizon:"0-3 months",title:"Close critical evidence gaps",actions:["Validate highest-priority unmet needs","Refine persona-specific value story","Confirm workflow requirements"]},
      {phase:"Next",horizon:"3-6 months",title:"Prototype and validate",actions:["Test service / support model","Pilot high-friction workflow changes","Run targeted message / evidence validation"]},
      {phase:"Scale",horizon:"6-12 months",title:"Prepare broader adoption",actions:["Build implementation toolkit","Align channel and training model","Track readiness by account / persona"]},
      {phase:"Optimize",horizon:"12+ months",title:"Measure and improve",actions:["Monitor experience KPIs","Refresh segmentation and barriers","Feed learnings into roadmap"]}
    ]
  };
});