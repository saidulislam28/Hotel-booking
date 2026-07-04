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
  _id: string;
  email: string;
  name: string;
  phone?: string;
}
interface UpdateProfileData {
  name?: string;
  email?: string;
  phone?: string;
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
  updateUserProfile: (updatedData: UpdateProfileData) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useRouter();

  // Load token from localStorage on mount
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem("auth_token");
      const storedUser: any = localStorage.getItem("user");
      if (storedToken && storedUser) {
        const objUser = JSON.parse(storedUser);
        setToken(storedToken);
        setUser(objUser);
      }
    } catch (e) {
      console.error("Error loading auth state:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await Post("auth/login", { email, password });
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

  const updateUserProfile = async (updatedData: UpdateProfileData) => {
    if (!user) {
      throw new Error("No user found");
    }

    try {
      // Update the user object with only name, email, and phone
      const updatedUser = {
        ...user,
        ...(updatedData.name !== undefined && { name: updatedData.name }),
        ...(updatedData.email !== undefined && { email: updatedData.email }),
        ...(updatedData.phone !== undefined && { phone: updatedData.phone }),
      };

      // Update state
      setUser(updatedUser);

      // Update localStorage
      localStorage.setItem("user", JSON.stringify(updatedUser));

      console.log("Profile updated successfully:", updatedData);
      console.log("Updated user object:", updatedUser);
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
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
        updateUserProfile,
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
