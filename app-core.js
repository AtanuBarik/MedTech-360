let currentRole = localStorage.getItem('medtech360Role') || 'Viewer';
let currentDomain = localStorage.getItem('medtech360Domain') || Object.keys(DOMAIN_DATA)[0];
let currentPage = {type:'executive'};
let globalFilters = {company:'All companies', theme:'All themes', dataset:'All datasets'};

function $(id){return document.getElementById(id)}
function esc(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function showToast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
function credentialLogin(){if($('email').value.trim()==='demo@evalueserve.com'&&$('password').value==='MedTech360')goRoleSelection();else showToast('Use the prototype credentials shown below the form.')}
function goRoleSelection(){$('loginScreen').classList.add('hidden');$('roleScreen').classList.remove('hidden');renderDomainSelectors()}
function logout(){localStorage.removeItem('medtech360Role');localStorage.removeItem('medtech360Domain');$('appScreen').classList.add('hidden');$('roleScreen').classList.add('hidden');$('loginScreen').classList.remove('hidden');currentPage={type:'executive'};window.location.hash=''}

function enrichment(){return (window.DOMAIN_ENRICHMENT&&DOMAIN_ENRICHMENT[currentDomain])||{}}
function renderDomainSelectors(){
  const names=Object.keys(DOMAIN_DATA); const opts=names.map(n=>'<option '+(n===currentDomain?'selected':'')+'>'+esc(n)+'</option>').join('');
  $('roleDomainSelect').innerHTML=opts;
  $('domainGrid').innerHTML=names.map(n=>{const d=DOMAIN_DATA[n];return '<button class="domain-card '+(n===currentDomain?'selected':'')+'" onclick="selectDomain(\''+n.replace(/'/g,"\\'")+'\')"><span class="dc-icon">'+d.icon+'</span><strong>'+esc(n)+'</strong><span>'+esc(d.opportunities.slice(0,2).join(' • '))+'</span></button>'}).join('');
}
function selectDomain(name){currentDomain=name;$('roleDomainSelect').value=name;renderDomainSelectors()}
function chooseRole(role){currentRole=role;localStorage.setItem('medtech360Role',role);localStorage.setItem('medtech360Domain',currentDomain);$('roleScreen').classList.add('hidden');$('appScreen').classList.remove('hidden');initializeApp();navigate('executive')}

function initializeApp(){
  $('sideRole').textContent=currentRole;$('sideDomain').textContent=currentDomain;$('avatarLabel').textContent=currentRole==='Hub Owner'?'HO':currentRole==='Contributor'?'CO':'VI';
  const opts=Object.keys(DOMAIN_DATA).map(n=>'<option '+(n===currentDomain?'selected':'')+'>'+esc(n)+'</option>').join('');$('topDomainSelect').innerHTML=opts;
  $('ciSubmenu').innerHTML=CI_SUBSEGMENTS.map(x=>'<button class="subnav-btn" data-route="ci/'+x.id+'" onclick="navigate(\'ci\',\''+x.id+'\')">'+esc(x.title)+'</button>').join('');
  $('pmrSubmenu').innerHTML=PMR_SUBSEGMENTS.map(x=>'<button class="subnav-btn" data-route="pmr/'+x.id+'" onclick="navigate(\'pmr\',\''+x.id+'\')">'+esc(x.title)+'</button>').join('');
  refreshGlobalFilters();
}
function switchDomain(name){
  currentDomain=name;localStorage.setItem('medtech360Domain',name);$('sideDomain').textContent=name;
  globalFilters.company='All companies';globalFilters.theme='All themes';
  refreshGlobalFilters();renderCurrentPage()
}
function refreshGlobalFilters(){
  const d=DOMAIN_DATA[currentDomain],en=enrichment();
  const companies=(en.competitors&&en.competitors.length)?en.competitors:d.players.map(p=>p.name);
  const themes=(en.themes&&en.themes.length)?en.themes:[...d.opportunities,...d.dynamics.map(x=>x.title)];
  if($('companyFilter'))$('companyFilter').innerHTML=['All companies',...companies].map(x=>'<option '+(x===globalFilters.company?'selected':'')+'>'+esc(x)+'</option>').join('');
  if($('themeFilter'))$('themeFilter').innerHTML=['All themes',...themes].map(x=>'<option '+(x===globalFilters.theme?'selected':'')+'>'+esc(x)+'</option>').join('');
  if($('datasetFilter'))$('datasetFilter').innerHTML=['All datasets','Public market data','Competitive signals','PMR blueprint','Illustrative demo'].map(x=>'<option '+(x===globalFilters.dataset?'selected':'')+'>'+x+'</option>').join('');
  renderFilterRibbon();
}
function updateGlobalFilter(key,value){globalFilters[key]=value;renderFilterRibbon();renderCurrentPage()}
function resetGlobalFilters(){globalFilters={company:'All companies',theme:'All themes',dataset:'All datasets'};refreshGlobalFilters();renderCurrentPage()}
function renderFilterRibbon(){
  if(!$('filterRibbon'))return;
  const active=[];
  if(globalFilters.company!=='All companies')active.push('Company: '+globalFilters.company);
  if(globalFilters.theme!=='All themes')active.push('Theme: '+globalFilters.theme);
  if(globalFilters.dataset!=='All datasets')active.push('Dataset: '+globalFilters.dataset);
  $('filterRibbon').innerHTML='<div><strong>Global filters</strong><span>'+esc(globalFilters.company)+'</span><span>'+esc(globalFilters.theme)+'</span><span>'+esc(globalFilters.dataset)+'</span></div>'+(active.length?'<button onclick="resetGlobalFilters()">Reset filters</button>':'<small>Use the dropdowns above to scope companies, themes and evidence layers.</small>');
}
function activeFilterNote(){
  const a=[];
  if(globalFilters.company!=='All companies')a.push('Company = '+globalFilters.company);
  if(globalFilters.theme!=='All themes')a.push('Theme = '+globalFilters.theme);
  if(globalFilters.dataset!=='All datasets')a.push('Dataset = '+globalFilters.dataset);
  return a.length?'<div class="active-filter-note"><strong>View scoped by:</strong> '+esc(a.join(' • '))+'</div>':'';
}
function filteredPlayers(d){
  if(globalFilters.company==='All companies')return d.players;
  const q=globalFilters.company.toLowerCase();
  const hits=d.players.filter(p=>p.name.toLowerCase().includes(q)||q.includes(p.name.toLowerCase()));
  return hits.length?hits:d.players;
}
function filteredSignals(){
  const en=enrichment(),signals=en.signals||[];
  return signals.filter(s=>{
    const companyOk=globalFilters.company==='All companies'||String(s.company||'').toLowerCase().includes(globalFilters.company.toLowerCase())||globalFilters.company.toLowerCase().includes(String(s.company||'').toLowerCase())||s.company==='Category';
    const themeOk=globalFilters.theme==='All themes'||(s.title+' '+s.detail+' '+s.type).toLowerCase().includes(globalFilters.theme.toLowerCase().split(' / ')[0]);
    return companyOk&&themeOk;
  });
}
function openSegment(type){const parent=$(type==='ci'?'navCi':'navPmr'),sub=$(type==='ci'?'ciSubmenu':'pmrSubmenu');const willOpen=!sub.classList.contains('open');document.querySelectorAll('.submenu').forEach(x=>x.classList.remove('open'));document.querySelectorAll('.nav-parent').forEach(x=>x.classList.remove('open'));if(willOpen){sub.classList.add('open');parent.classList.add('open')}navigate(type)}
function setActiveNav(type,id){document.querySelectorAll('.nav-btn,.nav-parent,.subnav-btn').forEach(x=>x.classList.remove('active'));if(type==='executive')$('navExecutive').classList.add('active');if(type==='ci'){$('navCi').classList.add('active');$('ciSubmenu').classList.add('open');$('navCi').classList.add('open')}if(type==='pmr'){$('navPmr').classList.add('active');$('pmrSubmenu').classList.add('open');$('navPmr').classList.add('open')}if(id){const el=document.querySelector('[data-route="'+type+'/'+id+'"]');if(el)el.classList.add('active')}}
function navigate(type,id){currentPage={type,id};window.location.hash=id?type+'/'+id:type;setActiveNav(type,id);renderCurrentPage();window.scrollTo({top:0,behavior:'smooth'})}
function renderCurrentPage(){if(currentPage.type==='executive')renderExecutive();else if(!currentPage.id)renderSegmentOverview(currentPage.type);else renderSubsegment(currentPage.type,currentPage.id)}

function lineChart(values,labels){const W=560,H=210,p=28,max=Math.max(...values)+5,min=Math.min(...values)-5;const pts=values.map((v,i)=>{const x=p+i*(W-p*2)/(values.length-1),y=H-p-(v-min)*(H-p*2)/(max-min);return [x,y]}),poly=pts.map(a=>a.join(',')).join(' ');return '<svg viewBox="0 0 '+W+' '+H+'" aria-label="Indexed trend chart"><g stroke="#eee8ef" stroke-width="1">'+[0,1,2,3].map(i=>'<line x1="'+p+'" y1="'+(40+i*40)+'" x2="'+(W-p)+'" y2="'+(40+i*40)+'"/>').join('')+'</g><polyline fill="none" stroke="#4a2351" stroke-width="4" points="'+poly+'"/><polyline fill="none" stroke="#e8005a" stroke-width="9" opacity=".08" points="'+poly+'"/>'+pts.map((a,i)=>'<circle cx="'+a[0]+'" cy="'+a[1]+'" r="5" fill="#e8005a"/><text x="'+a[0]+'" y="'+(H-7)+'" text-anchor="middle" font-size="10" fill="#756d79">'+labels[i]+'</text><text x="'+a[0]+'" y="'+(a[1]-10)+'" text-anchor="middle" font-size="9" font-weight="700" fill="#4a2351">'+values[i]+'</text>').join('')+'</svg>'}
function marketBarChart(m){
  if(!m)return '';
  const max=Math.max(m.current,m.forecast),w1=Math.max(8,Math.round(m.current/max*100)),w2=100;
  return '<div class="market-bars"><div class="market-bar-row"><span>'+m.currentYear+'</span><div><i style="width:'+w1+'%"></i></div><b>$'+m.current.toFixed(2)+'B</b></div><div class="market-bar-row"><span>'+m.forecastYear+'</span><div><i style="width:'+w2+'%"></i></div><b>$'+m.forecast.toFixed(2)+'B</b></div></div><div class="market-caption"><strong>'+m.cagr+'% CAGR</strong><span>'+esc(m.region)+'</span></div>';
}
function sourcesHtml(d){
  const ev=(window.DOMAIN_EVIDENCE&&DOMAIN_EVIDENCE[currentDomain])||{},en=enrichment();
  const combined=[...(ev.sources||[]),...(en.sources||[]),...(d.sources||[])];
  const seen=new Set();
  const unique=combined.filter(s=>{const k=s.url||s.title;if(seen.has(k))return false;seen.add(k);return true});
  return '<div class="source-list">'+unique.map(s=>'<div class="source-item"><a href="'+s.url+'" target="_blank" rel="noopener">'+esc(s.title)+' ↗</a>'+(s.fact?'<p>'+esc(s.fact)+'</p>':'')+(s.date?'<div class="source-date">'+esc(s.date)+'</div>':'')+'</div>').join('')+'</div>';
}
function pageFacts(d){
  const ev=(window.DOMAIN_EVIDENCE&&DOMAIN_EVIDENCE[currentDomain])||{};
  const facts=(ev.facts&&ev.facts.length)?ev.facts:d.metrics;
  return '<div class="fact-grid">'+facts.map(m=>'<div class="fact-card"><div class="flabel">'+esc(m.label)+'</div><div class="fvalue">'+esc(m.value)+'</div><div class="fnote">'+esc(m.note)+(m.source!==undefined?' <span class="source-chip">S'+(m.source+1)+'</span>':'')+'</div></div>').join('')+'</div>';
}
