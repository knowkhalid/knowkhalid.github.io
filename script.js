// ============================================
// KHALID XAIFI - PORTFOLIO SCRIPT
// Static content loader + approved interactions
// ============================================

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("pageshow", () => {
  if (!window.location.hash) {
    setTimeout(() => window.scrollTo(0, 0), 0);
  }
});

const ANALYTICS_STORAGE_KEY = "portfolio_local_analytics_v1";

const DEFAULT_CONTENT = {
  seo: {
    title: "Khalid Xaifi - Creative Technologist",
    description: "Khalid Xaifi - Creative Technologist. AI / Robotics / Design / Editing."
  },
  profile: {
    name: "Khalid Xaifi",
    role: "Creative Technologist",
    location: "Lucknow, India",
    availability: [
      "Portfolio / Website Design",
      "AI & Robotics Project Discussion",
      "Editing / Visual Design",
      "Creative Collaboration"
    ],
    email: "xaifikhalid267@gmail.com",
    phone: "+918299150971",
    phoneDisplay: "+91 8299150971",
    whatsapp: "https://wa.me/918299150971",
    instagram: "https://www.instagram.com/khaaaalidddd__?utm_source=qr",
    github: "#",
    resumeLink: "./resume.html",
    focus: "AI / Robotics / Design / Editing"
  },
  images: {
    heroImage: "./assets/hero-image.png",
    aboutImage: "./assets/my-photo.png",
    connectImage: "./assets/my-photo.png"
  },
  hero: {
    microLabel: "AI / Robotics / Design",
    title: "Khalid.",
    roleLine: "AI / Robotics / Design / Editing",
    description: "I design practical, intelligent, and visually premium systems across AI, robotics, automation, UI design, and creative media.",
    primaryButtonText: "View My Work",
    primaryButtonLink: "#projects"
  },
  about: {
    title: "ABOUT<br>ME",
    paragraphs: [
      "I'm a self-learning creative technologist from Lucknow, building my direction around robotics, AI, electronics, interface design, editing, and visual storytelling. My goal is to create systems that work practically and feel visually premium."
    ],
    stats: [
      { label: "BASED IN", value: "LUCKNOW, INDIA" },
      { label: "FOCUS", value: "AI SYSTEMS & ROBOTICS" },
      { label: "APPROACH", value: "BUILD, TEST, REFINE" }
    ]
  },
  projectsIntro: {
    note: "Three systems. Three problems.<br>Built end to end - hardware, software, and story."
  },
  projects: [
    {
      number: "01",
      title: "AXIS Personal AI OS",
      description: "A personal AI ecosystem with voice, desktop interface, memory, tools, automation, and futuristic UI.",
      category: "AI Systems / Product Design",
      link: "#motion-lab",
      buttonLabel: "Open project",
      visual: "axis"
    },
    {
      number: "02",
      title: "Wire Cutting Machine",
      description: "ESP32 based automation machine with stepper feed, servo cutting, LCD menu, calibration, and batch workflow.",
      category: "Robotics / Embedded Systems",
      link: "#contact",
      buttonLabel: "Discuss project",
      visual: "wire"
    }
  ],
  axis: {
    microLabel: "03 - AXIS // BLUEPRINT",
    headline: "System<br>Details",
    description: "AXIS is my personal AI ecosystem concept - designed as a compact, intelligent workspace that can connect voice, PC tools, memory, automation, visual context, and future robotics control.",
    metaCards: [
      { label: "Core Direction", text: "Personal AI OS" },
      { label: "Interface Style", text: "Orb + Dashboard" },
      { label: "Future Scope", text: "PC / Mobile / Robotics" }
    ],
    panelTopLeft: "AXIS SYSTEM MAP",
    panelTopRight: "LIVE CONCEPT",
    modules: [
      { number: "01", title: "VOICE CORE", description: "Wake - STT - TTS - Commands" },
      { number: "02", title: "PC CONTROL", description: "Apps - Files - Tools - Actions" },
      { number: "03", title: "VISUAL CONTEXT", description: "Screen - UI - Current Task" },
      { number: "04", title: "AUTOMATION", description: "Reminders - Routines - Workflows" }
    ],
    detailStrip: [
      { label: "Current Build Focus", text: "Voice system, dashboard UI, automation logic, PC tools, and clean modular structure." },
      { label: "Design Principle", text: "Useful first, premium second - every feature should work practically and feel visually refined." },
      { label: "Next Direction", text: "More stable assistant behavior, better project memory, and future robotics/IoT connection." }
    ]
  },
  resume: {
    heading: "RESUME",
    subtitle: "Khalid Xaifi - Creative Technologist",
    intro: "Practical builder focused on AI systems, robotics, automation, interface design, editing, and product-style presentation.",
    profileSummary: "I build practical and visually premium systems across AI, robotics, automation, UI design, editing, and product presentation. My work connects technical thinking with creative execution.",
    coreFocus: ["AI Systems", "Robotics & Embedded", "Web / UI Design", "Editing & Visual Design", "Product Thinking"],
    technicalSkills: ["ESP32", "Arduino", "Python", "JavaScript", "HTML / CSS", "Embedded Systems", "Stepper / Servo Control", "Automation Logic", "AI Assistant Planning", "Product Presentation"],
    creativeSkills: ["Graphic Design", "Poster Design", "Thumbnail Design", "Photo Editing", "Video Editing", "Visual Storytelling", "Interface Aesthetics", "Brand-style Presentation"],
    featuredProjects: ["AXIS Personal AI OS", "Wire Cutting Machine"],
    services: ["AI Assistant Concept Planning", "Robotics / Embedded Prototyping", "Website & Portfolio Design", "UI / Interface Design", "Video / Photo Editing", "Posters / Thumbnails / Graphics", "Product Presentation", "Creative Collaboration"],
    contact: [
      { label: "Email", value: "xaifikhalid267@gmail.com", link: "mailto:xaifikhalid267@gmail.com" },
      { label: "Phone", value: "+91 8299150971", link: "tel:+918299150971" },
      { label: "WhatsApp", value: "wa.me/918299150971", link: "https://wa.me/918299150971" },
      { label: "Instagram", value: "@khaaaalidddd__", link: "https://www.instagram.com/khaaaalidddd__?utm_source=qr" },
      { label: "Location", value: "Lucknow, India", link: "" }
    ],
    buttons: [
      { label: "View Resume", link: "./resume.html" },
      { label: "Contact Me", link: "#contact" },
      { label: "WhatsApp", link: "https://wa.me/918299150971" },
      { label: "Email", link: "mailto:xaifikhalid267@gmail.com" }
    ]
  },
  services: [
    { number: "01", title: "AI Assistant Concepts", description: "Voice, memory, and tool-driven personal AI systems designed end to end." },
    { number: "02", title: "Robotics / Embedded Prototyping", description: "ESP32 & Arduino builds - from sensor wiring to working automation." },
    { number: "03", title: "Web & UI Design", description: "Editorial, premium interfaces built with intent, not templates." },
    { number: "04", title: "Video / Photo Editing", description: "Clean, cinematic edits for products, stories, and portfolios." },
    { number: "05", title: "Graphic Design / Posters / Thumbnails", description: "Bold visual identity work built for attention and clarity." },
    { number: "06", title: "Product Presentation", description: "Turning working systems into stories people actually understand." }
  ],
  skills: [
    "AI Systems",
    "Robotics",
    "ESP32",
    "Arduino",
    "Python",
    "JavaScript",
    "UI Design",
    "Web Design",
    "Video Editing",
    "Photo Editing",
    "Graphic Design",
    "Automation",
    "Product Thinking"
  ],
  experience: [
    { number: "PHASE 01", title: "Practical Electronics Foundation", description: "Hands-on circuits, sensors, and microcontrollers - learning by building, not just reading." },
    { number: "PHASE 02", title: "Automation & Machine Logic", description: "Designing control logic for real machines - steppers, servos, calibration, batch workflows." },
    { number: "PHASE 03", title: "UI / Editing / Visual Design", description: "Shaping how systems look and feel - interfaces, edits, and visual storytelling." },
    { number: "PHASE 04", title: "AI Assistant & Robotics Direction", description: "Combining voice, memory, and embedded hardware into one coherent personal AI system." }
  ],
  connect: {
    cards: [
      { number: "01", label: "INSTAGRAM", text: "Follow my creative updates, design experiments, and project visuals.", link: "https://www.instagram.com/khaaaalidddd__?utm_source=qr" },
      { number: "02", label: "WHATSAPP", text: "Message me directly for collaborations, projects, or quick communication.", link: "https://wa.me/918299150971" },
      { number: "03", label: "PHONE", text: "Direct contact number for serious project or collaboration queries.", link: "tel:+918299150971", phoneDisplay: "+91 8299150971", copyValue: "+918299150971" }
    ]
  },
  contact: {
    heading: "CONTACTS",
    closingText: "Let's build something intelligent, visual, and extraordinary.",
    buttonText: "Get In Touch",
    buttonLink: "mailto:xaifikhalid267@gmail.com",
    contactCards: [
      { label: "EMAIL", value: "xaifikhalid267@gmail.com", link: "mailto:xaifikhalid267@gmail.com" },
      { label: "LOCATION", value: "Lucknow, India", link: "" },
      { label: "FOCUS", value: "AI / Robotics / Design / Editing", link: "" }
    ]
  },
  footer: {
    left: "© 2026 KHALID XAIFI",
    right: "BUILT FROM LUCKNOW, INDIA"
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const content = await loadSiteContent();
  renderContent(content);
  initPortfolioInteractions();
});

