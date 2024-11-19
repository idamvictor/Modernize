"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AdminData {
  avatar: string;
  created_at: string;
  email: string;
  first_name: string;
  id?: string;
  is_active: boolean;
  last_name: string;
  role?: string;
}

interface AdminContextType {
  admin: AdminData | null;
  setAdminProfile: (admin: AdminData | null) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [admin, setAdmin] = useState<AdminData | null>(null);

  // Function to set the admin profile in both state and localStorage
  const setAdminProfile = (adminDetail: AdminData | null) => {
    setAdmin(adminDetail);
    if (adminDetail) {
      localStorage.setItem("Admin", JSON.stringify(adminDetail));
    } else {
      localStorage.removeItem("Admin");
    }
  };

  // Load the admin profile from localStorage when the component mounts
  useEffect(() => {
    const adminDetail = localStorage.getItem("Admin");
    if (adminDetail) {
      setAdmin(JSON.parse(adminDetail) as AdminData);
    }
  }, []);

  return (
    <AdminContext.Provider value={{ admin, setAdminProfile }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AdminProvider");
  }
  return context;
};
