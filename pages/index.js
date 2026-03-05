const page = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vitor — Computer Science</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0a0a0a;
    --surface: #111111;
    --border: #1e1e1e;
    --text: #e8e4dc;
    --muted: #6b6660;
    --accent: #c8a97e;
    --accent2: #7eb8c8;
    --accent3: #c87e9a;
    --green: #7ec87e;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    line-height: 1.7;
    overflow-x: hidden;
  }

  /* GRAIN OVERLAY */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
    opacity: 0.4;
  }

  /* NAV */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 48px;
    background: rgba(10,10,10,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }

  .nav-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 20px;
    color: var(--accent);
    letter-spacing: 0.02em;
  }

  .nav-links {
    display: flex;
    gap: 32px;
    list-style: none;
  }

  .nav-links a {
    color: var(--muted);
    text-decoration: none;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    transition: color 0.2s;
  }

  .nav-links a:hover { color: var(--text); }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 80px;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 48px 80px 80px;
    border-right: 1px solid var(--border);
  }

  .hero-eyebrow {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .hero-eyebrow::before {
    content: '';
    width: 32px;
    height: 1px;
    background: var(--accent);
  }

  .hero-name {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(52px, 6vw, 88px);
    line-height: 0.95;
    margin-bottom: 32px;
    color: var(--text);
  }

  .hero-name em {
    font-style: italic;
    color: var(--accent);
  }

  .hero-desc {
    color: var(--muted);
    font-size: 13px;
    line-height: 1.8;
    max-width: 400px;
    margin-bottom: 48px;
  }

  .hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 48px;
  }

  .tag {
    border: 1px solid var(--border);
    padding: 4px 12px;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    transition: all 0.2s;
  }

  .tag:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  .hero-cta {
    display: flex;
    gap: 16px;
  }

  .btn {
    padding: 12px 28px;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s;
  }

  .btn-primary {
    background: var(--accent);
    color: #0a0a0a;
    border: 1px solid var(--accent);
  }

  .btn-primary:hover {
    background: transparent;
    color: var(--accent);
  }

  .btn-outline {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border);
  }

  .btn-outline:hover {
    border-color: var(--text);
  }

  .hero-right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 80px 80px 80px 48px;
    position: relative;
    overflow: hidden;
  }

  .hero-visual {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 380px;
    height: 380px;
    border-radius: 50%;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: spin 30s linear infinite;
  }

  .hero-visual::after {
    content: '';
    position: absolute;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    border: 1px dashed #1e1e1e;
    animation: spin 20s linear infinite reverse;
  }

  @keyframes spin { to { transform: translate(-50%, -50%) rotate(360deg); } }

  .orbit-dot {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
  }

  .orbit-dot:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); }
  .orbit-dot:nth-child(2) { bottom: 0; left: 50%; transform: translateX(-50%); }
  .orbit-dot:nth-child(3) { left: 0; top: 50%; transform: translateY(-50%); background: var(--accent2); }
  .orbit-dot:nth-child(4) { right: 0; top: 50%; transform: translateY(-50%); background: var(--accent3); }

  .hero-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    position: relative;
    z-index: 2;
  }

  .stat {
    background: var(--bg);
    padding: 28px 24px;
    transition: background 0.2s;
  }

  .stat:hover { background: var(--surface); }

  .stat-number {
    font-family: 'DM Serif Display', serif;
    font-size: 36px;
    color: var(--accent);
    line-height: 1;
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
  }

  /* SECTION */
  section {
    padding: 120px 80px;
    border-top: 1px solid var(--border);
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .section-header {
    display: flex;
    align-items: baseline;
    gap: 24px;
    margin-bottom: 64px;
  }

  .section-num {
    font-size: 11px;
    color: var(--accent);
    letter-spacing: 0.1em;
  }

  .section-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(32px, 4vw, 52px);
    line-height: 1;
    color: var(--text);
  }

  .section-line {
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  /* EXPERIENCE */
  .timeline {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 0;
  }

  .timeline-item {
    display: contents;
  }

  .timeline-meta {
    padding: 32px 32px 32px 0;
    border-right: 1px solid var(--border);
    position: relative;
  }

  .timeline-meta::after {
    content: '';
    position: absolute;
    right: -5px;
    top: 40px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--bg);
    border: 1px solid var(--accent);
    transition: background 0.2s;
  }

  .timeline-item:hover .timeline-meta::after {
    background: var(--accent);
  }

  .timeline-date {
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
  }

  .timeline-where {
    font-size: 11px;
    color: var(--muted);
    margin-top: 4px;
  }

  .timeline-content {
    padding: 32px 0 32px 48px;
    border-bottom: 1px solid var(--border);
  }

  .timeline-meta {
    border-bottom: 1px solid var(--border);
  }

  .timeline-role {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 12px;
  }

  .timeline-desc {
    color: var(--muted);
    font-size: 12px;
    line-height: 1.8;
    margin-bottom: 16px;
  }

  .timeline-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .chip {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 3px 10px;
    font-size: 10px;
    letter-spacing: 0.08em;
    color: var(--muted);
  }

  .chip.accent { border-color: var(--accent); color: var(--accent); }
  .chip.accent2 { border-color: var(--accent2); color: var(--accent2); }
  .chip.accent3 { border-color: var(--accent3); color: var(--accent3); }

  /* PROJECTS */
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
  }

  .project-card {
    background: var(--bg);
    padding: 48px;
    position: relative;
    overflow: hidden;
    transition: background 0.3s;
    cursor: default;
  }

  .project-card:hover {
    background: var(--surface);
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;
  }

  .project-card:hover::before { transform: scaleX(1); }

  .project-card.blue::before { background: var(--accent2); }
  .project-card.pink::before { background: var(--accent3); }
  .project-card.green::before { background: var(--green); }

  .project-num {
    font-size: 11px;
    color: var(--accent);
    letter-spacing: 0.1em;
    margin-bottom: 24px;
    display: block;
  }

  .project-card.blue .project-num { color: var(--accent2); }
  .project-card.pink .project-num { color: var(--accent3); }
  .project-card.green .project-num { color: var(--green); }

  .project-title {
    font-family: 'DM Serif Display', serif;
    font-size: 26px;
    color: var(--text);
    margin-bottom: 8px;
  }

  .project-sub {
    font-size: 11px;
    color: var(--accent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .project-card.blue .project-sub { color: var(--accent2); }
  .project-card.pink .project-sub { color: var(--accent3); }
  .project-card.green .project-sub { color: var(--green); }

  .project-desc {
    color: var(--muted);
    font-size: 12px;
    line-height: 1.8;
    margin-bottom: 24px;
  }

  .project-highlight {
    background: var(--surface);
    border-left: 2px solid var(--accent);
    padding: 12px 16px;
    font-size: 11px;
    color: var(--text);
    margin-bottom: 20px;
  }

  .project-card.blue .project-highlight { border-color: var(--accent2); }
  .project-card.pink .project-highlight { border-color: var(--accent3); }
  .project-card.green .project-highlight { border-color: var(--green); }

  /* SKILLS */
  .skills-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }

  .skill-group-title {
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 32px;
  }

  .skill-bar-item {
    margin-bottom: 20px;
  }

  .skill-bar-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .skill-name {
    font-size: 12px;
    color: var(--text);
    letter-spacing: 0.05em;
  }

  .skill-level {
    font-size: 10px;
    color: var(--muted);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .skill-bar {
    height: 2px;
    background: var(--border);
    position: relative;
    overflow: hidden;
  }

  .skill-bar-fill {
    height: 100%;
    background: var(--accent);
    width: 0%;
    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
  }

  .skill-bar-fill.blue { background: var(--accent2); }
  .skill-bar-fill.pink { background: var(--accent3); }

  section.visible .skill-bar-fill { width: var(--w); }

  .soft-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
  }

  .soft-tag {
    border: 1px solid var(--border);
    padding: 8px 16px;
    font-size: 11px;
    color: var(--muted);
    letter-spacing: 0.08em;
    transition: all 0.2s;
  }

  .soft-tag:hover {
    border-color: var(--accent);
    color: var(--text);
  }

  /* AWARDS */
  .awards-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    margin-bottom: 64px;
  }

  .award-card {
    background: var(--bg);
    padding: 40px;
    transition: background 0.2s;
  }

  .award-card:hover { background: var(--surface); }

  .award-icon {
    font-size: 28px;
    margin-bottom: 16px;
  }

  .award-title {
    font-family: 'DM Serif Display', serif;
    font-size: 20px;
    color: var(--text);
    margin-bottom: 8px;
  }

  .award-org {
    font-size: 11px;
    color: var(--accent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .award-desc {
    font-size: 12px;
    color: var(--muted);
    line-height: 1.7;
  }

  /* CERTS */
  .cert-row {
    display: flex;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
  }

  .cert-card {
    background: var(--bg);
    padding: 32px 40px;
    flex: 1;
    transition: background 0.2s;
  }

  .cert-card:hover { background: var(--surface); }

  .cert-issuer {
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 8px;
  }

  .cert-name {
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: var(--text);
  }

  /* LANGUAGES */
  .lang-row {
    display: flex;
    gap: 48px;
    margin-top: 48px;
  }

  .lang-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .lang-name {
    font-family: 'DM Serif Display', serif;
    font-size: 22px;
    color: var(--text);
  }

  .lang-level {
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
  }

  /* FOOTER */
  footer {
    border-top: 1px solid var(--border);
    padding: 64px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-left {
    font-family: 'DM Serif Display', serif;
    font-size: 36px;
    color: var(--text);
  }

  .footer-left em {
    font-style: italic;
    color: var(--accent);
  }

  .footer-contact {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: right;
  }

  .footer-contact a {
    color: var(--muted);
    text-decoration: none;
    font-size: 12px;
    transition: color 0.2s;
  }

  .footer-contact a:hover { color: var(--accent); }

  /* ANIMATIONS */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hero-eyebrow { animation: fadeUp 0.6s ease 0.2s both; }
  .hero-name { animation: fadeUp 0.6s ease 0.35s both; }
  .hero-desc { animation: fadeUp 0.6s ease 0.5s both; }
  .hero-tags { animation: fadeUp 0.6s ease 0.65s both; }
  .hero-cta { animation: fadeUp 0.6s ease 0.8s both; }
  .hero-stats { animation: fadeUp 0.6s ease 0.95s both; }

  /* MOBILE */
  @media (max-width: 900px) {
    nav { padding: 16px 24px; }
    .nav-links { display: none; }
    .hero { grid-template-columns: 1fr; }
    .hero-left { padding: 60px 24px; border-right: none; }
    .hero-right { padding: 0 24px 60px; }
    .hero-visual { display: none; }
    section { padding: 80px 24px; }
    .timeline { grid-template-columns: 1fr; }
    .timeline-meta { border-right: none; padding-right: 0; padding-bottom: 8px; padding-top: 32px; border-bottom: none; }
    .timeline-meta::after { display: none; }
    .timeline-content { padding-left: 0; }
    .projects-grid { grid-template-columns: 1fr; }
    .skills-layout { grid-template-columns: 1fr; gap: 40px; }
    .awards-row { grid-template-columns: 1fr; }
    .cert-row { flex-direction: column; }
    footer { flex-direction: column; gap: 32px; align-items: flex-start; }
    .footer-contact { text-align: left; }
  }
</style>
</head>
<body>

<nav>
  <span class="nav-logo">Vitor</span>
  <ul class="nav-links">
    <li><a href="#experience">Experience</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#awards">Awards</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- HERO -->
<div class="hero">
  <div class="hero-left">
    <div class="hero-eyebrow">Computer Science · Maringá, Brazil</div>
    <h1 class="hero-name">Vitor<br><em>Padovani</em></h1>
    <p class="hero-desc">
      CS student at State University of Maringá building production systems, research pipelines, and real-time simulations — from hospital automation to neurosurgical tracking in Montreal.
    </p>
    <div class="hero-tags">
      <span class="tag">Backend Engineering</span>
      <span class="tag">Computer Vision</span>
      <span class="tag">Medical Imaging</span>
      <span class="tag">Embedded Systems</span>
      <span class="tag">Data Engineering</span>
      <span class="tag">Full-Stack</span>
    </div>
    <div class="hero-cta">
      <a href="#contact" class="btn btn-primary">Get in Touch</a>
      <a href="#projects" class="btn btn-outline">View Projects</a>
    </div>
  </div>
  <div class="hero-right">
    <div class="hero-visual">
      <div class="orbit-dot"></div>
      <div class="orbit-dot"></div>
      <div class="orbit-dot"></div>
      <div class="orbit-dot"></div>
    </div>
    <div class="hero-stats">
      <div class="stat">
        <div class="stat-number">1000+</div>
        <div class="stat-label">Monthly active users</div>
      </div>
      <div class="stat">
        <div class="stat-number">300+</div>
        <div class="stat-label">Packets/sec pipeline</div>
      </div>
      <div class="stat">
        <div class="stat-number">2×</div>
        <div class="stat-label">Hackathon champion</div>
      </div>
      <div class="stat">
        <div class="stat-number">3</div>
        <div class="stat-label">Countries & labs</div>
      </div>
    </div>
  </div>
</div>

<!-- EXPERIENCE -->
<section id="experience">
  <div class="section-header">
    <span class="section-num">01</span>
    <h2 class="section-title">Experience</h2>
    <div class="section-line"></div>
  </div>
  <div class="timeline">

    <div class="timeline-item">
      <div class="timeline-meta">
        <div class="timeline-date">May–Jul 2025</div>
        <div class="timeline-where">Montreal<br>Neurological Inst.</div>
      </div>
      <div class="timeline-content">
        <div class="timeline-role">Research Intern — Motion Capture & Neurosurgical Simulation</div>
        <p class="timeline-desc">Built a custom C++ communication layer replacing the PLUS Toolkit for seamless OptiTrack Motive ↔ 3D Slicer data exchange via OpenIGTLink — sustaining 300+ packets/second for low-latency real-time neurosurgical simulation. Integrated OptiTrack Flex 13 cameras for precise 3D surgical tool tracking during corticotomy procedures. Funded by a Mitacs Research Scholarship from the Government of Canada.</p>
        <div class="timeline-chips">
          <span class="chip accent">C++</span>
          <span class="chip accent">OpenIGTLink</span>
          <span class="chip accent">VTK</span>
          <span class="chip accent">NatNet SDK</span>
          <span class="chip">Medical Imaging</span>
          <span class="chip">Mitacs Scholar</span>
        </div>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-meta">
        <div class="timeline-date">Jun 2025</div>
        <div class="timeline-where">NA-MIC Project Week<br>ETS Montreal</div>
      </div>
      <div class="timeline-content">
        <div class="timeline-role">Hackathon Developer — Real-Time Point Cloud Streaming</div>
        <p class="timeline-desc">Engineered a real-time 3D point cloud & surface streaming system for 3D Slicer using OpenIGTLink. Benchmarked multiple streaming approaches — achieving 900-point clouds at ~30 FPS and 100,000-point meshes at ~60 FPS. Combined computer science, biomedical engineering, and medical image computing.</p>
        <div class="timeline-chips">
          <span class="chip accent">C++</span>
          <span class="chip accent">VTK / ITK</span>
          <span class="chip accent">OpenIGTLinkIO</span>
          <span class="chip">3D Slicer</span>
          <span class="chip">Point Clouds</span>
        </div>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-meta">
        <div class="timeline-date">Oct 2024–Apr 2025</div>
        <div class="timeline-where">HUM<br>UEM Hospital</div>
      </div>
      <div class="timeline-content">
        <div class="timeline-role">Intern — Digital Transformation & Data Analytics</div>
        <p class="timeline-desc">Integrated an interdisciplinary team across CS, Statistics, and Communications driving digital transformation at a regional teaching hospital. Automated NSP-HUM email responses — cutting response times by 30%. Built real-time dashboards for patient safety indicators and developed data-driven workflows improving operational transparency.</p>
        <div class="timeline-chips">
          <span class="chip accent2">Python</span>
          <span class="chip accent2">Data Visualization</span>
          <span class="chip accent2">Process Automation</span>
          <span class="chip">Healthcare Analytics</span>
          <span class="chip">ETL</span>
        </div>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-meta">
        <div class="timeline-date">May 2023–Apr 2024</div>
        <div class="timeline-where">Research Lab<br>UEM</div>
      </div>
      <div class="timeline-content">
        <div class="timeline-role">Undergraduate Researcher — Multi-Robot Computer Vision</div>
        <p class="timeline-desc">Developed Manna Bot-Eye: a centralized coordination system for multiple mobile robots using bird's eye view cameras, HSV color-space processing, and real-time Bluetooth control via ESP32. Designed the full perception–decision–control pipeline with contour detection, orientation estimation, and movement command dispatch. Funded by Fundação Araucária; supervised by Prof. Linnyer Beatrys Ruiz Aylon.</p>
        <div class="timeline-chips">
          <span class="chip accent3">Python</span>
          <span class="chip accent3">OpenCV</span>
          <span class="chip accent3">ESP32</span>
          <span class="chip">Embedded Systems</span>
          <span class="chip">Computer Vision</span>
          <span class="chip">Robotics</span>
        </div>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-meta">
        <div class="timeline-date">Feb 2022–Present</div>
        <div class="timeline-where">UEM<br>Maringá, PR</div>
      </div>
      <div class="timeline-content">
        <div class="timeline-role">Bachelor of Computer Science — State University of Maringá</div>
        <p class="timeline-desc">Rigorous program covering algorithms, data structures, computer architecture, software engineering, databases, AI/ML, distributed systems, computational theory, digital image processing, and concurrent programming.</p>
        <div class="timeline-chips">
          <span class="chip">In Progress</span>
          <span class="chip">Expected 2026</span>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- PROJECTS -->
<section id="projects">
  <div class="section-header">
    <span class="section-num">02</span>
    <h2 class="section-title">Projects</h2>
    <div class="section-line"></div>
  </div>
  <div class="projects-grid">

    <div class="project-card">
      <span class="project-num">01 — Production</span>
      <h3 class="project-title">Parusya</h3>
      <div class="project-sub">Java · Spring Boot · React · PostgreSQL</div>
      <p class="project-desc">QR Code attendance system built solo — from conception to production. Replaced manual check-in flows at recurring events with a digital pipeline: each participant has a personal QR scanned on arrival, generating an immutable timestamped log.</p>
      <div class="project-highlight">
        300+ active participants weekly · Live at parusya.com.br
      </div>
      <div class="timeline-chips">
        <span class="chip accent">Java 21</span>
        <span class="chip accent">Spring Boot 3</span>
        <span class="chip accent">JWT + RSA</span>
        <span class="chip accent">RBAC</span>
        <span class="chip">PostgreSQL</span>
        <span class="chip">Flyway</span>
        <span class="chip">Railway + Vercel</span>
        <span class="chip">Cloudflare</span>
      </div>
    </div>

    <div class="project-card blue">
      <span class="project-num">02 — Personal</span>
      <h3 class="project-title">TaskFlow</h3>
      <div class="project-sub">Java · Spring Boot · Vanilla JS</div>
      <p class="project-desc">Full-stack task management app demonstrating clean architecture: RESTful APIs with Spring Web + Spring Data JPA, DTO/Mapper separation, global error handling, and a responsive dark-themed frontend in pure ES6+ JavaScript — no frameworks.</p>
      <div class="project-highlight">
        Full CRUD · Priority & status filters · Statistics dashboard
      </div>
      <div class="timeline-chips">
        <span class="chip accent2">Java 17</span>
        <span class="chip accent2">Spring Boot 3.1</span>
        <span class="chip accent2">H2 Database</span>
        <span class="chip">HTML5 / CSS3</span>
        <span class="chip">Fetch API</span>
      </div>
    </div>

    <div class="project-card pink">
      <span class="project-num">03 — Tooling</span>
      <h3 class="project-title">PPR Course Downloader</h3>
      <div class="project-sub">Python · Selenium · SQLite FTS5</div>
      <p class="project-desc">End-to-end data pipeline: Selenium + BeautifulSoup4 scraper with session persistence via cookie injection, RegEx data sanitization, ETL into SQLite with referential integrity, and a CLI with FTS5 inverted indices + custom ranking algorithm for sub-millisecond full-text search.</p>
      <div class="project-highlight">
        Local search engine · Hierarchical file system organization
      </div>
      <div class="timeline-chips">
        <span class="chip accent3">Python</span>
        <span class="chip accent3">Selenium</span>
        <span class="chip accent3">BeautifulSoup4</span>
        <span class="chip">SQLite FTS5</span>
        <span class="chip">ETL Pipeline</span>
        <span class="chip">OOP</span>
      </div>
    </div>

    <div class="project-card green">
      <span class="project-num">04 — Research</span>
      <h3 class="project-title">Manna Bot-Eye</h3>
      <div class="project-sub">Python · OpenCV · ESP32 · Bluetooth</div>
      <p class="project-desc">Centralized multi-robot coordination using overhead cameras and HSV image processing. Full perception–decision–control pipeline: contour detection, orientation angle calculation, and wireless command dispatch to ESP32-driven robots in real time.</p>
      <div class="project-highlight">
        Applicable to cooperative robotics · IEEE VSSS · Funded by Fundação Araucária
      </div>
      <div class="timeline-chips">
        <span class="chip" style="border-color:var(--green);color:var(--green)">Python</span>
        <span class="chip" style="border-color:var(--green);color:var(--green)">OpenCV</span>
        <span class="chip" style="border-color:var(--green);color:var(--green)">ESP32</span>
        <span class="chip">HSV Processing</span>
        <span class="chip">Bluetooth</span>
        <span class="chip">Arduino</span>
      </div>
    </div>

  </div>
</section>

<!-- SKILLS -->
<section id="skills">
  <div class="section-header">
    <span class="section-num">03</span>
    <h2 class="section-title">Skills</h2>
    <div class="section-line"></div>
  </div>
  <div class="skills-layout">
    <div>
      <div class="skill-group-title">Technical — Proficient</div>
      <div class="skill-bar-item">
        <div class="skill-bar-header"><span class="skill-name">C++</span><span class="skill-level">Proficient</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" style="--w:90%"></div></div>
      </div>
      <div class="skill-bar-item">
        <div class="skill-bar-header"><span class="skill-name">Python</span><span class="skill-level">Proficient</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" style="--w:90%"></div></div>
      </div>
      <div class="skill-bar-item">
        <div class="skill-bar-header"><span class="skill-name">Git & Linux</span><span class="skill-level">Proficient</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" style="--w:88%"></div></div>
      </div>
      <div class="skill-bar-item">
        <div class="skill-bar-header"><span class="skill-name">SQL / Databases</span><span class="skill-level">Proficient</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" style="--w:85%"></div></div>
      </div>
      <div class="skill-bar-item">
        <div class="skill-bar-header"><span class="skill-name">Algorithms & Data Structures</span><span class="skill-level">Proficient</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" style="--w:85%"></div></div>
      </div>
      <div class="skill-bar-item">
        <div class="skill-bar-header"><span class="skill-name">NumPy / Arduino / CMake</span><span class="skill-level">Proficient</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" style="--w:80%"></div></div>
      </div>

      <div class="skill-group-title" style="margin-top:40px;">Technical — Familiar</div>
      <div class="skill-bar-item">
        <div class="skill-bar-header"><span class="skill-name">Java / Spring Boot</span><span class="skill-level">Familiar</span></div>
        <div class="skill-bar"><div class="skill-bar-fill blue" style="--w:75%"></div></div>
      </div>
      <div class="skill-bar-item">
        <div class="skill-bar-header"><span class="skill-name">JavaScript / HTML / CSS</span><span class="skill-level">Familiar</span></div>
        <div class="skill-bar"><div class="skill-bar-fill blue" style="--w:70%"></div></div>
      </div>
      <div class="skill-bar-item">
        <div class="skill-bar-header"><span class="skill-name">VTK / Image Processing</span><span class="skill-level">Familiar</span></div>
        <div class="skill-bar"><div class="skill-bar-fill blue" style="--w:68%"></div></div>
      </div>
      <div class="skill-bar-item">
        <div class="skill-bar-header"><span class="skill-name">Docker / OpenIGTLink</span><span class="skill-level">Familiar</span></div>
        <div class="skill-bar"><div class="skill-bar-fill blue" style="--w:60%"></div></div>
      </div>
    </div>
    <div>
      <div class="skill-group-title">Soft Skills</div>
      <div class="soft-skills">
        <span class="soft-tag">Initiative</span>
        <span class="soft-tag">Public Speaking</span>
        <span class="soft-tag">Bilingual Communication</span>
        <span class="soft-tag">Resourcefulness</span>
        <span class="soft-tag">Grit</span>
        <span class="soft-tag">Collaboration</span>
      </div>

      <div class="skill-group-title" style="margin-top:48px;">Languages</div>
      <div class="lang-row">
        <div class="lang-item">
          <span class="lang-name">Português</span>
          <span class="lang-level">Native</span>
        </div>
        <div class="lang-item">
          <span class="lang-name">English</span>
          <span class="lang-level">Fluent</span>
        </div>
        <div class="lang-item">
          <span class="lang-name">中文</span>
          <span class="lang-level">Basic</span>
        </div>
      </div>

      <div class="skill-group-title" style="margin-top:48px;">Certifications</div>
      <div class="cert-row">
        <div class="cert-card">
          <div class="cert-issuer">Google</div>
          <div class="cert-name">Cloud Foundations</div>
        </div>
        <div class="cert-card">
          <div class="cert-issuer">Harvard University</div>
          <div class="cert-name">CS50x</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- AWARDS -->
<section id="awards">
  <div class="section-header">
    <span class="section-num">04</span>
    <h2 class="section-title">Awards & Outreach</h2>
    <div class="section-line"></div>
  </div>
  <div class="awards-row">
    <div class="award-card">
      <div class="award-icon">🥇</div>
      <div class="award-title">1st Place — Elotech Hackathon</div>
      <div class="award-org">AI & Public Management · Nov 2024 · UEM / SECOMP</div>
      <p class="award-desc">AI-based system to reduce absenteeism in public healthcare — won the track on Artificial Intelligence and Public Management.</p>
    </div>
    <div class="award-card">
      <div class="award-icon">🥇</div>
      <div class="award-title">1st Place — Bitzen Hackathon</div>
      <div class="award-org">Software Estimation Accuracy · 2025</div>
      <p class="award-desc">Built a solution improving accuracy, adaptability, and reliability of software effort estimates, winning first place across all submissions.</p>
    </div>
    <div class="award-card">
      <div class="award-icon">🏛️</div>
      <div class="award-title">Manna no Museu</div>
      <div class="award-org">Oscar Niemeyer Museum · Mar 2023 · Curitiba, PR</div>
      <p class="award-desc">Presented an interactive image processing experiment to schoolchildren and teachers — bridging art, technology, and education through hands-on computer vision demos.</p>
    </div>
    <div class="award-card">
      <div class="award-icon">🍁</div>
      <div class="award-title">Mitacs Research Scholarship</div>
      <div class="award-org">Government of Canada · 2025</div>
      <p class="award-desc">Competitive research funding enabling the motion capture and neurosurgical simulation internship at the Montreal Neurological Institute-Hospital.</p>
    </div>
  </div>
</section>

<!-- CONTACT -->
<footer id="contact">
  <div class="footer-left">
    Let's<br><em>connect.</em>
  </div>
  <div class="footer-contact">
    <a href="https://parusya.com.br" target="_blank">parusya.com.br</a>
    <a href="mailto:vitor.azpadovani@gmail.com">vitor.azpadovani@gmail.com</a>
    <a href="https://linkedin.com/in/vitorpadovani/" target="_blank">LinkedIn</a>
    <a href="https://github.com/Vitor-Padovani" target="_blank">GitHub</a>
  </div>
</footer>

<script>
  // Intersection observer for section animations
  const sections = document.querySelectorAll('section');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(s => obs.observe(s));

  // Scroll-triggered skill bars
  const skillSection = document.querySelector('#skills');
  const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.style.getPropertyValue('--w') || getComputedStyle(bar).getPropertyValue('--w');
        });
      }
    });
  }, { threshold: 0.2 });
  if (skillSection) skillObs.observe(skillSection);
</script>
</body>
</html>
`;

function Hello() {
  return <div dangerouslySetInnerHTML={{ __html: page }} />;
}

export default Hello;
