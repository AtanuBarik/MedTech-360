function renderSegmentOverview(type){
  const list=type==='ci'?CI_SUBSEGMENTS:PMR_SUBSEGMENTS;
  const name=type==='ci'?'Competitive Intelligence':'Primary Market Research';
  const d=DOMAIN_DATA[currentDomain];
  const ev=(window.DOMAIN_EVIDENCE&&DOMAIN_EVIDENCE[currentDomain])||{};
  $('breadcrumbSmall').textContent='MedTech 360 / '+name;
  $('breadcrumbTitle').textContent=currentDomain+' — '+name;
  $('pageContent').innerHTML=
    '<div class="page-head"><div class="title-wrap"><div class="breadcrumb"><button onclick="navigate(\'executive\')">Executive Hub</button> / '+name+'</div>'+
    '<h1>'+name+'</h1><p>'+(type==='ci'?'A connected capability stack for continuous market sensing, competitor monitoring and strategic interpretation.':'A modular research stack to validate market hypotheses directly with customers, clinicians, buyers, patients and experts.')+
    ' Click any sub-segment to open its dedicated page for <b>'+esc(currentDomain)+'</b>.</p></div></div>'+
    '<div class="research-note"><strong>Domain context:</strong> '+esc(d.landscape)+' '+esc(ev.evidenceNote||'')+'</div>'+
    '<section class="section"><div class="capability-grid">'+list.map(x=>'<button class="cap-card" onclick="navigate(\''+type+'\',\''+x.id+'\')"><div class="cap-icon">'+x.icon+'</div><h3>'+esc(x.title)+'</h3><p>'+esc(x.overview)+'</p><span class="go">Open dedicated page →</span></button>').join('')+'</div></section>';
}

function scoreFrom(id,offset){let s=0;for(const c of id+currentDomain)s=(s+c.charCodeAt(0))%31;return Math.min(96,58+s+offset)}
function renderBars(labels,id){return labels.map((l,i)=>{const v=scoreFrom(id,i*4);return '<div class="metric-bar"><span>'+esc(l)+'</span><div class="bar"><i style="width:'+v+'%"></i></div><b>'+v+'</b></div>'}).join('')}

function researchContext(d){
  const ev=(window.DOMAIN_EVIDENCE&&DOMAIN_EVIDENCE[currentDomain])||{};
  const forces=(ev.forces&&ev.forces.length)?ev.forces:d.dynamics.map(x=>x.body);
  return '<div class="insight-strip">'+forces.slice(0,3).map((x,i)=>'<div class="insight-box"><strong>'+esc((d.dynamics[i]&&d.dynamics[i].title)||('Market force '+(i+1)))+'</strong><span>'+esc(x)+'</span></div>').join('')+'</div>';
}

function renderArchitecture(type,id){
  const bp=window.MODULE_BLUEPRINTS&&MODULE_BLUEPRINTS[type]&&MODULE_BLUEPRINTS[type][id];
  if(!bp)return '';
  return '<div class="card"><div class="card-title"><h3>Research & data architecture</h3><span class="pill">Module-specific</span></div>'+
    '<p class="module-objective">'+esc(bp.objective)+'</p>'+
    '<div class="table-scroll"><table class="data-table"><thead><tr><th>Data block</th><th>Datapoints to capture</th><th>Best representation</th></tr></thead><tbody>'+
    bp.dataRows.map(r=>'<tr><td><strong>'+esc(r[0])+'</strong></td><td>'+esc(r[1])+'</td><td><span class="visual-tag">'+esc(r[2])+'</span></td></tr>').join('')+
    '</tbody></table></div><div class="mini-tags module-lenses">'+bp.lenses.map(x=>'<span>'+esc(x)+'</span>').join('')+'</div></div>';
}

function renderEvidencePanel(d){
  const ev=(window.DOMAIN_EVIDENCE&&DOMAIN_EVIDENCE[currentDomain])||{};
  const facts=(ev.facts&&ev.facts.length)?ev.facts:d.metrics;
  return '<div class="card"><div class="card-title"><h3>Sourced domain datapoints</h3><small>'+esc(ev.updated||'Current baseline')+'</small></div>'+
    '<div class="evidence-grid">'+facts.map(m=>'<div class="evidence-item"><b>'+esc(m.value)+'</b><strong>'+esc(m.label)+'</strong><span>'+esc(m.note)+'</span>'+(m.source!==undefined?'<em>S'+(m.source+1)+'</em>':'')+'</div>').join('')+'</div>'+
    '<div class="research-note"><strong>Use:</strong> these are domain-level anchors. Pair them with module-specific data in the table beside this panel; do not interpret illustrative indices as factual market share.</div></div>';
}

