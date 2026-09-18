let companyProfileState={domain:null,company:"",region:"All Regions",portfolio:"All Portfolio & Services",focus:"All Focus Areas"};

function companyProfileData(){
  return (window.COMPANY_PROFILES&&COMPANY_PROFILES[currentDomain])||[];
}
function resetCompanyProfileState(){
  const profiles=companyProfileData();
  companyProfileState={domain:currentDomain,company:profiles.length?profiles[0].id:"",region:"All Regions",portfolio:"All Portfolio & Services",focus:"All Focus Areas"};
}
function cpUnique(arr){return [...new Set(arr.filter(Boolean))].sort((a,b)=>a.localeCompare(b))}
function cpOptions(values,selected){return values.map(v=>'<option value="'+esc(v)+'" '+(v===selected?'selected':'')+'>'+esc(v)+'</option>').join('')}
function cpLogoMark(name){
  const domain=typeof companyDomain==='function'?companyDomain(name):null;
  const initials=name.replaceAll('/',' ').split(/\\s+/).filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase();
  return '<span class="cp-tab-logo">'+(domain?'<img src="https://www.google.com/s2/favicons?domain='+domain+'&sz=64" alt="" onerror="this.style.display=\\'none\\';this.nextElementSibling.style.display=\\'block\\'"/><b style="display:none">'+esc(initials)+'</b>':'<b>'+esc(initials)+'</b>')+'</span>';
}
function cpMatches(p){
  const s=companyProfileState;
  const regionOk=s.region==="All Regions"||(p.regions||[]).includes(s.region);
  const portfolioOk=s.portfolio==="All Portfolio & Services"||(p.portfolioTags||[]).includes(s.portfolio);
  const focusOk=s.focus==="All Focus Areas"||(p.focusTags||[]).includes(s.focus);
  return regionOk&&portfolioOk&&focusOk;
}
function cpFilteredProfiles(){
  const all=companyProfileData();
  const filtered=all.filter(cpMatches);
  return filtered.length?filtered:all;
}
function updateCompanyProfileFilter(key,value){
  if(companyProfileState.domain!==currentDomain)resetCompanyProfileState();
  companyProfileState[key]=value;
  if(key!=="company"){
    const filtered=cpFilteredProfiles();
    if(!filtered.some(p=>p.id===companyProfileState.company))companyProfileState.company=filtered[0]?.id||"";
  }
  renderCompanyProfilesPage();
}
function selectCompanyProfile(id){companyProfileState.company=id;renderCompanyProfilesPage();window.scrollTo({top:0,behavior:"smooth"})}

function cpRevenueChart(profile){
  const f=profile.financials||{},rows=f.revenueSeries||[];
  if(rows.length<2)return '<div class="cp-no-series"><strong>Five-year revenue series not publicly disclosed</strong><p>'+esc(f.seriesNote||"The company does not publish a comparable multi-year revenue series in the selected public sources.")+'</p></div>';
  const W=620,H=230,pL=42,pR=20,pT=28,pB=38;
  const vals=rows.map(r=>Number(r.value)),min=Math.min(...vals)*.94,max=Math.max(...vals)*1.06;
  const x=i=>pL+i*(W-pL-pR)/(rows.length-1),y=v=>pT+(max-v)*(H-pT-pB)/(max-min||1);
  const pts=rows.map((r,i)=>[x(i),y(Number(r.value))]);
  const poly=pts.map(p=>p.join(",")).join(" ");
  return '<div class="cp-revenue-chart"><svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Five-year revenue trend">'+
    [0,1,2,3].map(i=>{const yy=pT+i*(H-pT-pB)/3;return '<line x1="'+pL+'" y1="'+yy+'" x2="'+(W-pR)+'" y2="'+yy+'" stroke="#eee8ef" stroke-width="1"/>'}).join('')+
    '<polyline points="'+poly+'" fill="none" stroke="#4a2351" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'+
    pts.map((pt,i)=>'<circle cx="'+pt[0]+'" cy="'+pt[1]+'" r="5" fill="#e8005a" stroke="#fff" stroke-width="2"/><text x="'+pt[0]+'" y="'+(pt[1]-10)+'" text-anchor="middle" font-size="11" font-weight="800" fill="#4a2351">'+rows[i].value.toFixed(2)+'</text><text x="'+pt[0]+'" y="'+(H-12)+'" text-anchor="middle" font-size="11" font-weight="700" fill="#756b78">'+rows[i].year+'</text>').join('')+
    '</svg><div class="cp-chart-foot"><span>Currency: '+esc(f.currency||"Reported")+'</span><span>Series shows company / group revenue unless otherwise noted.</span></div></div>';
}

