const roadmap = [
  { week: 1, phase: "Core Identity", focus: "Foundations", topics: "Auth vs AuthZ, JML, RBAC/ABAC, Zero Trust", deliverable: "1-page Identity Lifecycle Design", primaryLabel: "Microsoft Learn - Implement identity management solution", primaryUrl: "https://learn.microsoft.com/en-us/training/paths/implement-identity-management-solution/", referenceLabel: "Microsoft Zero Trust - Identity pillar", referenceUrl: "https://learn.microsoft.com/en-us/security/zero-trust/deploy/identity", status: "In Progress", targetHours: 10, actualHours: 5, notes: "" },
  { week: 2, phase: "Core Identity", focus: "Entra Architecture", topics: "CA Design, MFA Strategy, Hybrid Identity", deliverable: "Hybrid Identity Architecture Diagram", primaryLabel: "Microsoft Entra Conditional Access overview", primaryUrl: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview", referenceLabel: "Microsoft Entra hybrid identity documentation", referenceUrl: "https://learn.microsoft.com/en-us/entra/identity/hybrid/", status: "Not Started", targetHours: 12, actualHours: 0, notes: "" },
  { week: 3, phase: "Core Identity", focus: "Auth Internals", topics: "Tokens, Session Lifecycle, Risk-based Auth", deliverable: "Login Flow Diagram", primaryLabel: "Microsoft identity platform authentication basics", primaryUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization", referenceLabel: "Microsoft identity platform ID tokens", referenceUrl: "https://learn.microsoft.com/en-us/entra/identity-platform/id-token-claims-reference", status: "Not Started", targetHours: 10, actualHours: 0, notes: "" },
  { week: 4, phase: "Protocols", focus: "OAuth/OIDC", topics: "Auth Code Flow, Client Credentials", deliverable: "Explain OIDC Flow", primaryLabel: "Auth0 - OAuth 2.0 and OIDC professional guide", primaryUrl: "https://auth0.com/blog/oauth-2-0-and-openid-connect-the-professional-guide/", referenceLabel: "Auth0 - What is OpenID Connect", referenceUrl: "https://auth0.com/intro-to-iam/what-is-openid-connect-oidc", status: "Not Started", targetHours: 10, actualHours: 0, notes: "" },
  { week: 5, phase: "Protocols", focus: "SAML", topics: "Assertions, SP vs IdP", deliverable: "SSO Design for Apps", primaryLabel: "Auth0 - SAML vs OAuth", primaryUrl: "https://auth0.com/intro-to-iam/saml-vs-oauth", referenceLabel: "Auth0 - SAML vs OpenID Connect", referenceUrl: "https://auth0.com/intro-to-iam/saml-vs-openid-connect-oidc", status: "Not Started", targetHours: 10, actualHours: 0, notes: "" },
  { week: 6, phase: "IGA", focus: "Governance", topics: "Access Certification, Roles, SoD", deliverable: "JML Flow Design", primaryLabel: "SailPoint Identity University", primaryUrl: "https://university.sailpoint.com/", referenceLabel: "SailPoint Community", referenceUrl: "https://community.sailpoint.com/", status: "Not Started", targetHours: 10, actualHours: 0, notes: "" },
  { week: 7, phase: "PAM", focus: "Privileged Access", topics: "Vaulting, JIT, Sessions", deliverable: "PAM Architecture", primaryLabel: "CyberArk University / Training", primaryUrl: "https://training.cyberark.com/learn", referenceLabel: "CyberArk training overview", referenceUrl: "https://www.cyberark.com/services-support/training/", status: "Not Started", targetHours: 10, actualHours: 0, notes: "" },
  { week: 8, phase: "Integration", focus: "IAM Stack", topics: "Entra + IGA + PAM", deliverable: "Full IAM Diagram", primaryLabel: "CyberArk + SailPoint integration concept", primaryUrl: "https://www.cyberark.com/resources/solution-briefs/cyberark-and-sailpoint-better-together", referenceLabel: "SailPoint IdentityNow for CyberArk PAM connector", referenceUrl: "https://community.sailpoint.com/t5/Connector-Directory/IdentityNow-for-CyberArk-Privileged-Access-Manager/ta-p/222122", status: "Not Started", targetHours: 12, actualHours: 0, notes: "" },
  { week: 9, phase: "Zero Trust", focus: "Architecture", topics: "Identity as Control Plane", deliverable: "Zero Trust Design", primaryLabel: "Microsoft Zero Trust identity integration overview", primaryUrl: "https://learn.microsoft.com/en-us/security/zero-trust/integrate/identity", referenceLabel: "Zero Trust security in Azure", referenceUrl: "https://learn.microsoft.com/en-us/azure/security/fundamentals/zero-trust", status: "Not Started", targetHours: 10, actualHours: 0, notes: "" },
  { week: 10, phase: "Cloud IAM", focus: "Multi-cloud", topics: "AWS/GCP IAM Basics", deliverable: "Explain Integration", primaryLabel: "AWS IAM Identity Center + Microsoft Entra tutorial", primaryUrl: "https://docs.aws.amazon.com/singlesignon/latest/userguide/idp-microsoft-entra.html", referenceLabel: "Google Cloud workforce federation with Microsoft Entra ID", referenceUrl: "https://docs.cloud.google.com/iam/docs/workforce-sign-in-microsoft-entra-id", status: "Not Started", targetHours: 10, actualHours: 0, notes: "" },
  { week: 11, phase: "Architecture", focus: "HLD/LLD", topics: "Design Docs, Diagrams", deliverable: "Full IAM Document", primaryLabel: "Microsoft Azure Architecture Center", primaryUrl: "https://learn.microsoft.com/en-us/azure/architecture/", referenceLabel: "Microsoft Cloud Adoption Framework architecture guidance", referenceUrl: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/", status: "Not Started", targetHours: 12, actualHours: 0, notes: "" },
  { week: 12, phase: "Interview", focus: "Preparation", topics: "Scenario Practice", deliverable: "Mock Interview Ready", primaryLabel: "SC-300 Microsoft Identity and Access Administrator", primaryUrl: "https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/", referenceLabel: "SC-100 Microsoft Cybersecurity Architect study guide", referenceUrl: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-100", status: "Not Started", targetHours: 12, actualHours: 0, notes: "" }
];

const resources = [
  { category: "Microsoft IAM", topic: "SC-300 roadmap", source: "Microsoft Learn SC-300 certification page", url: "https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/", use: "Use as certification map and final revision checklist." },
  { category: "Microsoft IAM", topic: "SC-300 course outline", source: "Microsoft Learn SC-300T00 course", url: "https://learn.microsoft.com/en-us/training/courses/sc-300t00", use: "Use to understand enterprise design, implementation and operation scope." },
  { category: "Microsoft IAM", topic: "Identity management basics", source: "Microsoft Learn identity management solution path", url: "https://learn.microsoft.com/en-us/training/paths/implement-identity-management-solution/", use: "Complete modules and take notes from architecture perspective." },
  { category: "Microsoft IAM", topic: "Conditional Access", source: "Microsoft Entra Conditional Access overview", url: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview", use: "Study policy design, signals, grant controls, and session controls." },
  { category: "Microsoft IAM", topic: "Hybrid identity", source: "Microsoft Entra hybrid identity docs", url: "https://learn.microsoft.com/en-us/entra/identity/hybrid/", use: "Compare PHS, PTA, federation, Connect Sync, and Cloud Sync." },
  { category: "Microsoft IAM", topic: "Hybrid identity concept", source: "What is hybrid identity with Microsoft Entra ID?", url: "https://learn.microsoft.com/en-us/entra/identity/hybrid/whatis-hybrid-identity", use: "Use for interview explanation of common identity across on-prem and cloud." },
  { category: "Protocols", topic: "Authentication vs authorization", source: "Microsoft identity platform: authentication vs authorization", url: "https://learn.microsoft.com/en-us/entra/identity-platform/authentication-vs-authorization", use: "Use for fundamentals before OAuth/OIDC/SAML." },
  { category: "Protocols", topic: "ID token claims", source: "Microsoft identity platform ID token reference", url: "https://learn.microsoft.com/en-us/entra/identity-platform/id-token-claims-reference", use: "Use to understand token claims and app authentication." },
  { category: "Protocols", topic: "OAuth 2.0 and OIDC", source: "Auth0 professional guide", url: "https://auth0.com/blog/oauth-2-0-and-openid-connect-the-professional-guide/", use: "Read the flow explanations; prepare interview diagrams." },
  { category: "Protocols", topic: "OIDC", source: "Auth0: What is OpenID Connect?", url: "https://auth0.com/intro-to-iam/what-is-openid-connect-oidc", use: "Use for clear OIDC vs OAuth distinction." },
  { category: "Protocols", topic: "SAML vs OAuth", source: "Auth0 SAML vs OAuth", url: "https://auth0.com/intro-to-iam/saml-vs-oauth", use: "Use for SSO interview comparison." },
  { category: "Protocols", topic: "SAML vs OIDC", source: "Auth0 SAML vs OIDC", url: "https://auth0.com/intro-to-iam/saml-vs-openid-connect-oidc", use: "Use for app integration decision-making." },
  { category: "IGA", topic: "Identity governance", source: "SailPoint Identity University", url: "https://university.sailpoint.com/", use: "Start with access governance, lifecycle management, compliance." },
  { category: "IGA", topic: "SailPoint reference", source: "SailPoint Community", url: "https://community.sailpoint.com/", use: "Use for connector concepts and implementation references." },
  { category: "PAM", topic: "Privileged Access Management", source: "CyberArk University", url: "https://training.cyberark.com/learn", use: "Use for PAM administration, vaulting, JIT and session monitoring concepts." },
  { category: "PAM", topic: "CyberArk training overview", source: "CyberArk training", url: "https://www.cyberark.com/services-support/training/", use: "Use for available learning paths and lab-based training details." },
  { category: "IGA + PAM", topic: "Integration", source: "CyberArk + SailPoint better together", url: "https://www.cyberark.com/resources/solution-briefs/cyberark-and-sailpoint-better-together", use: "Understand IGA/PAM integration at architecture level." },
  { category: "Cloud IAM", topic: "AWS federation", source: "AWS IAM Identity Center with Microsoft Entra ID", url: "https://docs.aws.amazon.com/singlesignon/latest/userguide/idp-microsoft-entra.html", use: "Build a lab for SAML + SCIM between Entra and AWS." },
  { category: "Cloud IAM", topic: "AWS integration", source: "Microsoft Entra tutorial for AWS IAM Identity Center", url: "https://learn.microsoft.com/en-us/entra/identity/saas-apps/aws-single-sign-on-tutorial", use: "Use as Microsoft-side reference for AWS SSO integration." },
  { category: "Cloud IAM", topic: "Google Cloud federation", source: "Google Workforce Identity Federation with Entra ID", url: "https://docs.cloud.google.com/iam/docs/workforce-sign-in-microsoft-entra-id", use: "Study SAML/OIDC federation to Google Cloud." },
  { category: "Zero Trust", topic: "Identity pillar", source: "Microsoft Zero Trust identity pillar", url: "https://learn.microsoft.com/en-us/security/zero-trust/deploy/identity", use: "Use for Zero Trust access principles." },
  { category: "Zero Trust", topic: "Azure Zero Trust", source: "Zero Trust security in Azure", url: "https://learn.microsoft.com/en-us/azure/security/fundamentals/zero-trust", use: "Study identity as control plane and Conditional Access as policy engine." },
  { category: "Architecture", topic: "Architecture patterns", source: "Azure Architecture Center", url: "https://learn.microsoft.com/en-us/azure/architecture/", use: "Use for HLD/LLD patterns and reference architectures." },
  { category: "Architecture", topic: "Cloud adoption and design", source: "Microsoft Cloud Adoption Framework", url: "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/", use: "Use for governance, design decisions, and architecture documentation approach." },
  { category: "Certification", topic: "SC-100 architect", source: "SC-100 study guide", url: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-100", use: "Use after SC-300 basics; map topics to architect-level design skills." }
];

const prompts = [
  "Design a Conditional Access strategy for a hybrid company with contractors, admins, and unmanaged devices.",
  "Explain OAuth authorization code flow to a non-security architect, then name the main security controls.",
  "Compare SAML and OIDC for a SaaS integration and recommend one with clear tradeoffs.",
  "Sketch a JML lifecycle for employees and privileged admins using Entra, IGA, and PAM.",
  "Explain how Zero Trust changes the IAM architecture from network-centric to identity-centric.",
  "Create a high-level design for Entra federation into AWS and Google Cloud.",
  "Walk through how risk-based authentication should affect MFA, session controls, and access reviews."
];

const storageKey = "iam-learning-hub-progress-v1";
let state = loadState();
let selectedWeek = findFocusWeek().week;
let timerSeconds = 25 * 60;
let timerId = null;

const $ = (selector) => document.querySelector(selector);

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return roadmap.map((item) => ({ ...item, ...(saved[item.week] || {}) }));
  } catch {
    return roadmap.map((item) => ({ ...item }));
  }
}

function saveState() {
  const compact = Object.fromEntries(
    state.map((item) => [
      item.week,
      { status: item.status, actualHours: Number(item.actualHours) || 0, notes: item.notes || "" }
    ])
  );
  localStorage.setItem(storageKey, JSON.stringify(compact));
}

function completionValue(status) {
  if (status === "Completed") return 1;
  if (status === "In Progress") return 0.5;
  return 0;
}

function findFocusWeek() {
  return state.find((item) => item.status !== "Completed") || state[state.length - 1];
}

function statusClass(status) {
  return `status-${status.toLowerCase().replaceAll(" ", "-")}`;
}

function renderMetrics() {
  const totalTarget = state.reduce((sum, item) => sum + item.targetHours, 0);
  const totalActual = state.reduce((sum, item) => sum + (Number(item.actualHours) || 0), 0);
  const completed = state.filter((item) => item.status === "Completed").length;
  const overall = Math.round((state.reduce((sum, item) => sum + completionValue(item.status), 0) / state.length) * 100);
  const focus = findFocusWeek();

  $("#overallMetric").textContent = `${overall}%`;
  $("#completedMetric").textContent = `${completed} / ${state.length}`;
  $("#hoursMetric").textContent = `${totalActual} / ${totalTarget}`;
  $("#focusMetric").textContent = `Week ${focus.week}`;
  $("#focusSubtext").textContent = `${focus.phase}: ${focus.focus}`;

  $("#overallBar").style.width = `${overall}%`;
  $("#completedBar").style.width = `${Math.round((completed / state.length) * 100)}%`;
  $("#hoursBar").style.width = `${Math.min(100, Math.round((totalActual / totalTarget) * 100))}%`;
}

function renderFocus() {
  const item = state.find((entry) => entry.week === selectedWeek) || findFocusWeek();
  $("#focusCard").innerHTML = `
    <h3 class="focus-week-title">Week ${item.week}: ${item.focus}</h3>
    <div class="pill-row">
      <span class="pill">${item.phase}</span>
      <span class="pill status">${item.status}</span>
      <span class="pill">${item.actualHours || 0}/${item.targetHours}h</span>
    </div>
    <p>${item.topics}</p>
    <p><strong>Deliverable:</strong> ${item.deliverable}</p>
    <div class="week-links">
      <a href="${item.primaryUrl}" target="_blank" rel="noreferrer">Primary</a>
      <a href="${item.referenceUrl}" target="_blank" rel="noreferrer">Practice</a>
    </div>
  `;
}

function renderPhaseFilter() {
  const select = $("#phaseFilter");
  const current = select.value || "All";
  const phases = [...new Set(state.map((item) => item.phase))];
  select.innerHTML = `<option value="All">All phases</option>${phases.map((phase) => `<option>${phase}</option>`).join("")}`;
  select.value = phases.includes(current) ? current : "All";
}

function renderRoadmap() {
  const query = $("#roadmapSearch").value.trim().toLowerCase();
  const phase = $("#phaseFilter").value;
  const list = $("#roadmapList");
  const template = $("#weekTemplate");
  list.innerHTML = "";

  const filtered = state.filter((item) => {
    const haystack = `${item.phase} ${item.focus} ${item.topics} ${item.deliverable}`.toLowerCase();
    return (phase === "All" || item.phase === phase) && (!query || haystack.includes(query));
  });

  filtered.forEach((item) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".week-card");
    card.classList.add(statusClass(item.status));
    if (item.week === selectedWeek) card.classList.add("active", "open");
    node.querySelector(".week-number").textContent = item.week;
    node.querySelector(".week-title").textContent = `${item.phase} · ${item.focus}`;
    node.querySelector(".week-meta").textContent = `${item.status} · ${item.targetHours} target hours`;
    node.querySelector(".topics").textContent = item.topics;
    node.querySelector(".deliverable").innerHTML = `<strong>Deliverable:</strong> ${item.deliverable}`;
    node.querySelector(".week-links").innerHTML = `
      <a href="${item.primaryUrl}" target="_blank" rel="noreferrer">${item.primaryLabel}</a>
      <a href="${item.referenceUrl}" target="_blank" rel="noreferrer">${item.referenceLabel}</a>
    `;

    const statusInput = node.querySelector(".status-input");
    const hoursInput = node.querySelector(".hours-input");
    const notesInput = node.querySelector(".notes-input");
    statusInput.value = item.status;
    hoursInput.value = item.actualHours || "";
    notesInput.value = item.notes || "";

    node.querySelector(".week-main").addEventListener("click", () => {
      selectedWeek = item.week;
      renderAll();
    });

    statusInput.addEventListener("change", (event) => {
      item.status = event.target.value;
      selectedWeek = item.week;
      saveState();
      renderAll();
    });

    hoursInput.addEventListener("input", (event) => {
      item.actualHours = Number(event.target.value) || 0;
      saveState();
      renderMetrics();
      renderFocus();
    });

    notesInput.addEventListener("input", (event) => {
      item.notes = event.target.value;
      saveState();
    });

    list.appendChild(node);
  });

  if (!filtered.length) {
    list.innerHTML = `<p class="topics">No weeks match that filter.</p>`;
  }
}

function renderResources() {
  const query = $("#resourceSearch").value.trim().toLowerCase();
  const filtered = resources.filter((item) => `${item.category} ${item.topic} ${item.source} ${item.use}`.toLowerCase().includes(query));
  $("#resourceList").innerHTML = filtered.map((item) => `
    <article class="resource-card">
      <span class="pill">${item.category}</span>
      <h3>${item.topic}</h3>
      <p>${item.source}</p>
      <p>${item.use}</p>
      <div class="resource-actions">
        <a href="${item.url}" target="_blank" rel="noreferrer">Open resource</a>
      </div>
    </article>
  `).join("") || `<p class="topics">No resources match that search.</p>`;
}

function renderPrompt() {
  $("#practicePrompt").textContent = prompts[Math.floor(Math.random() * prompts.length)];
}

function renderTimer() {
  const minutes = Math.floor(timerSeconds / 60).toString().padStart(2, "0");
  const seconds = (timerSeconds % 60).toString().padStart(2, "0");
  $("#timerReadout").textContent = `${minutes}:${seconds}`;
}

function renderAll() {
  renderMetrics();
  renderFocus();
  renderPhaseFilter();
  renderRoadmap();
  renderResources();
}

function exportProgress() {
  const rows = state.map((item) => ({
    week: item.week,
    phase: item.phase,
    focus: item.focus,
    status: item.status,
    targetHours: item.targetHours,
    actualHours: item.actualHours || 0,
    notes: item.notes || ""
  }));
  const blob = new Blob([JSON.stringify(rows, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "iam-learning-progress.json";
  link.click();
  URL.revokeObjectURL(url);
}

function wireEvents() {
  $("#roadmapSearch").addEventListener("input", renderRoadmap);
  $("#phaseFilter").addEventListener("change", renderRoadmap);
  $("#resourceSearch").addEventListener("input", renderResources);
  $("#newPrompt").addEventListener("click", renderPrompt);
  $("#exportProgress").addEventListener("click", exportProgress);
  $("#resetProgress").addEventListener("click", () => {
    if (!confirm("Reset local roadmap progress?")) return;
    localStorage.removeItem(storageKey);
    state = loadState();
    selectedWeek = findFocusWeek().week;
    renderAll();
  });
  $("#startTimer").addEventListener("click", () => {
    if (timerId) return;
    timerId = setInterval(() => {
      timerSeconds = Math.max(0, timerSeconds - 1);
      renderTimer();
      if (timerSeconds === 0) {
        clearInterval(timerId);
        timerId = null;
      }
    }, 1000);
  });
  $("#pauseTimer").addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
  });
  $("#resetTimer").addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
    timerSeconds = 25 * 60;
    renderTimer();
  });
}

wireEvents();
renderPrompt();
renderTimer();
renderAll();
