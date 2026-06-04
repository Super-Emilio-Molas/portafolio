const navLinks = document.querySelectorAll(".nav a");
const sections = [...document.querySelectorAll("main section[id]")];
const filterButtons = document.querySelectorAll(".chip");
const skillItems = document.querySelectorAll(".skill-grid span");
const contactForm = document.querySelector(".contact-form");
const cvForm = document.querySelector(".cv-form");
const cvModal = document.querySelector("[data-cv-modal]");
const openCvButtons = document.querySelectorAll("[data-open-cv]");
const closeCvButtons = document.querySelectorAll("[data-close-cv]");
const langButtons = document.querySelectorAll(".lang-btn");
const trustTrack = document.querySelector(".trust-track");

const translations = {
  es: {
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.trust": "Confianza",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",
    "hero.country": "Capiata, Paraguay",
    "hero.eyebrow": "Software Developer · QA Engineer · Mobile & Web",
    "hero.text": "Construyo soluciones digitales confiables, valido calidad con criterio de negocio y convierto procesos complejos en experiencias claras.",
    "hero.cta": "Trabajemos juntos",
    "hero.cv": "Solicitar CV",
    "hero.github": "GitHub",
    "hero.role": "QA Engineer · Flutter Developer",
    "metrics.flutter": "Soluciones digitales pensadas para operar, medir y crecer.",
    "metrics.qa": "Azure DevOps, SQL, Postman y pruebas funcionales.",
    "metrics.sap": "MM/PM, SOLPED, OT y trazabilidad operativa.",
    "profile.kicker": "Perfil",
    "profile.title": "Un perfil tecnico completo para construir, probar y mejorar sistemas reales.",
    "profile.text": "Combino desarrollo, QA, soporte IT y operaciones SAP para entender el producto de punta a punta. Mi diferencial es transformar necesidades del negocio en sistemas claros, estables y listos para usarse.",
    "experience.kicker": "Trayectoria",
    "experience.title": "Experiencia profesional",
    "experience.ande.role": "Tecnico Informatico",
    "experience.ande.text": "Pasantia en mantenimiento preventivo y correctivo de equipos informaticos dentro de un entorno institucional de alta disponibilidad.",
    "experience.independent.role": "Tecnico Informatico Independiente",
    "experience.independent.company": "Servicio particular",
    "experience.independent.text": "Diagnostico, reparacion, instalacion de sistemas, eliminacion de malware, optimizacion y asistencia tecnica a usuarios finales.",
    "experience.tecnoedil.text": "Facturacion de proveedores, validacion documental, ordenes de trabajo, SOLPED y seguimiento logistico en modulos MM/PM.",
    "experience.freelance.role": "Desarrollador Mobile & Web",
    "experience.freelance.text": "Desarrollo de soluciones mobile y web completas: interfaces, datos, autenticacion, paneles administrativos, integraciones y despliegue.",
    "experience.google.company": "Publicacion de apps Android",
    "experience.google.text": "Gestion de builds, pruebas cerradas, release tracks, produccion y resolucion de incidencias de publicacion.",
    "experience.bank.text": "Pruebas funcionales, gestion de incidencias en Azure DevOps, validacion con SQL/PLSQL, APIs REST con Postman y trabajo en Scrum.",
    "skills.kicker": "Stack",
    "skills.title": "Habilidades tecnicas",
    "skills.all": "Todas",
    "skills.ops": "ERP & Sistemas",
    "skills.functional": "Pruebas funcionales",
    "skills.support": "Soporte tecnico IT",
    "services.kicker": "Valor",
    "services.title": "Donde puedo aportar",
    "services.mobile.title": "Apps operativas mobile",
    "services.mobile.text": "Aplicaciones y flujos digitales para equipos operativos, con foco en velocidad, trazabilidad y uso real.",
    "services.web.title": "Paneles administrativos",
    "services.web.text": "Interfaces web limpias para seguimiento, carga de datos, control operativo y visualizacion rapida.",
    "services.qa.title": "Calidad de software",
    "services.qa.text": "Casos de prueba, validacion de datos, reporte de defectos y pruebas API para entregar con mas confianza.",
    "education.kicker": "Formacion",
    "education.title": "Educacion y certificaciones",
    "education.engineering.title": "Ingenieria en Informatica",
    "education.engineering.text": "Universidad Columbia del Paraguay · 2020 - presente.",
    "education.technical.title": "Tecnico en Informatica",
    "education.technical.text": "Centro Educativo Integral de las Americas · Mejor egresado 2019.",
    "education.courses.text": "Ciberseguridad, redes, hardware, diseno grafico, community manager y mantenimiento informatico.",
    "education.cisco.text": "Ciberseguridad, redes y fundamentos de hardware.",
    "education.snpp.text": "Diseno grafico, community manager, redes informaticas y mantenimiento de equipos.",
    "trust.kicker": "Confianza",
    "trust.title": "Empresas e instituciones que confiaron",
    "trust.banco": "Entidad financiera paraguaya enfocada en banca para personas y empresas, donde aporte calidad, validacion funcional y mirada de negocio.",
    "trust.tecnoedil": "Constructora paraguaya con trayectoria en obras viales, civiles, electromecanicas y portuarias; alli fortalece procesos SAP y operacion logistica.",
    "trust.clt": "Empresa de servicios TI, software y outsourcing; un entorno ideal para conectar QA, desarrollo y soluciones de alta disponibilidad.",
    "trust.celexx": "Empresa paraguaya de distribucion tecnologica, integracion de soluciones TI y telecomunicaciones.",
    "trust.sancarlos": "Taller mecanico especializado en reparaciones de equipos de gran porte, suspension y soldadura en general.",
    "contact.kicker": "Contacto",
    "contact.title": "Conversemos sobre tu proximo sistema, app o proceso.",
    "contact.phone": "Telefono disponible por correo.",
    "contact.location": "Capiata, Paraguay",
    "form.name": "Tu nombre",
    "form.subject": "Asunto",
    "form.message": "Mensaje",
    "form.send": "Enviar por correo",
    "cv.kicker": "CV privado",
    "cv.title": "Solicitar CV",
    "cv.text": "Para cuidar el acceso al documento, dejame tus datos y se abrira un correo con la solicitud.",
    "cv.name": "Nombre",
    "cv.email": "Correo",
    "cv.reason": "Motivo de la solicitud",
    "cv.submit": "Solicitar por correo",
    "footer.top": "Volver arriba"
  },
  en: {
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.trust": "Trust",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.country": "Capiata, Paraguay",
    "hero.eyebrow": "Software Developer · QA Engineer · Mobile & Web",
    "hero.text": "I build reliable digital solutions, validate quality with business judgment, and turn complex processes into clear user experiences.",
    "hero.cta": "Work with me",
    "hero.cv": "Request CV",
    "hero.github": "GitHub",
    "hero.role": "QA Engineer · Flutter Developer",
    "metrics.flutter": "Digital solutions designed to operate, measure and grow.",
    "metrics.qa": "Azure DevOps, SQL, Postman and functional testing.",
    "metrics.sap": "MM/PM, purchase requisitions, work orders and operational traceability.",
    "profile.kicker": "Profile",
    "profile.title": "A complete technical profile to build, test and improve real systems.",
    "profile.text": "I combine software development, QA, IT support and SAP operations to understand products end to end. My edge is translating business needs into clear, stable systems that are ready to use.",
    "experience.kicker": "Timeline",
    "experience.title": "Professional experience",
    "experience.ande.role": "IT Technician",
    "experience.ande.text": "Internship in preventive and corrective maintenance of IT equipment within a high-availability institutional environment.",
    "experience.independent.role": "Independent IT Technician",
    "experience.independent.company": "Private service",
    "experience.independent.text": "Diagnostics, repair, system installation, malware removal, performance optimization and end-user support.",
    "experience.tecnoedil.text": "Supplier invoicing, document validation, work orders, purchase requisitions and logistics follow-up in MM/PM modules.",
    "experience.freelance.role": "Mobile & Web Developer",
    "experience.freelance.text": "End-to-end mobile and web solutions: interfaces, data, authentication, admin panels, integrations and deployment.",
    "experience.google.company": "Android app publishing",
    "experience.google.text": "Build management, closed testing, release tracks, production releases and publishing issue resolution.",
    "experience.bank.text": "Functional testing, incident management in Azure DevOps, SQL/PLSQL validation, REST API testing with Postman and Scrum teamwork.",
    "skills.kicker": "Stack",
    "skills.title": "Technical skills",
    "skills.all": "All",
    "skills.ops": "ERP & Systems",
    "skills.functional": "Functional testing",
    "skills.support": "IT support",
    "services.kicker": "Value",
    "services.title": "Where I can help",
    "services.mobile.title": "Operational mobile apps",
    "services.mobile.text": "Applications and digital workflows for operational teams, focused on speed, traceability and real adoption.",
    "services.web.title": "Admin dashboards",
    "services.web.text": "Clean web interfaces for tracking, data entry, operational control and fast visualization.",
    "services.qa.title": "Software quality",
    "services.qa.text": "Test cases, data validation, defect reporting and API testing to ship with more confidence.",
    "education.kicker": "Education",
    "education.title": "Education and certifications",
    "education.engineering.title": "Computer Engineering",
    "education.engineering.text": "Universidad Columbia del Paraguay · 2020 - present.",
    "education.technical.title": "IT Technician",
    "education.technical.text": "Centro Educativo Integral de las Americas · Best graduate 2019.",
    "education.courses.text": "Cybersecurity, networking, hardware, graphic design, community management and computer maintenance.",
    "education.cisco.text": "Cybersecurity, networking and hardware fundamentals.",
    "education.snpp.text": "Graphic design, community management, computer networking and equipment maintenance.",
    "trust.kicker": "Trust",
    "trust.title": "Companies and institutions that trusted me",
    "trust.banco": "Paraguayan financial institution serving people and companies, where I contributed quality, functional validation and business awareness.",
    "trust.tecnoedil": "Paraguayan construction company with experience in road, civil, electromechanical and port works; I strengthened SAP and logistics operations there.",
    "trust.clt": "IT services, software and outsourcing company; a strong environment to connect QA, development and high-availability solutions.",
    "trust.celexx": "Paraguayan company focused on technology distribution, IT solution integration and telecommunications.",
    "trust.sancarlos": "Mechanical workshop specialized in heavy equipment repairs, suspension and general welding.",
    "contact.kicker": "Contact",
    "contact.title": "Let's talk about your next system, app or process.",
    "contact.phone": "Phone available by email.",
    "contact.location": "Capiata, Paraguay",
    "form.name": "Your name",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.send": "Send by email",
    "cv.kicker": "Private CV",
    "cv.title": "Request CV",
    "cv.text": "To keep the document controlled, leave your details and an email request will open.",
    "cv.name": "Name",
    "cv.email": "Email",
    "cv.reason": "Reason for request",
    "cv.submit": "Request by email",
    "footer.top": "Back to top"
  },
  pt: {
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.trust": "Confianca",
    "nav.services": "Servicos",
    "nav.contact": "Contato",
    "hero.country": "Capiata, Paraguai",
    "hero.eyebrow": "Software Developer · QA Engineer · Mobile & Web",
    "hero.text": "Construo solucoes digitais confiaveis, valido qualidade com criterio de negocio e transformo processos complexos em experiencias claras.",
    "hero.cta": "Vamos trabalhar",
    "hero.cv": "Solicitar CV",
    "hero.github": "GitHub",
    "hero.role": "QA Engineer · Flutter Developer",
    "metrics.flutter": "Solucoes digitais pensadas para operar, medir e crescer.",
    "metrics.qa": "Azure DevOps, SQL, Postman e testes funcionais.",
    "metrics.sap": "MM/PM, SOLPED, OT e rastreabilidade operacional.",
    "profile.kicker": "Perfil",
    "profile.title": "Um perfil tecnico completo para construir, testar e melhorar sistemas reais.",
    "profile.text": "Combino desenvolvimento, QA, suporte IT e operacoes SAP para entender produtos de ponta a ponta. Meu diferencial e transformar necessidades de negocio em sistemas claros, estaveis e prontos para uso.",
    "experience.kicker": "Trajetoria",
    "experience.title": "Experiencia profissional",
    "experience.ande.role": "Tecnico de Informatica",
    "experience.ande.text": "Estagio em manutencao preventiva e corretiva de equipamentos informaticos dentro de um ambiente institucional de alta disponibilidade.",
    "experience.independent.role": "Tecnico de Informatica Independente",
    "experience.independent.company": "Servico particular",
    "experience.independent.text": "Diagnostico, reparo, instalacao de sistemas, remocao de malware, otimizacao e suporte a usuarios finais.",
    "experience.tecnoedil.text": "Faturamento de fornecedores, validacao documental, ordens de trabalho, SOLPED e acompanhamento logistico nos modulos MM/PM.",
    "experience.freelance.role": "Desenvolvedor Mobile & Web",
    "experience.freelance.text": "Solucoes mobile e web completas: interfaces, dados, autenticacao, paineis administrativos, integracoes e publicacao.",
    "experience.google.company": "Publicacao de apps Android",
    "experience.google.text": "Gestao de builds, testes fechados, release tracks, producao e resolucao de incidentes de publicacao.",
    "experience.bank.text": "Testes funcionais, gestao de incidentes no Azure DevOps, validacao com SQL/PLSQL, APIs REST com Postman e trabalho em Scrum.",
    "skills.kicker": "Stack",
    "skills.title": "Habilidades tecnicas",
    "skills.all": "Todas",
    "skills.ops": "ERP & Sistemas",
    "skills.functional": "Testes funcionais",
    "skills.support": "Suporte tecnico IT",
    "services.kicker": "Valor",
    "services.title": "Onde posso contribuir",
    "services.mobile.title": "Apps operacionais mobile",
    "services.mobile.text": "Aplicacoes e fluxos digitais para equipes operacionais, com foco em velocidade, rastreabilidade e uso real.",
    "services.web.title": "Paineis administrativos",
    "services.web.text": "Interfaces web limpas para acompanhamento, entrada de dados, controle operacional e visualizacao rapida.",
    "services.qa.title": "Qualidade de software",
    "services.qa.text": "Casos de teste, validacao de dados, reporte de defeitos e testes API para entregar com mais confianca.",
    "education.kicker": "Formacao",
    "education.title": "Educacao e certificacoes",
    "education.engineering.title": "Engenharia Informatica",
    "education.engineering.text": "Universidad Columbia del Paraguay · 2020 - presente.",
    "education.technical.title": "Tecnico em Informatica",
    "education.technical.text": "Centro Educativo Integral de las Americas · Melhor egresso 2019.",
    "education.courses.text": "Ciberseguranca, redes, hardware, design grafico, community manager e manutencao de computadores.",
    "education.cisco.text": "Ciberseguranca, redes e fundamentos de hardware.",
    "education.snpp.text": "Design grafico, community manager, redes informaticas e manutencao de equipamentos.",
    "trust.kicker": "Confianca",
    "trust.title": "Empresas e instituicoes que confiaram",
    "trust.banco": "Instituicao financeira paraguaia focada em banca para pessoas e empresas, onde contribui com qualidade, validacao funcional e visao de negocio.",
    "trust.tecnoedil": "Construtora paraguaia com experiencia em obras rodoviarias, civis, eletromecanicas e portuarias; ali fortaleci processos SAP e operacao logistica.",
    "trust.clt": "Empresa de servicos TI, software e outsourcing; um ambiente forte para conectar QA, desenvolvimento e solucoes de alta disponibilidade.",
    "trust.celexx": "Empresa paraguaia de distribuicao tecnologica, integracao de solucoes TI e telecomunicacoes.",
    "trust.sancarlos": "Oficina mecanica especializada em reparos de equipamentos de grande porte, suspensao e soldagem em geral.",
    "contact.kicker": "Contato",
    "contact.title": "Vamos conversar sobre seu proximo sistema, app ou processo.",
    "contact.phone": "Telefone disponivel por email.",
    "contact.location": "Capiata, Paraguai",
    "form.name": "Seu nome",
    "form.subject": "Assunto",
    "form.message": "Mensagem",
    "form.send": "Enviar por email",
    "cv.kicker": "CV privado",
    "cv.title": "Solicitar CV",
    "cv.text": "Para controlar o acesso ao documento, deixe seus dados e um email de solicitacao sera aberto.",
    "cv.name": "Nome",
    "cv.email": "Email",
    "cv.reason": "Motivo da solicitacao",
    "cv.submit": "Solicitar por email",
    "footer.top": "Voltar ao topo"
  }
};

