const activities = [
  { icon: '🏗️', title: 'Site Preparation', desc: 'Land clearing, grading, excavation and foundation layout.' },
  { icon: '🧱', title: 'Masonry & Brickwork', desc: 'Brick, block and stone construction with precision finishing.' },
  { icon: '🔩', title: 'Structural Steel', desc: 'Steel frame erection, welding and structural reinforcement.' },
  { icon: '🪵', title: 'Carpentry & Woodwork', desc: 'Custom woodwork, formwork, shuttering and joinery.' },
  { icon: '⚡', title: 'Electrical Works', desc: 'Complete wiring, panel installation and power systems.' },
  { icon: '🚿', title: 'Plumbing & Sanitation', desc: 'Water supply, drainage, sewage and sanitary fittings.' },
  { icon: '❄️', title: 'HVAC Systems', desc: 'Heating, ventilation and air conditioning installation.' },
  { icon: '🎨', title: 'Interior Finishing', desc: 'Plastering, painting, tiling and premium interior work.' },
  { icon: '🏠', title: 'Roofing', desc: 'RCC slab, metal roofing, waterproofing and insulation.' },
  { icon: '🛗', title: 'Elevator & Lifts', desc: 'Passenger and freight elevator installation and maintenance.' },
  { icon: '🌿', title: 'Landscaping', desc: 'Garden design, hardscaping, irrigation and outdoor spaces.' },
  { icon: '📐', title: 'Architecture & Design', desc: 'Blueprints, 3D modeling, structural and interior design.' },
  { icon: '🔒', title: 'Security Systems', desc: 'CCTV, access control, fire alarm and safety systems.' },
  { icon: '🪟', title: 'Glazing & Facades', desc: 'Glass curtain walls, windows, doors and facade cladding.' },
  { icon: '🛣️', title: 'Road & Pavement', desc: 'Internal roads, parking lots, pathways and drainage.' },
  { icon: '📦', title: 'Project Management', desc: 'End-to-end project planning, scheduling and delivery.' },
];

