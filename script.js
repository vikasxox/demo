/* =========================================================
   CONTRACTOR DEMO — EDITABLE CONTENT LIVES IN siteConfig BELOW
   This is intentionally a single-file static site. Upload the
   whole folder to GitHub Pages and it works without a build step.
   ========================================================= */
const siteConfig = {
  businessName: '[Business Name]',
  shortName: '[BN]',
  brandMark: '[BM]',
  trade: 'Home Renovation & Contracting',
  city: '[City]',
  region: 'Ontario',
  phone: '(416) 555-0123',
  phoneHref: 'tel:+14165550123',
  email: 'hello@businessname.ca',
  emailHref: 'mailto:hello@businessname.ca',
  tagline: 'Quality Craftsmanship. Built to Last.',
  address: '[Street Address], [City], Ontario',
  hours: 'Mon–Fri · 8:00 AM–6:00 PM',
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  services: [
    {icon:'▦', title:'Interior Painting', text:'Clean prep, crisp lines, durable finishes, and a refresh that changes the whole feel of a room.'},
    {icon:'⌂', title:'Basement Finishing', text:'Turn underused square footage into comfortable living, work, guest, or entertainment space.'},
    {icon:'◇', title:'Kitchen & Bath Renovation', text:'Functional layouts and polished finishes built around how you actually use the space.'},
    {icon:'⌁', title:'Decks & Fencing', text:'Outdoor spaces designed for Canadian seasons, everyday use, and long-term durability.'},
    {icon:'▤', title:'Flooring', text:'Professional installation with the right materials, preparation, transitions, and finishing details.'},
    {icon:'✿', title:'Landscaping', text:'Practical curb appeal, clean lines, and outdoor upgrades that complement the home.'}
  ],
  projects: [
    {before:'https://images.pexels.com/photos/19337913/pexels-photo-19337913.jpeg?cs=srgb&dl=pexels-campio-saez-825339182-19337913.jpg&fm=jpg', after:'https://images.pexels.com/photos/10855205/pexels-photo-10855205.jpeg?cs=srgb&dl=pexels-derwin-edwards-163348797-10855205.jpg&fm=jpg', title:'Modern Kitchen Refresh', caption:'A brighter, smarter kitchen with warm oak detailing and clean-lined finishes.'},
    {before:'https://images.pexels.com/photos/4092026/pexels-photo-4092026.jpeg?cs=srgb&dl=pexels-curtis-adams-1694007-4092026.jpg&fm=jpg', after:'https://images.pexels.com/photos/10847194/pexels-photo-10847194.jpeg?cs=srgb&dl=pexels-d-huy-hoang-163344088-10847194.jpg&fm=jpg', title:'Basement Transformation', caption:'A previously unfinished lower level turned into a warm, flexible family space.'},
    {before:'https://images.pexels.com/photos/7476608/pexels-photo-7476608.jpeg?cs=srgb&dl=pexels-ismail-hamzaoui-45080693-7476608.jpg&fm=jpg', after:'https://images.pexels.com/photos/7587880/pexels-photo-7587880.jpeg?cs=srgb&dl=pexels-artbovich-7587880.jpg&fm=jpg', title:'Exterior & Outdoor Upgrade', caption:'Fresh exterior finishes paired with a refined outdoor area built for everyday living.'}
  ],
  process: [
    {num:'01', title:'Free Consultation', text:'We learn what you want, inspect the space, and talk through practical options.'},
    {num:'02', title:'Detailed Quote', text:'You receive a clear scope, realistic allowances, and a straightforward next step.'},
    {num:'03', title:'Expert Work', text:'Our team coordinates the work, communicates progress, and protects your home.'},
    {num:'04', title:'Final Walkthrough', text:'We review the finished work together and make sure the details are right.'}
  ],
  gallery: [
    {src:'https://images.pexels.com/photos/10855205/pexels-photo-10855205.jpeg?cs=srgb&dl=pexels-derwin-edwards-163348797-10855205.jpg&fm=jpg', title:'Kitchen Detail', type:'tall'},
    {src:'https://images.pexels.com/photos/10161222/pexels-photo-10161222.jpeg?cs=srgb&dl=pexels-yuraforrat-10161222.jpg&fm=jpg', title:'Bright Interior', type:''},
    {src:'https://images.pexels.com/photos/15824912/pexels-photo-15824912.jpeg?cs=srgb&dl=pexels-curtis-adams-1694007-15824912.jpg&fm=jpg', title:'Custom Stair Detail', type:''},
    {src:'https://images.pexels.com/photos/34053442/pexels-photo-34053442.jpeg?cs=srgb&dl=pexels-fernanda-neitzel-2155821056-34053442.jpg&fm=jpg', title:'Outdoor Living', type:'wide'},
    {src:'https://images.pexels.com/photos/5493666/pexels-photo-5493666.jpeg?cs=srgb&dl=pexels-shkrabaanthony-5493666.jpg&fm=jpg', title:'Finished Basement', type:''},
    {src:'https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?cs=srgb&dl=pexels-reneterp-3990359.jpg&fm=jpg', title:'Exterior Refresh', type:''}
  ],
  testimonials: [
    {text:'The communication was excellent from day one. The finished kitchen looks like it belongs in a magazine, but the process itself felt surprisingly straightforward.', name:'Jordan Davis', city:'Oakville, ON'},
    {text:'We finally have a basement we actually use. The crew kept the site organized, explained each stage, and finished with the details we cared about.', name:'Maya Patel', city:'Mississauga, ON'},
    {text:'From the quote to the final walkthrough, there were no mystery costs and no disappearing acts. The result is exactly what we hoped for.', name:'Chris Morgan', city:'Burlington, ON'}
  ],
  benefits: [
    {icon:'✓', title:'Licensed & Insured', text:'Professional work backed by the right coverage and a commitment to doing things properly.'},
    {icon:'$', title:'Transparent Pricing', text:'Clear scopes and upfront expectations, so the budget does not become a guessing game.'},
    {icon:'◷', title:'On-Time Delivery', text:'Practical scheduling, regular updates, and a team that respects your time.'},
    {icon:'⌑', title:'Warranty on Work', text:'Confidence after completion, with warranty coverage on eligible workmanship.'}
  ],
  areas: ['[City]','Mississauga','Oakville','Burlington','Milton','Etobicoke','Brampton','Vaughan'],
  faqs: [
    ['How much does a renovation cost?','Every project depends on size, materials, access, and scope. We provide a detailed quote after understanding the work rather than giving you a made-up number from a photo.'],
    ['How long will my project take?','We give a realistic schedule based on the scope and coordinate the work so you know what is happening and when.'],
    ['Do you handle permits?','For projects that require permits, we can discuss the applicable requirements and coordinate the process as part of the project scope.'],
    ['Can you work with my existing designs or materials?','Yes. We can work from designer plans and can discuss owner-supplied finishes or fixtures before the project begins.'],
    ['How do I get started?','Send an inquiry through the form or call us. We will arrange a consultation, understand the project, and outline the next step.']
  ]
};

