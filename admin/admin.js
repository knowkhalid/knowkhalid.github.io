const CONTENT_URL = "../content/site.json";
const CONTENT_PATH = "content/site.json";
const ADMIN_PASSCODE = "8299150971";
const ADMIN_UNLOCK_KEY = "portfolio_admin_unlocked";
const DRAFT_STORAGE_KEY = "portfolio_site_content_draft";
const ANALYTICS_STORAGE_KEY = "portfolio_local_analytics_v1";

let siteData = {};
let isSavingToGithub = false;

const sections = [
  {
    title: "SEO",
    fields: [
      ["seo.title", "Title"],
      ["seo.description", "Description", "textarea"]
    ]
  },
  {
    title: "Profile",
    fields: [
      ["profile.name", "Name"],
      ["profile.role", "Role"],
      ["profile.location", "Location"],
      ["profile.email", "Email"],
      ["profile.phone", "Phone"],
      ["profile.phoneDisplay", "Phone display"],
      ["profile.whatsapp", "WhatsApp link"],
      ["profile.instagram", "Instagram link"],
      ["profile.github", "GitHub link"],
      ["profile.resumeLink", "Resume link"],
      ["profile.summary", "Profile summary", "textarea"],
      ["profile.focus", "Focus", "textarea"]
    ],
    lists: [
      { path: "profile.availability", title: "Availability", type: "strings" }
    ]
  },
  {
    title: "Images",
    fields: [
      ["images.heroImage", "Hero image path", "image"],
      ["images.aboutImage", "About image path", "image"],
      ["images.connectImage", "Connect image path", "image"]
    ]
  },
  {
    title: "Hero",
    fields: [
      ["hero.microLabel", "Micro label"],
      ["hero.title", "Title"],
      ["hero.roleLine", "Role line"],
      ["hero.description", "Description", "textarea"],
      ["hero.primaryButtonText", "Primary button text"],
      ["hero.primaryButtonLink", "Primary button link"]
    ]
  },
  {
    title: "About",
    fields: [
      ["about.title", "Title HTML"]
    ],
    lists: [
      { path: "about.paragraphs", title: "Paragraphs", type: "strings", textarea: true },
      { path: "about.stats", title: "Stats", fields: [["label", "Label"], ["value", "Value"]] }
    ]
  },
  {
    title: "Projects",
    fields: [
      ["projectsIntro.note", "Portfolio note HTML", "textarea"]
    ],
    lists: [
      {
        path: "projects",
        title: "Project cards",
        fields: [
          ["number", "Number"],
          ["title", "Title"],
          ["description", "Description", "textarea"],
          ["category", "Category"],
          ["link", "Link"],
          ["buttonLabel", "Button label"],
          ["visual", "Visual type: axis or wire"]
        ]
      }
    ]
  },
  {
    title: "AXIS Blueprint / System Details",
    fields: [
      ["axis.microLabel", "Micro label"],
      ["axis.headline", "Headline HTML"],
      ["axis.description", "Description", "textarea"],
      ["axis.panelTopLeft", "Panel top left"],
      ["axis.panelTopRight", "Panel top right"]
    ],
    lists: [
      { path: "axis.metaCards", title: "Meta cards", fields: [["label", "Label"], ["text", "Text"]] },
      { path: "axis.modules", title: "Modules", fields: [["number", "Number"], ["title", "Title"], ["description", "Description"]] },
      { path: "axis.detailStrip", title: "Detail strip", fields: [["label", "Label"], ["text", "Text", "textarea"]] }
    ]
  },
  {
    title: "Resume",
    fields: [
      ["resume.heading", "Heading"],
      ["resume.subtitle", "Subtitle"],
      ["resume.intro", "Intro", "textarea"],
      ["resume.profileSummary", "Profile summary", "textarea"]
    ],
    lists: [
      { path: "resume.coreFocus", title: "Core focus", type: "strings" },
      { path: "resume.technicalSkills", title: "Technical skills", type: "strings" },
      { path: "resume.creativeSkills", title: "Creative skills", type: "strings" },
      { path: "resume.featuredProjects", title: "Featured projects", type: "strings" },
      { path: "resume.services", title: "Resume services", type: "strings" },
      { path: "resume.contact", title: "Resume contact", fields: [["label", "Label"], ["value", "Value"], ["link", "Link"]] },
      { path: "resume.buttons", title: "Resume buttons", fields: [["label", "Label"], ["link", "Link"]] }
    ]
  },
  {
    title: "Services & Skills",
    lists: [
      { path: "services", title: "Services", fields: [["number", "Number"], ["title", "Title"], ["description", "Description", "textarea"]] },
      { path: "skills", title: "Skills / chips", type: "strings" }
    ]
  },
  {
    title: "Experience Timeline",
    lists: [
      { path: "experience", title: "Experience", fields: [["number", "Phase"], ["title", "Title"], ["description", "Description", "textarea"]] }
    ]
  },
  {
    title: "Connect & Contact",
    fields: [
      ["contact.heading", "Contact heading"],
      ["contact.closingText", "Closing text", "textarea"],
      ["contact.buttonText", "Button text"],
      ["contact.buttonLink", "Button link"],
      ["footer.left", "Footer left"],
      ["footer.right", "Footer right"]
    ],
    lists: [
      { path: "connect.cards", title: "Connect cards", fields: [["number", "Number"], ["label", "Label"], ["text", "Text", "textarea"], ["link", "Link"], ["phoneDisplay", "Phone display"], ["copyValue", "Copy value"]] },
      { path: "contact.contactCards", title: "Contact rows", fields: [["label", "Label"], ["value", "Value"], ["link", "Link"]] }
    ]
  }
];

