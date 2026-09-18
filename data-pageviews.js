window.MODULE_BLUEPRINTS = {
  ci: {
    "market-landscape": {
      objective:"Translate category structure and external evidence into a decision-ready market map.",
      dataRows:[
        ["Category structure","Products / services, subcategories, indications, care settings, geographies","Market tree / sunburst"],
        ["Market scale","Public market estimates, procedure or testing volumes, patient burden, growth proxies","KPI cards + indexed trend"],
        ["Demand drivers","Epidemiology, workflow pressure, guideline shifts, reimbursement, technology","Driver / barrier matrix"],
        ["White space","Unmet needs, underserved segments, weak competitor coverage","Opportunity heatmap"]
      ],
      lenses:["Market size & growth","Segment attractiveness","Care setting","Geography","Customer type","Technology maturity"]
    },
    "company-profiles": {
      objective:"Build a comparable 360° view of priority competitors and how their strategic posture is changing.",
      dataRows:[
        ["Corporate footprint","Business units, geographies, leadership, facilities, channels","Profile card + footprint map"],
        ["Portfolio","Products, indications, platform breadth, digital capabilities","Portfolio matrix"],
        ["Strategy","Stated priorities, investments, partnerships, launches, expansion","Strategic-pillar comparison"],
        ["Evidence & risk","Trials, approvals, recalls, quality, reimbursement exposure","Milestone / risk timeline"]
      ],
      lenses:["Company","Business unit","Geography","Product family","Strategic theme","Time"]
    },
    "news-alerts": {
      objective:"Convert external developments into prioritized, tagged signals rather than an undifferentiated news feed.",
      dataRows:[
        ["Signal metadata","Date, company, source, geography, event type","Curated alert feed"],
        ["Importance","Impact, novelty, confidence, urgency","Priority score"],
        ["Context","What changed vs. baseline, related prior signals","Signal timeline"],
        ["Action","Owner, follow-up, implication, next review date","Decision-trigger log"]
      ],
      lenses:["Competitor","Signal type","Priority","Geography","Product","Time period"]
    },
    "strategy-positioning": {
      objective:"Decode where competitors are placing bets and how they frame value to different audiences.",
      dataRows:[
        ["Strategic pillars","Growth themes, capability bets, portfolio focus","Pillar comparison"],
        ["Positioning","Target audience, value proposition, proof points","Positioning map"],
        ["Messaging","Claims, narrative themes, evidence cited","Message matrix"],
        ["Whitespace","Unoccupied claims, unmet needs, weak proof points","Differentiation heatmap"]
      ],
      lenses:["Audience","Competitor","Theme","Channel","Evidence strength","Time"]
    },
    "product-portfolio": {
      objective:"Benchmark products and platforms at the feature, workflow and evidence level.",
      dataRows:[
        ["Portfolio breadth","Product families, indications, settings, lifecycle stage","Portfolio matrix"],
        ["Features","Technical features, usability, connectivity, workflow fit","Feature heatmap"],
        ["Evidence","Clinical claims, trials, real-world evidence, publications","Evidence scorecard"],
        ["Lifecycle","Launches, upgrades, discontinuations, geographic availability","Lifecycle timeline"]
      ],
      lenses:["Product family","Feature","Indication","Setting","Evidence type","Geography"]
    },
    "pipeline-innovation": {
      objective:"Identify emerging technologies and pipeline moves early enough to inform strategic response.",
      dataRows:[
        ["Innovation themes","Modality, technology, use case, clinical problem","Innovation radar"],
        ["Development stage","Research, prototype, trial, submission, launch","Maturity map"],
        ["Ecosystem","Partner, university, startup, acquisition, licensing","Network view"],
        ["Potential impact","Differentiation, workflow, cost, adoption barrier","Disruption scenarios"]
      ],
      lenses:["Technology","Stage","Company","Use case","Partner type","Time horizon"]
    },
    "regulatory-clinical": {
      objective:"Connect regulatory and clinical evidence milestones to competitive readiness and risk.",
      dataRows:[
        ["Regulatory","Submission, clearance / approval, indication, geography","Milestone calendar"],
        ["Clinical","Trial phase, population, endpoint, status, results","Trial tracker"],
        ["Evidence","Publication, guideline, real-world study","Evidence map"],
        ["Safety","Recall, warning, field action, adverse-event signal","Risk timeline"]
      ],
      lenses:["Regulator","Company","Product","Indication","Trial status","Risk level"]
    },
    "pricing-access": {
      objective:"Show how reimbursement, economics and access conditions shape adoption.",
      dataRows:[
        ["Coverage","Payer policy, eligibility, authorization, geography","Coverage matrix"],
        ["Coding","Relevant codes, payment route, setting","Coding map"],
        ["Pricing","Public list / ASP / tender data where available","Pricing architecture"],
        ["Value evidence","Budget impact, outcomes, utilization, ROI claims","Economic evidence map"]
      ],
      lenses:["Payer","Setting","Geography","Product","Code","Evidence type"]
    },
    "ma-partnerships": {
      objective:"Interpret deals as signals of capability gaps, strategic priorities and ecosystem formation.",
      dataRows:[
        ["Transaction","Buyer / partner, target, date, value if public","Deal tracker"],
        ["Capability acquired","Technology, channel, geography, talent, data","Capability map"],
        ["Strategic rationale","Adjacency, scale, vertical integration, defense","Rationale matrix"],
        ["Post-deal signals","Integration, launch, distribution, portfolio change","Integration timeline"]
      ],
      lenses:["Deal type","Buyer","Target","Capability","Geography","Year"]
    },
    "social-digital": {
      objective:"Use digital behavior to understand visibility, stakeholder concerns and campaign effectiveness.",
      dataRows:[
        ["Share of voice","Mentions, reach, channel, competitor","SOV trend"],
        ["Themes","Topic clusters, unmet needs, questions, complaints","Theme map"],
        ["Sentiment","Positive / neutral / negative with human review","Sentiment trend"],
        ["Engagement","Campaigns, KOL activity, event spikes","Engagement timeline"]
      ],
      lenses:["Channel","Audience","Topic","Competitor","Campaign","Time"]
    },
    "commercial-gtm": {
      objective:"Compare how competitors organize customer access, selling, service and expansion.",
      dataRows:[
        ["Channel model","Direct, distributor, digital, hybrid","Channel map"],
        ["Targeting","Account types, specialties, sites of care","Target-account matrix"],
        ["Commercial support","Training, service, implementation, education","Service benchmark"],
        ["Expansion","New geographies, sales hiring, distribution changes","GTM signal timeline"]
      ],
      lenses:["Geography","Channel","Account type","Sales motion","Service model","Product"]
    },
    "conference-kol": {
      objective:"Capture emerging clinical narratives, launches and influential voices around major meetings.",
      dataRows:[
        ["Program","Congress, session, topic, abstract","Conference map"],
        ["KOL","Speaker, institution, topic, stance","KOL network"],
        ["Evidence","Endpoints, results, comparative claims","Evidence tracker"],
        ["Messaging","Booth themes, product emphasis, claims","Message comparison"]
      ],
      lenses:["Conference","KOL","Company","Topic","Evidence type","Session"]
    },
    "ip-rd": {
      objective:"Use patents, publications and collaborations as early indicators of technical direction.",
      dataRows:[
        ["Patents","Assignee, inventor, family, jurisdiction, claims theme","Patent radar"],
        ["Publications","Author, institution, journal, topic","Publication trend"],
        ["Collaboration","Academic / startup / strategic partner","Network map"],
        ["R&D cluster","Technology theme, density, momentum","Cluster heatmap"]
      ],
      lenses:["Assignee","Technology","Inventor","Institution","Jurisdiction","Year"]
    }
  },
  pmr: {
    "voc": {
      objective:"Prioritize customer needs, pain points and value drivers with evidence by persona and setting.",
      dataRows:[
        ["Need state","Need, importance, current satisfaction, unmet intensity","Need-state matrix"],
        ["Pain point","Workflow step, severity, frequency, consequence","Pain-point heatmap"],
        ["Decision driver","Clinical, operational, economic, service, digital","Driver ranking"],
        ["Verbatim evidence","Quote, persona, context, theme","Evidence bank"]
      ],
      lenses:["Persona","Care setting","Geography","Experience level","Customer type","Product use"]
    },
    "expert-interviews": {
      objective:"Turn qualitative interviews into structured themes, evidence and areas of consensus or disagreement.",
      dataRows:[
        ["Theme","Theme, subtheme, frequency, salience","Theme map"],
        ["Perspective","Expert role, organization type, experience","Expert matrix"],
        ["Evidence","Verbatim, context, supporting examples","Quote bank"],
        ["Divergence","Consensus, disagreement, outlier, hypothesis","Agreement heatmap"]
      ],
      lenses:["Expert type","Geography","Organization","Theme","Experience","Interview wave"]
    },
    "concept-testing": {
      objective:"Determine what to keep, change or remove before product or service investment advances.",
      dataRows:[
        ["Appeal","Overall appeal, relevance, differentiation","Concept scorecard"],
        ["Comprehension","Clarity, confusion points, interpretation","Friction map"],
        ["Value","Benefits, proof points, trade-offs","Value-driver matrix"],
        ["Adoption intent","Likelihood, conditions, barriers","Adoption funnel"]
      ],
      lenses:["Concept","Persona","Setting","Current solution","Adoption stage","Geography"]
    },
    "quant-surveys": {
      objective:"Translate survey responses into statistically robust differences, drivers and segments.",
      dataRows:[
        ["Sample","N, quotas, weights, completion, quality","Fieldwork dashboard"],
        ["Responses","Means, distributions, top-box, ranks","KPI dashboard"],
        ["Differences","Cross-tabs, significance, subgroup deltas","Comparison heatmap"],
        ["Drivers","Correlation / regression / derived indices","Driver model"]
      ],
      lenses:["Persona","Geography","Setting","Company / product used","Segment","Wave"]
    },
    "conjoint": {
      objective:"Quantify preference trade-offs and simulate how changes in product design affect choice.",
      dataRows:[
        ["Utilities","Part-worth utilities by attribute level","Utility chart"],
        ["Importance","Relative attribute importance","Importance bars"],
        ["Scenarios","Product bundles and simulated shares","Scenario simulator"],
        ["Heterogeneity","Utilities / preference by segment","Segment comparison"]
      ],
      lenses:["Attribute","Level","Persona","Segment","Scenario","Price"]
    },
    "pricing-wtp": {
      objective:"Identify acceptable price architecture and the value evidence required to support it.",
      dataRows:[
        ["Price response","Acceptability, purchase likelihood, threshold","Price curve"],
        ["WTP","Median / range / segment differences","WTP distribution"],
        ["Value driver","Clinical, operational, economic benefit","Value ladder"],
        ["Packaging","Base / premium features and service bundles","Package simulator"]
      ],
      lenses:["Persona","Setting","Geography","Package","Use case","Economic buyer"]
    },
    "segmentation-personas": {
      objective:"Create actionable groups that differ in needs, behaviors and engagement strategy.",
      dataRows:[
        ["Segment basis","Needs, attitudes, behavior, adoption","Cluster profile"],
        ["Sizing","Relative segment size and confidence","Segment size chart"],
        ["Profile","Role, setting, needs, barriers, behaviors","Persona card"],
        ["Targeting","Rules, messages, channels, offers","Activation matrix"]
      ],
      lenses:["Segment","Persona","Geography","Setting","Adoption stage","Value tier"]
    },
    "journey-ux": {
      objective:"Locate friction and moments of truth across the end-to-end customer or user journey.",
      dataRows:[
        ["Journey step","Trigger, action, touchpoint, handoff","Journey map"],
        ["Friction","Severity, frequency, root cause","Friction heatmap"],
        ["Emotion / effort","Ease, confidence, satisfaction","Experience curve"],
        ["Opportunity","Fix, owner, impact, feasibility","Roadmap"]
      ],
      lenses:["Persona","Journey stage","Channel","Setting","Device / service","Severity"]
    },
    "message-claims": {
      objective:"Optimize the hierarchy of messages and proof points for each target audience.",
      dataRows:[
        ["Message","Relevance, clarity, differentiation","Message scorecard"],
        ["Claim","Credibility, evidence expectation, concern","Claim matrix"],
        ["Proof point","Evidence source, persuasiveness","Proof-point hierarchy"],
        ["Audience fit","Persona-specific resonance","Audience heatmap"]
      ],
      lenses:["Message","Claim","Persona","Channel","Evidence type","Geography"]
    },
    "adoption-readiness": {
      objective:"Measure readiness and identify interventions that move stakeholders toward adoption.",
      dataRows:[
        ["Readiness","Awareness, interest, trial, adoption","Readiness funnel"],
        ["Barrier","Clinical, workflow, economic, technical","Barrier heatmap"],
        ["Trigger","Evidence, peer use, reimbursement, support","Trigger ranking"],
        ["Implementation","Training, integration, governance, resources","Requirement matrix"]
      ],
      lenses:["Persona","Setting","Adoption stage","Barrier","Geography","Current solution"]
    },
    "satisfaction-loyalty": {
      objective:"Track experience drivers and identify which accounts or users are at risk.",
      dataRows:[
        ["Satisfaction","Overall and attribute-level scores","Scorecard"],
        ["Advocacy","Likelihood to recommend / preference","Advocacy trend"],
        ["Drivers","What explains satisfaction / dissatisfaction","Driver model"],
        ["Risk","Churn signals, service failures, competitor exposure","Risk matrix"]
      ],
      lenses:["Customer type","Product","Service","Geography","Tenure","Wave"]
    },
    "workflow-unmet": {
      objective:"Expose burden, workarounds and unmet needs in clinical and operational workflows.",
      dataRows:[
        ["Workflow","Steps, roles, systems, handoffs","Workflow map"],
        ["Burden","Time, touches, delays, rework","Burden bars"],
        ["Workaround","Cause, frequency, risk, consequence","Workaround matrix"],
        ["Unmet need","Importance, current solution gap, desired state","Opportunity matrix"]
      ],
      lenses:["Workflow step","Role","Setting","System","Severity","Frequency"]
    }
  }
};