async function loadSiteContent(){
  try {
    const response = await fetch("./content/site.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Content request failed");
    const remoteContent = await response.json();
    return mergeContent(DEFAULT_CONTENT, remoteContent);
  } catch (error) {
    return DEFAULT_CONTENT;
  }
}

function mergeContent(base, override){
  if (Array.isArray(base)) return Array.isArray(override) ? override : base;
  if (!base || typeof base !== "object") return override ?? base;
  const out = { ...base };
  Object.keys(override || {}).forEach((key) => {
    out[key] = mergeContent(base[key], override[key]);
  });
  return out;
}

function renderContent(data){
  setText(document.querySelector("title"), data.seo.title);
  setAttr(document.querySelector('meta[name="description"]'), "content", data.seo.description);

  setText(document.querySelector(".loader-word"), shortName(data.profile.name));
  setText(document.querySelector(".loader-tag"), data.profile.role.toUpperCase());

  setHTML("heroTitle", data.hero.title);
  setTextId("heroRole", data.profile.role);
  setTextId("heroFocus", data.hero.roleLine);
  setTextId("heroDesc", data.hero.description);
  setTextId("heroButtonText", data.hero.primaryButtonText);
  setAttrId("heroButton", "href", data.hero.primaryButtonLink);
  setTextId("microName", data.profile.name);
  setTextId("microLocation", data.profile.location);
  setTextId("microFocus", data.hero.microLabel);
  setAttrId("heroEmail", "href", `mailto:${data.profile.email}`);
  setAttrId("heroInstagram", "href", data.profile.instagram);
  setAttrId("heroGithub", "href", data.profile.github || "#");
  const resumeLink = document.querySelector(".nav-resume");
  setAttr(resumeLink, "href", data.profile.resumeLink || "#contact");
  if (data.profile.resumeLink && data.profile.resumeLink.startsWith("http")) {
    setAttr(resumeLink, "target", "_blank");
    setAttr(resumeLink, "rel", "noopener");
  } else if (resumeLink) {
    resumeLink.removeAttribute("target");
    resumeLink.removeAttribute("rel");
  }
  setImage("heroImage", data.images.heroImage, `${data.profile.name} portrait`, "./assets/hero-image.png");

  setHTML("aboutTitle", data.about.title);
  renderAboutParagraphs(data.about.paragraphs);
  renderAboutStats(data.about.stats);
  setImage("aboutImage", data.images.aboutImage, `${data.profile.name} portrait`, "./assets/my-photo.png");

  setHTML("portfolioNote", data.projectsIntro.note);
  renderProjects(data.projects);
  renderAxis(data.axis);
  renderResume(data.resume);
  renderExperience(data.experience);
  renderServices(data.services);
  renderSkills(data.skills);
  setImage("connectImage", data.images.connectImage, `${data.profile.name} cropped thumbnail`, "./assets/my-photo.png");
  renderConnect(data.connect.cards);
  renderAvailability(data.profile.availability);
  renderContact(data.contact);
  setTextId("footerLeft", data.footer.left);
  setTextId("footerRight", data.footer.right);
}