document.addEventListener("DOMContentLoaded", initAdminGate);

function initAdminGate(){
  const login = document.getElementById("adminLogin");
  const app = document.getElementById("adminApp");
  const form = document.getElementById("adminLoginForm");
  const input = document.getElementById("adminPasscode");
  const message = document.getElementById("loginMessage");

  function unlock(){
    sessionStorage.setItem(ADMIN_UNLOCK_KEY, "true");
    login.hidden = true;
    app.hidden = false;
    initAdmin();
  }

  if (sessionStorage.getItem(ADMIN_UNLOCK_KEY) === "true") {
    unlock();
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value === ADMIN_PASSCODE) {
      unlock();
    } else {
      message.textContent = "Wrong passcode.";
      message.style.color = "#b3261e";
      input.value = "";
      input.focus();
    }
  });
  input.focus();
}

async function initAdmin(){
  restoreToken();
  const remoteContent = await loadContent();
  const localDraft = loadDraftContent();
  siteData = mergeContent(remoteContent || {}, localDraft || {});
  persistDraftContent();
  renderEditor();
  updatePreview();
  renderAnalytics();
  bindActions();
}

async function loadContent(){
  try {
    const res = await fetch(CONTENT_URL, { cache: "no-store" });
    if (!res.ok) throw new Error("Could not load content/site.json");
    return await res.json();
  } catch (error) {
    setStatus("Could not fetch JSON. Paste or edit from fallback.", true);
    return {};
  }
}

function renderEditor(){
  const form = document.getElementById("contentForm");
  form.innerHTML = "";
  sections.forEach((section) => {
    const card = document.createElement("section");
    card.className = "section-card";
    card.innerHTML = `<h2>${escapeHTML(section.title)}</h2>`;

    if (section.fields) {
      const grid = document.createElement("div");
      grid.className = "field-grid";
      section.fields.forEach(([path, label, type]) => {
        grid.appendChild(createField(path, label, type));
      });
      card.appendChild(grid);
    }

    (section.lists || []).forEach((list) => {
      card.appendChild(createListEditor(list));
    });
    form.appendChild(card);
  });
}

