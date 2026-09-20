const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const deviconStyles = document.createElement('link');
deviconStyles.rel = 'stylesheet';
deviconStyles.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
document.head.appendChild(deviconStyles);
const shareDescription = 'Computer Science Specialist and technology professional with experience in mobile applications, web development, databases, networking, systems support, embedded systems, graphics/UI design, Agentic AI, software engineering, and IT support.';
const personalPreviewImage = 'https://potifolio-olive.vercel.app/assets/images/og-image.jpeg';
document.querySelectorAll('meta[property="og:image"], meta[name="twitter:image"]').forEach(meta => meta.setAttribute('content', personalPreviewImage));
document.querySelector('link[rel="icon"]')?.setAttribute('href', personalPreviewImage);
document.querySelector('meta[name="description"]')?.setAttribute('content', shareDescription);
document.querySelector('meta[property="og:description"]')?.setAttribute('content', shareDescription);
if (!document.querySelector('meta[name="twitter:description"]')) { const twitterDescription = document.createElement('meta'); twitterDescription.name = 'twitter:description'; twitterDescription.content = shareDescription; document.head.appendChild(twitterDescription); }
document.querySelectorAll('.hero-copy .lead, .page-hero .lead').forEach(copy => { if (!copy.textContent.includes('fast learner')) copy.textContent += ' I am a fast learner of new technologies and a fast problem solver.'; });
if (document.title.startsWith('About |')) { const aboutLead = document.querySelector('.page-hero .lead'); if (aboutLead) aboutLead.textContent = 'I’m Emmanuel Martine Charles, a Computer Science graduate and technology professional with experience in mobile applications, web development, databases, networking, systems support, embedded systems, graphics/UI design, Agentic AI, software engineering, and IT support.'; }
if (document.title.startsWith('About |')) document.body.classList.add('about-page');
if (document.title.startsWith('About |')) { const aboutLead = document.querySelector('.page-hero .lead'); if (aboutLead) aboutLead.textContent = aboutLead.textContent.replace('Martin', 'Martine'); }
document.querySelectorAll('.brand').forEach(brand => { const name = Array.from(brand.childNodes).find(node => node.nodeType === Node.TEXT_NODE); if (name) name.textContent = 'Emmanuel '; });
const landingEyebrow = document.querySelector('.hero .eyebrow');
if (landingEyebrow) landingEyebrow.textContent = 'Computer technology expert · NIT Tanzania';
document.querySelectorAll('h2').forEach(heading => { if (heading.textContent.trim() === 'Projects with purpose.') heading.textContent = 'A sample of accomplished projects.'; });
if (menuButton) menuButton.addEventListener('click', () => { nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', nav.classList.contains('open')); });
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav?.classList.remove('open')));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
const search = document.querySelector('#site-search');
if (search) search.addEventListener('keydown', event => { if (event.key === 'Enter' && search.value.trim()) { const query = search.value.toLowerCase(); window.location.href = query.includes('project') ? 'projects.html' : query.includes('skill') ? 'skills.html' : query.includes('contact') ? 'contact.html' : 'about.html'; } });
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const projectInfo = {
  'pangaleo.co.tz': ['01 · Mobile application', 'Panga Leo', 'A full-cycle mobile app published on Google Play Store and Apple App Store.'],
  'kachehub.com': ['02 · Web platform', 'KacheHub', 'A focused web platform designed around a clear, useful digital experience.'],
  'malenyapharmacy.com': ['03 · Business website', 'Malenya Pharmacy', 'A professional pharmacy website that helps customers discover trusted services.'],
  'assets/previews/pangaleo.html': ['01 · Mobile application', 'Panga Leo', 'A full-cycle mobile app published on Google Play Store and Apple App Store.'],
  'assets/previews/kachehub.html': ['02 · Web platform', 'KacheHub', 'A focused web platform designed around a clear, useful digital experience.'],
  'assets/previews/malenyapharmacy.html': ['03 · Business website', 'Malenya Pharmacy', 'A professional pharmacy website that helps customers discover trusted services.']
};
document.querySelectorAll('.project-preview iframe').forEach(frame => {
  const key = Object.keys(projectInfo).find(domain => frame.src.includes(domain));
  if (!key) return;
  const [type, title, description] = projectInfo[key];
  const overlay = document.createElement('div');
  overlay.className = 'preview-overlay';
  overlay.innerHTML = `<small>${type}</small><strong>${title}</strong><span>${description}</span>`;
  frame.parentElement.appendChild(overlay);
  const previewImage = document.createElement('img');
  const imagePath = key.includes('pangaleo') ? 'assets/previews/pangaleo.png' : key.includes('kachehub') ? 'assets/previews/kachehub.png' : 'assets/previews/malenyapharmacy.jpeg';
  previewImage.className = 'preview-fallback';
  previewImage.src = imagePath;
  previewImage.alt = `${title} website preview image`;
  frame.parentElement.insertBefore(previewImage, frame);
  let frameLoaded = false;
  frame.addEventListener('load', () => { frameLoaded = true; });
  const fallbackDelay = key.includes('kachehub') || key.includes('malenyapharmacy') ? 2500 : 5000;
  setTimeout(() => { if (!frameLoaded || key.includes('kachehub') || key.includes('malenyapharmacy')) previewImage.classList.add('is-visible'); }, fallbackDelay);
});

