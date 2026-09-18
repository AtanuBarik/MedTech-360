function executiveData(){return (window.EXECUTIVE_HUB_DATA&&EXECUTIVE_HUB_DATA[currentDomain])||null}

function executivePlayers(ex){
  if(!ex||!ex.players)return [];
  if(globalFilters.company==='All companies')return ex.players;
  const q=globalFilters.company.toLowerCase().replace(/[^a-z0-9 ]/g,' ');
  const hits=ex.players.filter(p=>{
    const n=p.name.toLowerCase().replace(/[^a-z0-9 ]/g,' ');
    const qWords=q.split(/\s+/).filter(x=>x.length>3);
    return n.includes(q.trim())||q.includes(n.trim())||qWords.some(w=>n.includes(w));
  });
  return hits.length?hits:ex.players;
}

function executiveGrowthChart(rows){
  const W=720,H=300,pL=54,pR=26,pT=34,pB=52;
  const vals=rows.map(r=>r.size),min=Math.min(...vals)*.94,max=Math.max(...vals)*1.05;
  const x=i=>pL+i*(W-pL-pR)/(rows.length-1);
  const y=v=>pT+(max-v)*(H-pT-pB)/(max-min);
  const pts=rows.map((r,i)=>[x(i),y(r.size)]);
  const poly=pts.map(p=>p.join(',')).join(' ');
  const area='M '+pts[0][0]+' '+(H-pB)+' L '+pts.map(p=>p.join(' ')).join(' L ')+' L '+pts[pts.length-1][0]+' '+(H-pB)+' Z';
  return '<div class="exec-chart-wrap"><svg class="exec-growth-svg" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Illustrative year-on-year market growth">'+
    '<defs><linearGradient id="execArea" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#e8005a" stop-opacity=".22"/><stop offset="100%" stop-color="#e8005a" stop-opacity=".02"/></linearGradient></defs>'+
    [0,1,2,3].map(i=>{const yy=pT+i*(H-pT-pB)/3;const val=(max-i*(max-min)/3).toFixed(1);return '<line x1="'+pL+'" y1="'+yy+'" x2="'+(W-pR)+'" y2="'+yy+'" stroke="#eee7ef"/><text x="'+(pL-10)+'" y="'+(yy+4)+'" text-anchor="end" font-size="12" fill="#897e8c">$'+val+'B</text>'}).join('')+
    '<path d="'+area+'" fill="url(#execArea)"/><polyline points="'+poly+'" fill="none" stroke="#4a2351" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>'+
    pts.map((pt,i)=>'<circle cx="'+pt[0]+'" cy="'+pt[1]+'" r="5.5" fill="#e8005a" stroke="#fff" stroke-width="3"/><text x="'+pt[0]+'" y="'+(pt[1]-13)+'" text-anchor="middle" font-size="12" font-weight="800" fill="#4a2351">$'+rows[i].size.toFixed(1)+'B</text><text x="'+pt[0]+'" y="'+(H-28)+'" text-anchor="middle" font-size="12" font-weight="700" fill="#675c6a">'+rows[i].year+'</text><text x="'+pt[0]+'" y="'+(H-10)+'" text-anchor="middle" font-size="11" fill="#9a8f9d">'+(rows[i].growth==null?'Base':rows[i].growth.toFixed(1)+'% YoY')+'</text>').join('')+
    '</svg></div>';
}

function executiveRegionalMap(regions){
  const max=Math.max(...regions.map(r=>r.size));
  return '<div class="exec-map-wrap"><svg class="exec-world-map" viewBox="0 0 540 265" role="img" aria-label="Illustrative regional market opportunity map">'+
    '<path d="M37 58 L70 34 L120 40 L155 64 L139 91 L109 104 L94 132 L61 119 L49 91 Z" class="continent"/>'+
    '<path d="M125 137 L155 143 L170 171 L161 209 L143 239 L124 213 L116 177 Z" class="continent"/>'+
    '<path d="M247 47 L292 42 L314 62 L303 89 L269 91 L250 77 Z" class="continent"/>'+
    '<path d="M279 100 L321 96 L349 124 L342 172 L320 211 L294 192 L278 146 Z" class="continent"/>'+
    '<path d="M321 52 L386 42 L460 55 L504 83 L482 114 L445 123 L420 155 L382 143 L357 111 L327 94 Z" class="continent"/>'+
    '<path d="M431 183 L469 179 L491 199 L478 224 L444 226 L425 205 Z" class="continent"/>'+
    regions.map(r=>{const rad=8+Math.sqrt(r.size/max)*17;return '<g class="map-marker"><circle cx="'+r.x+'" cy="'+r.y+'" r="'+rad+'" fill="#e8005a" fill-opacity=".18" stroke="#e8005a" stroke-width="2"/><circle cx="'+r.x+'" cy="'+r.y+'" r="5" fill="#e8005a"/><text x="'+r.x+'" y="'+(r.y-rad-8)+'" text-anchor="middle" font-size="12" font-weight="800" fill="#4a2351">'+esc(r.name)+'</text><text x="'+r.x+'" y="'+(r.y+4)+'" text-anchor="middle" font-size="11" font-weight="900" fill="#4a2351">$'+r.size.toFixed(1)+'B</text><title>'+esc(r.name)+': $'+r.size.toFixed(1)+'B | Opportunity index '+r.index+' | '+esc(r.story)+'</title></g>'}).join('')+
    '</svg><div class="exec-region-list">'+regions.map(r=>'<div><strong>'+esc(r.name)+'</strong><span>$'+r.size.toFixed(1)+'B · Index '+r.index+'</span><p>'+esc(r.story)+'</p></div>').join('')+'</div></div>';
}