function createField(path, label, type){
  const wrap = document.createElement("label");
  if (type === "textarea" || type === "image") wrap.classList.add("wide");
  wrap.textContent = label;
  const input = type === "textarea" ? document.createElement("textarea") : document.createElement("input");
  input.dataset.path = path;
  input.value = getByPath(siteData, path) ?? "";
  input.addEventListener("input", () => {
    setByPath(siteData, path, input.value);
    updatePreview();
  });
  wrap.appendChild(input);
  if (type === "image") {
    wrap.appendChild(createImageUploadControl(path, input));
  }
  return wrap;
}

function createImageUploadControl(path, pathInput){
  const box = document.createElement("div");
  box.className = "image-upload";

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/png,image/jpeg,image/webp,image/gif";
  fileInput.className = "image-file";

  const uploadBtn = document.createElement("button");
  uploadBtn.type = "button";
  uploadBtn.className = "line-btn";
  uploadBtn.textContent = "Upload image";
  uploadBtn.addEventListener("click", async () => {
    if (!fileInput.files || !fileInput.files[0]) {
      setStatus("Choose an image file first.", true);
      return;
    }
    await uploadImageFile(fileInput.files[0], path, pathInput);
  });

  const hint = document.createElement("p");
  hint.className = "upload-hint";
  hint.textContent = "Uploads to assets/uploads/ and updates this image path. Click Save to GitHub after upload to save site.json too.";

  box.appendChild(fileInput);
  box.appendChild(uploadBtn);
  box.appendChild(hint);
  return box;
}

function createListEditor(config){
  const block = document.createElement("div");
  block.className = "list-block";
  const itemsWrap = document.createElement("div");
  itemsWrap.className = "list-items";

  const head = document.createElement("div");
  head.className = "list-head";
  head.innerHTML = `<h2>${escapeHTML(config.title)}</h2>`;
  const addBtn = document.createElement("button");
  addBtn.type = "button";
  addBtn.className = "line-btn";
  addBtn.textContent = "Add";
  addBtn.addEventListener("click", () => {
    const list = ensureArray(config.path);
    list.push(config.type === "strings" ? "" : blankObject(config.fields));
    refresh();
    updatePreview();
  });
  head.appendChild(addBtn);

  function refresh(){
    itemsWrap.innerHTML = "";
    ensureArray(config.path).forEach((item, index) => {
      itemsWrap.appendChild(createListItem(config, item, index, refresh));
    });
  }

  block.appendChild(head);
  block.appendChild(itemsWrap);
  refresh();
  return block;
}

function createListItem(config, item, index, refresh){
  const row = document.createElement("div");
  row.className = "list-item";

  if (config.type === "strings") {
    const label = document.createElement("label");
    label.textContent = `${config.title} ${index + 1}`;
    if (config.textarea) label.classList.add("wide");
    const input = config.textarea ? document.createElement("textarea") : document.createElement("input");
    input.value = item ?? "";
    input.addEventListener("input", () => {
      ensureArray(config.path)[index] = input.value;
      updatePreview();
    });
    label.appendChild(input);
    row.appendChild(label);
  } else {
    const grid = document.createElement("div");
    grid.className = "item-grid";
    config.fields.forEach(([key, labelText, type]) => {
      const label = document.createElement("label");
      if (type === "textarea") label.classList.add("wide");
      label.textContent = labelText;
      const input = type === "textarea" ? document.createElement("textarea") : document.createElement("input");
      input.value = item?.[key] ?? "";
      input.addEventListener("input", () => {
        ensureArray(config.path)[index][key] = input.value;
        updatePreview();
      });
      label.appendChild(input);
      grid.appendChild(label);
    });
    row.appendChild(grid);
  }

  const actions = document.createElement("div");
  actions.className = "item-actions";
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "line-btn remove-btn";
  remove.textContent = "Remove";
  remove.addEventListener("click", () => {
    ensureArray(config.path).splice(index, 1);
    refresh();
    updatePreview();
  });
  actions.appendChild(remove);
  row.appendChild(actions);
  return row;
}