const projects = [
  {
    id: 1, status: 'completed', emoji: '🏢', bg: 'linear-gradient(135deg,#1e3a5f,#2d6a9f)',
    title: 'Tata showroom', location: 'Ujjain, Madhya Pradesh', type: 'Commercial',
    value: '₹42 Cr', area: '1,20,000 sq.ft', duration: '12 months', year: '2023',
    desc: 'A 22-storey premium commercial tower with modern amenities, smart building systems, and LEED Gold certification. Delivered 2 months ahead of schedule.',
    progress: 100,
    reviews: [
      { name: 'Rajesh Mehta', stars: 5, text: 'Exceptional quality and timely delivery. The team was professional throughout.' },
      { name: 'Priya Sharma', stars: 5, text: 'Best construction company we have worked with. Zero compromise on quality.' },
    ]
  },
  {
    id: 2, status: 'completed', emoji: '🏘️', bg: 'linear-gradient(135deg,#1a3a2a,#2d7a4f)',
    title: 'skyline hotel', location: 'Matana kalan, ujjain (M.P)', type: 'Residential',
    value: '₹28 Cr', area: '85,000 sq.ft', duration: '28 months', year: '2023',
    desc: 'A premium residential complex with 120 units, clubhouse, swimming pool, and landscaped gardens. Eco-friendly construction with solar panels.',
    progress: 100,
    reviews: [
      { name: 'Amit Gupta', stars: 5, text: 'Our dream home became reality. Superb finishing and attention to detail.' },
      { name: 'Sunita Verma', stars: 4, text: 'Great project management. Minor delays but overall excellent outcome.' },
    ]
  },
  {
    id: 3, status: 'completed', emoji: '🏥', bg: 'linear-gradient(135deg,#3a1a1a,#8b2020)',
    title: 'MediCare Super Specialty Hospital', location: 'indore, MP', type: 'Healthcare',
    value: '₹65 Cr', area: '2,00,000 sq.ft', duration: '42 months', year: '2022',
    desc: 'A 350-bed super specialty hospital with state-of-the-art OT suites, ICU, and medical gas pipeline systems. Built to international healthcare standards.',
    progress: 100,
    reviews: [
      { name: 'Dr. Vikram Singh', stars: 5, text: 'Flawless execution of a complex healthcare project. Highly recommended.' },
      { name: 'Neha Kapoor', stars: 5, text: 'The MEP coordination was outstanding. Every system works perfectly.' },
    ]
  },
  {
    id: 4, status: 'completed', emoji: '🏫', bg: 'linear-gradient(135deg,#1a2a3a,#2a4a6a)',
    title: 'Delhi Public School Campus', location: 'Ujjain, MP', type: 'Educational',
    value: '₹18 Cr', area: '60,000 sq.ft', duration: '18 months', year: '2022',
    desc: 'A modern school campus with smart classrooms, auditorium, sports complex, and eco-friendly infrastructure for 2000+ students.',
    progress: 100,
    reviews: [
      { name: 'Principal R. Sharma', stars: 5, text: 'Beautiful campus built with great care. Students love the new facilities.' },
    ]
  },
  {
    id: 5, status: 'ongoing', emoji: '🏨', bg: 'linear-gradient(135deg,#2a1a3a,#5a2a8a)',
    title: 'Grand Meridian Hotel', location: 'Panth Mundla (Aerocity), MP', type: 'Hospitality',
    value: '₹95 Cr', area: '3,50,000 sq.ft', duration: '12 months', year: '2026 (Expected)',
    desc: 'A 5-star luxury hotel with 280 rooms, rooftop restaurant, spa, conference center and underground parking. Currently at structural completion stage.',
    progress: 68,
    reviews: []
  },
  {
    id: 6, status: 'ongoing', emoji: '🏭', bg: 'linear-gradient(135deg,#1a2a1a,#2a5a2a)',
    title: 'Cattle feed Industrial Factory', location: 'Tajpur (Ujjain), MP', type: 'Industrial',
    value: '₹55 Cr', area: '4,00,000 sq.ft', duration: '10 months', year: '2025 (Expected)',
    desc: 'A large-scale industrial park with manufacturing units, warehouses, admin block and ETP plant. Currently in finishing and MEP installation phase.',
    progress: 82,
    reviews: []
  },
  {
    id: 7, status: 'ongoing', emoji: '🛍️', bg: 'linear-gradient(135deg,#2a1a1a,#6a2a1a)',
    title: 'Villa', location: 'Sanwer (indore), MP', type: 'Retail',
    value: '₹120 Cr', area: '5,00,000 sq.ft', duration: '54 months', year: '2026 (Expected)',
    desc: 'A premium residential complex with 120 units, clubhouse, swimming pool, and landscaped gardens. Eco-friendly construction with solar panels.',
    progress: 45,
    reviews: []
  },
];

const associates = [
  { name: 'Albert diango', role: 'Structural Engineer', company: 'AK Structural Consultants', icon: '👷', color: '#3b82f6', rating: 4.9, projects: 45 },
  { name: 'Albert diango', role: 'Interior Designer', company: 'Studio Meera', icon: '🎨', color: '#ec4899', rating: 4.8, projects: 32 },
  { name: 'Albert diango', role: 'MEP Contractor', company: 'Patel MEP Solutions', icon: '⚡', color: '#f97316', rating: 4.7, projects: 58 },
  { name: 'Albert diango', role: 'Architect', company: 'Nair & Associates', icon: '📐', color: '#8b5cf6', rating: 5.0, projects: 27 },
  { name: 'Albert diango', role: 'Civil Contractor', company: 'RS Constructions', icon: '🏗️', color: '#22c55e', rating: 4.6, projects: 71 },
  { name: 'Albert diango', role: 'Project Manager', company: 'ProManage India', icon: '📋', color: '#eab308', rating: 4.9, projects: 39 },
  { name: 'Albert diango', role: 'Safety Officer', company: 'SafeWork Consultants', icon: '🦺', color: '#ef4444', rating: 4.8, projects: 63 },
  { name: 'Albert diango', role: 'Landscape Architect', company: 'Green Spaces Studio', icon: '🌿', color: '#10b981', rating: 4.7, projects: 22 },
  { name: 'Albert diango', role: 'Electrical Contractor', company: 'Yadav Electricals', icon: '💡', color: '#f59e0b', rating: 4.5, projects: 84 },
  { name: 'Albert diango', role: 'Quantity Surveyor', company: 'QS Pro Services', icon: '📊', color: '#6366f1', rating: 4.8, projects: 51 },
  { name: 'Albert diango', role: 'Plumbing Contractor', company: 'Tiwari Plumbing Co.', icon: '🚿', color: '#0ea5e9', rating: 4.6, projects: 67 },
  { name: 'Albert diango', role: 'Legal Advisor', company: 'Bhatia Law Firm', icon: '⚖️', color: '#a855f7', rating: 4.9, projects: 35 },
];