const $ = (s, r=document) => r.querySelector(s), $$ = (s,r=document) => [...r.querySelectorAll(s)];
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function hydrateBrand(){
  $$('[data-business-name]').forEach(e=>e.textContent=siteConfig.businessName);
  $$('[data-city]').forEach(e=>e.textContent=`${siteConfig.city}, ${siteConfig.region}`);
  $$('[data-tagline]').forEach(e=>e.textContent=siteConfig.tagline);
  $$('[data-phone]').forEach(e=>e.textContent=siteConfig.phone);
  $$('[data-email]').forEach(e=>e.textContent=siteConfig.email);
  $$('[data-hours]').forEach(e=>e.textContent=siteConfig.hours);
  $$('[data-phone-href]').forEach(e=>e.href=siteConfig.phoneHref);
  $$('[data-email-href]').forEach(e=>e.href=siteConfig.emailHref);
  $$('[data-instagram]').forEach(e=>e.href=siteConfig.instagram);
  $$('[data-facebook]').forEach(e=>e.href=siteConfig.facebook);
  $('.loader-mark').textContent=siteConfig.shortName; $$('.brand-mark').forEach(e=>e.textContent=siteConfig.brandMark);
  document.title=`${siteConfig.businessName} | ${siteConfig.trade} in ${siteConfig.city}, ${siteConfig.region}`;
  document.querySelector('meta[name="description"]').content=`${siteConfig.businessName} delivers ${siteConfig.trade.toLowerCase()} services in ${siteConfig.city}, ${siteConfig.region}. ${siteConfig.tagline}`;
  $('#year').textContent=new Date().getFullYear();
  $('#localBusinessSchema').textContent=JSON.stringify({
    '@context':'https://schema.org','@type':'LocalBusiness','name':siteConfig.businessName,'description':siteConfig.tagline,'telephone':siteConfig.phone,'email':siteConfig.email,'url':location.href,
    'address':{'@type':'PostalAddress','streetAddress':siteConfig.address,'addressLocality':siteConfig.city,'addressRegion':siteConfig.region,'addressCountry':'CA'},
    'areaServed':siteConfig.areas,'priceRange':'$$','aggregateRating':{'@type':'AggregateRating','ratingValue':'5','reviewCount':siteConfig.testimonials.length}
  });
}