function bindActions(){
  document.getElementById("previewBtn").addEventListener("click", updatePreview);
  document.getElementById("copyJsonBtn").addEventListener("click", copyJson);
  document.getElementById("downloadJsonBtn").addEventListener("click", downloadJson);
  document.getElementById("saveGithubBtn").addEventListener("click", saveToGithub);
  document.getElementById("reloadLatestBtn").addEventListener("click", reloadLatestContent);
  document.getElementById("clearTokenBtn").addEventListener("click", clearToken);
  document.getElementById("clearAnalyticsBtn").addEventListener("click", clearAnalytics);
  document.getElementById("ghToken").addEventListener("input", saveTokenPreference);
  document.getElementById("tokenStorage").addEventListener("change", saveTokenPreference);
}

async function reloadLatestContent(){
  if (!confirm("Clear local draft and reload latest content/site.json from GitHub Pages?")) return;
  localStorage.removeItem(DRAFT_STORAGE_KEY);
  siteData = await loadContent();
  persistDraftContent();
  renderEditor();
  updatePreview();
  setStatus("Reloaded latest JSON. Local draft was cleared.");
}

function renderAnalytics(){
  const data = readAnalytics();
  const sessions = data.sessions || [];
  const totalDuration = sessions.reduce((sum, item) => sum + (Number(item.durationSeconds) || 0), 0);
  const avgDuration = sessions.length ? Math.round(totalDuration / sessions.length) : 0;
  const grid = document.getElementById("analyticsGrid");
  if (grid) {
    grid.innerHTML = [
      metric("Visits", data.totalVisits || 0),
      metric("Sessions", sessions.length),
      metric("Avg Time", formatDuration(avgDuration)),
      metric("Last Open", data.lastVisit ? formatDate(data.lastVisit) : "None")
    ].join("");
  }
  renderAnalyticsList("analyticsPages", data.pageViews || {});
  renderAnalyticsList("analyticsClicks", data.clicks || {});
  renderSessionList(sessions);
}

function metric(label, value){
  return `<div class="metric"><span>${escapeHTML(label)}</span><b>${escapeHTML(value)}</b></div>`;
}

function renderAnalyticsList(id, object){
  const wrap = document.getElementById(id);
  if (!wrap) return;
  const entries = Object.entries(object).sort((a, b) => b[1] - a[1]).slice(0, 8);
  wrap.innerHTML = entries.length
    ? entries.map(([label, count]) => `<div class="mini-row"><span>${escapeHTML(label)}</span><b>${escapeHTML(count)}</b></div>`).join("")
    : `<div class="mini-row"><span>No data yet</span><b>0</b></div>`;
}

function renderSessionList(sessions){
  const wrap = document.getElementById("analyticsSessions");
  if (!wrap) return;
  wrap.innerHTML = sessions.length
    ? sessions.slice(0, 8).map((session) => `<div class="mini-row"><span>${escapeHTML(formatDate(session.startedAt))}<br>${escapeHTML(session.path || "/")} / ${escapeHTML(session.device || "")}</span><b>${escapeHTML(formatDuration(session.durationSeconds || 0))}</b></div>`).join("")
    : `<div class="mini-row"><span>No sessions yet</span><b>0</b></div>`;
}