function renderAboutParagraphs(paragraphs){
  const wrap = document.getElementById("aboutParagraphs");
  if (!wrap) return;
  wrap.innerHTML = "";
  (paragraphs || []).forEach((text) => {
    const p = document.createElement("p");
    p.className = "reveal-up";
    p.textContent = text;
    wrap.appendChild(p);
  });
}

function renderAboutStats(stats){
  const wrap = document.getElementById("aboutStats");
  if (!wrap) return;
  wrap.innerHTML = "";
  (stats || []).forEach((item) => {
    const row = document.createElement("div");
    row.className = "micro-row";
    row.innerHTML = `<span class="dot"></span>${escapeHTML(item.label)} - ${escapeHTML(item.value)}`;
    wrap.appendChild(row);
  });
}

function renderProjects(projects){
  const wrap = document.getElementById("projectsGrid");
  if (!wrap) return;
  wrap.innerHTML = "";
  (projects || []).forEach((project) => {
    const article = document.createElement("article");
    article.className = "work-card tilt reveal-up";
    article.innerHTML = `
      <div class="work-num">${escapeHTML(project.number)}</div>
      <div class="work-visual ${project.visual === "wire" ? "wire-graphic" : "axis-graphic"}" aria-hidden="true">
        ${project.visual === "wire" ? wireSvg() : axisSvg()}
      </div>
      <h3 class="work-title">${escapeHTML(project.title)}</h3>
      <p class="work-desc">${escapeHTML(project.description)}</p>
      <p class="work-role">${escapeHTML(project.category)}</p>
      <a class="btn-square small" href="${escapeAttr(project.link || "#contact")}" aria-label="${escapeAttr(project.buttonLabel || project.title)}"><span class="btn-arrow">&rarr;</span></a>
    `;
    wrap.appendChild(article);
  });
}

