export const ROLES = {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  USER: 'USER',
};

export const ROLE_META = {
  ADMIN: {
    label: 'Admin',
    labelSo: 'Maamule',
    description: 'Full access — settings, users, and all content.',
    badgeClass: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  },
  EDITOR: {
    label: 'Editor',
    labelSo: 'Tifaftire',
    description: 'Manage portfolio, services, messages, team, and testimonials.',
    badgeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  },
  USER: {
    label: 'User',
    labelSo: 'Isticmaale',
    description: 'No admin panel access (website accounts only).',
    badgeClass: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
  },
};

/** Sidebar navigation — filtered by role at runtime */
export const ADMIN_NAV = [
  { id: 'overview', title: 'Overview', titleSo: 'Dulmar', roles: ['ADMIN', 'EDITOR'] },
  { id: 'projects', title: 'Portfolio & Projects', titleSo: 'Mashaariic', roles: ['ADMIN', 'EDITOR'] },
  { id: 'services', title: 'Services', titleSo: 'Adeegyada', roles: ['ADMIN', 'EDITOR'] },
  { id: 'messages', title: 'Messages & Inquiries', titleSo: 'Fariimaha', roles: ['ADMIN', 'EDITOR'] },
  { id: 'team', title: 'Team Members', titleSo: 'Kooxda', roles: ['ADMIN', 'EDITOR'] },
  { id: 'testimonials', title: 'Testimonials', titleSo: 'Faallooyin', roles: ['ADMIN', 'EDITOR'] },
  { id: 'settings', title: 'System Settings', titleSo: 'Settings', roles: ['ADMIN'] },
  { id: 'users', title: 'Users & Roles', titleSo: 'Isticmaalayaasha', roles: ['ADMIN'] },
];

export function navForRole(role) {
  return ADMIN_NAV.filter((item) => item.roles.includes(role));
}

export function canWriteContent(role) {
  return role === ROLES.ADMIN || role === ROLES.EDITOR;
}

export function canManageUsers(role) {
  return role === ROLES.ADMIN;
}

export function canManageSettings(role) {
  return role === ROLES.ADMIN;
}