const getTranslation = (key) => translations[currentLanguage]?.[key] || translations.es[key] || "";
let currentLanguage = localStorage.getItem("language") || "es";

function setLanguage(language) {
  currentLanguage = translations[language] ? language : "es";
  localStorage.setItem("language", currentLanguage);
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(element.dataset.i18n);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = getTranslation(element.dataset.i18nPlaceholder);
    if (value) element.setAttribute("placeholder", value);
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    skillItems.forEach((item) => {
      const shouldShow = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("hidden", !shouldShow);
    });
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

if (trustTrack) {
  trustTrack.innerHTML += trustTrack.innerHTML;
}

document.querySelectorAll(".section, .profile-card, .workspace-image, .metric-card, .logo-card, .trust-card, .institution-card").forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => navObserver.observe(section));

function openCvModal() {
  cvModal.classList.add("open");
  cvModal.setAttribute("aria-hidden", "false");
  cvModal.querySelector("input")?.focus();
}

function closeCvModal() {
  cvModal.classList.remove("open");
  cvModal.setAttribute("aria-hidden", "true");
}

openCvButtons.forEach((button) => button.addEventListener("click", openCvModal));
closeCvButtons.forEach((button) => button.addEventListener("click", closeCvModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeCvModal();
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get("name") || getTranslation("form.name");
  const subject = data.get("subject") || "Consulta desde el portafolio";
  const message = data.get("message") || "";
  const bodyText = `Hola Emilio,\n\n${message}\n\nContacto: ${name}`;

  window.location.href = `mailto:emiliomolaspy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
});

cvForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(cvForm);
  const name = data.get("name");
  const email = data.get("email");
  const reason = data.get("reason");
  const subject = "Solicitud de CV desde el portafolio";
  const bodyText = [
    "Hola Emilio,",
    "",
    "Quiero solicitar tu CV.",
    "",
    `Nombre: ${name}`,
    `Correo: ${email}`,
    `Motivo: ${reason}`,
    "",
    "Enviado desde el portafolio."
  ].join("\n");

  window.location.href = `mailto:emiliomolaspy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  closeCvModal();
});

setLanguage(currentLanguage);
