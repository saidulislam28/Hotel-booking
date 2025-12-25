/* eslint-disable */
"use client";
import { Post } from "@/services/api/api";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  signIn: (
    email: string,
    password: string
  ) => Promise<{ status: "success" | "failed"; message: string }>;
  signOut: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useRouter();

  // Load token from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("auth_token");
    const storedUser: any = localStorage.getItem("user");
    const objUser = JSON.parse(storedUser);
    console.log("user from localStorage", objUser);
    if (storedToken) {
      setToken(storedToken);
      setUser(objUser);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await Post("auth/login", { email, password });
      console.log("data>>>>>", response);
      const data = response?.data;
      if (response?.success) {
        localStorage.setItem("auth_token", data?.accessToken);
        localStorage.setItem("user", JSON.stringify(data));
        setToken(data.accessToken);
        setUser(data);
        setLoading(false);
        navigate.push("/");
      }
      return {
        status: "success" as const,
        message: "Login successful",
      };
    } catch (error: any) {
      setLoading(false);
      return {
        status: "failed" as const,
        message: error.message || "An error occurred during login",
      };
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    // Remove token and user from localStorage
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user"); // Clear state
    setToken(null);
    setUser(null);
    // Navigate to login page
    navigate.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        signIn,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