function readAnalytics(){
  try {
    return JSON.parse(localStorage.getItem(ANALYTICS_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function clearAnalytics(){
  localStorage.removeItem(ANALYTICS_STORAGE_KEY);
  renderAnalytics();
  setStatus("Local analytics cleared.");
}

function formatDuration(seconds){
  const value = Math.max(0, Number(seconds) || 0);
  const minutes = Math.floor(value / 60);
  const secs = value % 60;
  return minutes ? `${minutes}m ${secs}s` : `${secs}s`;
}

function formatDate(value){
  try {
    return new Date(value).toLocaleString();
  } catch {
    return value || "";
  }
}

function updatePreview(){
  document.getElementById("jsonPreview").textContent = JSON.stringify(siteData, null, 2);
  persistDraftContent();
}

function validateContent(){
  const required = [
    ["seo.title", "SEO title"],
    ["profile.name", "Name"],
    ["profile.email", "Email"],
    ["hero.title", "Hero title"],
    ["contact.buttonLink", "Contact button link"]
  ];
  const missing = required.filter(([path]) => !String(getByPath(siteData, path) || "").trim());
  if (missing.length) {
    setStatus(`Missing required fields: ${missing.map(([, label]) => label).join(", ")}`, true);
    return false;
  }
  return true;
}

async function saveToGithub(){
  if (!validateContent()) return;
  if (isSavingToGithub) {
    setStatus("Save already in progress. Please wait.");
    return;
  }
  const owner = value("ghOwner");
  const repo = value("ghRepo");
  const branch = value("ghBranch");
  const token = value("ghToken");
  const saveBtn = document.getElementById("saveGithubBtn");

  if (!owner || !repo || !branch || !token) {
    setStatus("Enter owner, repo, branch, and token first.", true);
    return;
  }

  isSavingToGithub = true;
  if (saveBtn) saveBtn.disabled = true;
  setStatus("Saving to GitHub...");
  saveTokenPreference();

  try {
    const apiUrl = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/${CONTENT_PATH}`;
    const content = toBase64Unicode(JSON.stringify(siteData, null, 2) + "\n");
    await putGithubContentWithRetry(apiUrl, token, branch, {
      message: "Update portfolio content",
      content
    });
    persistDraftContent();
    setStatus("Saved. GitHub Pages will refresh after the commit deploys.");
  } catch (error) {
    setStatus(error.message || "GitHub save failed.", true);
  } finally {
    isSavingToGithub = false;
    if (saveBtn) saveBtn.disabled = false;
  }
}

async function putGithubContentWithRetry(apiUrl, token, branch, payload){
  let lastError = "GitHub save failed.";
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const current = await fetch(`${apiUrl}?ref=${encodeURIComponent(branch)}&t=${Date.now()}`, {
      headers: githubHeaders(token),
      cache: "no-store"
    });
    if (!current.ok) throw new Error(await githubError(current));
    const currentFile = await current.json();

    const save = await fetch(apiUrl, {
      method: "PUT",
      headers: githubHeaders(token),
      body: JSON.stringify({
        ...payload,
        sha: currentFile.sha,
        branch
      })
    });

    if (save.ok) return await save.json();

    lastError = await githubError(save);
    if (save.status !== 409 || attempt === 3) {
      throw new Error(lastError);
    }

    setStatus(`GitHub conflict detected. Retrying save ${attempt + 1}/3...`);
    await wait(700 * attempt);
  }
  throw new Error(lastError);
}

function wait(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function uploadImageFile(file, imagePath, pathInput){
  const owner = value("ghOwner");
  const repo = value("ghRepo");
  const branch = value("ghBranch");
  const token = value("ghToken");

  if (!owner || !repo || !branch || !token) {
    setStatus("Enter GitHub owner, repo, branch, and token before uploading.", true);
    return;
  }
  if (!file.type.startsWith("image/")) {
    setStatus("Please choose a valid image file.", true);
    return;
  }

  saveTokenPreference();
  setStatus(`Uploading ${file.name}...`);

  try {
    const safeName = makeSafeUploadName(file.name);
    const repoPath = `assets/uploads/${safeName}`;
    const apiUrl = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/${repoPath}`;
    const body = {
      message: `Upload ${safeName}`,
      content: await fileToBase64(file),
      branch
    };

    const upload = await fetch(apiUrl, {
      method: "PUT",
      headers: githubHeaders(token),
      body: JSON.stringify(body)
    });
    if (!upload.ok) throw new Error(await githubError(upload));

    const publicPath = `./${repoPath}`;
    setByPath(siteData, imagePath, publicPath);
    pathInput.value = publicPath;
    updatePreview();
    setStatus(`Uploaded image. Path set to ${publicPath}. Now click Save to GitHub.`);
  } catch (error) {
    setStatus(error.message || "Image upload failed.", true);
  }
}

function makeSafeUploadName(name){
  const dotIndex = name.lastIndexOf(".");
  const base = dotIndex >= 0 ? name.slice(0, dotIndex) : name;
  const ext = dotIndex >= 0 ? name.slice(dotIndex + 1) : "png";
  const safeBase = base.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "image";
  const safeExt = ext.toLowerCase().replace(/[^a-z0-9]/g, "") || "png";
  return `${safeBase}-${Date.now()}.${safeExt}`;
}

function fileToBase64(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.includes(",") ? result.split(",")[1] : result);
    };
    reader.onerror = () => reject(new Error("Could not read image file."));
    reader.readAsDataURL(file);
  });
}