function renderModuleSpotlight(type,id,d){
  const ev=(window.DOMAIN_EVIDENCE&&DOMAIN_EVIDENCE[currentDomain])||{};
  if(type==='ci'&&id==='company-profiles'){
    return '<div class="card"><div class="card-title"><h3>Representative competitor profile view</h3><small>Not a market-share ranking</small></div><table class="player-table"><thead><tr><th>Company</th><th>Current focus</th><th>Illustrative watch intensity</th></tr></thead><tbody>'+
      d.players.map(p=>'<tr><td><strong>'+esc(p.name)+'</strong></td><td><p>'+esc(p.focus)+'</p></td><td><div class="signal-strength"><i style="width:'+p.signal+'%"></i></div></td></tr>').join('')+
      '</tbody></table></div>';
  }
  if(type==='ci'&&id==='market-landscape'){
    return '<div class="card"><div class="card-title"><h3>Category map</h3><small>Domain structure</small></div><div class="stack-list">'+(ev.segments||d.opportunities).map((x,i)=>'<div><span>0'+(i+1)+'</span><strong>'+esc(x)+'</strong></div>').join('')+'</div></div>';
  }
  if(type==='ci'&&['news-alerts','regulatory-clinical','pipeline-innovation'].includes(id)){
    return '<div class="card"><div class="card-title"><h3>Current signal queue</h3><small>Research context</small></div><div class="signal-list">'+d.dynamics.slice(0,4).map((x,i)=>'<div class="question-item"><div class="qnum">'+(i+1)+'</div><span><b>'+esc(x.title)+':</b> '+esc(x.body)+'</span></div>').join('')+'</div></div>';
  }
  if(type==='ci'){
    return '<div class="card"><div class="card-title"><h3>Competitor relevance</h3><small>Illustrative indexed view</small></div>'+renderBars(d.players.slice(0,4).map(p=>p.name),id)+'<div class="research-note"><strong>Demo index:</strong> values show how a prioritization visualization could work; they are not market-share or performance scores.</div></div>';
  }
  if(type==='pmr'&&['voc','workflow-unmet','journey-ux','adoption-readiness'].includes(id)){
    return '<div class="card"><div class="card-title"><h3>Priority stakeholder lens</h3><small>Typical PMR sample framework</small></div><div class="persona-grid">'+
      '<div class="persona"><strong>Clinical users</strong><span>Physicians, surgeons, nurses, laboratorians or technicians depending on domain.</span></div>'+
      '<div class="persona"><strong>Economic buyers</strong><span>Administrators, procurement, value analysis, lab leadership or service-line leaders.</span></div>'+
      '<div class="persona"><strong>Influencers</strong><span>KOLs, educators, pathway owners and digital / operational stakeholders.</span></div>'+
      '<div class="persona"><strong>End users / patients</strong><span>Included where the decision journey or product experience directly involves them.</span></div></div></div>';
  }
  return '<div class="card"><div class="card-title"><h3>Example evidence dimensions</h3><small>Illustrative index</small></div>'+renderBars(['Need intensity','Current friction','Adoption readiness','Value clarity'],id)+'<div class="research-note"><strong>Demo index:</strong> replace with survey, interview or model outputs once a study is connected.</div></div>';
}

