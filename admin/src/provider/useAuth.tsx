/* eslint-disable */
"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../services/api";
import { Role } from "../services/constants";
import { message } from "antd";
import { LOGIN } from "../services/endpoints";

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
  const navigate = useNavigate();

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
      const response = await Post(LOGIN, { email, password });
      const data = response?.data;
      const isAdmin = [Role.ADMIN, Role.SUPER_ADMIN].includes(data.role);
      if (!isAdmin) {
        alert("You Are not permitted to login!!");
        setLoading(false);
        return;
      }

      if (
        response?.success &&
        (data.role === Role.SUPER_ADMIN || data.role === Role.ADMIN)
      ) {
        localStorage.setItem("auth_token", data?.accessToken);
        localStorage.setItem("user", JSON.stringify(data));
        setToken(data.accessToken);
        setUser(data);
        setLoading(false);
        navigate("/");
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
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    navigate("/login");
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
