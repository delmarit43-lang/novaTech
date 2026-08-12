import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(onClose, 4500);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <div
        className={`p-4 rounded-2xl border flex items-center gap-3 shadow-xl max-w-md bg-white ${
          isSuccess ? 'border-emerald-200 text-emerald-800' : 'border-rose-200 text-rose-800'
        }`}
      >
        {isSuccess ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
        ) : (
          <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
        )}
        <p className="text-sm font-medium leading-relaxed">{toast.message}</p>
        <button type="button" onClick={onClose} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 shrink-0 ml-auto" aria-label="Dismiss">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