function renderAxis(axis){
  setTextId("axisMicro", axis.microLabel);
  setHTML("axisHeadline", axis.headline);
  setTextId("axisDesc", axis.description);
  setTextId("axisPanelLeft", axis.panelTopLeft);
  setTextId("axisPanelRight", axis.panelTopRight);

  const meta = document.getElementById("axisMeta");
  if (meta) {
    meta.innerHTML = "";
    (axis.metaCards || []).forEach((item) => {
      const div = document.createElement("div");
      div.innerHTML = `<span>${escapeHTML(item.label)}</span><b>${escapeHTML(item.text)}</b>`;
      meta.appendChild(div);
    });
  }

  const modules = document.getElementById("axisModules");
  const moduleClasses = ["module-one", "module-two", "module-three", "module-four"];
  if (modules) {
    modules.innerHTML = "";
    (axis.modules || []).slice(0, 4).forEach((item, index) => {
      const div = document.createElement("div");
      div.className = `axis-module ${moduleClasses[index] || ""}`;
      div.innerHTML = `
        <span>${escapeHTML(item.number)}</span>
        <b>${escapeHTML(item.title)}</b>
        <small>${escapeHTML(item.description)}</small>
      `;
      modules.appendChild(div);
    });
  }

  const strip = document.getElementById("axisStrip");
  if (strip) {
    strip.innerHTML = "";
    (axis.detailStrip || []).forEach((item) => {
      const div = document.createElement("div");
      div.innerHTML = `<span>${escapeHTML(item.label)}</span><b>${escapeHTML(item.text)}</b>`;
      strip.appendChild(div);
    });
  }
}

function renderResume(resume){
  if (!resume) return;
  setTextId("resumeHeading", resume.heading);
  setTextId("resumeSubtitle", resume.subtitle);
  setTextId("resumeIntro", resume.intro);
  setTextId("resumeProfileSummary", resume.profileSummary);
  renderTextList("resumeCoreFocus", resume.coreFocus);
  renderTextList("resumeTechnicalSkills", resume.technicalSkills);
  renderTextList("resumeCreativeSkills", resume.creativeSkills);
  renderTextList("resumeFeaturedProjects", resume.featuredProjects);
  renderTextList("resumeServices", resume.services);

  const contactWrap = document.getElementById("resumeContact");
  if (contactWrap) {
    contactWrap.innerHTML = "";
    (resume.contact || []).forEach((item) => {
      const row = document.createElement("div");
      row.className = "resume-contact-row";
      const value = item.link
        ? `<a href="${escapeAttr(item.link)}">${escapeHTML(item.value)}</a>`
        : `<span>${escapeHTML(item.value)}</span>`;
      row.innerHTML = `<b>${escapeHTML(item.label)}</b>${value}`;
      contactWrap.appendChild(row);
    });
  }

  const buttons = document.getElementById("resumeButtons");
  if (buttons) {
    buttons.innerHTML = "";
    (resume.buttons || []).forEach((button, index) => {
      const a = document.createElement("a");
      a.className = index === 0 ? "btn-square" : "btn-square resume-secondary";
      a.href = button.link || "#contact";
      if ((button.link || "").startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener";
      }
      a.innerHTML = `<span>${escapeHTML(button.label)}</span><span class="btn-arrow">&rarr;</span>`;
      buttons.appendChild(a);
    });
  }
}