function renderServices(){
  $('#servicesGrid').innerHTML=siteConfig.services.map((s,i)=>`<article class="service-card reveal" style="--i:${i}"><div class="icon">${s.icon}</div><h3>${s.title}</h3><p>${s.text}</p><span class="card-arrow">↗</span></article>`).join('');
}
function renderProjects(){
  $('#projectTabs').innerHTML=siteConfig.projects.map((p,i)=>`<button class="project-tab ${i===0?'active':''}" data-project="${i}">${String(i+1).padStart(2,'0')} · ${p.title}</button>`).join('');
  $$('.project-tab').forEach(b=>b.addEventListener('click',()=>selectProject(+b.dataset.project)));
  selectProject(0);
}
function selectProject(i){
  const p=siteConfig.projects[i]; $('#beforeImg').src=p.before; $('#afterImg').src=p.after; $('#beforeImg').alt=`Before: ${p.title}`; $('#afterImg').alt=`After: ${p.title}`; $('#projectTitle').textContent=p.title; $('#projectCaption').textContent=p.caption; $$('.project-tab').forEach((b,n)=>b.classList.toggle('active',n===i)); setSlider(50,false);
}
let sliderValue=50;
function setSlider(value, announce=true){sliderValue=Math.max(0,Math.min(100,value)); $('#beforeLayer').style.width=sliderValue+'%'; $('#compareHandle').style.left=sliderValue+'%'; $('#compareHandle').setAttribute('aria-valuenow',Math.round(sliderValue)); if(announce) $('#compareHandle').setAttribute('aria-valuetext',`${Math.round(sliderValue)} percent before image visible`)}
function initSlider(){
  const wrap=$('#comparison'), handle=$('#compareHandle');
  const move=e=>{const r=wrap.getBoundingClientRect(); setSlider(((e.clientX-r.left)/r.width)*100)};
  let dragging=false;
  wrap.addEventListener('pointerdown',e=>{dragging=true;wrap.setPointerCapture?.(e.pointerId);move(e)});
  wrap.addEventListener('pointermove',e=>{if(dragging)move(e)}); ['pointerup','pointercancel','lostpointercapture'].forEach(ev=>wrap.addEventListener(ev,()=>dragging=false));
  handle.addEventListener('keydown',e=>{const step=e.shiftKey?10:3;if(e.key==='ArrowLeft'){e.preventDefault();setSlider(sliderValue-step)}if(e.key==='ArrowRight'){e.preventDefault();setSlider(sliderValue+step)}if(e.key==='Home'){e.preventDefault();setSlider(0)}if(e.key==='End'){e.preventDefault();setSlider(100)}});
  if(!prefersReduced){setTimeout(()=>$('#compareHint').classList.add('show'),900)}
}
function renderProcess(){ $('#processGrid').innerHTML=siteConfig.process.map((s,i)=>`<article class="step reveal" style="--i:${i}"><div class="step-num">${s.num}</div><h3>${s.title}</h3><p>${s.text}</p></article>`).join('') }
function renderGallery(){ $('#galleryGrid').innerHTML=siteConfig.gallery.map((g,i)=>`<figure class="gallery-item ${g.type} reveal" style="--i:${i}"><img loading="lazy" src="${g.src}" alt="${g.title} renovation project" data-lightbox="${g.src}"><figcaption class="gallery-overlay"><strong>${g.title}</strong><span>${siteConfig.city}, ${siteConfig.region}</span></figcaption></figure>`).join(''); $$('#galleryGrid img').forEach(img=>img.addEventListener('click',()=>openLightbox(img.src,img.alt))); }
function renderBenefits(){ $('#benefitGrid').innerHTML=siteConfig.benefits.map((b,i)=>`<article class="benefit-card reveal" style="--i:${i}"><div class="icon">${b.icon}</div><h3>${b.title}</h3><p>${b.text}</p></article>`).join(''); }
function renderAreas(){ $('#areasList').innerHTML=siteConfig.areas.map(a=>`<span class="area-pill">${a}</span>`).join('') }
function renderFaq(){ $('#faqList').innerHTML=siteConfig.faqs.map((f,i)=>`<article class="faq-item ${i===0?'open':''}"><button class="faq-question" aria-expanded="${i===0?'true':'false'}">${f[0]}<span>+</span></button><div class="faq-answer"><p>${f[1]}</p></div></article>`).join(''); $$('.faq-question').forEach(btn=>btn.addEventListener('click',()=>{const item=btn.parentElement,open=item.classList.toggle('open');btn.setAttribute('aria-expanded',open)})); }
function renderForm(){ const select=$('select[name="service"]'); select.innerHTML='<option value="">Choose a service</option>'+siteConfig.services.map(s=>`<option>${s.title}</option>`).join(''); $('#quoteForm').addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget;if(!form.checkValidity()){form.reportValidity();return}$('#formSuccess').classList.add('show');form.reset();}); }

