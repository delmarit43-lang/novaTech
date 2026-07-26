import React, { useEffect, useState } from 'react';
import { 
  FolderKanban, 
  MessageSquare, 
  FileText, 
  Plus, 
  CheckCircle, 
  Trash2, 
  Edit3, 
  RefreshCw, 
  X,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { apiService } from '../services/api.js';
import AdminLogin from '../admin/AdminLogin.jsx';
import AdminSidebar from '../admin/AdminSidebar.jsx';
import UsersRolesPanel from '../admin/UsersRolesPanel.jsx';
import { navForRole, canWriteContent, canManageSettings } from '../admin/permissions.js';
import { canAccessAdminShell } from '../admin/adminAccess.js';

export default function AdminDashboard({ onGoToWebsite, showToast }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  // Data States
  const [stats, setStats] = useState(null);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [messages, setMessages] = useState([]);
  const [projectRequests, setProjectRequests] = useState([]);
  const [team, setTeam] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal States
  const [activeModal, setActiveModal] = useState(null); // 'create_project' | 'edit_project' | 'create_service' | 'create_team' | 'create_testimonial'
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({});

  // Redirect if admin URL reached without gate or token
  useEffect(() => {
    if (!canAccessAdminShell()) {
      onGoToWebsite?.();
    }
  }, [onGoToWebsite]);

  // Check auth status on mount
  useEffect(() => {
    const bootstrap = async () => {
      const token = localStorage.getItem('nova_admin_token');
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await apiService.getMe();
        const user = res.data;
        if (user?.role !== 'ADMIN' && user?.role !== 'EDITOR') {
          apiService.logout();
          setLoading(false);
          return;
        }
        setCurrentUser(user);
        localStorage.setItem('nova_admin_user', JSON.stringify(user));
        setIsAuthenticated(true);
        fetchDashboardData();
      } catch {
        apiService.logout();
        setLoading(false);
      }
    };
    bootstrap();
  }, []);

  const handleLogin = async (loginEmail, loginPassword) => {
    setLoginLoading(true);
    setLoginError(null);
    try {
      const res = await apiService.login(loginEmail, loginPassword);
      const user = res.data?.user;
      setCurrentUser(user);
      setIsAuthenticated(true);
      if (showToast) showToast('Soo dhawaaw! Waxaad si guul leh ugu soo gashay Dashboard-ka.', 'success');
      fetchDashboardData();
    } catch (err) {
      setLoginError(err.message || 'Loginka waa la diiday. Fadlan E-mailka iyo Password-ka hubaal ka dhig.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    apiService.logout();
    setIsAuthenticated(false);
    setCurrentUser(null);
    setActiveTab('overview');
    if (showToast) showToast('Waa lagu ka baxay nidaamka.', 'info');
  };

  useEffect(() => {
    if (!currentUser?.role) return;
    const allowed = navForRole(currentUser.role).map((n) => n.id);
    if (!allowed.includes(activeTab)) {
      setActiveTab(allowed[0] || 'overview');
    }
  }, [currentUser, activeTab]);

  const writeAccess = canWriteContent(currentUser?.role);
  const settingsAccess = canManageSettings(currentUser?.role);

  const fetchDashboardData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [statsRes, projRes, servRes, msgRes, reqRes, teamRes, testRes, setRes] = await Promise.allSettled([
        apiService.getDashboardStats(),
        apiService.getPortfolios(),
        apiService.getServices(),
        apiService.getContactMessages(),
        apiService.getProjectRequests(),
        apiService.getTeam(),
        apiService.getTestimonials(),
        apiService.getSettings(),
      ]);

      if (statsRes.status === 'fulfilled') setStats(statsRes.value.data);
      if (projRes.status === 'fulfilled') setProjects(projRes.value.data || []);
      if (servRes.status === 'fulfilled') setServices(servRes.value.data || []);
      if (msgRes.status === 'fulfilled') setMessages(msgRes.value.data || []);
      if (reqRes.status === 'fulfilled') setProjectRequests(reqRes.value.data || []);
      if (teamRes.status === 'fulfilled') setTeam(teamRes.value.data || []);
      if (testRes.status === 'fulfilled') setTestimonials(testRes.value.data || []);
      if (setRes.status === 'fulfilled') setSettings(setRes.value.data || {});

    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError('Cillad ayaa ka dhacday soo qaadashada xogta backend-ka.');
    } finally {
      setLoading(false);
    }
  };

  // --- CRUD Handlers ---

  // Project Submit
  const handleSaveProject = async (e) => {
    e.preventDefault();
    try {
      if (selectedItem?.id) {
        await apiService.updatePortfolio(selectedItem.id, formData);
        if (showToast) showToast('Mashruuca waa la cusbooneysiiyay!', 'success');
      } else {
        await apiService.createPortfolio(formData);
        if (showToast) showToast('Mashruuc cusub waa la kaydiyay!', 'success');
      }
      setActiveModal(null);
      fetchDashboardData();
    } catch (err) {
      if (showToast) showToast(err.message || 'Cillad ayaa ka dhacday kaydinta mashruuca.', 'error');
    }
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm('Ma hubtaa inaad tiraysid mashruucan?')) return;
    try {
      await apiService.deletePortfolio(id);
      if (showToast) showToast('Mashruuca waa la tiray.', 'info');
      fetchDashboardData();
    } catch (err) {
      if (showToast) showToast(err.message || 'Waa la diaday tirista mashruuca.', 'error');
    }
  };

  // Service Submit
  const handleSaveService = async (e) => {
    e.preventDefault();
    try {
      await apiService.createService(formData);
      if (showToast) showToast('Adeege cusub waa la kaydiyay!', 'success');
      setActiveModal(null);
      fetchDashboardData();
    } catch (err) {
      if (showToast) showToast(err.message || 'Cillad ayaa ka dhacday kaydinta adeega.', 'error');
    }
  };

  const handleDeleteService = async (id) => {
    if (!window.confirm('Ma hubtaa inaad tiraysid adeegan?')) return;
    try {
      await apiService.deleteService(id);
      if (showToast) showToast('Adeega waa la tiray.', 'info');
      fetchDashboardData();
    } catch (err) {
      if (showToast) showToast(err.message || 'Waa la diaday tirista adeega.', 'error');
    }
  };

  // Message Status Update
  const handleUpdateMessageStatus = async (id, status) => {
    try {
      await apiService.updateContactStatus(id, status);
      if (showToast) showToast(`Fariinta heerkeeda waa loo badalay: ${status}`, 'success');
      fetchDashboardData();
    } catch (err) {
      if (showToast) showToast(err.message || 'Cillad ayaa ka dhacday badalida fariinta.', 'error');
    }
  };

  const handleDeleteMessage = async (id) => {
    if (!window.confirm('Ma hubtaa inaad tiraysid fariintan?')) return;
    try {
      await apiService.deleteContactMessage(id);
      if (showToast) showToast('Fariinta waa la tiray.', 'info');
      fetchDashboardData();
    } catch (err) {
      if (showToast) showToast(err.message || 'Waa la diaday tirista fariinta.', 'error');
    }
  };

  // Settings Save
  const handleSaveSettings = async (e) => {
    e.preventDefault();
    try {
      await apiService.updateSettings(formData);
      if (showToast) showToast('Nidaamka iyo Setinka waa la cusbooneysiiyay!', 'success');
      fetchDashboardData();
    } catch (err) {
      if (showToast) showToast(err.message || 'Cillad ayaa ka dhacday kaydinta setinka.', 'error');
    }
  };

  // ----------------------------------------------------
  // LOGIN SCREEN
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <AdminLogin
        onLogin={handleLogin}
        onGoToWebsite={onGoToWebsite}
        loginLoading={loginLoading}
        loginError={loginError}
      />
    );
  }

  // ----------------------------------------------------
  // MAIN DASHBOARD LAYOUT
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-[#081226] text-slate-100 flex font-sans overflow-hidden">
      
      <AdminSidebar
        user={currentUser}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        onGoToWebsite={onGoToWebsite}
        onLogout={handleLogout}
        badges={{
          projects: projects.length,
          services: services.length,
          messages:
            (stats?.totals?.unreadMessages || 0) +
            projectRequests.filter((r) => (r.status || 'PENDING') === 'PENDING').length,
          team: team.length,
        }}
      />

      {/* Main Content Dashboard View */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-[#081226] relative">
        
        {/* Top Header Navbar */}
        <header className="sticky top-0 z-20 bg-[#0B0F19]/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>
                {activeTab === 'overview' && '📊 Dynamic Overview & Real-Time Stats'}
                {activeTab === 'projects' && '🚀 Portfolio & Project Management'}
                {activeTab === 'services' && '⚡ Enterprise Services Management'}
                {activeTab === 'messages' && '📬 Client Messages & Scope Requests'}
                {activeTab === 'team' && '👥 Team & Executive Leadership'}
                {activeTab === 'testimonials' && '💬 Client Testimonials'}
                {activeTab === 'settings' && '⚙️ System & Global Settings'}
                {activeTab === 'users' && '🔐 Users & Role Management'}
              </span>
            </h1>
            <p className="text-xs text-slate-400 font-mono mt-0.5">Nova Tech Backend Data Synchronization Layer</p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={fetchDashboardData}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono border border-white/10"
              title="Refresh Backend Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading && 'animate-spin'}`} />
              <span className="hidden sm:inline">Sync Data</span>
            </button>

            {writeAccess && activeTab === 'projects' && (
              <button 
                onClick={() => {
                  setSelectedItem(null);
                  setFormData({ title: '', client: '', industry: '', description: '', challenge: '', solution: '', result: '', technologies: 'React, Node.js, PostgreSQL', status: 'ACTIVE' });
                  setActiveModal('project');
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add Project</span>
              </button>
            )}

            {writeAccess && activeTab === 'services' && (
              <button 
                onClick={() => {
                  setSelectedItem(null);
                  setFormData({ title: '', slug: '', category: 'Software Engineering', description: '', icon: 'Cpu', status: 'ACTIVE' });
                  setActiveModal('service');
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Add Service</span>
              </button>
            )}
          </div>
        </header>

        {/* Content Container */}
        <div className="p-6 lg:p-8 space-y-8">
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 space-y-4">
              <div className="w-12 h-12 border-3 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs font-mono text-slate-400">Loading Nova Tech API records...</p>
            </div>
          ) : error ? (
            <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm space-y-2">
              <p className="font-bold flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                {error}
              </p>
              <p className="text-xs text-slate-400">Hubi in Backend Server-ku socdo port-ka 5000.</p>
              <button onClick={fetchDashboardData} className="px-4 py-1.5 rounded-xl bg-red-500/20 text-red-300 text-xs font-mono hover:bg-red-500/30 transition-all mt-2">
                Isku Day Markale
              </button>
            </div>
          ) : (
            <>
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Dynamic Metrics Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <StatCard 
                      title="Total Projects" 
                      value={stats?.totals?.totalProjects || projects.length} 
                      icon="🚀" 
                      trend="+14% this month"
                      color="from-blue-500 to-cyan-400"
                    />
                    <StatCard 
                      title="Active Services" 
                      value={stats?.totals?.totalServices || services.length} 
                      icon="⚡" 
                      color="from-cyan-500 to-teal-400"
                    />
                    <StatCard 
                      title="Unread Messages" 
                      value={stats?.totals?.unreadMessages || 0} 
                      icon="📬" 
                      color="from-amber-400 to-orange-500"
                      highlight={stats?.totals?.unreadMessages > 0}
                    />
                    <StatCard 
                      title="Team Members" 
                      value={stats?.totals?.totalTeamMembers || team.length} 
                      icon="👥" 
                      color="from-indigo-500 to-blue-500"
                    />
                  </div>

                  {/* Recent Activity Dual Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Recent Projects Card */}
                    <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#0B0F19]/80 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <h3 className="text-sm font-bold text-white flex items-center gap-2">
                          <FolderKanban className="w-4 h-4 text-cyan-400" />
                          <span>Recent Projects (Portfolio)</span>
                        </h3>
                        <button onClick={() => setActiveTab('projects')} className="text-xs font-mono text-blue-400 hover:text-blue-300">
                          View All →
                        </button>
                      </div>

                      <div className="space-y-3">
                        {projects.slice(0, 4).map((p) => (
                          <div key={p.id} className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all flex items-center justify-between text-xs">
                            <div>
                              <h4 className="font-bold text-white">{p.title}</h4>
                              <p className="text-[11px] text-slate-400 font-mono">Client: {p.client || 'Enterprise Partner'}</p>
                            </div>
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                              p.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400'
                            }`}>
                              {p.status || 'ACTIVE'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Messages Card */}
                    <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#0B0F19]/80 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <h3 className="text-sm font-bold text-white flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-amber-400" />
                          <span>Latest Messages & Scope Requests</span>
                        </h3>
                        <button onClick={() => setActiveTab('messages')} className="text-xs font-mono text-amber-400 hover:text-amber-300">
                          Manage →
                        </button>
                      </div>

                      <div className="space-y-3">
                        {messages.length === 0 ? (
                          <p className="text-xs text-slate-500 text-center py-6">Fariimo ama codsiyo cusub ma jiraan xiligan.</p>
                        ) : (
                          messages.slice(0, 4).map((m) => (
                            <div key={m.id} className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all flex items-center justify-between text-xs">
                              <div>
                                <h4 className="font-bold text-white">{m.name}</h4>
                                <p className="text-[11px] text-slate-400 truncate max-w-xs">{m.message || m.subject}</p>
                              </div>
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                                m.status === 'UNREAD' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-800 text-slate-400'
                              }`}>
                                {m.status}
                              </span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* TAB 2: PROJECTS / PORTFOLIO */}
              {activeTab === 'projects' && (
                <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#0B0F19]/80 space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-base font-bold text-white">All Portfolio Projects ({projects.length})</h3>
                      <p className="text-xs text-slate-400">Ku dar, wax ka badal ama maamul mashaariicda uu backend-ku habaynayo.</p>
                    </div>
                    {writeAccess && (
                    <button 
                      onClick={() => {
                        setSelectedItem(null);
                        setFormData({ title: '', client: '', industry: '', description: '', challenge: '', solution: '', result: '', technologies: 'React, Node.js, PostgreSQL', status: 'ACTIVE' });
                        setActiveModal('project');
                      }}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Create Project</span>
                    </button>
                    )}
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-white/10 text-slate-400 font-mono uppercase text-[11px]">
                          <th className="pb-3 px-3">Title</th>
                          <th className="pb-3 px-3">Client</th>
                          <th className="pb-3 px-3">Industry</th>
                          <th className="pb-3 px-3">Status</th>
                          <th className="pb-3 px-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {projects.map((p) => (
                          <tr key={p.id} className="hover:bg-white/5 transition-colors">
                            <td className="py-4 px-3 font-bold text-white">{p.title}</td>
                            <td className="py-4 px-3 text-slate-300">{p.client || '—'}</td>
                            <td className="py-4 px-3">
                              <span className="bg-slate-900 text-cyan-300 text-[11px] px-2.5 py-1 rounded-md border border-white/10 font-mono">
                                {p.industry || 'Tech'}
                              </span>
                            </td>
                            <td className="py-4 px-3">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                                p.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400'
                              }`}>
                                {p.status}
                              </span>
                            </td>
                            <td className="py-4 px-3 text-right space-x-2">
                              {writeAccess && (
                              <>
                              <button 
                                onClick={() => {
                                  setSelectedItem(p);
                                  setFormData({ ...p });
                                  setActiveModal('project');
                                }}
                                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                                title="Edit"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button 
                                onClick={() => handleDeleteProject(p.id)}
                                className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400"
                                title="Delete"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                              </>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 3: SERVICES */}
              {activeTab === 'services' && (
                <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#0B0F19]/80 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-base font-bold text-white">Enterprise Services ({services.length})</h3>
                      <p className="text-xs text-slate-400">Adeegyada Nova Tech ee laga bixiyo nidaamka.</p>
                    </div>
                    {writeAccess && (
                    <button 
                      onClick={() => {
                        setSelectedItem(null);
                        setFormData({ title: '', slug: '', category: 'Software Engineering', description: '', icon: 'Cpu', status: 'ACTIVE' });
                        setActiveModal('service');
                      }}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Service</span>
                    </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((s) => (
                      <div key={s.id} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 relative">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                              {s.category || 'Core'}
                            </span>
                            <h4 className="text-sm font-bold text-white mt-1">{s.title}</h4>
                          </div>
                          {writeAccess && (
                          <button 
                            onClick={() => handleDeleteService(s.id)}
                            className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          )}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">{s.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: MESSAGES & REQUESTS */}
              {activeTab === 'messages' && (
                <div className="space-y-6">
                  {/* Contact Messages Table */}
                  <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#0B0F19]/80 space-y-4">
                    <h3 className="text-base font-bold text-white pb-3 border-b border-white/10 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-cyan-400" />
                      <span>Direct Contact Messages ({messages.length})</span>
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-white/10 text-slate-400 font-mono uppercase text-[11px]">
                            <th className="pb-3 px-3">Sender</th>
                            <th className="pb-3 px-3">Contact</th>
                            <th className="pb-3 px-3">Subject / Service</th>
                            <th className="pb-3 px-3">Status</th>
                            <th className="pb-3 px-3 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {messages.length === 0 ? (
                            <tr>
                              <td colSpan="5" className="text-center py-6 text-slate-500">No contact messages received yet.</td>
                            </tr>
                          ) : (
                            messages.map((m) => (
                              <tr key={m.id} className="hover:bg-white/5 transition-colors">
                                <td className="py-4 px-3 font-bold text-white">{m.name}</td>
                                <td className="py-4 px-3 font-mono text-slate-300">{m.email}<br/><span className="text-[10px] text-slate-400">{m.phone}</span></td>
                                <td className="py-4 px-3 text-slate-300 max-w-xs truncate">{m.subject || m.service || m.message}</td>
                                <td className="py-4 px-3">
                                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                                    m.status === 'UNREAD' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-emerald-500/10 text-emerald-400'
                                  }`}>
                                    {m.status}
                                  </span>
                                </td>
                                <td className="py-4 px-3 text-right space-x-2">
                                  {m.status === 'UNREAD' && (
                                    <button 
                                      onClick={() => handleUpdateMessageStatus(m.id, 'READ')}
                                      className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                                      title="Mark as Read"
                                    >
                                      <CheckCircle className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                  <button 
                                    onClick={() => handleDeleteMessage(m.id)}
                                    className="p-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20"
                                    title="Delete"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Detailed Project Scope Requests Table */}
                  <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#0B0F19]/80 space-y-4">
                    <h3 className="text-base font-bold text-white pb-3 border-b border-white/10 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-400" />
                      <span>Detailed Project Scope Requests ({projectRequests.length})</span>
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-white/10 text-slate-400 font-mono uppercase text-[11px]">
                            <th className="pb-3 px-3">Client</th>
                            <th className="pb-3 px-3">Scope / Type</th>
                            <th className="pb-3 px-3">Timeline</th>
                            <th className="pb-3 px-3">Budget</th>
                            <th className="pb-3 px-3">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {projectRequests.length === 0 ? (
                            <tr>
                              <td colSpan="5" className="text-center py-6 text-slate-500">No project scope requests yet.</td>
                            </tr>
                          ) : (
                            projectRequests.map((pr) => (
                              <tr key={pr.id} className="hover:bg-white/5 transition-colors">
                                <td className="py-4 px-3 font-bold text-white">{pr.name}<br/><span className="text-[10px] text-slate-400 font-mono">{pr.email}</span></td>
                                <td className="py-4 px-3 font-mono text-cyan-300">{pr.projectType || 'Software'}</td>
                                <td className="py-4 px-3 text-slate-300">{pr.timeline || 'Standard'}</td>
                                <td className="py-4 px-3 text-slate-300">{pr.budget || 'Custom'}</td>
                                <td className="py-4 px-3">
                                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    {pr.status || 'PENDING'}
                                  </span>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: TEAM */}
              {activeTab === 'team' && (
                <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#0B0F19]/80 space-y-6">
                  <h3 className="text-base font-bold text-white pb-3 border-b border-white/10">Team Members ({team.length})</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {team.map((t) => (
                      <div key={t.id} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                        <h4 className="font-bold text-white text-sm">{t.name}</h4>
                        <p className="text-xs text-cyan-400 font-mono">{t.position}</p>
                        <p className="text-xs text-slate-300">{t.bio}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: TESTIMONIALS */}
              {activeTab === 'testimonials' && (
                <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#0B0F19]/80 space-y-6">
                  <h3 className="text-base font-bold text-white pb-3 border-b border-white/10">Client Testimonials ({testimonials.length})</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {testimonials.map((t) => (
                      <div key={t.id} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-white text-sm">{t.clientName}</h4>
                          <span className="text-amber-400 text-xs">★ {t.rating}/5</span>
                        </div>
                        <p className="text-xs text-cyan-300 font-mono">{t.company} — {t.position}</p>
                        <p className="text-xs text-slate-300 italic">"{t.review}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 7: SETTINGS (ADMIN) */}
              {activeTab === 'settings' && settingsAccess && (
                <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-[#0B0F19]/80 space-y-6 max-w-2xl">
                  <h3 className="text-base font-bold text-white pb-3 border-b border-white/10">Global System Settings</h3>
                  <form onSubmit={handleSaveSettings} className="space-y-4 text-xs font-mono">
                    <div>
                      <label className="text-slate-300 block mb-1 font-bold">COMPANY NAME</label>
                      <input 
                        type="text" 
                        defaultValue={settings?.companyName || 'Nova Tech Solutions'} 
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-300 block mb-1 font-bold">OFFICIAL EMAIL</label>
                        <input 
                          type="email" 
                          defaultValue={settings?.email || 'NovaTech@gmail.com'} 
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                        />
                      </div>
                      <div>
                        <label className="text-slate-300 block mb-1 font-bold">PHONE NUMBER</label>
                        <input 
                          type="text" 
                          defaultValue={settings?.phone || '+252 63 4579898'} 
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                        />
                      </div>
                    </div>
                    <button type="submit" className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold">
                      Save Settings
                    </button>
                  </form>
                </div>
              )}

              {/* TAB 8: USERS & ROLES (ADMIN) */}
              {activeTab === 'users' && (
                <UsersRolesPanel showToast={showToast} />
              )}
            </>
          )}

        </div>
      </main>

      {/* --- CREATE / EDIT PROJECT MODAL --- */}
      {activeModal === 'project' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-xl glass-panel p-6 rounded-3xl border border-white/20 bg-[#0B0F19] text-white space-y-4 shadow-2xl relative">
            <button onClick={() => setActiveModal(null)} className="absolute top-5 right-5 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold">{selectedItem?.id ? 'Edit Project' : 'Create New Project'}</h3>
            <form onSubmit={handleSaveProject} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block mb-1 font-bold">PROJECT TITLE *</label>
                <input 
                  type="text" 
                  required
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. SomGov Portal"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 font-bold">CLIENT *</label>
                  <input 
                    type="text" 
                    value={formData.client || ''}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    placeholder="e.g. Ministry of Tech"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-bold">INDUSTRY *</label>
                  <input 
                    type="text" 
                    value={formData.industry || ''}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    placeholder="e.g. E-Government"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-bold">DESCRIPTION *</label>
                <textarea 
                  rows={3}
                  required
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Detailed project summary..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white font-sans"
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-xl bg-white/10">Cancel</button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-blue-600 font-bold">Save Project</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- CREATE SERVICE MODAL --- */}
      {activeModal === 'service' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-lg glass-panel p-6 rounded-3xl border border-white/20 bg-[#0B0F19] text-white space-y-4 shadow-2xl relative">
            <button onClick={() => setActiveModal(null)} className="absolute top-5 right-5 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold">Add New Enterprise Service</h3>
            <form onSubmit={handleSaveService} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block mb-1 font-bold">SERVICE TITLE *</label>
                <input 
                  type="text" 
                  required
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Cloud Security Audit"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                />
              </div>
              <div>
                <label className="block mb-1 font-bold">CATEGORY *</label>
                <input 
                  type="text" 
                  value={formData.category || ''}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="Software Engineering"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white"
                />
              </div>
              <div>
                <label className="block mb-1 font-bold">DESCRIPTION *</label>
                <textarea 
                  rows={3}
                  required
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Service details..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white font-sans"
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setActiveModal(null)} className="px-4 py-2 rounded-xl bg-white/10">Cancel</button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-blue-600 font-bold">Save Service</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

// Helper Stat Card
function StatCard({ title, value, icon, color, trend, highlight }) {
  return (
    <div className={`glass-panel p-5 rounded-2xl border ${highlight ? 'border-amber-500/50 bg-amber-500/5' : 'border-white/10 bg-[#0B0F19]/80'} space-y-3 relative overflow-hidden`}>
      <div className="flex items-center justify-between text-xs text-slate-400 font-mono uppercase">
        <span>{title}</span>
        <span className="text-xl">{icon}</span>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-3xl font-extrabold text-white tracking-tight">{value}</span>
        {trend && <span className="text-[11px] text-emerald-400 font-mono font-bold flex items-center gap-1"><TrendingUp className="w-3 h-3" />{trend}</span>}
      </div>
    </div>
  );
}
