"use strict";

const SOCIAL_LINKS = {
  github: "https://github.com/heartsdev-hub",
  linkedin: "https://linkedin.com/in/heartsdev",
  email: "heartsdev2399@gmail.com",
  location: "Perú"
};

const technologyCatalog = {
  Java: { slug: "java", color: "f89820", mark: "J" },
  "Spring Boot": { slug: "springboot", color: "6db33f", mark: "S" },
  "Spring Security": { slug: "springsecurity", color: "6db33f", mark: "S" },
  "Spring Cloud": { slug: "spring", color: "6db33f", mark: "S" },
  React: { slug: "react", color: "61dafb", mark: "R" },
  TypeScript: { slug: "typescript", color: "3178c6", mark: "TS" },
  JavaScript: { slug: "javascript", color: "f7df1e", mark: "JS" },
  HTML5: { slug: "html5", color: "e34f26", mark: "5" },
  CSS3: { slug: "css3", color: "1572b6", mark: "3" },
  PostgreSQL: { slug: "postgresql", color: "4169e1", mark: "PG" },
  MySQL: { slug: "mysql", color: "4479a1", mark: "M" },
  MongoDB: { slug: "mongodb", color: "47a248", mark: "M" },
  Docker: { slug: "docker", color: "2496ed", mark: "D" },
  Git: { slug: "git", color: "f05032", mark: "G" },
  GitHub: { slug: "github", color: "ffffff", mark: "GH" },
  AWS: { slug: "amazonaws", color: "ff9900", mark: "A" },
  "Google Cloud": { slug: "googlecloud", color: "4285f4", mark: "G" },
  Azure: { slug: "microsoftazure", color: "0078d4", mark: "A" }
};

const skillGroups = [
  {
    title: "Backend",
    description: "Servicios escalables, seguridad, APIs y lógica de negocio robusta.",
    technologies: ["Java", "Spring Boot", "Spring Security", "Spring Cloud"]
  },
  {
    title: "Frontend",
    description: "Interfaces modernas, accesibles y enfocadas en buena experiencia.",
    technologies: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "Bases de datos",
    description: "Modelado, persistencia y consultas para productos confiables.",
    technologies: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    title: "DevOps & Cloud",
    description: "Versionamiento, contenedores y despliegues en entornos cloud.",
    technologies: ["Docker", "Git", "GitHub", "AWS", "Google Cloud", "Azure"]
  }
];

const experiences = [
  {
    date: "Ago 2025 - Abr 2026",
    role: "Desarrollador Full Stack",
    project: "Sistema de Gestión Deportiva",
    description: "Desarrollo de un sistema web para gestión de usuarios, asistencia, matrículas, pagos y operaciones administrativas.",
    technologies: ["Java", "Spring Boot", "Spring Security", "React", "PostgreSQL"]
  },
  {
    date: "May 2025 - Jul 2025",
    role: "Desarrollador Full Stack",
    project: "E-commerce",
    description: "Desarrollo de una plataforma de comercio electrónico con catálogo, carrito de compras, pedidos, pagos y seguimiento de pedidos.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"]
  },
  {
    date: "Proyecto académico",
    role: "Desarrollador Backend",
    project: "API REST Académica",
    description: "Desarrollo de APIs REST con autenticación, autorización basada en roles y persistencia de datos.",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL"]
  }
];

const projects = [
  {
    title: "Sistema de Gestión Deportiva",
    description: "Plataforma para gestionar usuarios, clientes, entrenadores, asistencia, matrículas y pagos.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
    github: SOCIAL_LINKS.github,
    demo: "#contacto"
  },
  {
    title: "E-commerce",
    description: "Aplicación de comercio electrónico con catálogo, carrito de compras, pedidos, pagos y seguimiento de pedidos.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Docker"],
    github: SOCIAL_LINKS.github,
    demo: "#contacto"
  },
  {
    title: "API Académica",
    description: "API REST para gestión académica con autenticación, autorización basada en roles y persistencia con PostgreSQL.",
    technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL"],
    github: SOCIAL_LINKS.github,
    demo: "#contacto"
  }
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function technologyBadge(name) {
  const technology = technologyCatalog[name];
  const mark = technology ? technology.mark : name.slice(0, 2).toUpperCase();
  const logo = technology
    ? `<img class="tech-logo" src="https://cdn.simpleicons.org/${technology.slug}/${technology.color}" alt="" aria-hidden="true" data-fallback="${mark}" data-logo-color="#${technology.color}">`
    : `<span class="tech-fallback" aria-hidden="true">${mark}</span>`;
  return `<span class="tech-badge">${logo}<span>${escapeHtml(name)}</span></span>`;
}