const reviews = [
  { name: 'MO.bilal Rashid', role: 'CEO, KOnstruct Group Pvt Ltd', project: 'Skyline Hotel', stars: 5, color: '#3b82f6', initials: 'RM', text: 'Concept Construction delivered our corporate tower with exceptional quality. The team was professional, transparent, and always on schedule. Truly a world-class construction company.' },
  { name: 'Priya Sharma', role: 'Director, GreenLiving Pvt Ltd', project: 'Tata showroom', stars: 5, color: '#ec4899', initials: 'PS', text: 'The residential complex exceeded all our expectations. Every unit was finished to perfection. Our buyers are extremely happy with the quality of construction.' },
  { name: 'Dr. Ishika Soni', role: 'MD, MediCare Hospitals', project: 'MediCare Super Specialty Hospital', stars: 5, color: '#22c55e', initials: 'VS', text: 'Building a hospital requires extreme precision. Concept Construction understood every requirement and delivered a world-class healthcare facility. Outstanding work!' },
  { name: 'Amit Gupta', role: 'Homeowner', project: 'Green Valley Residences', stars: 5, color: '#f97316', initials: 'AG', text: 'My family\'s dream home is now a reality. The finishing quality is superb, and the team was always responsive to our queries. Highly recommend!' },
  { name: 'Principal R. Sharma', role: 'DPS Rohini', project: 'Delhi Public School Campus', stars: 5, color: '#8b5cf6', initials: 'RS', text: 'The school campus is beautiful and functional. Students and teachers love the new infrastructure. Concept Construction truly cares about the end user.' },
  { name: 'Neha Kapoor', role: 'Facility Manager, MediCare', project: 'MediCare Super Specialty Hospital', stars: 5, color: '#eab308', initials: 'NK', text: 'The MEP systems are flawlessly installed. Every pipe, wire and duct is exactly where it should be. The attention to detail is remarkable.' },
];

function renderStars(n) {
  return Array.from({length: 5}, (_, i) => `<i class="fas fa-star" style="color:${i < n ? '#eab308' : '#444'}"></i>`).join('');
}

function renderActivities() {
  document.getElementById('activitiesGrid').innerHTML = activities.map(a => `
    <div class="activity-card">
      <div class="icon">${a.icon}</div>
      <h4>${a.title}</h4>
      <p>${a.desc}</p>
    </div>
  `).join('');
}

let allProjects = [...projects];

function renderProjects(filter = 'all') {
  const filtered = filter === 'all' ? allProjects : allProjects.filter(p => p.status === filter);
  document.getElementById('projectsGrid').innerHTML = filtered.map(p => `
    <div class="project-card" onclick="openProject(${p.id})">
      <div class="project-thumb" style="background:${p.bg}">
        <span>${p.emoji}</span>
        <span class="project-status status-${p.status}">${p.status === 'completed' ? '✓ Completed' : '⚡ Ongoing'}</span>
      </div>
      <div class="project-info">
        <h4>${p.title}</h4>
        <p>${p.desc.substring(0, 90)}...</p>
        <div class="project-meta">
          <span class="meta-item"><i class="fas fa-map-marker-alt"></i>${p.location}</span>
          <span class="meta-item"><i class="fas fa-tag"></i>${p.type}</span>
          <span class="meta-item"><i class="fas fa-rupee-sign"></i>${p.value}</span>
        </div>
        ${p.status === 'ongoing' ? `
          <div style="margin-top:12px">
            <div style="display:flex;justify-content:space-between;font-size:.78rem;color:var(--text2);margin-bottom:4px">
              <span>Progress</span><span style="color:var(--primary);font-weight:600">${p.progress}%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:${p.progress}%"></div></div>
          </div>
        ` : `
          <div class="project-rating">
            <span class="stars">${renderStars(5)}</span>
            <span class="rating-text">5.0 · ${p.reviews.length} reviews</span>
          </div>
        `}
      </div>
    </div>
  `).join('');
}