function executiveDonut(items){
  const colors=['#4a2351','#e8005a','#8c5a92','#f06b9d','#6e4b72','#cba7cd','#8f8791','#d9ccd9'];
  let a=0;
  const grad=items.map((it,i)=>{const s=a;a+=it.share;return colors[i%colors.length]+' '+s+'% '+a+'%'}).join(',');
  return '<div class="exec-donut-layout"><div class="exec-donut" style="background:conic-gradient('+grad+')"><div><b>100%</b><span>Illustrative split</span></div></div><div class="exec-legend">'+items.map((it,i)=>'<div><i style="background:'+colors[i%colors.length]+'"></i><span><strong>'+esc(it.name)+'</strong><small>'+it.share+'% · '+esc(it.detail)+'</small></span></div>').join('')+'</div></div>';
}

function executiveShareBars(players){
  const max=Math.max(...players.map(p=>p.share));
  return '<div class="share-bars">'+players.map((p,i)=>'<div class="share-row"><div class="share-label"><span>'+esc(p.name)+'</span><b>'+p.share+'%</b></div><div class="share-track"><i style="width:'+(p.share/max*100)+'%"></i></div></div>').join('')+'</div>';
}

function executiveEcosystem(steps){
  return '<div class="ecosystem-flow">'+steps.map((s,i)=>'<div class="eco-step"><span>'+String(i+1).padStart(2,'0')+'</span><strong>'+esc(s)+'</strong></div>'+(i<steps.length-1?'<div class="eco-arrow">→</div>':'')).join('')+'</div>';
}

function executiveBullets(items,type){
  return '<div class="exec-list '+type+'">'+items.map((x,i)=>'<div><span>'+(type==='risk'?'!':'✓')+'</span><p>'+esc(x)+'</p></div>').join('')+'</div>';
}

function executivePlayerTable(players){
  return '<div class="table-scroll"><table class="data-table exec-player-table"><thead><tr><th>Player</th><th>Core offerings</th><th>Focus area</th><th>Share*</th></tr></thead><tbody>'+players.map(p=>'<tr><td><strong>'+esc(p.name)+'</strong></td><td>'+esc(p.offerings)+'</td><td>'+esc(p.focus)+'</td><td><span class="share-pill">'+p.share+'%</span></td></tr>').join('')+'</tbody></table></div>';
}

function executiveSourceLinks(ex,d){
  const ev=(window.DOMAIN_EVIDENCE&&DOMAIN_EVIDENCE[currentDomain])||{},en=enrichment();
  const all=[...(ex.sourceLinks||[]),...(ev.sources||[]),...(en.sources||[]),...(d.sources||[])];
  const seen=new Set();
  const unique=all.filter(s=>{const u=s.url||s.title||s.label;if(!u||seen.has(u))return false;seen.add(u);return true}).slice(0,10);
  return '<div class="source-list">'+unique.map(s=>'<div class="source-item"><a href="'+s.url+'" target="_blank" rel="noopener">'+esc(s.label||s.title)+' ↗</a>'+(s.fact?'<p>'+esc(s.fact)+'</p>':'')+(s.date?'<div class="source-date">'+esc(s.date)+'</div>':'')+'</div>').join('')+'</div>';
}