const iconPaths = {
  TikTok: '<path d="M15 3c.5 1.9 1.6 3 3.6 3.2v2.4c-1.4-.1-2.6-.5-3.6-1.2v5.3a5.3 5.3 0 1 1-4.5-5.2v2.5a2.8 2.8 0 1 0 2 2.7V3H15Z"/>',
  Instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
  Facebook: '<path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.4-.1c-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1Z"/>',
  YouTube: '<path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"/>',
  LinkedIn: '<path d="M5.1 7.4A1.8 1.8 0 1 1 5 3.8a1.8 1.8 0 0 1 .1 3.6ZM3.5 9h3.2v10.5H3.5V9Zm5.2 0h3.1v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v5.8h-3.2v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.2H8.7V9Z"/>',
  GitHub: '<path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/>',
  WhatsApp: '<path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.3-6.1-3.5-8.3Zm-8.4 18.1h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.8 1.1-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.7-3.2-.3-.5.3-.5.8-1.7.1-.2 0-.4 0-.5l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.4 1.8.8 2.4.9 3.3.8.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.2-.5-.3Z"/>',
  Email: '<path d="M3 5h18v14H3V5Zm1.5 1.5 7.5 5.2 7.5-5.2M4.5 17.5l5.2-4m10.8 4-5.2-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'
};
document.querySelectorAll('.socials a').forEach(link => {
  const label = link.getAttribute('aria-label') || ({in: 'LinkedIn', GH: 'GitHub', WA: 'WhatsApp', '@': 'Email'}[link.textContent.trim()]);
  if (iconPaths[label]) link.innerHTML = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[label]}</svg>`;
});
document.querySelectorAll('.contact-icon').forEach(icon => {
  const label = icon.textContent.trim();
  const path = label === 'W' ? iconPaths.WhatsApp : label === '@' ? iconPaths.Email : '';
  if (path) icon.innerHTML = `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;
});
const providerIcons = document.querySelectorAll('.contact-row .contact-icon');
if (providerIcons[0]) providerIcons[0].innerHTML = '<img src="assets/images/logo-halotel.png" alt="Halotel">';
if (providerIcons[1]) providerIcons[1].innerHTML = '<img src="assets/images/logo-vodacom.png" alt="Vodacom">';
document.querySelectorAll('.contact-row').forEach(row => {
  const title = row.querySelector('strong');
  const detail = row.querySelector('span');
  if (!title || !detail) return;
  if (title.textContent.includes('WhatsApp')) detail.textContent = '0628 115 130 · Halotel';
  if (title.textContent === 'Phone 2') detail.textContent = '0763 115 132 · Vodacom';
});
const socialLinks = [
  ['TikTok', 'https://www.tiktok.com/@vanadizy'],
  ['Instagram', 'https://www.instagram.com/vanadizy'],
  ['Facebook', 'https://www.facebook.com/vanadizy'],
  ['YouTube', 'https://www.youtube.com/@vanadizyemachazy'],
  ['LinkedIn', 'https://www.linkedin.com/in/emmanuel-charles-072677372'],
  ['GitHub', 'https://github.com/vanadizy'],
  ['WhatsApp', 'https://wa.me/255628115130'],
  ['Email', 'mailto:vanadizyemachazy@gmail.com']
];
document.querySelectorAll('.socials').forEach(group => {
  group.innerHTML = socialLinks.map(([label, href]) => `<a href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${label}"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[label]}</svg></a>`).join('');
});
document.querySelectorAll('.copyright').forEach(copyright => { copyright.innerHTML = '<span>© 2026 Emmanuel Martine Charles. All rights reserved.</span><span>Made with care in Tanzania.</span>'; });
document.querySelectorAll('.stats').forEach(stats => {
  stats.innerHTML = '<div class="stat"><strong>NIT</strong><span>Computer Science graduate from the National Institute of Transport.</span></div><div class="stat"><strong>Build</strong><span>Mobile apps, web systems, databases, and practical digital products.</span></div><div class="stat"><strong>Support</strong><span>Networking, operating systems, IT support, embedded systems, and problem solving.</span></div>';
});
document.querySelectorAll('.skill-grid').forEach(grid => {
  if (document.querySelector('.language-section')) return;
  grid.insertAdjacentHTML('afterend', '<section class="section language-section reveal"><div class="section-head"><div><div class="eyebrow">Programming toolkit</div><h2>Languages and data tools.</h2></div><p>I work with these technologies in both visual development environments and command-line workflows where appropriate.</p></div><div class="language-grid"><div class="language-card glass"><i class="devicon-php-plain" aria-hidden="true"></i><strong>PHP</strong><span>Web backends and server-side development.</span></div><div class="language-card glass"><i class="devicon-flutter-plain" aria-hidden="true"></i><strong>Flutter</strong><span>Cross-platform mobile application development.</span></div><div class="language-card glass"><i class="devicon-react-original" aria-hidden="true"></i><strong>React</strong><span>Interactive and component-based web interfaces.</span></div><div class="language-card glass"><i class="devicon-mysql-original" aria-hidden="true"></i><strong>MySQL</strong><span>Database work through GUI tools and command line.</span></div><div class="language-card glass"><i class="devicon-postgresql-plain" aria-hidden="true"></i><strong>PostgreSQL</strong><span>SQL development through GUI tools and command line.</span></div></div></section>');
  const languageSection = document.querySelector('.language-section');
  observer.observe(languageSection);
  languageSection.insertAdjacentHTML('afterend', '<section class="section category-section reveal"><div class="section-head"><div><div class="eyebrow">Technology categories</div><h2>Where each tool fits.</h2></div><p>A practical view of the technologies I use across the product and software development lifecycle.</p></div><div class="category-grid"><article class="glass category-card"><span class="tag">Frontend and mobile</span><h3>Interfaces people use</h3><p class="muted">React for component-based web interfaces and Flutter for cross-platform mobile applications.</p><div class="category-tools"><span><i class="devicon-react-original"></i> React</span><span><i class="devicon-flutter-plain"></i> Flutter</span></div></article><article class="glass category-card"><span class="tag">Backend and programming</span><h3>Logic behind the product</h3><p class="muted">PHP, C, and C++ for server-side logic, general programming, systems work, and performance-focused applications.</p><div class="category-tools"><span><i class="devicon-php-plain"></i> PHP</span><span><i class="devicon-c-plain"></i> C</span><span><i class="devicon-cplusplus-plain"></i> C++</span></div></article><article class="glass category-card"><span class="tag">Database and SQL</span><h3>Structured information</h3><p class="muted">MySQL and PostgreSQL for relational data, SQL development, reporting, and database work through GUI tools or command line.</p><div class="category-tools"><span><i class="devicon-mysql-original"></i> MySQL</span><span><i class="devicon-postgresql-plain"></i> PostgreSQL</span></div></article><article class="glass category-card"><span class="tag">Embedded systems</span><h3>Software connected to hardware</h3><p class="muted">Arduino and ESP32 projects using C/C++ concepts for microcontrollers, sensors, connected devices, and practical hardware prototypes.</p><div class="category-tools"><span><i class="devicon-arduino-plain"></i> Arduino</span><span class="text-tool">ESP32</span><span><i class="devicon-cplusplus-plain"></i> C++</span></div></article></div></section>');
  observer.observe(document.querySelector('.category-section'));
  languageSection.insertAdjacentHTML('afterend', '<section class="section ai-section reveal"><div class="section-head"><div><div class="eyebrow">AI and quality engineering</div><h2>Building thoughtfully with AI.</h2></div><p>AI supports the development process, but quality still comes from clear thinking, disciplined engineering, and human review.</p></div><div class="ai-grid"><article class="glass ai-card"><span class="tag">Agentic AI</span><h3>Practical AI assistance</h3><p class="muted">I explore Agentic AI to help break down requirements, plan tasks, generate useful implementation ideas, test assumptions, and improve developer productivity while keeping decisions under human control.</p></article><article class="glass ai-card"><span class="tag">Iterative looping</span><h3>Learn, build, review, improve</h3><p class="muted">I use an iterative loop: understand the problem, create a solution, test the result, learn from feedback, and refine the next version. Each loop should make the software clearer, safer, and more useful.</p></article><article class="glass ai-card"><span class="tag">SDLC and methodologies</span><h3>Quality throughout the lifecycle</h3><p class="muted">I follow the Software Development Life Cycle and suitable methodologies to move from requirements and design through development, testing, deployment, maintenance, and continuous improvement.</p></article></div><div class="glass quality-note"><div class="eyebrow">What makes software quality</div><h3>Quality means more than simply working once.</h3><p class="muted">I see quality software as software that solves the intended problem accurately, remains reliable under expected use, protects data, performs efficiently, is accessible to its users, is maintainable by its developers, and can evolve as needs change. Testing, documentation, security thinking, feedback, and responsible release practices all contribute to that quality.</p></div></section>');
  observer.observe(document.querySelector('.ai-section'));
});
document.querySelectorAll('.contact-info').forEach(info => {
  info.querySelectorAll('.contact-row').forEach(row => { if (row.textContent.includes('Location')) row.remove(); });
  const details = document.createElement('div');
  details.innerHTML = '<div class="contact-row"><div class="contact-icon">⌖</div><div><strong>Location</strong><span>5 Mori St, Mwenge, Dar es Salaam, Tanzania</span><a href="https://www.google.com/maps/search/?api=1&query=5+Mori+St+Mwenge+Dar+es+Salaam+Tanzania" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a></div></div><div class="contact-row"><div class="contact-icon">24</div><div><strong>Working hours</strong><span>24 hours daily</span></div></div>';
  info.appendChild(details);
});
document.querySelectorAll('.contact-row').forEach(row => {
  if (row.textContent.includes('Working hours') && !row.querySelector('a')) row.lastElementChild.insertAdjacentHTML('beforeend', '<a href="tel:+255628115130">Call now ↗</a>');
});
const utilityIcons = {
  location: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="9" r="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>',
  clock: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  phone: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 3.5 9 3l2 4-1.8 1.7a14.4 14.4 0 0 0 6.1 6.1L17 13l4 2-.5 2.5c-.3 1.4-1.6 2.3-3 2.1A16.8 16.8 0 0 1 4.4 6.5c-.2-1.4.7-2.7 2.1-3Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>'
};
document.querySelectorAll('.contact-row').forEach(row => {
  const icon = row.querySelector('.contact-icon');
  if (!icon || icon.querySelector('img')) return;
  if (row.textContent.includes('Location')) icon.innerHTML = utilityIcons.location;
  if (row.textContent.includes('Working hours')) icon.innerHTML = utilityIcons.clock;
});
document.querySelectorAll('.contact-row').forEach(row => {
  const content = row.lastElementChild;
  const text = row.textContent;
  if (!content || content.querySelector('.contact-actions')) return;
  if (text.includes('0628 115 130')) content.insertAdjacentHTML('beforeend', '<div class="contact-actions"><a href="tel:+255628115130"><span class="inline-icon">' + utilityIcons.phone + '</span>Call</a><a href="https://wa.me/255628115130" target="_blank" rel="noopener noreferrer">WhatsApp</a></div>');
  if (text.includes('0763 115 132')) content.insertAdjacentHTML('beforeend', '<div class="contact-actions"><a href="tel:+255763115132"><span class="inline-icon">' + utilityIcons.phone + '</span>Call</a></div>');
  if (text.includes('vanadizyemachazy@gmail.com')) content.insertAdjacentHTML('beforeend', '<div class="contact-actions"><a href="mailto:vanadizyemachazy@gmail.com">Email me</a></div>');
});
const projectsFooter = '<div class="footer-projects"><strong>Projects</strong><a href="https://pangaleo.co.tz" target="_blank" rel="noopener noreferrer">Panga Leo ↗</a><a href="https://kachehub.com" target="_blank" rel="noopener noreferrer">KacheHub ↗</a><a href="https://malenyapharmacy.com" target="_blank" rel="noopener noreferrer">Malenya Pharmacy ↗</a></div>';
document.querySelectorAll('.footer-grid').forEach(footer => footer.insertAdjacentHTML('beforeend', projectsFooter));
const projectList = document.querySelector('.project-list');
if (projectList) {
  projectList.insertAdjacentHTML('afterend', '<section class="section project-inquiry reveal"><div class="glass form-card"><div class="eyebrow">Start a project</div><h2>Tell me what you’re building.</h2><p class="muted">Share a few details and I’ll get back to you about the next step.</p><form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"><div class="form-columns"><label>Name<input name="name" type="text" autocomplete="name" required></label><label>Email<input name="email" type="email" autocomplete="email" required></label></div><div class="form-columns"><label>Phone / WhatsApp<input name="phone" type="tel" autocomplete="tel"></label><label>Project type<input name="project_type" type="text" placeholder="Website, app, support..." required></label></div><label>Project details<textarea name="project_details" placeholder="What would you like to build or improve?" required></textarea></label><button class="btn btn-primary" type="submit">Send project inquiry →</button></form></div></section>');
  const inquiry = projectList.nextElementSibling;
  if (inquiry) observer.observe(inquiry);
}
if (document.querySelector('.hero') && !document.querySelector('.location-section')) {
  document.querySelector('main').insertAdjacentHTML('beforeend', '<section class="section location-section reveal"><div class="shell"><div class="section-head"><div><div class="eyebrow">Find me</div><h2>Based in Dar es Salaam.</h2></div><p>Available 24 hours daily for software development, IT support, and project conversations.</p></div><div class="location-grid"><div class="glass location-details"><div class="contact-row"><div class="contact-icon">⌖</div><div><strong>Location</strong><span>5 Mori St, Mwenge, Dar es Salaam, Tanzania</span><a href="https://www.google.com/maps/search/?api=1&query=5+Mori+St+Mwenge+Dar+es+Salaam+Tanzania" target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a></div></div><div class="contact-row"><div class="contact-icon">24</div><div><strong>Working hours</strong><span>24 hours daily</span></div></div></div><div class="glass map-card"><iframe src="https://www.google.com/maps?q=5+Mori+St+Mwenge+Dar+es+Salaam+Tanzania&output=embed" title="Map showing 5 Mori St, Mwenge, Dar es Salaam" loading="lazy"></iframe></div></div></div></section>');
  observer.observe(document.querySelector('.location-section'));
  document.querySelector('.location-section').insertAdjacentHTML('afterend', '<section class="section home-contact-options reveal"><div class="shell"><div class="section-head"><div><div class="eyebrow">Contact Emmanuel</div><h2>Choose how to reach me.</h2></div><p>For a quick question, project discussion, or support request, use the option that works best for you.</p></div><div class="contact-option-grid"><a class="contact-option glass" href="https://wa.me/255628115130" target="_blank" rel="noopener noreferrer"><span class="option-icon">' + '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + iconPaths.WhatsApp + '</svg>' + '</span><strong>WhatsApp</strong><span>Chat on 0628 115 130</span></a><a class="contact-option glass" href="tel:+255628115130"><span class="option-icon">' + utilityIcons.phone + '</span><strong>Call Emmanuel</strong><span>0628 115 130</span></a><a class="contact-option glass" href="mailto:vanadizyemachazy@gmail.com"><span class="option-icon">' + '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + iconPaths.Email + '</svg>' + '</span><strong>Email</strong><span>vanadizyemachazy@gmail.com</span></a></div></div></section>');
  observer.observe(document.querySelector('.home-contact-options'));
}
document.querySelectorAll('.contact-row').forEach(row => {
  if (row.textContent.includes('Working hours') && !row.querySelector('a')) row.lastElementChild.insertAdjacentHTML('beforeend', '<a href="tel:+255628115130">Call now ↗</a>');
});
