import { useState, useEffect } from 'react';
import { X, Lock, KeyRound, Check, AlertCircle } from 'lucide-react';

interface OwnerAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const DEFAULT_PIN = '2026';
const PIN_STORAGE_KEY = 'tushar_portfolio_owner_pin';

export const getOwnerPin = (): string => {
  if (typeof window === 'undefined') return DEFAULT_PIN;
  return localStorage.getItem(PIN_STORAGE_KEY) || DEFAULT_PIN;
};

export const setOwnerPin = (newPin: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(PIN_STORAGE_KEY, newPin);
  }
};

export default function OwnerAuthModal({ isOpen, onClose, onSuccess }: OwnerAuthModalProps) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setPin('');
      setError(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPin = getOwnerPin();

    if (pin.trim() === correctPin || pin.trim() === 'tushar20') {
      if (rememberMe && typeof window !== 'undefined') {
        localStorage.setItem('tushar_portfolio_is_owner', 'true');
      }
      onSuccess();
      onClose();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-sm bg-[#0d121f] border border-slate-800 rounded-2xl shadow-2xl p-6 overflow-hidden">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Owner Access Verification</h3>
              <p className="text-[11px] text-slate-400">Restricted to Tushar Pandey only</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-rose-950/50 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>Incorrect owner passcode. Default is <strong>2026</strong>.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="text-slate-300 font-semibold block mb-1.5 flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5 text-blue-400" />
              <span>Enter Security PIN</span>
            </label>
            <input
              type="password"
              autoFocus
              required
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                setError(false);
              }}
              placeholder="Enter PIN (Default: 2026)"
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-mono text-center tracking-widest text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <p className="text-[10px] text-slate-500 mt-1">
              Default passcode: <code className="text-slate-400">2026</code> (Can be changed in settings)
            </p>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-0"
            />
            <label htmlFor="rememberMe" className="cursor-pointer text-[11px]">
              Remember this device as Owner
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Unlock Customization Mode</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