function renderExecutive(){
  const d=DOMAIN_DATA[currentDomain],ev=(window.DOMAIN_EVIDENCE&&DOMAIN_EVIDENCE[currentDomain])||{},en=enrichment(),ex=executiveData();
  if(!ex){$('pageContent').innerHTML='<div class="empty-search">Executive research data is not available for this domain.</div>';return}
  const players=executivePlayers(ex);
  const marketLandscape=window.MARKET_LANDSCAPE_EXECUTIVE||{};
  const mlBp=window.MODULE_BLUEPRINTS&&MODULE_BLUEPRINTS.ci&&MODULE_BLUEPRINTS.ci['market-landscape'];
  const signals=filteredSignals().length?filteredSignals():(en.signals||[]);
  const selectedTheme=globalFilters.theme==='All themes'?'All priority themes':globalFilters.theme;

  $('breadcrumbSmall').textContent='MedTech 360 / Executive Hub';
  $('breadcrumbTitle').textContent=currentDomain+' — Industry Overview';

  const publicMarket=en.market?'<div class="exec-public-market"><span>Public source-backed market context</span><strong>$'+en.market.current.toFixed(2)+'B</strong><p>'+esc(en.market.currentYear+' '+en.market.label)+' · '+en.market.cagr+'% CAGR to '+en.market.forecastYear+'. '+esc(en.market.scopeNote)+'</p></div>':'';

  $('pageContent').innerHTML=
    '<section class="hero executive-hero"><div class="hero-grid"><div><div class="kicker" style="color:#f3a4c0">Executive Hub • '+esc(currentDomain)+'</div><h1>Industry intelligence overview</h1><p>'+esc(ex.overview)+'</p><div class="hero-tags"><span>Industry landscape</span><span>Market model</span><span>Regional opportunity</span><span>Competitive landscape</span><span>Ecosystem</span><span>Strategic opportunity</span></div></div>'+
    '<div class="hero-stats"><div class="hero-stat"><b>'+CI_SUBSEGMENTS.length+'</b><span>CI modules</span></div><div class="hero-stat"><b>'+PMR_SUBSEGMENTS.length+'</b><span>PMR modules</span></div><div class="hero-stat"><b>'+ex.players.length+'</b><span>Competitive groups mapped</span></div><div class="hero-stat"><b>'+esc(currentRole)+'</b><span>Active role</span></div></div></div></section>'+
    activeFilterNote()+
    '<div class="exec-label-strip"><span>Public source-backed market context</span><span>Illustrative market model for dashboard demo</span><span>Placeholder share estimates for visualization only</span><span>Directional strategic interpretation</span></div>'+
    '<section class="section"><div class="section-head"><div><h2>Industry snapshot</h2><p>Source-backed disease / infrastructure context alongside an explicitly illustrative market model.</p></div><span class="pill">'+esc(selectedTheme)+'</span></div>'+
    '<div class="exec-facts">'+ex.publicFacts.map(f=>'<div class="exec-fact"><b>'+esc(f.value)+'</b><strong>'+esc(f.label)+'</strong><small>'+esc(f.source)+'</small></div>').join('')+'</div>'+
    '<div class="exec-kpis">'+ex.kpis.map(k=>'<div class="exec-kpi"><span>'+esc(k.label)+'</span><b>'+esc(k.value)+'</b><small>'+esc(k.note)+'</small></div>').join('')+'</div>'+publicMarket+'</section>'+
    '<section class="section"><div class="grid-2 exec-main-analytics"><div class="card"><div class="card-title"><div><h3>Year-on-year market growth</h3><small>Illustrative market model for dashboard demo · 2022–2028</small></div></div>'+executiveGrowthChart(ex.yoy)+'</div>'+
    '<div class="card"><div class="card-title"><div><h3>Regional opportunity map</h3><small>Illustrative market size + opportunity index</small></div></div>'+executiveRegionalMap(ex.regions)+'</div></div></section>'+
    '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><div><h3>Market segment mix</h3><small>Illustrative segment split</small></div></div>'+executiveDonut(ex.segments)+'</div>'+
    '<div class="card"><div class="card-title"><div><h3>Device / instrument / service ecosystem</h3><small>End-to-end value flow</small></div></div>'+executiveEcosystem(ex.ecosystem)+'</div></div></section>'+
    '<section class="section"><div class="section-head"><div><h2>Competitive landscape</h2><p>Representative players, offering areas and focus. Share figures below are placeholders for demo visualization only.</p></div></div>'+
    '<div class="grid-2"><div class="card"><div class="card-title"><h3>Key players & capability focus</h3><small>'+esc(globalFilters.company)+'</small></div>'+executivePlayerTable(players)+'</div>'+
    '<div class="card"><div class="card-title"><h3>Illustrative market-share view</h3><small>Placeholder share estimates for visualization only</small></div>'+executiveShareBars(players)+'</div></div></section>'+
    '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><h3>Growth drivers</h3><span class="pill">Demand tailwinds</span></div>'+executiveBullets(ex.drivers,'driver')+'</div>'+
    '<div class="card"><div class="card-title"><h3>Constraints & risks</h3><span class="pill pink">Watch items</span></div>'+executiveBullets(ex.risks,'risk')+'</div></div></section>'+
    '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><h3>Trends & strategic developments</h3><small>Directional strategic interpretation</small></div><div class="trend-grid">'+ex.trends.map((t,i)=>'<div><span>'+String(i+1).padStart(2,'0')+'</span><p>'+esc(t)+'</p></div>').join('')+'</div></div>'+
    '<div class="card"><div class="card-title"><h3>Recent source-linked signals</h3><small>'+signals.length+' current examples</small></div><div class="signal-feed">'+signals.slice(0,5).map(s=>'<article class="signal-card"><div><span class="signal-type">'+esc(s.type)+'</span><time>'+esc(s.date)+'</time></div><strong>'+esc(s.title)+'</strong><p>'+esc(s.detail)+'</p><a href="'+s.url+'" target="_blank" rel="noopener">'+esc(s.company)+' · source ↗</a></article>').join('')+'</div></div></div></section>'+
    '<section class="section"><div class="section-head"><div><h2>Opportunity scanner</h2><p>Where the market direction creates whitespace for competitive intelligence, customer research and strategic decision support.</p></div></div>'+
    '<div class="grid-3 exec-opportunity-grid"><div class="card"><div class="card-title"><h3>Whitespace opportunities</h3><span class="pill">Direction</span></div><div class="question-list">'+ex.opportunities.map((x,i)=>'<div class="question-item"><div class="qnum">'+(i+1)+'</div><span>'+esc(x)+'</span></div>').join('')+'</div></div>'+
    '<div class="card"><div class="card-title"><h3>CI watchpoints</h3><span class="pill">Monitor</span></div><div class="question-list">'+ex.ciWatch.map((x,i)=>'<div class="question-item"><div class="qnum">'+(i+1)+'</div><span>'+esc(x)+'</span></div>').join('')+'</div></div>'+
    '<div class="card"><div class="card-title"><h3>PMR questions</h3><span class="pill pink">Validate</span></div><div class="question-list">'+ex.pmrQuestions.map((x,i)=>'<div class="question-item"><div class="qnum">'+(i+1)+'</div><span>'+esc(x)+'</span></div>').join('')+'</div></div></div></section>'+
    '<section class="section executive-market-landscape"><div class="section-head"><div><h2>'+esc(marketLandscape.title||'Market Landscape & Sizing')+'</h2><p>'+esc(marketLandscape.overview||'Map category structure, market evolution, segment attractiveness, growth drivers, barriers and white spaces.')+'</p></div><span class="pill">Integrated into Executive Hub</span></div>'+
    '<div class="grid-2">'+renderArchitecture('ci','market-landscape')+'<div class="card"><div class="card-title"><h3>Business questions addressed</h3><span class="pill">'+((marketLandscape.questions||[]).length)+' core questions</span></div><div class="question-list">'+(marketLandscape.questions||[]).map((q,i)=>'<div class="question-item"><div class="qnum">'+(i+1)+'</div><span>'+esc(q)+'</span></div>').join('')+'</div><div class="mini-tags module-lenses">'+(((mlBp&&mlBp.lenses)||[]).concat(['Geography','Care setting','Company','Time period'])).map(x=>'<span>'+esc(x)+'</span>').join('')+'</div></div></div></section>'+
    '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><h3>Source basis</h3><small>Authoritative + market-context sources</small></div>'+executiveSourceLinks(ex,d)+'</div>'+
    '<div class="card"><div class="card-title"><h3>Data-use guardrails</h3><small>Demo governance</small></div><div class="deliverable-list"><div class="deliverable-item"><div class="qnum">1</div><span><b>Public source-backed market context</b> is separated from illustrative model values.</span></div><div class="deliverable-item"><div class="qnum">2</div><span><b>Illustrative market model for dashboard demo</b> is used where a consistent cross-domain series is needed.</span></div><div class="deliverable-item"><div class="qnum">3</div><span><b>Placeholder share estimates for visualization only</b> must not be presented externally as audited market share.</span></div><div class="deliverable-item"><div class="qnum">4</div><span><b>Directional strategic interpretation</b> should be validated against client data, PMR and current CI before decisions.</span></div></div></div></div></section>';
}