function renderTextList(id, items){
  const wrap = document.getElementById(id);
  if (!wrap) return;
  wrap.innerHTML = "";
  (items || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    wrap.appendChild(li);
  });
}

function renderExperience(items){
  const wrap = document.getElementById("experienceList");
  if (!wrap) return;
  wrap.innerHTML = "";
  (items || []).forEach((item) => {
    const div = document.createElement("div");
    div.className = "timeline-item reveal-up";
    div.innerHTML = `
      <span class="t-phase">${escapeHTML(item.number)}</span>
      <h4>${escapeHTML(item.title)}</h4>
      <p>${escapeHTML(item.description)}</p>
    `;
    wrap.appendChild(div);
  });
}

function renderServices(items){
  const wrap = document.getElementById("servicesGrid");
  if (!wrap) return;
  wrap.innerHTML = "";
  (items || []).forEach((item) => {
    const div = document.createElement("div");
    div.className = "service-card reveal-up";
    div.innerHTML = `
      <span class="s-num">${escapeHTML(item.number)}</span>
      <h4>${escapeHTML(item.title)}</h4>
      <p>${escapeHTML(item.description)}</p>
    `;
    wrap.appendChild(div);
  });
}

function renderSkills(skills){
  const wrap = document.getElementById("skillsChips");
  if (!wrap) return;
  wrap.innerHTML = "";
  (skills || []).forEach((skill) => {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = skill;
    wrap.appendChild(span);
  });
}

function renderConnect(cards){
  const wrap = document.getElementById("connectGrid");
  if (!wrap) return;
  wrap.innerHTML = "";
  (cards || []).forEach((card) => {
    const a = document.createElement("a");
    a.href = card.link || "#contact";
    if ((card.link || "").startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    a.className = "connect-card reveal-up";
    const phoneRow = card.copyValue ? `
      <div class="cc-phone-row">
        <span class="cc-phone">${escapeHTML(card.phoneDisplay || card.copyValue)}</span>
        <button type="button" class="copy-btn" data-phone="${escapeAttr(card.copyValue)}">COPY NUMBER</button>
      </div>
    ` : "";
    a.innerHTML = `
      <div class="cc-top">
        <span class="cc-num">${escapeHTML(card.number)}</span>
        <span class="btn-square small cc-arrow"><span class="btn-arrow">&rarr;</span></span>
      </div>
      <h3 class="cc-label">${escapeHTML(card.label)}</h3>
      <p class="cc-text">${escapeHTML(card.text)}</p>
      ${phoneRow}
    `;
    wrap.appendChild(a);
  });
}

function renderAvailability(items){
  const wrap = document.getElementById("availabilityList");
  if (!wrap) return;
  wrap.innerHTML = "";
  (items || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    wrap.appendChild(li);
  });
}

function renderContact(contact){
  setTextId("contactHeading", contact.heading);
  setTextId("contactClosing", contact.closingText);
  setTextId("contactButtonText", contact.buttonText);
  setAttrId("contactButton", "href", contact.buttonLink);
  const wrap = document.getElementById("contactRows");
  if (!wrap) return;
  wrap.innerHTML = "";
  (contact.contactCards || []).forEach((card) => {
    const row = document.createElement("div");
    row.className = "c-row";
    const value = card.link
      ? `<a href="${escapeAttr(card.link)}" class="c-value">${escapeHTML(card.value)}</a>`
      : `<span class="c-value">${escapeHTML(card.value)}</span>`;
    row.innerHTML = `<span class="c-label">${escapeHTML(card.label)}</span>${value}`;
    wrap.appendChild(row);
  });
}

