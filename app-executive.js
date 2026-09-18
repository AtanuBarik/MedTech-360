function renderExecutive(){
 const d=DOMAIN_DATA[currentDomain];
 const ev=(window.DOMAIN_EVIDENCE&&DOMAIN_EVIDENCE[currentDomain])||{};
 $('breadcrumbSmall').textContent='MedTech 360 / Executive Hub';
 $('breadcrumbTitle').textContent=currentDomain+' — Industry Overview';
 const forces=(ev.forces&&ev.forces.length)?ev.forces:d.dynamics.map(x=>x.body);
 const segments=(ev.segments&&ev.segments.length)?ev.segments:d.opportunities;
 $('pageContent').innerHTML=
 '<section class="hero"><div class="hero-grid"><div>'+
 '<div class="kicker" style="color:#f3a4c0">Executive Hub • '+esc(currentDomain)+'</div>'+
 '<h1>Industry overview & market intelligence</h1>'+
 '<p>'+esc(d.summary)+' '+esc(d.landscape)+'</p>'+
 '<div class="hero-tags">'+segments.map(x=>'<span>'+esc(x)+'</span>').join('')+'</div></div>'+
 '<div class="hero-stats"><div class="hero-stat"><b>'+d.players.length+'</b><span>Representative players mapped</span></div>'+
 '<div class="hero-stat"><b>'+(ev.sources?ev.sources.length:d.sources.length)+'</b><span>Authoritative research anchors</span></div>'+
 '<div class="hero-stat"><b>25</b><span>Dedicated CI + PMR subsegment pages</span></div>'+
 '<div class="hero-stat"><b>'+esc(currentRole)+'</b><span>Active workspace role</span></div></div></div></section>'+
 pageFacts(d)+
 '<div class="research-note"><strong>Evidence status:</strong> '+esc(ev.evidenceNote||'Public-source metrics are separated from illustrative dashboard indices.')+' <span class="evidence-updated">Updated '+esc(ev.updated||'2026')+'</span></div>'+
 '<section class="section"><div class="section-head"><div><h2>Industry structure</h2><p>Priority category structure for the selected MedTech domain.</p></div></div>'+
 '<div class="market-structure">'+segments.map((x,i)=>'<div class="structure-node"><span>0'+(i+1)+'</span><strong>'+esc(x)+'</strong><small>'+esc(['Clinical / customer need','Technology & product layer','Workflow / delivery model','Evidence & economics','Digital / service layer'][i%5])+'</small></div>').join('')+'</div></section>'+
 '<section class="section"><div class="section-head"><div><h2>Market dynamics</h2><p>Research-backed forces most likely to influence competitive strategy, customer needs and investment priorities.</p></div></div>'+
 '<div class="grid-4">'+forces.slice(0,4).map((x,i)=>'<article class="card dynamic-card"><div class="impact">'+esc((d.dynamics[i]&&d.dynamics[i].impact)||['Demand','Technology','Access','Workflow'][i])+'</div><h3>'+esc((d.dynamics[i]&&d.dynamics[i].title)||('Market force '+(i+1)))+'</h3><p>'+esc(x)+'</p></article>').join('')+'</div></section>'+
 '<section class="section"><div class="grid-2">'+
 '<div class="card"><div class="card-title"><h3>Priority players</h3><small>Representative competitive watchlist</small></div>'+
 '<table class="player-table"><thead><tr><th>Company</th><th>Focus</th><th>Watch intensity*</th></tr></thead><tbody>'+
 d.players.map(p=>'<tr><td><strong>'+esc(p.name)+'</strong></td><td><p>'+esc(p.focus)+'</p></td><td><div class="signal-strength"><i style="width:'+p.signal+'%"></i></div></td></tr>').join('')+
 '</tbody></table><div class="research-note"><strong>*Visualization note:</strong> watch intensity is an illustrative prioritization index, not market share or an investment rating.</div></div>'+
 '<div class="card chart-card"><div class="card-title"><h3>Industry momentum index</h3><small>Illustrative index • 0–100</small></div>'+
 lineChart(d.trend,d.trendLabels)+
 '<div class="research-note"><strong>Visualization note:</strong> trend values are illustrative for dashboard design. Use sourced burden, procedure, testing, reimbursement or market data in production.</div></div></div></section>'+
 '<section class="section"><div class="section-head"><div><h2>Research workstreams</h2><p>Click a segment to reveal its subsegments in the left navigation and open dedicated research pages.</p></div></div>'+
 '<div class="grid-2"><button class="segment-gateway" onclick="openSegment(\'ci\')"><span class="gateway-kicker">Segment 01</span><strong>Competitive Intelligence</strong><p>13 dedicated pages spanning market landscape, company profiles, news, strategy, portfolios, innovation, regulatory, access, deals, digital, GTM, conferences and IP/R&D.</p><span>Open CI segment →</span></button>'+
 '<button class="segment-gateway" onclick="openSegment(\'pmr\')"><span class="gateway-kicker">Segment 02</span><strong>Primary Market Research</strong><p>12 dedicated pages spanning VOC, expert interviews, concept testing, quant surveys, conjoint, pricing, segmentation, journeys, claims, adoption, loyalty and workflow.</p><span>Open PMR segment →</span></button></div></section>'+
 '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><h3>Source basis</h3><small>Public research anchors</small></div>'+sourcesHtml(d)+'</div>'+
 '<div class="card"><div class="card-title"><h3>Executive questions to answer</h3><small>Decision lens</small></div><div class="question-list">'+
 d.opportunities.slice(0,5).map((x,i)=>'<div class="question-item"><div class="qnum">'+(i+1)+'</div><span>How is <b>'+esc(x.toLowerCase())+'</b> changing, which players are shaping it, and what should be validated with primary research?</span></div>').join('')+
 '</div></div></div></section>';
}