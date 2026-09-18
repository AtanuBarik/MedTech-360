let activeExecutiveTab='overview';

const COMPANY_LOGO_DOMAINS={
  "Thermo Fisher Scientific":"thermofisher.com",
  "Roche Diagnostics":"roche.com",
  "Siemens Healthineers":"siemens-healthineers.com",
  "Werfen":"werfen.com",
  "EUROIMMUN / Revvity":"euroimmun.com",
  "Abbott":"abbott.com",
  "Dexcom":"dexcom.com",
  "Medtronic":"medtronic.com",
  "Insulet":"insulet.com",
  "Roche Diabetes Care":"accu-chek.com",
  "Alcon":"alcon.com",
  "Johnson & Johnson Vision":"jnjvisionpro.com",
  "Bausch + Lomb":"bausch.com",
  "ZEISS Medical Technology":"zeiss.com",
  "EssilorLuxottica":"essilorluxottica.com",
  "Stryker":"stryker.com",
  "Zimmer Biomet":"zimmerbiomet.com",
  "J&J MedTech / DePuy Synthes":"jnjmedtech.com",
  "Smith+Nephew":"smith-nephew.com",
  "Arthrex":"arthrex.com",
  "Mölnlycke":"molnlycke.com",
  "Convatec":"convatecgroup.com",
  "Solventum / 3M":"solventum.com",
  "Coloplast":"coloplast.com",
  "Quest Diagnostics":"questdiagnostics.com",
  "Labcorp":"labcorp.com",
  "Sonic Healthcare":"sonichealthcare.com",
  "Eurofins Scientific":"eurofins.com"
};

function executiveData(){return (window.EXECUTIVE_HUB_DATA&&EXECUTIVE_HUB_DATA[currentDomain])||null}
function executiveStrategy(){return (window.EXECUTIVE_STRATEGY_DATA&&EXECUTIVE_STRATEGY_DATA[currentDomain])||{}}

