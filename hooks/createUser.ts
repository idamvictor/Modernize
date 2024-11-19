import { useAdmin } from "@/context/AdminContext";
import { useAuth } from "@/context/TokenContext";
import { useEffect, useState } from "react";

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
// CREATE USER
export const useSubmitForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [admin, setAdmin] = useState<AdminData | null>(null);
  const { setAdminProfile } = useAdmin();

  const submitForm = async (
    email: string,
    password: string,
    confirm: string
  ) => {
    if (password !== confirm && email === "") return;

    const requestBody = {
      email: email,
      password: password,
      confirm_password: confirm,
    };
    console.log("Request Body:", requestBody);

    try {
      setLoading(true);
      const response = await fetch("/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get error details from the response
        setError(errorData);
        console.error("Error Data:", errorData);
        throw new Error("Login failed");
      }

      if (response.ok) {
        const responseData = await response.json();
        setAdmin(responseData);
        return responseData;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (admin) {
      // Here you can perform actions that depend on userToken
      setAdminProfile(admin);
    }
  }, [admin, setAdminProfile]);

  return { submitForm, loading, error };
};

// LOG IN
export const useLogin = () => {
  const { setAccessToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userToken, setUserToken] = useState<string | null>(null);

  const handleGetSUser = async (username: string, password: string) => {
    if (password === "" && username === "") return;

    const loginBody = {
      username: username,
      password: password,
    };

    console.log("Login Body:", JSON.stringify(loginBody));

    try {
      setLoading(true);
      const response = await fetch("/api/v1/auth/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setError(errorText);
        console.log("Response Error Text:", errorText);
        throw new Error("Failed to login");
      }

      if (response.ok) {
        const user = await response.json(); // Await the response.json() call

        if (user && user.access_token) {
          const token = user.access_token;
          setUserToken(token);
        } else {
          console.error("Access token not found in response:", user);
        }

        return user;
      }
    } catch (error) {
      console.log("Encountered error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userToken) {
      // Here you can perform actions that depend on userToken
      setAccessToken(userToken);
    }
  }, [userToken, setAccessToken]);

  return { handleGetSUser, loading, error, userToken, setUserToken };
};
