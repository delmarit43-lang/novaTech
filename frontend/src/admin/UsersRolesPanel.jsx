import React, { useEffect, useState } from 'react';
import { Plus, Trash2, Shield, RefreshCw } from 'lucide-react';
import { apiService } from '../services/api.js';
import { ROLE_META } from './permissions.js';

const ROLE_OPTIONS = ['ADMIN', 'EDITOR', 'USER'];

export default function UsersRolesPanel({ showToast }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'EDITOR' });
  const [showForm, setShowForm] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await apiService.getUsers();
      setUsers(res.data || []);
    } catch (err) {
      if (showToast) showToast(err.message || 'Lama soo qaadin isticmaalayaasha.', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await apiService.createUser(form);
      if (showToast) showToast('Isticmaale cusub waa la abuuray.', 'success');
      setForm({ name: '', email: '', password: '', role: 'EDITOR' });
      setShowForm(false);
      load();
    } catch (err) {
      if (showToast) showToast(err.message, 'error');
    }
  };

  const handleRoleChange = async (id, role) => {
    try {
      await apiService.updateUser(id, { role });
      if (showToast) showToast('Role waa la cusbooneysiiyay.', 'success');
      load();
    } catch (err) {
      if (showToast) showToast(err.message, 'error');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Ma hubtaa inaad tirtirto isticmaalahan?')) return;
    try {
      await apiService.deleteUser(id);
      if (showToast) showToast('Isticmaale waa la tiray.', 'info');
      load();
    } catch (err) {
      if (showToast) showToast(err.message, 'error');
    }
  };

  return (
    <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#0B0F19]/80 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-violet-400" />
            Isticmaalayaasha & Roles ({users.length})
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            ADMIN — wax walba · EDITOR — content · USER — ma galo admin panel
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          Ku dar isticmaale
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="p-4 rounded-2xl bg-white/5 border border-white/10 grid sm:grid-cols-2 gap-3 text-xs font-mono">
          <input
            required
            placeholder="Magaca"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white"
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white"
          />
          <input
            required
            type="password"
            placeholder="Password (min 6)"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white"
          />
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="px-3 py-2 rounded-xl bg-slate-900 border border-white/10 text-white"
          >
            {ROLE_OPTIONS.map((r) => (
              <option key={r} value={r}>
                {ROLE_META[r].label}
              </option>
            ))}
          </select>
          <div className="sm:col-span-2 flex gap-2 justify-end">
            <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 rounded-xl bg-white/10">
              Jooji
            </button>
            <button type="submit" className="px-4 py-2 rounded-xl bg-violet-600 font-bold">
              Kaydi
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <RefreshCw className="w-8 h-8 animate-spin text-cyan-400" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 font-mono uppercase text-[11px]">
                <th className="pb-3 px-3">Magac</th>
                <th className="pb-3 px-3">Email</th>
                <th className="pb-3 px-3">Role</th>
                <th className="pb-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-white/5">
                  <td className="py-3 px-3 font-bold text-white">{u.name}</td>
                  <td className="py-3 px-3 text-slate-300 font-mono">{u.email}</td>
                  <td className="py-3 px-3">
                    <select
                      value={u.role}
                      onChange={(e) => handleRoleChange(u.id, e.target.value)}
                      className={`px-2 py-1 rounded-lg bg-slate-900 border text-[11px] font-mono ${ROLE_META[u.role]?.badgeClass || ''}`}
                    >
                      {ROLE_OPTIONS.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      type="button"
                      onClick={() => handleDelete(u.id)}
                      className="p-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