function showExecutiveTab(tab){
  activeExecutiveTab=tab;
  document.querySelectorAll('.exec-tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  document.querySelectorAll('.exec-tab-panel').forEach(p=>p.classList.toggle('active',p.dataset.tab===tab));
  const target=document.querySelector('.exec-tabs');
  if(target)target.scrollIntoView({behavior:'smooth',block:'start'});
}

function executiveTabs(){
  const tabs=[
    ['overview','Overview'],
    ['market','Market & Regions'],
    ['competition','Competition'],
    ['ecosystem','Ecosystem & Drivers'],
    ['strategy','Strategy & Opportunities']
  ];
  return '<div class="exec-tabs">'+tabs.map(t=>'<button class="exec-tab '+(activeExecutiveTab===t[0]?'active':'')+'" data-tab="'+t[0]+'" onclick="showExecutiveTab(\''+t[0]+'\')">'+t[1]+'</button>').join('')+'</div>';
}

function companyDomain(name){
  if(COMPANY_LOGO_DOMAINS[name])return COMPANY_LOGO_DOMAINS[name];
  const key=Object.keys(COMPANY_LOGO_DOMAINS).find(k=>name.includes(k)||k.includes(name));
  return key?COMPANY_LOGO_DOMAINS[key]:null;
}
function companyLogo(name){
  const domain=companyDomain(name),initials=name.split(/\s|\//).filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase();
  if(!domain)return '<span class="company-fallback">'+esc(initials)+'</span>';
  return '<a class="company-logo" href="https://'+domain+'" target="_blank" rel="noopener" title="Open company website"><img src="https://www.google.com/s2/favicons?domain='+domain+'&sz=64" alt="" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'grid\'"/><span class="company-fallback" style="display:none">'+esc(initials)+'</span></a>';
}

function executiveGrowthChart(rows){
  const W=760,H=310,pL=58,pR=28,pT=36,pB=58;
  const vals=rows.map(r=>r.size),min=Math.min(...vals)*.94,max=Math.max(...vals)*1.05;
  const x=i=>pL+i*(W-pL-pR)/(rows.length-1);
  const y=v=>pT+(max-v)*(H-pT-pB)/(max-min);
  const pts=rows.map((r,i)=>[x(i),y(r.size)]);
  const poly=pts.map(p=>p.join(',')).join(' ');
  const area='M '+pts[0][0]+' '+(H-pB)+' L '+pts.map(p=>p.join(' ')).join(' L ')+' L '+pts[pts.length-1][0]+' '+(H-pB)+' Z';
  return '<div class="exec-chart-wrap"><svg class="exec-growth-svg" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Illustrative year-on-year market growth">'+
    '<defs><linearGradient id="execArea" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#e8005a" stop-opacity=".22"/><stop offset="100%" stop-color="#e8005a" stop-opacity=".02"/></linearGradient></defs>'+
    [0,1,2,3].map(i=>{const yy=pT+i*(H-pT-pB)/3;const val=(max-i*(max-min)/3).toFixed(1);return '<line x1="'+pL+'" y1="'+yy+'" x2="'+(W-pR)+'" y2="'+yy+'" stroke="#eee7ef"/><text x="'+(pL-11)+'" y="'+(yy+4)+'" text-anchor="end" font-size="12" fill="#897e8c">$'+val+'B</text>'}).join('')+
    '<path d="'+area+'" fill="url(#execArea)"/><polyline points="'+poly+'" fill="none" stroke="#4a2351" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>'+
    pts.map((pt,i)=>'<circle cx="'+pt[0]+'" cy="'+pt[1]+'" r="5.5" fill="#e8005a" stroke="#fff" stroke-width="3"/><text x="'+pt[0]+'" y="'+(pt[1]-13)+'" text-anchor="middle" font-size="12" font-weight="800" fill="#4a2351">$'+rows[i].size.toFixed(1)+'B</text><text x="'+pt[0]+'" y="'+(H-30)+'" text-anchor="middle" font-size="12" font-weight="700" fill="#675c6a">'+rows[i].year+'</text><text x="'+pt[0]+'" y="'+(H-11)+'" text-anchor="middle" font-size="11" fill="#9a8f9d">'+(rows[i].growth==null?'Base':rows[i].growth.toFixed(1)+'% YoY')+'</text>').join('')+
    '</svg></div>';
}

function executiveRegionalMap(regions){
  return '<div class="exec-map-shell"><div class="exec-map-canvas"><svg class="exec-world-map" viewBox="0 0 760 355" role="img" aria-label="Illustrative regional opportunity map">'+
    '<rect x="0" y="0" width="760" height="355" rx="18" fill="#f8fafc"/>'+
    '<g class="world-land">'+
      '<path d="M66 86 L115 50 L178 57 L225 91 L203 130 L166 145 L145 193 L96 174 L76 127 Z"/>'+
      '<path d="M184 194 L222 202 L244 239 L232 295 L205 333 L179 288 L168 239 Z"/>'+
      '<path d="M345 67 L400 61 L430 86 L416 120 L373 122 L346 104 Z"/>'+
      '<path d="M383 129 L436 125 L472 162 L461 223 L426 284 L391 258 L373 195 Z"/>'+
      '<path d="M440 70 L525 54 L635 72 L702 112 L670 161 L617 173 L583 221 L529 203 L494 160 L452 137 Z"/>'+
      '<path d="M602 246 L654 240 L687 268 L670 307 L621 311 L594 279 Z"/>'+
    '</g>'+
    regions.map((r,i)=>'<g class="map-pin"><circle cx="'+r.x*1.32+'" cy="'+r.y*1.28+'" r="20" fill="#fff" stroke="#e8005a" stroke-width="3"/><circle cx="'+r.x*1.32+'" cy="'+r.y*1.28+'" r="14" fill="#e8005a"/><text x="'+r.x*1.32+'" y="'+(r.y*1.28+4)+'" text-anchor="middle" font-size="12" font-weight="900" fill="#fff">'+(i+1)+'</text><title>'+esc(r.name)+': $'+r.size.toFixed(1)+'B · Opportunity index '+r.index+'</title></g>').join('')+
    '</svg></div><div class="exec-region-grid">'+regions.map((r,i)=>'<article><span class="region-num">'+(i+1)+'</span><div><strong>'+esc(r.name)+'</strong><b>$'+r.size.toFixed(1)+'B · Index '+r.index+'</b><p>'+esc(r.story)+'</p></div></article>').join('')+'</div></div>';
}

function executiveDonut(items){
  const colors=['#4a2351','#e8005a','#8c5a92','#f06b9d','#6e4b72','#cba7cd','#8f8791','#d9ccd9'];
  let a=0;
  const grad=items.map((it,i)=>{const s=a;a+=it.share;return colors[i%colors.length]+' '+s+'% '+a+'%'}).join(',');
  return '<div class="exec-donut-layout"><div class="exec-donut" style="background:conic-gradient('+grad+')"><div><b>100%</b><span>Illustrative segment split</span></div></div><div class="exec-legend">'+items.map((it,i)=>'<div><i style="background:'+colors[i%colors.length]+'"></i><span><strong>'+esc(it.name)+'</strong><small><b>'+it.share+'%</b> · '+esc(it.detail)+'</small></span></div>').join('')+'</div></div>';
}

function executiveShareBars(players){
  const max=Math.max(...players.map(p=>p.share));
  return '<div class="share-bars">'+players.map(p=>'<div class="share-row"><div class="share-label">'+companyLogo(p.name)+'<span>'+esc(p.name)+'</span><b>'+p.share+'%</b></div><div class="share-track"><i style="width:'+(p.share/max*100)+'%"></i></div></div>').join('')+'</div>';
}

function ecosystemIcon(step){
  const s=step.toLowerCase();
  if(s.includes('patient')||s.includes('symptom')||s.includes('risk'))return '◎';
  if(s.includes('sample')||s.includes('specimen'))return '◇';
  if(s.includes('imaging')||s.includes('diagnos'))return '◉';
  if(s.includes('analy')||s.includes('assay')||s.includes('platform'))return '▦';
  if(s.includes('cloud')||s.includes('lis')||s.includes('digital')||s.includes('app'))return '⌘';
  if(s.includes('report')||s.includes('review')||s.includes('interpret'))return '≡';
  if(s.includes('therapy')||s.includes('surgery')||s.includes('treatment'))return '+';
  return '→';
}
function executiveEcosystem(steps){
  return '<div class="ecosystem-grid">'+steps.map((s,i)=>'<div class="eco-step"><div class="eco-head"><span>'+String(i+1).padStart(2,'0')+'</span><i>'+ecosystemIcon(s)+'</i></div><strong>'+esc(s)+'</strong>'+(i<steps.length-1?'<em>Next step →</em>':'<em>Outcome / loop</em>')+'</div>').join('')+'</div>';
}

function strategicCards(items,type){
  const icon=type==='risk'?'!':type==='driver'?'↑':type==='trend'?'↗':type==='opportunity'?'★':'◆';
  return '<div class="strategic-list '+type+'">'+items.map(x=>'<article><div class="strategic-icon">'+icon+'</div><div><div class="strategic-head"><strong>'+esc(x.title)+'</strong><span class="importance '+x.importance.toLowerCase()+'">'+esc(x.importance)+' priority</span></div><p>'+esc(x.text)+'</p></div></article>').join('')+'</div>';
}

function growthInsightCards(items){
  return '<div class="growth-insights">'+items.map((x,i)=>'<article><span>0'+(i+1)+'</span><div><strong>'+esc(x.title)+'</strong><p>'+esc(x.text)+'</p></div></article>').join('')+'</div>';
}

function executivePlayerTable(players){
  return '<div class="table-scroll"><table class="data-table exec-player-table"><thead><tr><th>Player</th><th>Core offerings</th><th>Focused business area</th><th>Share*</th></tr></thead><tbody>'+players.map(p=>'<tr><td><div class="company-cell">'+companyLogo(p.name)+'<div><strong>'+esc(p.name)+'</strong>'+(companyDomain(p.name)?'<a href="https://'+companyDomain(p.name)+'" target="_blank" rel="noopener">Company site ↗</a>':'')+'</div></div></td><td>'+esc(p.offerings)+'</td><td>'+esc(p.focus)+'</td><td><span class="share-pill">'+p.share+'%</span></td></tr>').join('')+'</tbody></table></div>';
}

function executiveSourceLinks(ex,d){
  const ev=(window.DOMAIN_EVIDENCE&&DOMAIN_EVIDENCE[currentDomain])||{},en=enrichment();
  const all=[...(ex.sourceLinks||[]),...(ev.sources||[]),...(en.sources||[]),...(d.sources||[])];
  const seen=new Set();
  const unique=all.filter(s=>{const u=s.url||s.title||s.label;if(!u||seen.has(u))return false;seen.add(u);return true}).slice(0,12);
  return '<div class="source-list">'+unique.map(s=>'<div class="source-item"><a href="'+s.url+'" target="_blank" rel="noopener">'+esc(s.label||s.title)+' ↗</a>'+(s.fact?'<p>'+esc(s.fact)+'</p>':'')+(s.date?'<div class="source-date">'+esc(s.date)+'</div>':'')+'</div>').join('')+'</div>';
}

function executiveSignalFeed(signals){
  if(!signals.length)return '<div class="empty-search">No current source-linked signals are loaded for this domain.</div>';
  return '<div class="signal-feed">'+signals.slice(0,6).map(s=>'<article class="signal-card"><div><span class="signal-type">'+esc(s.type)+'</span><time>'+esc(s.date)+'</time></div><strong>'+esc(s.title)+'</strong><p>'+esc(s.detail)+'</p><a href="'+s.url+'" target="_blank" rel="noopener">'+esc(s.company)+' · open source ↗</a></article>').join('')+'</div>';
}

function renderExecutive(){
  const d=DOMAIN_DATA[currentDomain],ev=(window.DOMAIN_EVIDENCE&&DOMAIN_EVIDENCE[currentDomain])||{},en=enrichment(),ex=executiveData(),st=executiveStrategy();
  if(!ex){$('pageContent').innerHTML='<div class="empty-search">Executive research data is not available for this domain.</div>';return}
  const players=ex.players||[],signals=(en.signals||[]);
  activeExecutiveTab='overview';
  $('breadcrumbSmall').textContent='MedTech 360 / Executive Hub';
  $('breadcrumbTitle').textContent=currentDomain+' — Industry Overview';

  const totalGrowth=((ex.yoy[ex.yoy.length-1].size/ex.yoy[0].size-1)*100).toFixed(0);
  const latestGrowth=ex.yoy[ex.yoy.length-1].growth;
  const topRegion=ex.regions.slice().sort((a,b)=>b.index-a.index)[0];
  const top2Share=players.slice().sort((a,b)=>b.share-a.share).slice(0,2).reduce((s,p)=>s+p.share,0);

  $('pageContent').innerHTML=
    '<section class="hero executive-hero"><div class="hero-grid"><div><div class="kicker" style="color:#f3a4c0">Executive Hub • '+esc(currentDomain)+'</div><h1>Industry intelligence overview</h1><p>'+esc(ex.overview)+'</p></div>'+
    '<div class="hero-stats"><div class="hero-stat"><b>'+totalGrowth+'%</b><span>Illustrative 2022–28 market expansion</span></div><div class="hero-stat"><b>'+latestGrowth.toFixed(1)+'%</b><span>2028 YoY model growth</span></div><div class="hero-stat"><b>'+esc(topRegion.name)+'</b><span>Highest opportunity index</span></div><div class="hero-stat"><b>'+top2Share+'%</b><span>Top-2 placeholder share</span></div></div></div></section>'+
    executiveTabs()+

    '<div class="exec-tab-panel '+(activeExecutiveTab==='overview'?'active':'')+'" data-tab="overview">'+
      '<section class="section exec-section-first"><div class="section-head"><div><h2>Industry snapshot</h2><p>Public-source context is shown separately from the illustrative market model used for the prototype.</p></div></div>'+
      '<div class="exec-facts">'+ex.publicFacts.map(f=>'<div class="exec-fact"><b>'+esc(f.value)+'</b><strong>'+esc(f.label)+'</strong><small>'+esc(f.source)+'</small></div>').join('')+'</div>'+
      '<div class="exec-kpis">'+ex.kpis.map(k=>'<div class="exec-kpi"><span>'+esc(k.label)+'</span><b>'+esc(k.value)+'</b><small>'+esc(k.note)+'</small></div>').join('')+'</div>'+
      (en.market?'<div class="exec-source-context"><div><strong>Public source-backed market context</strong><span>'+esc(en.market.label)+'</span></div><b>$'+en.market.current.toFixed(2)+'B</b><p>'+en.market.currentYear+' estimate · '+en.market.cagr+'% CAGR to '+en.market.forecastYear+'. '+esc(en.market.scopeNote)+'</p></div>':'')+
      '</section>'+
      '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><h3>Strategic interpretation</h3><small>What the industry structure means for MedTech decision-makers</small></div>'+strategicCards((st.marketLandscape||[]).slice(0,3),'landscape')+'</div>'+
      '<div class="card"><div class="card-title"><h3>Current source-linked developments</h3><small>Recent signals with source access</small></div>'+executiveSignalFeed(signals.slice(0,3))+'</div></div></section>'+
    '</div>'+

    '<div class="exec-tab-panel" data-tab="market">'+
      '<section class="section exec-section-first"><div class="grid-2 exec-main-analytics"><div class="card"><div class="card-title"><div><h3>Year-on-year market growth</h3><small>Illustrative market model for dashboard demo · 2022–2028</small></div></div>'+executiveGrowthChart(ex.yoy)+'</div>'+
      '<div class="card"><div class="card-title"><div><h3>What the growth curve suggests</h3><small>Directional strategic interpretation</small></div></div>'+growthInsightCards(st.growthInsights||[])+'</div></div></section>'+
      '<section class="section"><div class="card exec-map-card"><div class="card-title"><div><h3>Regional opportunity map</h3><small>Illustrative regional market size + opportunity index; numbered pins avoid label overlap</small></div></div>'+executiveRegionalMap(ex.regions)+'</div></section>'+
      '<section class="section"><div class="card exec-segment-card"><div class="card-title"><div><h3>Market segment mix</h3><small>Illustrative mix to show relative category structure; values are demo placeholders</small></div></div>'+executiveDonut(ex.segments)+'</div></section>'+
    '</div>'+

    '<div class="exec-tab-panel" data-tab="competition">'+
      '<section class="section exec-section-first"><div class="card"><div class="card-title"><div><h3>Key players, offerings & strategic focus</h3><small>Company links open official websites where available</small></div></div>'+executivePlayerTable(players)+'</div></section>'+
      '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><h3>Illustrative market-share view</h3><small>Placeholder share estimates for visualization only</small></div>'+executiveShareBars(players)+'</div>'+
      '<div class="card"><div class="card-title"><h3>Recent competitive signals</h3><small>Source-linked developments</small></div>'+executiveSignalFeed(signals)+'</div></div></section>'+
      '<section class="section"><div class="exec-action-row"><button onclick="navigate(\'ci\',\'company-profiles\')">Open Company Profiles →</button><button onclick="navigate(\'ci\',\'news-alerts\')">Open News & Alerts →</button><button onclick="navigate(\'ci\',\'product-portfolio\')">Open Product Benchmarking →</button></div></section>'+
    '</div>'+

    '<div class="exec-tab-panel" data-tab="ecosystem">'+
      '<section class="section exec-section-first"><div class="card exec-ecosystem-card"><div class="card-title"><div><h3>Device / instrument / service ecosystem</h3><small>Compact end-to-end workflow showing where products, services and data interact</small></div></div>'+executiveEcosystem(ex.ecosystem)+'</div></section>'+
      '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><h3>Growth drivers</h3><small>Prioritized commercial and market tailwinds</small></div>'+strategicCards(st.drivers||[],'driver')+'</div>'+
      '<div class="card"><div class="card-title"><h3>Constraints & risks</h3><small>Issues that can slow adoption, access or value realization</small></div>'+strategicCards(st.risks||[],'risk')+'</div></div></section>'+
    '</div>'+

    '<div class="exec-tab-panel" data-tab="strategy">'+
      '<section class="section exec-section-first"><div class="grid-2"><div class="card"><div class="card-title"><h3>Trends & strategic developments</h3><small>Priority themes shaping the next phase of the market</small></div>'+strategicCards(st.trends||[],'trend')+'</div>'+
      '<div class="card"><div class="card-title"><h3>Opportunity scanner</h3><small>Potential whitespace for strategy, CI and PMR</small></div>'+strategicCards(st.opportunities||[],'opportunity')+'</div></div></section>'+
      '<section class="section"><div class="card"><div class="card-title"><div><h3>Market Landscape & Sizing — strategic takeaways</h3><small>Integrated into the Executive Hub</small></div></div>'+strategicCards(st.marketLandscape||[],'landscape')+'</div></section>'+
      '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><h3>Decision questions to monitor</h3><small>CI watchpoints</small></div><div class="question-list">'+ex.ciWatch.map((x,i)=>'<div class="question-item"><div class="qnum">'+(i+1)+'</div><span>'+esc(x)+'</span></div>').join('')+'</div><div class="exec-card-link"><button onclick="navigate(\'ci\',\'news-alerts\')">Open News & Alerts →</button></div></div>'+
      '<div class="card"><div class="card-title"><h3>Questions to validate with customers</h3><small>PMR agenda</small></div><div class="question-list">'+ex.pmrQuestions.map((x,i)=>'<div class="question-item"><div class="qnum">'+(i+1)+'</div><span>'+esc(x)+'</span></div>').join('')+'</div><div class="exec-card-link"><button onclick="navigate(\'pmr\',\'voc\')">Open Voice of Customer →</button></div></div></div></section>'+
      '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><h3>Source basis</h3><small>Authoritative and market-context sources</small></div>'+executiveSourceLinks(ex,d)+'</div>'+
      '<div class="card"><div class="card-title"><h3>How to read the data</h3><small>Evidence guardrails</small></div><div class="deliverable-list"><div class="deliverable-item"><div class="qnum">1</div><span>Public-source metrics retain the original source context and should not be mixed with the illustrative model.</span></div><div class="deliverable-item"><div class="qnum">2</div><span>Market size, regional splits and share estimates marked illustrative are placeholders for the client demo, not audited market estimates.</span></div><div class="deliverable-item"><div class="qnum">3</div><span>Strategic interpretation is directional and should be validated against client data, primary research and current competitive intelligence before decisions.</span></div></div></div></div></section>'+
    '</div>';
}