let reviewIndex=0, reviewTimer;
function showReview(i){reviewIndex=(i+siteConfig.testimonials.length)%siteConfig.testimonials.length;const r=siteConfig.testimonials[reviewIndex]; $('#reviewText').textContent=r.text;$('#reviewName').textContent=r.name;$('#reviewCity').textContent=r.city;$('#reviewAvatar').textContent=r.name.split(' ').map(x=>x[0]).join('').slice(0,2);const p=$('#reviewProgress');p.style.transition='none';p.style.width='0';requestAnimationFrame(()=>{p.style.transition='width 5.8s linear';p.style.width='100%'});}
function initReviews(){showReview(0);$('#reviewPrev').onclick=()=>{showReview(reviewIndex-1);restartReviews()};$('#reviewNext').onclick=()=>{showReview(reviewIndex+1);restartReviews()};restartReviews()}
function restartReviews(){clearInterval(reviewTimer);reviewTimer=setInterval(()=>showReview(reviewIndex+1),6000)}

function initReveal(){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target)}}),{threshold:.12});$$('.reveal').forEach(el=>observer.observe(el)); const processObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.querySelector('.process-line span')?.style.setProperty('width','100%'); $$('.step',e.target).forEach((s,i)=>setTimeout(()=>s.classList.add('in-view'),i*180));processObs.unobserve(e.target)}}),{threshold:.25});$('.process-track')&&processObs.observe($('.process-track'));}
function initNavbar(){const nav=$('#navbar');window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',scrollY>35);if(!prefersReduced)document.documentElement.style.setProperty('--parallax',`${Math.min(scrollY*.12,90)}px`)},{passive:true});const menu=$('.menu-toggle');menu.addEventListener('click',()=>{const open=nav.classList.toggle('menu-open');menu.setAttribute('aria-expanded',open)});$$('.nav-links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('menu-open');menu.setAttribute('aria-expanded','false')}));}
function initLightbox(){const box=$('#lightbox');const img=$('#lightboxImg');function close(){box.classList.remove('open');box.setAttribute('aria-hidden','true')}window.openLightbox=(src,alt)=>{img.src=src;img.alt=alt;box.classList.add('open');box.setAttribute('aria-hidden','false')};$('#lightboxClose').onclick=close;box.addEventListener('click',e=>{if(e.target===box)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});}

hydrateBrand();renderServices();renderProjects();renderProcess();renderGallery();renderBenefits();renderAreas();renderFaq();renderForm();initSlider();initReviews();initLightbox();initReveal();initNavbar();
window.addEventListener('load',()=>setTimeout(()=>$('.page-loader').classList.add('done'),650));