function cpTimeline(items,emptyText){
  if(!items||!items.length)return '<div class="cp-empty">'+esc(emptyText||"No major publicly disclosed events loaded.")+'</div>';
  return '<div class="cp-timeline">'+items.map(x=>'<article><div class="cp-time-year">'+esc(x.year)+'</div><div><strong>'+esc(x.title)+'</strong>'+(x.type?'<span class="cp-event-type">'+esc(x.type)+'</span>':'')+'<p>'+esc(x.detail)+'</p></div></article>').join('')+'</div>';
}
function cpChipList(items,kind){
  if(!items||!items.length)return '<span class="cp-muted">Not separately disclosed.</span>';
  return '<div class="cp-chip-list '+(kind||'')+'">'+items.map(x=>'<span>'+esc(x)+'</span>').join('')+'</div>';
}
function cpStrategyGrid(strategy){
  const labels=[["business","Business strategy"],["product","Product strategy"],["channel","Channel strategy"],["geographic","Geographical strategy"],["digital","Digital strategy"],["rd","R&D strategy"],["expansion","Expansion strategy"]];
  return '<div class="cp-strategy-grid">'+labels.map(([k,l])=>'<article><span>'+l+'</span><p>'+esc(strategy?.[k]||"Not separately disclosed.")+'</p></article>').join('')+'</div>';
}
function cpProducts(profile){
  let products=profile.products||[];
  if(companyProfileState.portfolio!=="All Portfolio & Services"){
    const q=companyProfileState.portfolio.toLowerCase();
    const narrowed=products.filter(x=>(x.category+" "+x.name+" "+x.positioning).toLowerCase().includes(q.split(" ")[0]));
    if(narrowed.length)products=narrowed;
  }
  return '<div class="cp-products">'+products.map(p=>'<article><div class="cp-product-head"><span>'+esc(p.category)+'</span><strong>'+esc(p.name)+'</strong></div><div class="cp-product-grid"><div><b>USP</b><p>'+esc(p.usp)+'</p></div><div><b>Key features</b>'+cpChipList(p.features,'compact')+'</div><div><b>Claims / evidence positioning</b><p>'+esc(p.claims)+'</p></div><div><b>Product positioning</b><p>'+esc(p.positioning)+'</p></div></div></article>').join('')+'</div>';
}
function cpRegional(profile){
  const region=companyProfileState.region;
  const rows=(profile.regionalPortfolio||[]).filter(x=>region==="All Regions"||x.region===region);
  const websites=(profile.websites||[]).filter(x=>region==="All Regions"||x.region===region||x.region==="Global");
  return '<div class="grid-2"><div class="card"><div class="card-title"><h3>Regional websites</h3><small>Official links</small></div><div class="cp-websites">'+(websites.length?websites.map(w=>'<a href="'+w.url+'" target="_blank" rel="noopener"><span>'+esc(w.region)+'</span><strong>'+esc(w.label)+'</strong><em>Open ↗</em></a>').join(''):'<div class="cp-empty">No dedicated regional website loaded for this selection; use the global company site.</div>')+'</div></div>'+
  '<div class="card"><div class="card-title"><h3>Regional product & service portfolio</h3><small>'+esc(region)+'</small></div><div class="cp-regional">'+(rows.length?rows.map(r=>'<article><span>'+esc(r.region)+'</span>'+cpChipList(r.items,'compact')+'<p>'+esc(r.serviceModel)+'</p></article>').join(''):'<div class="cp-empty">No separate regional portfolio disclosure loaded for this selection.</div>')+'</div></div></div>';
}
function cpSources(profile){
  return '<div class="source-list">'+(profile.sources||[]).map(s=>'<div class="source-item"><a href="'+s.url+'" target="_blank" rel="noopener">'+esc(s.label)+' ↗</a></div>').join('')+'</div>';
}

