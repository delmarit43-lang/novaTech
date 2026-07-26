const ADMIN_PATH = 'nova-console';
const LEGACY_PATH = 'admin';
const GATE_STORAGE_KEY = 'nova_admin_gate_ok';

function parseHash() {
  const raw = window.location.hash.startsWith('#')
    ? window.location.hash.slice(1)
    : window.location.hash;
  const [pathPart, queryPart] = raw.split('?');
  const path = pathPart || '';
  const params = new URLSearchParams(queryPart || '');
  const keyFromHash = params.get('k');
  const keyFromSearch = new URLSearchParams(window.location.search).get('k');
  return { path, accessKey: keyFromHash || keyFromSearch };
}

export function isAdminRouteHash() {
  const { path } = parseHash();
  return path === ADMIN_PATH || path === LEGACY_PATH;
}

export function getExpectedAccessKey() {
  return import.meta.env.VITE_ADMIN_ACCESS_KEY || '';
}

/** Persist gate after correct secret key (URL or env match). */
export function tryUnlockAdminGateFromUrl() {
  const expected = getExpectedAccessKey();
  if (!expected) {
    return false;
  }

  const { path, accessKey } = parseHash();
  if (path !== ADMIN_PATH && path !== LEGACY_PATH) {
    return false;
  }

  if (accessKey && accessKey === expected) {
    sessionStorage.setItem(GATE_STORAGE_KEY, '1');
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}#${ADMIN_PATH}`
    );
    return true;
  }

  return sessionStorage.getItem(GATE_STORAGE_KEY) === '1';
}

export function hasAdminGateAccess() {
  return sessionStorage.getItem(GATE_STORAGE_KEY) === '1';
}

export function hasAdminAuthToken() {
  return Boolean(localStorage.getItem('nova_admin_token'));
}

/** May the admin shell (incl. login) render? */
export function canAccessAdminShell() {
  if (hasAdminAuthToken()) {
    return true;
  }
  tryUnlockAdminGateFromUrl();
  return hasAdminGateAccess();
}

export function stripAdminFromUrl() {
  if (!window.location.hash) {
    return;
  }
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
}

export function getAdminEntryUrl() {
  const key = getExpectedAccessKey();
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  if (!key) {
    return `${origin}/#${ADMIN_PATH}`;
  }
  return `${origin}/#${ADMIN_PATH}?k=${encodeURIComponent(key)}`;
}

export const ADMIN_ROUTE_PATH = ADMIN_PATH;
