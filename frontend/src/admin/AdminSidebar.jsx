import React from 'react';
import {
  LayoutDashboard,
  FolderKanban,
  Layers,
  MessageSquare,
  Users,
  Quote,
  Settings as SettingsIcon,
  LogOut,
  ExternalLink,
  UserCog,
} from 'lucide-react';
import { navForRole, ROLE_META } from './permissions.js';

const ICONS = {
  overview: LayoutDashboard,
  projects: FolderKanban,
  services: Layers,
  messages: MessageSquare,
  team: Users,
  testimonials: Quote,
  settings: SettingsIcon,
  users: UserCog,
};

export default function AdminSidebar({
  user,
  activeTab,
  setActiveTab,
  isSidebarOpen,
  setIsSidebarOpen,
  onGoToWebsite,
  onLogout,
  badges = {},
}) {
  const items = navForRole(user?.role || 'EDITOR');
  const roleMeta = ROLE_META[user?.role] || ROLE_META.EDITOR;

  return (
    <aside
      className={`${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-[#0B0F19] border-r border-white/10 p-4 flex flex-col z-30 shrink-0`}
    >
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div className={`${!isSidebarOpen && 'hidden'} flex items-center gap-2.5`}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-white shadow-md">
            N
          </div>
          <div>
            <span className="font-extrabold text-sm text-white block leading-tight">Nova Admin</span>
            <span className="text-[10px] text-cyan-400 font-mono">Control Panel</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all mx-auto"
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? '◀' : '▶'}
        </button>
      </div>

      {isSidebarOpen && (
        <div className={`mb-4 px-3 py-2 rounded-xl border text-[10px] font-mono ${roleMeta.badgeClass}`}>
          {roleMeta.labelSo} · {roleMeta.label}
        </div>
      )}

      <nav className="space-y-1.5 flex-1">
        {items.map((item) => {
          const Icon = ICONS[item.id] || LayoutDashboard;
          const badge = badges[item.id];
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all text-xs font-mono ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4 shrink-0" />
                {isSidebarOpen && <span className="truncate">{item.titleSo}</span>}
              </div>
              {isSidebarOpen && badge > 0 && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full text-white font-bold ${
                    item.id === 'messages' ? 'bg-amber-500' : 'bg-blue-500'
                  }`}
                >
                  {badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="pt-4 border-t border-white/10 space-y-3">
        {onGoToWebsite && (
          <button
            type="button"
            onClick={onGoToWebsite}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 font-mono text-xs border border-blue-500/20 transition-all ${
              !isSidebarOpen && 'justify-center'
            }`}
          >
            <ExternalLink className="w-4 h-4 shrink-0" />
            {isSidebarOpen && <span>Websaydhka</span>}
          </button>
        )}

        <div className={`flex items-center gap-3 p-2 rounded-xl bg-slate-900 border border-white/5 ${!isSidebarOpen && 'justify-center'}`}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-[1.5px] shrink-0">
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'Admin')}&background=0B0F19&color=38bdf8`}
              className="w-full h-full rounded-full"
              alt=""
            />
          </div>
          {isSidebarOpen && (
            <div className="flex-1 overflow-hidden min-w-0">
              <p className="text-xs font-bold text-white truncate">{user?.name}</p>
              <p className="text-[10px] text-slate-400 truncate">{user?.email}</p>
            </div>
          )}
          {isSidebarOpen && (
            <button
              type="button"
              onClick={onLogout}
              className="p-1.5 text-slate-400 hover:text-red-400 transition-colors"
              title="Ka bax"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