function renderSkills() {
  const container = document.querySelector("#skill-groups");
  container.innerHTML = skillGroups.map((group) => `
    <article class="skill-card reveal">
      <h3>${escapeHtml(group.title)}</h3>
      <p>${escapeHtml(group.description)}</p>
      <div class="tech-list">${group.technologies.map(technologyBadge).join("")}</div>
    </article>
  `).join("");
}

function renderExperience() {
  const container = document.querySelector("#experience-list");
  container.innerHTML = experiences.map((experience) => `
    <article class="experience-row reveal">
      <div class="experience-card">
        <p class="experience-date">${escapeHtml(experience.date)}</p>
        <h3>${escapeHtml(experience.role)}</h3>
        <p class="experience-project">${escapeHtml(experience.project)}</p>
        <p class="experience-description">${escapeHtml(experience.description)}</p>
        <div class="experience-tech">${experience.technologies.map(technologyBadge).join("")}</div>
      </div>
    </article>
  `).join("");
}

function projectPreview() {
  return `
    <div class="project-preview" aria-hidden="true">
      <div class="preview-top"><div class="preview-lights"><i></i><i></i><i></i></div><span class="preview-live">LIVE</span></div>
      <div class="preview-layout"><div class="preview-bars"><i></i><i></i><i></i><i></i></div><div class="preview-chart"><span class="chart-icon">⌁</span><div class="chart-bars"><i></i><i></i><i></i><i></i></div></div></div>
      <div class="preview-footer"><span>⌘ &nbsp; API</span><span>▤ &nbsp; SQL</span></div>
    </div>
  `;
}

function renderProjects() {
  const container = document.querySelector("#project-list");
  container.innerHTML = projects.map((project) => `
    <article class="project-card reveal">
      ${projectPreview()}
      <div class="project-content">
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.description)}</p>
        <div class="project-tech">${project.technologies.map(technologyBadge).join("")}</div>
        <div class="project-actions">
          <a class="button button-primary" href="${escapeHtml(project.demo)}">↗ &nbsp; Ver proyecto</a>
          <a class="button button-quiet" href="${escapeHtml(project.github)}" target="_blank" rel="noreferrer">GH &nbsp; GitHub</a>
        </div>
      </div>
    </article>
  `).join("");
}

function addTechnologyLogoFallbacks() {
  document.querySelectorAll(".tech-logo").forEach((image) => {
    image.addEventListener("error", () => {
      const fallback = document.createElement("span");
      fallback.className = "tech-fallback";
      fallback.setAttribute("aria-hidden", "true");
      fallback.textContent = image.dataset.fallback || "?";
      fallback.style.setProperty("--logo-color", image.dataset.logoColor || "#67d8ff");
      image.replaceWith(fallback);
    }, { once: true });
  });
}

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");
  const links = [...document.querySelectorAll(".nav-links a")];

  function closeMenu() {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    menu.classList.toggle("open", !isOpen);
  });
  links.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const sections = links.map((link) => document.getElementById(link.dataset.section)).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    const current = entries.filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!current) return;
    links.forEach((link) => {
      const active = link.dataset.section === current.target.id;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: [0.12, 0.25, 0.5] });
  sections.forEach((section) => observer.observe(section));
}

function setupContactForm() {
  const form = document.querySelector("#contact-form");
  const feedback = document.querySelector("#form-feedback");

  form.addEventListener("input", () => { feedback.textContent = ""; });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form).entries());
    const name = String(values.name || "").trim();
    const email = String(values.email || "").trim();
    const subject = String(values.subject || "").trim();
    const message = String(values.message || "").trim();
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email || !subject || !message) {
      feedback.textContent = "Completa todos los campos para preparar tu mensaje.";
      return;
    }
    if (!emailIsValid) {
      feedback.textContent = "Ingresa un correo electrónico válido.";
      form.elements.email.focus();
      return;
    }

    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(`${message}\n\nNombre: ${name}\nCorreo: ${email}`);
    feedback.textContent = "Abriendo tu aplicación de correo para enviar el mensaje.";
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${mailSubject}&body=${mailBody}`;
  });
}

function applySocialLinks() {
  document.querySelectorAll('[data-social="github"]').forEach((link) => { link.href = SOCIAL_LINKS.github; });
  document.querySelectorAll('[data-social="linkedin"]').forEach((link) => { link.href = SOCIAL_LINKS.linkedin; });
  document.querySelectorAll('[data-contact="email"]').forEach((link) => { link.href = `mailto:${SOCIAL_LINKS.email}`; });
}

renderSkills();
renderExperience();
renderProjects();
addTechnologyLogoFallbacks();
applySocialLinks();
setupNavigation();
setupContactForm();
document.querySelector("#current-year").textContent = String(new Date().getFullYear());