function renderCompanyProfilesPage(){
  if(companyProfileState.domain!==currentDomain)resetCompanyProfileState();
  const profiles=companyProfileData();
  if(!profiles.length){
    $('pageContent').innerHTML='<div class="empty-search">No company-profile research is loaded for '+esc(currentDomain)+'.</div>';return;
  }
  const regions=cpUnique(profiles.flatMap(p=>p.regions||[]));
  const portfolios=cpUnique(profiles.flatMap(p=>p.portfolioTags||[]));
  const focuses=cpUnique(profiles.flatMap(p=>p.focusTags||[]));
  const filtered=cpFilteredProfiles();
  let profile=profiles.find(p=>p.id===companyProfileState.company);
  if(!profile||!filtered.some(p=>p.id===profile.id)){profile=filtered[0]||profiles[0];companyProfileState.company=profile.id;}
  const f=profile.financials||{};

  $('breadcrumbSmall').textContent='Competitive Intelligence / Company Profiles';
  $('breadcrumbTitle').textContent=currentDomain+' — '+profile.name;

  $('pageContent').innerHTML=
    '<div class="page-head cp-page-head"><div class="title-wrap"><div class="breadcrumb"><button onclick="navigate(\'executive\')">Executive Hub</button> / <button onclick="openSegment(\'ci\')">Competitive Intelligence</button> / Company Profiles</div><h1>Company Profiles</h1><p>Deep-dive competitor intelligence for <b>'+esc(currentDomain)+'</b>, integrating corporate footprint, financial performance, portfolio, regional presence, strategy, technology, M&A and transformation signals.</p></div></div>'+
    '<section class="cp-filter-shell"><div class="cp-filter"><label>Company<select onchange="updateCompanyProfileFilter(\'company\',this.value)">'+filtered.map(p=>'<option value="'+esc(p.id)+'" '+(p.id===profile.id?'selected':'')+'>'+esc(p.name)+'</option>').join('')+'</select></label></div>'+
    '<div class="cp-filter"><label>Region<select onchange="updateCompanyProfileFilter(\'region\',this.value)">'+cpOptions(["All Regions",...regions],companyProfileState.region)+'</select></label></div>'+
    '<div class="cp-filter"><label>Portfolio & Services<select onchange="updateCompanyProfileFilter(\'portfolio\',this.value)">'+cpOptions(["All Portfolio & Services",...portfolios],companyProfileState.portfolio)+'</select></label></div>'+
    '<div class="cp-filter"><label>Focus of Company<select onchange="updateCompanyProfileFilter(\'focus\',this.value)">'+cpOptions(["All Focus Areas",...focuses],companyProfileState.focus)+'</select></label></div></section>'+
    '<section class="cp-matchbar"><div><strong>'+filtered.length+'</strong><span>matching companies</span></div><div class="cp-company-tabs">'+filtered.map(p=>'<button class="'+(p.id===profile.id?'active':'')+'" onclick="selectCompanyProfile(\''+p.id+'\')">'+cpLogoMark(p.logoName||p.name)+'<span>'+esc(p.name)+'</span></button>').join('')+'</div></section>'+

    '<section class="cp-company-hero"><div class="cp-company-title">'+companyLogo(profile.logoName||profile.name)+'<div><span>'+esc(currentDomain)+'</span><h2>'+esc(profile.name)+'</h2><p>'+esc(profile.overview)+'</p></div></div><div class="cp-meta-grid">'+
      '<div><span>HQ</span><strong>'+esc(profile.hq)+'</strong></div><div><span>Founded</span><strong>'+esc(profile.founded)+'</strong></div><div><span>Company type</span><strong>'+esc(profile.type)+'</strong></div><div><span>Employees</span><strong>'+esc(profile.employees)+'</strong></div></div>'+
      '<div class="cp-presence"><span>Geographical presence</span><p>'+esc(profile.presence)+'</p>'+cpChipList(profile.regions,'regions')+'</div></section>'+

    '<section class="section"><div class="section-head"><div><h2>Key financials</h2><p>Latest public financial performance, business-unit exposure and geographic context.</p></div><span class="cp-data-note">Public filings / company reporting</span></div><div class="cp-financial-grid"><div class="card cp-fin-kpi"><span>Latest reported revenue</span><strong>'+esc(f.latestRevenue||"Not disclosed")+'</strong><small>'+esc(f.currency||"")+'</small></div><div class="card cp-fin-block"><div class="card-title"><h3>Business unit / segment revenue</h3></div>'+cpChipList(f.buRevenue,'financial')+'</div><div class="card cp-fin-chart"><div class="card-title"><h3>Revenue trend</h3><small>Last five reported years where available</small></div>'+cpRevenueChart(profile)+'</div><div class="card cp-fin-block"><div class="card-title"><h3>Country / zone-specific revenue</h3></div>'+cpChipList(f.regionalRevenue,'financial')+'</div></div>'+
    '<div class="card cp-insight-card"><div class="card-title"><h3>Latest financial-result takeaways</h3><small>Strategic read-through</small></div><div class="cp-insight-list">'+(f.latestInsights||[]).map((x,i)=>'<article><span>0'+(i+1)+'</span><p>'+esc(x)+'</p></article>').join('')+'</div></div></section>'+

    '<section class="section"><div class="section-head"><div><h2>Product & service portfolio</h2><p>Category role, differentiated value proposition, features, claims and positioning for the selected company.</p></div><span class="cp-data-note">'+esc(companyProfileState.portfolio)+'</span></div>'+cpProducts(profile)+'</section>'+
    '<section class="section">'+cpRegional(profile)+'</section>'+

    '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><h3>Key transformations over time</h3><small>Business-model and portfolio evolution</small></div>'+cpTimeline(profile.transformations,'No transformation timeline loaded.')+'</div><div class="card"><div class="card-title"><h3>Technology, USP, devices & tests</h3><small>Competitive differentiation</small></div><div class="cp-tech-block"><b>Core technologies</b>'+cpChipList(profile.technology,'tech')+'<b>Competitive USPs</b>'+cpChipList(profile.usps,'usp')+'<b>Key devices / tests / services</b>'+cpChipList(profile.devicesTests,'devices')+'</div></div></div></section>'+

    '<section class="section"><div class="card"><div class="card-title"><h3>Current strategy</h3><small>Business, product, channel, geography, digital, R&D and expansion</small></div>'+cpStrategyGrid(profile.strategy)+'</div></section>'+

    '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><h3>M&A & partnership timeline</h3><small>Selected strategic transactions</small></div>'+cpTimeline(profile.deals,'No material domain-relevant transaction is loaded in the current public-source snapshot.')+'</div><div class="card"><div class="card-title"><h3>Key initiatives</h3><small>Recent execution priorities</small></div>'+cpTimeline(profile.initiatives,'No initiative timeline loaded.')+'</div></div></section>'+

    '<section class="section"><div class="grid-2"><div class="card"><div class="card-title"><h3>Source basis</h3><small>Official filings and company materials</small></div>'+cpSources(profile)+'</div><div class="card"><div class="card-title"><h3>Evidence notes</h3><small>How to use this profile</small></div><div class="deliverable-list"><div class="deliverable-item"><div class="qnum">1</div><span>Financial values use the latest public company filings / releases available in the research snapshot; private-company revenue gaps are explicitly shown as not disclosed.</span></div><div class="deliverable-item"><div class="qnum">2</div><span>Product claims are described as company positioning unless independently verified; use underlying clinical / regulatory evidence for claim substantiation.</span></div><div class="deliverable-item"><div class="qnum">3</div><span>Regional portfolio availability can differ by regulatory approval, reimbursement and local commercialization; the Region filter scopes only the loaded public evidence.</span></div></div></div></div></section>';
}