function githubHeaders(token){
  return {
    "Accept": "application/vnd.github+json",
    "Authorization": `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28"
  };
}

async function githubError(response){
  try {
    const data = await response.json();
    return data.message || `GitHub API error ${response.status}`;
  } catch {
    return `GitHub API error ${response.status}`;
  }
}

function copyJson(){
  const text = JSON.stringify(siteData, null, 2);
  if (!navigator.clipboard) {
    setStatus("Clipboard unavailable. Use Download JSON instead.", true);
    return;
  }
  navigator.clipboard.writeText(text).then(
    () => setStatus("JSON copied."),
    () => setStatus("Copy failed. Use Download JSON instead.", true)
  );
}

function downloadJson(){
  const blob = new Blob([JSON.stringify(siteData, null, 2) + "\n"], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "site.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  setStatus("Downloaded site.json.");
}

function restoreToken(){
  const sessionToken = sessionStorage.getItem("portfolio_admin_token");
  const localToken = localStorage.getItem("portfolio_admin_token");
  if (sessionToken) {
    document.getElementById("ghToken").value = sessionToken;
    document.getElementById("tokenStorage").value = "session";
  } else if (localToken) {
    document.getElementById("ghToken").value = localToken;
    document.getElementById("tokenStorage").value = "local";
  }
}

function saveTokenPreference(){
  const token = value("ghToken");
  const storage = value("tokenStorage");
  sessionStorage.removeItem("portfolio_admin_token");
  localStorage.removeItem("portfolio_admin_token");
  if (!token) return;
  if (storage === "local") {
    localStorage.setItem("portfolio_admin_token", token);
  } else {
    sessionStorage.setItem("portfolio_admin_token", token);
  }
}

function clearToken(){
  document.getElementById("ghToken").value = "";
  sessionStorage.removeItem("portfolio_admin_token");
  localStorage.removeItem("portfolio_admin_token");
  setStatus("Token cleared from this browser.");
}

function ensureArray(path){
  let list = getByPath(siteData, path);
  if (!Array.isArray(list)) {
    setByPath(siteData, path, []);
    list = getByPath(siteData, path);
  }
  return list;
}

function loadDraftContent(){
  try {
    const raw = localStorage.getItem(DRAFT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function persistDraftContent(){
  try {
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(siteData));
  } catch {
    // Ignore storage errors so the editor still works locally.
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

function blankObject(fields){
  return fields.reduce((obj, [key]) => {
    obj[key] = "";
    return obj;
  }, {});
}

function getByPath(obj, path){
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function setByPath(obj, path, valueToSet){
  const keys = path.split(".");
  let cursor = obj;
  keys.slice(0, -1).forEach((key) => {
    if (!cursor[key] || typeof cursor[key] !== "object") cursor[key] = {};
    cursor = cursor[key];
  });
  cursor[keys[keys.length - 1]] = valueToSet;
}

function value(id){
  return document.getElementById(id).value.trim();
}

function setStatus(message, isError = false){
  const status = document.getElementById("statusText");
  status.textContent = message;
  status.style.color = isError ? "#b3261e" : "#e23d12";
}

function toBase64Unicode(text){
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary);
}

function escapeHTML(valueToEscape){
  return String(valueToEscape ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