function initPortfolioInteractions(){
  const loader = document.getElementById("loader");
  const nav = document.getElementById("nav");
  const orangeBlock = document.getElementById("orangeBlock");
  const heroPhotoWrap = document.getElementById("heroPhoto");

  function revealLoaded(){
    if (loader) loader.classList.add("hidden");
    if (nav) nav.classList.add("in");
    if (orangeBlock) orangeBlock.classList.add("in");
    if (heroPhotoWrap) heroPhotoWrap.classList.add("in");
    runReveal();
  }

  if (document.readyState === "complete") {
    setTimeout(revealLoaded, 800);
  } else {
    window.addEventListener("load", () => setTimeout(revealLoaded, 1200), { once: true });
  }
  setTimeout(() => {
    if (loader && !loader.classList.contains("hidden")) revealLoaded();
  }, 2200);

  const progressBar = document.getElementById("progressBar");
  function updateProgress(){
    if (!progressBar) return;
    const h = document.documentElement;
    const maxScroll = h.scrollHeight - h.clientHeight;
    const scrolled = maxScroll > 0 ? (h.scrollTop / maxScroll) * 100 : 0;
    progressBar.style.width = scrolled + "%";
  }
  document.addEventListener("scroll", updateProgress, { passive: true });

  const revealTargets = document.querySelectorAll(".reveal-up, .slide-left, .clip-reveal");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
  revealTargets.forEach((el) => revealObserver.observe(el));

  function runReveal(){
    revealTargets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) el.classList.add("visible");
    });
  }

  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = document.querySelectorAll("section[id], header[id]");
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }, { threshold: 0.4 });
  sections.forEach((section) => navObserver.observe(section));

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      mobileMenu.classList.toggle("open");
    });
    document.querySelectorAll(".mobile-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e){
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  const isDesktop = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  if (isDesktop) {
    document.querySelectorAll(".tilt").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (-y / rect.height) * 8;
        const rotateY = (x / rect.width) * 8;
        card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(700px) rotateX(0) rotateY(0) translateY(0)";
      });
    });

    document.querySelectorAll(".chip, .btn-square, .social-dot").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0,0)";
      });
    });
  }

  let ticking = false;
  function onScrollParallax(){
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const spinePath = document.getElementById("spinePath");
        if (spinePath) {
          const docH = document.documentElement.scrollHeight - window.innerHeight;
          const pct = docH > 0 ? y / docH : 0;
          const length = 3000;
          spinePath.style.strokeDasharray = `${length * pct} ${length}`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }
  document.addEventListener("scroll", onScrollParallax, { passive: true });
  onScrollParallax();

  document.querySelectorAll(".connect-card").forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.12}s`;
  });

  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const phone = btn.getAttribute("data-phone");
      const originalText = btn.textContent;
      const done = () => {
        btn.textContent = "COPIED";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove("copied");
        }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(phone).then(done).catch(done);
      } else {
        const tmp = document.createElement("textarea");
        tmp.value = phone;
        document.body.appendChild(tmp);
        tmp.select();
        try { document.execCommand("copy"); } catch(err) {}
        document.body.removeChild(tmp);
        done();
      }
    });
  });

  const timeline = document.getElementById("timeline");
  const timelineLine = document.getElementById("timelineLine");
  if (timeline && timelineLine) {
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          timelineLine.style.height = "100%";
          timelineObserver.disconnect();
        }
      });
    }, { threshold: 0.2 });
    timelineObserver.observe(timeline);
  }

  updateProgress();
  runReveal();
  initLocalAnalytics();
}

function initLocalAnalytics(){
  const startedAt = Date.now();
  const path = location.pathname || "/";
  const sessionId = `${startedAt}-${Math.random().toString(16).slice(2)}`;
  const data = readAnalytics();
  data.totalVisits = (data.totalVisits || 0) + 1;
  data.firstVisit = data.firstVisit || new Date(startedAt).toISOString();
  data.lastVisit = new Date(startedAt).toISOString();
  data.pageViews = data.pageViews || {};
  data.pageViews[path] = (data.pageViews[path] || 0) + 1;
  data.referrers = data.referrers || {};
  const referrer = document.referrer || "Direct / none";
  data.referrers[referrer] = (data.referrers[referrer] || 0) + 1;
  data.devices = data.devices || {};
  const device = window.innerWidth <= 700 ? "Mobile" : window.innerWidth <= 1100 ? "Tablet" : "Desktop";
  data.devices[device] = (data.devices[device] || 0) + 1;
  data.sessions = data.sessions || [];
  data.sessions.unshift({
    id: sessionId,
    path,
    startedAt:new Date(startedAt).toISOString(),
    durationSeconds:0,
    viewport:`${window.innerWidth}x${window.innerHeight}`,
    device
  });
  data.sessions = data.sessions.slice(0, 50);
  saveAnalytics(data);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a, button");
    if (!link) return;
    const label = (link.textContent || link.getAttribute("aria-label") || link.href || "Unknown").trim().replace(/\s+/g, " ").slice(0, 80);
    const current = readAnalytics();
    current.clicks = current.clicks || {};
    current.clicks[label] = (current.clicks[label] || 0) + 1;
    saveAnalytics(current);
  });

  let sessionClosed = false;
  function closeSession(){
    if (sessionClosed) return;
    sessionClosed = true;
    const current = readAnalytics();
    const session = (current.sessions || []).find((item) => item.id === sessionId);
    if (session) {
      session.durationSeconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
      current.totalDurationSeconds = (current.totalDurationSeconds || 0) + session.durationSeconds;
      current.lastVisit = new Date().toISOString();
      saveAnalytics(current);
    }
  }
  window.addEventListener("pagehide", closeSession);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") closeSession();
  });
}

function readAnalytics(){
  try {
    return JSON.parse(localStorage.getItem(ANALYTICS_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveAnalytics(data){
  try {
    localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

function axisSvg(){
  return `
    <svg viewBox="0 0 200 140" class="node-svg">
      <circle cx="100" cy="70" r="6"></circle>
      <circle cx="40" cy="30" r="4"></circle>
      <circle cx="160" cy="30" r="4"></circle>
      <circle cx="40" cy="110" r="4"></circle>
      <circle cx="160" cy="110" r="4"></circle>
      <line x1="100" y1="70" x2="40" y2="30"></line>
      <line x1="100" y1="70" x2="160" y2="30"></line>
      <line x1="100" y1="70" x2="40" y2="110"></line>
      <line x1="100" y1="70" x2="160" y2="110"></line>
    </svg>
  `;
}

function wireSvg(){
  return `
    <svg viewBox="0 0 200 140" class="node-svg">
      <rect x="30" y="55" width="140" height="8"></rect>
      <circle cx="60" cy="59" r="16" class="ring"></circle>
      <circle cx="140" cy="59" r="16" class="ring"></circle>
      <line x1="100" y1="20" x2="100" y2="98"></line>
    </svg>
  `;
}

function setTextId(id, value){
  const el = document.getElementById(id);
  setText(el, value);
}

function setHTML(id, value){
  const el = document.getElementById(id);
  if (el && value !== undefined && value !== null) el.innerHTML = value;
}

function setText(el, value){
  if (el && value !== undefined && value !== null) el.textContent = value;
}

function setAttrId(id, attr, value){
  const el = document.getElementById(id);
  setAttr(el, attr, value);
}

function setAttr(el, attr, value){
  if (el && value !== undefined && value !== null) el.setAttribute(attr, value);
}

function setImage(id, src, alt, fallbackSrc){
  const img = document.getElementById(id);
  if (!img) return;
  img.alt = alt || img.alt;
  const targetSrc = src || fallbackSrc || img.getAttribute("src");
  const fallback = fallbackSrc || img.getAttribute("src");
  img.onload = () => revealLoadedImage(img);
  img.onerror = () => {
    if (fallback && img.getAttribute("src") !== fallback) {
      img.src = fallback;
    }
  };
  if (!targetSrc) return;
  const probe = new Image();
  probe.onload = () => {
    img.src = targetSrc;
    if (img.complete) revealLoadedImage(img);
  };
  probe.onerror = () => {
    if (fallback) img.src = fallback;
  };
  probe.src = targetSrc;
  if (img.complete && img.naturalWidth > 0) revealLoadedImage(img);
}

function revealLoadedImage(img){
  const clipped = img.closest(".clip-reveal");
  if (clipped) {
    clipped.classList.add("visible");
  }
}

function shortName(name){
  const first = String(name || "Khalid").trim().split(/\s+/)[0] || "Khalid";
  return first.endsWith(".") ? first : `${first}.`;
}

function escapeHTML(value){
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value){
  return escapeHTML(value).replace(/`/g, "&#096;");
}

