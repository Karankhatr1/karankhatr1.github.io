/**
 * Shared Interactive Logic (Guarded & Safe across all views)
 */
document.addEventListener('DOMContentLoaded', () => {
  initCompanyBadge();
  initBeforeAfter();
  initPrototypeSimulator();
});

/* --------------------------------------------------------------------------
   1. Interactive 3-State Company Badge (Runs on index.html)
   -------------------------------------------------------------------------- */
function initCompanyBadge() {
  const stateDefault = document.getElementById('stateDefault');
  const stateEditing = document.getElementById('stateEditing');
  const stateSaved = document.getElementById('stateSaved');
  const companyEditInput = document.getElementById('companyEditInput');
  const savedCompanyName = document.getElementById('savedCompanyName');
  const nowSubtitle = document.getElementById('nowSubtitle');
  const btnSaveCompany = document.getElementById('btnSaveCompany');
  const btnEditSaved = document.getElementById('btnEditSaved');
  const btnClearSaved = document.getElementById('btnClearSaved');

  if (!stateDefault || !stateEditing || !stateSaved) return;

  const STORAGE_KEY = 'lokesh_saved_company_name';

  function renderCompanyState() {
    const savedName = localStorage.getItem(STORAGE_KEY);
    if (savedName && savedName.trim() !== '') {
      stateDefault.style.display = 'none';
      stateEditing.style.display = 'none';
      stateSaved.style.display = 'inline-flex';
      savedCompanyName.textContent = savedName;
      if (nowSubtitle) nowSubtitle.textContent = 'That would work. Email me and let’s talk.';
    } else {
      stateDefault.style.display = 'inline-flex';
      stateEditing.style.display = 'none';
      stateSaved.style.display = 'none';
      if (nowSubtitle) nowSubtitle.textContent = 'Open to work. The problem matters more than the industry.';
    }
  }

  function enterEditingState() {
    stateDefault.style.display = 'none';
    stateSaved.style.display = 'none';
    stateEditing.style.display = 'inline-flex';
    companyEditInput.value = localStorage.getItem(STORAGE_KEY) || '';
    companyEditInput.focus();
    companyEditInput.select();
  }

  function saveCompanyInput() {
    const val = companyEditInput.value.trim();
    if (val.length > 0) {
      localStorage.setItem(STORAGE_KEY, val);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    renderCompanyState();
  }

  stateDefault.addEventListener('click', enterEditingState);
  if (btnEditSaved) btnEditSaved.addEventListener('click', enterEditingState);
  if (btnClearSaved) {
    btnClearSaved.addEventListener('click', () => {
      localStorage.removeItem(STORAGE_KEY);
      renderCompanyState();
    });
  }
  if (btnSaveCompany) btnSaveCompany.addEventListener('click', saveCompanyInput);
  if (companyEditInput) {
    companyEditInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') saveCompanyInput();
      else if (e.key === 'Escape') renderCompanyState();
    });
  }

  renderCompanyState();
}

/* --------------------------------------------------------------------------
   2. Before/After Visual Toggle (Runs on case studies)
   -------------------------------------------------------------------------- */
function initBeforeAfter() {
  const btnBefore = document.getElementById('btnShowBefore');
  const btnAfter = document.getElementById('btnShowAfter');
  const screenBefore = document.getElementById('screenBefore');
  const screenAfter = document.getElementById('screenAfter');

  if (!btnBefore || !btnAfter || !screenBefore || !screenAfter) return;

  btnBefore.addEventListener('click', () => {
    btnBefore.classList.add('active');
    btnAfter.classList.remove('active');
    screenBefore.classList.add('active');
    screenAfter.classList.remove('active');
  });

  btnAfter.addEventListener('click', () => {
    btnAfter.classList.add('active');
    btnBefore.classList.remove('active');
    screenAfter.classList.add('active');
    screenBefore.classList.remove('active');
  });
}

/* --------------------------------------------------------------------------
   3. Interactive Prototype Simulator Tabs (Runs on case studies)
   -------------------------------------------------------------------------- */
function initPrototypeSimulator() {
  const axisTabs = document.querySelectorAll('.axis-tab-btn');
  const contentPanels = document.querySelectorAll('.tab-content-panel');

  if (!axisTabs.length || !contentPanels.length) return;

  axisTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.axis;
      axisTabs.forEach(t => t.classList.remove('active'));
      contentPanels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const activePanel = document.getElementById(`panel-${target}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}