import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
  bio?: string;
  avatar?: string;
  interests?: string[];
  location?: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const useAuthStore = create<AuthState>()(persist(
  (set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (user) => set({ user, isAuthenticated: !!user }),
    logout: () => {
      localStorage.removeItem('token');
      set({ user: null, isAuthenticated: false });
    },
  }),
  {
    name: 'auth-storage',
  }
));