function renderSubsegment(type,id){
  const list=type==='ci'?CI_SUBSEGMENTS:PMR_SUBSEGMENTS;
  const item=list.find(x=>x.id===id);
  if(!item){navigate(type);return}
  const d=DOMAIN_DATA[currentDomain];
  const ev=(window.DOMAIN_EVIDENCE&&DOMAIN_EVIDENCE[currentDomain])||{};
  const name=type==='ci'?'Competitive Intelligence':'Primary Market Research';
  const bp=window.MODULE_BLUEPRINTS&&MODULE_BLUEPRINTS[type]&&MODULE_BLUEPRINTS[type][id];
  $('breadcrumbSmall').textContent=name+' / '+item.title;
  $('breadcrumbTitle').textContent=currentDomain+' — '+item.title;
  $('pageContent').innerHTML=
    '<div class="page-head"><div class="title-wrap"><div class="breadcrumb"><button onclick="navigate(\'executive\')">Executive Hub</button> / <button onclick="openSegment(\''+type+'\')">'+name+'</button> / '+esc(item.title)+'</div>'+
    '<h1>'+esc(item.title)+'</h1><p>'+esc(item.overview)+' This dedicated page applies the capability to <b>'+esc(currentDomain)+'</b> and combines sourced domain evidence, module-specific data architecture, analytical questions and recommended visual outputs.</p></div>'+
    '<div class="page-head-actions"><button onclick="showToast(\'View saved (prototype)\')">Save view</button><button class="primary" onclick="showToast(\''+(currentRole==='Viewer'?'Snapshot export prepared':'New workstream opened')+' (prototype)\')">'+(currentRole==='Viewer'?'Export':'Create workstream')+'</button></div></div>'+
    '<section class="section"><div class="section-head"><div><h2>Domain research context</h2><p>Current market forces that should shape this workstream.</p></div></div>'+researchContext(d)+'</section>'+
    '<section class="section"><div class="grid-2">'+renderArchitecture(type,id)+renderEvidencePanel(d)+'</div></section>'+
    '<section class="section"><div class="grid-2">'+renderModuleSpotlight(type,id,d)+
      '<div class="card"><div class="card-title"><h3>Current market signals</h3><small>Domain context</small></div><div class="signal-list">'+d.dynamics.slice(0,4).map((x,i)=>'<div class="question-item"><div class="qnum">'+(i+1)+'</div><span><b>'+esc(x.title)+':</b> '+esc(x.body)+'</span></div>').join('')+'</div></div></div></section>'+
    '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><h3>Business questions addressed</h3><span class="pill">'+item.questions.length+' core questions</span></div><div class="question-list">'+item.questions.map((q,i)=>'<div class="question-item"><div class="qnum">'+(i+1)+'</div><span>'+esc(q)+'</span></div>').join('')+'</div></div>'+
      '<div class="card"><div class="card-title"><h3>Typical outputs</h3><span class="pill pink">Decision-ready</span></div><div class="deliverable-list">'+item.deliverables.map((q,i)=>'<div class="deliverable-item"><div class="qnum">'+(i+1)+'</div><span>'+esc(q)+'</span></div>').join('')+'</div></div></div></section>'+
    '<section class="section"><div class="grid-2"><div class="card chart-card"><div class="card-title"><h3>Workstream opportunity index</h3><small>Illustrative • 0–100</small></div>'+lineChart(d.trend.map((v,i)=>Math.min(98,v+(scoreFrom(id,i)%7)-3)),d.trendLabels)+'<div class="research-note"><strong>Visualization note:</strong> indexed chart values are illustrative for dashboard demonstration and should be replaced by client-approved research or analytics in production.</div></div>'+
      '<div class="card"><div class="card-title"><h3>Recommended analytical cuts</h3><small>Use as filters</small></div><div class="mini-tags">'+((bp&&bp.lenses)||[]).concat(d.opportunities.slice(0,4),['Geography','Care setting','Time period']).map(x=>'<span>'+esc(x)+'</span>').join('')+'</div><p style="margin-top:14px">These filters let users compare the same workstream across priority players, personas, settings and time windows without changing the underlying page architecture.</p></div></div></section>'+
    '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><h3>Source basis</h3><small>Domain-level authoritative sources</small></div>'+sourcesHtml(d)+'</div>'+
      '<div class="card"><div class="card-title"><h3>Evidence governance</h3><small>Prototype rules</small></div><div class="deliverable-list">'+
      '<div class="deliverable-item"><div class="qnum">1</div><span>Keep sourced factual metrics separate from illustrative indices and demo scoring.</span></div>'+
      '<div class="deliverable-item"><div class="qnum">2</div><span>Store publication date, source URL, geography and population for every external datapoint.</span></div>'+
      '<div class="deliverable-item"><div class="qnum">3</div><span>For PMR, preserve respondent base, question wording, segment definition and statistical caveats.</span></div>'+
      '<div class="deliverable-item"><div class="qnum">4</div><span>For CI, distinguish observed events from analyst interpretation and recommended action.</span></div>'+
      '</div></div></div></section>';
}

function runGlobalSearch(){
  const q=$('globalSearch').value.trim().toLowerCase();if(!q)return;
  const all=[...CI_SUBSEGMENTS.map(x=>({...x,type:'ci'})),...PMR_SUBSEGMENTS.map(x=>({...x,type:'pmr'}))];
  const hits=all.filter(x=>(x.title+' '+x.overview+' '+x.questions.join(' ')).toLowerCase().includes(q));
  $('breadcrumbSmall').textContent='MedTech 360 / Search';$('breadcrumbTitle').textContent='Results for “'+q+'”';
  $('pageContent').innerHTML='<div class="page-head"><div class="title-wrap"><div class="kicker">Global search</div><h1>Search results</h1><p>'+hits.length+' capability pages matched “'+esc(q)+'” in the current platform taxonomy.</p></div></div>'+
    (hits.length?'<div class="capability-grid">'+hits.map(x=>'<button class="cap-card" onclick="navigate(\''+x.type+'\',\''+x.id+'\')"><div class="cap-icon">'+x.icon+'</div><h3>'+esc(x.title)+'</h3><p>'+esc(x.overview)+'</p><span class="go">Open page →</span></button>').join('')+'</div>':'<div class="empty-search">No capability page matched this search. Try terms such as pricing, workflow, competitor, regulatory, customer, concept, segmentation, social or adoption.</div>');
}

function handleHash(){const h=location.hash.replace('#','');if(!h)return;const parts=h.split('/');const t=parts[0],id=parts[1];if(['executive','ci','pmr'].includes(t)){currentPage={type:t,id:id};setActiveNav(t,id);renderCurrentPage()}}
window.addEventListener('hashchange',handleHash);
(function init(){renderDomainSelectors();if(!$('appScreen').classList.contains('hidden'))initializeApp()})();