/* =========================================================
   GoatCounter Click Tracking Patch
   Adds tracking to static + dynamically generated buttons/links.
   Safe: no design/layout changes.
   ========================================================= */

(function () {
  const TRACKED_ATTR = "data-goatcounter-click";

  function cleanText(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function hasText(el, words) {
    const text = cleanText(
      `${el.id || ""} ${el.className || ""} ${el.getAttribute("aria-label") || ""} ${el.textContent || ""}`
    );

    return words.some((word) => text.includes(word));
  }

  function closestText(el) {
    const card =
      el.closest(".work-card, .project-card, .resume-block, .contact-row, .connect-card, .social-card, article, li, div") ||
      el;

    return cleanText(card.textContent || "");
  }

  function getTrackingName(el) {
    const href = cleanText(el.getAttribute("href"));
    const id = cleanText(el.id);
    const aria = cleanText(el.getAttribute("aria-label"));
    const text = cleanText(el.textContent);
    const full = cleanText(`${id} ${aria} ${text} ${href}`);
    const parent = closestText(el);

    // Navbar / section links
    if (href === "#projects") return "nav-projects";
    if (href === "#about") return "nav-about";
    if (href === "#resume") return "nav-resume-section";
    if (href === "#services") return "nav-skills";
    if (href === "#connect") return "nav-connect";
    if (href === "#contact") return "nav-contact";
    if (href === "#motion-lab") return "nav-axis";

    // Resume page
    if (href.includes("resume.html")) return "view-resume";

    // Contact/social links
    if (href.includes("wa.me") || full.includes("whatsapp")) return "click-whatsapp";
    if (href.includes("mailto:") || full.includes("email")) return "click-email";
    if (href.includes("tel:") || full.includes("phone") || full.includes("call")) return "click-phone";
    if (href.includes("instagram") || full.includes("instagram")) return "click-instagram";
    if (href.includes("github") || full.includes("github")) return "click-github";

    // Hero
    if (id.includes("herobutton") || full.includes("view my work")) return "hero-view-work";
    if (id.includes("heroemail")) return "hero-email";
    if (id.includes("heroinstagram")) return "hero-instagram";
    if (id.includes("herogithub")) return "hero-github";

    // Contact button
    if (id.includes("contactbutton") || full.includes("get in touch")) return "contact-email-button";

    // Copy number button
    if (
      id.includes("copynumber") ||
      full.includes("copy number") ||
      full.includes("copied") ||
      hasText(el, ["copy number", "copied"])
    ) {
      return "copy-number";
    }

    // Project cards / generated project links
    if (parent.includes("axis")) return "project-axis";
    if (parent.includes("wire cutting") || parent.includes("wire cutter")) return "project-wire-cutter";
    if (parent.includes("portfolio") || parent.includes("creative interface")) return "project-portfolio-interface";

    // Resume section dynamic buttons
    if (parent.includes("resume") && full.includes("contact")) return "resume-contact";
    if (parent.includes("resume") && full.includes("whatsapp")) return "resume-whatsapp";
    if (parent.includes("resume") && full.includes("email")) return "resume-email";

    // Connect section generated cards
    if (parent.includes("instagram")) return "connect-instagram";
    if (parent.includes("whatsapp")) return "connect-whatsapp";
    if (parent.includes("email")) return "connect-email";
    if (parent.includes("phone")) return "connect-phone";

    // Generic fallback for buttons/links with useful text
    if (text) {
      return `click-${text
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 60)}`;
    }

    return null;
  }

  function applyTracking(root = document) {
    const clickableItems = root.querySelectorAll("a, button, [role='button']");

    clickableItems.forEach((el) => {
      if (el.hasAttribute(TRACKED_ATTR)) return;

      const name = getTrackingName(el);
      if (!name) return;

      el.setAttribute(TRACKED_ATTR, name);
    });
  }

  // Apply once after DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => applyTracking());
  } else {
    applyTracking();
  }

  // Apply again after dynamic content loads
  window.addEventListener("load", () => {
    applyTracking();

    setTimeout(applyTracking, 500);
    setTimeout(applyTracking, 1500);
    setTimeout(applyTracking, 3000);
  });

  // Watch dynamically injected content
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          applyTracking(node);
        }
      });
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  console.log("GoatCounter dynamic click tracking enabled");
})();
