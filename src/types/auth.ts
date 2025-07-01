
import { User, Session } from '@supabase/supabase-js';

export interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, userData?: any) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<any>;
  isAdmin: boolean;
}

export interface SignUpData {
  email: string;
  password: string;
  userData?: any;
}

export interface SignInData {
  email: string;
  password: string;
}