function filterProjects(filter, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(filter);
}

function openProject(id) {
  const p = projects.find(x => x.id === id);
  document.getElementById('popupContent').innerHTML = `
    <div class="popup-thumb" style="background:${p.bg}">${p.emoji}</div>
    <h3>${p.title}</h3>
    <span class="popup-status status-${p.status}">${p.status === 'completed' ? '✓ Completed' : '⚡ Ongoing'}</span>
    <p>${p.desc}</p>
    <div class="popup-details">
      <div class="popup-detail"><label>Location</label><span>${p.location}</span></div>
      <div class="popup-detail"><label>Type</label><span>${p.type}</span></div>
      <div class="popup-detail"><label>Project Value</label><span>${p.value}</span></div>
      <div class="popup-detail"><label>Built-up Area</label><span>${p.area}</span></div>
      <div class="popup-detail"><label>Duration</label><span>${p.duration}</span></div>
      <div class="popup-detail"><label>Year</label><span>${p.year}</span></div>
    </div>
    ${p.status === 'ongoing' ? `
      <div style="margin-bottom:20px">
        <div style="display:flex;justify-content:space-between;font-size:.85rem;margin-bottom:6px">
          <span style="font-weight:600">Construction Progress</span>
          <span style="color:var(--primary);font-weight:700">${p.progress}%</span>
        </div>
        <div class="progress-bar" style="height:10px"><div class="progress-fill" style="width:${p.progress}%"></div></div>
      </div>
    ` : ''}
    ${p.reviews.length ? `
      <div class="popup-reviews">
        <h4>Client Reviews</h4>
        ${p.reviews.map(r => `
          <div class="popup-review-item">
            <div class="pr-header">
              <span class="pr-name">${r.name}</span>
              <span class="pr-stars">${renderStars(r.stars)}</span>
            </div>
            <p class="pr-text">${r.text}</p>
          </div>
        `).join('')}
      </div>
    ` : '<p style="color:var(--text2);font-style:italic">Project in progress — reviews will be available upon completion.</p>'}
  `;
  document.getElementById('popupOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  document.getElementById('popupOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function renderAssociates() {
  document.getElementById('associatesGrid').innerHTML = associates.map(a => `
    <div class="associate-card">
      <div class="associate-avatar" style="background:${a.color}22;font-size:2rem">${a.icon}</div>
      <h4>${a.name}</h4>
      <div class="role">${a.role}</div>
      <div class="company">${a.company}</div>
      <div class="assoc-rating">
        <span class="stars" style="font-size:.75rem">${renderStars(Math.round(a.rating))}</span>
        <span style="font-size:.78rem;color:var(--text2);margin-left:4px">${a.rating} · ${a.projects} projects</span>
      </div>
    </div>
  `).join('');
}

function renderReviews() {
  document.getElementById('reviewsGrid').innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div class="reviewer-avatar" style="background:${r.color}">${r.initials}</div>
        <div class="reviewer-info">
          <h4>${r.name}</h4>
          <span>${r.role}</span>
        </div>
      </div>
      <div class="review-stars">${renderStars(r.stars)}</div>
      <p class="review-text">${r.text}</p>
      <div class="review-project">Project: <span>${r.project}</span></div>
    </div>
  `).join('');
}

function toggleTheme() {
  document.body.classList.toggle('light');
  const icon = document.querySelector('.theme-toggle i');
  icon.className = document.body.classList.contains('light') ? 'fas fa-sun' : 'fas fa-moon';
}

function smoothScroll(selector) {
  document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}

function showToast(msg, color = '#22c55e') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.background = color;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function submitForm(e) {
  e.preventDefault();
  showToast('✅ Message sent! We\'ll contact you within 24 hours.');
  e.target.reset();
}

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('hamburger');
  nav.classList.toggle('open');
  btn.classList.toggle('open');
}

function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// Close menu on outside click
document.addEventListener('click', e => {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('hamburger');
  if (!nav.contains(e.target) && !btn.contains(e.target)) closeMenu();
});



renderActivities();
renderProjects();
renderAssociates();
renderReviews();
