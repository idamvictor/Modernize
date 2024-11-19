"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const API =
  "https://api-demo-8xxq.onrender.com/api/v1/admin/users?skip=0&limit=2";

function Auth() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const getUser = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGKnFffVZQPDd4RWplVWlWSiRRe0lXc0xgRmdRM1pXbndjb0hlKXdxR2NhUmUiLCJhIjoib0hBN0NyWWVuRGNsMjVlOEFCZ25oR1lwV2FqRUlpQXQzNTlHN1V3RzBJaWRmUU5lc2ZidkFOM3RDR3Y4S1RMeDQyYyIsInIiOiJHJjRDaEZrPzcxRW56dGBWbDZhZUg4TCQ-R0JxfFdIYUl6QUliJmxtSGVvaDAiLCJuIjoiWUdHfDxiM2tReVZRcH0xV2lEZkhaMiIsImV4cCI6MTczNDU0NTQxMH0.aOenmLikptcOGytsYydjhjB1WR8fZ97XfN6_raq8gUg";

    try {
      setIsloading(true);
      const res = await fetch(API, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // Log the response status and response itself for debugging
      console.log("Response Status:", res.status);
      console.log("Response:", res);

      if (!res.ok) {
        // Log the response text to get more details on the error
        const errorText = await res.text();
        console.log("Response Error Text:", errorText);
        throw new Error("Failed to login");
      }

      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log("Error message", error);
    } finally {
      setIsloading(false);
      console.log(user);
    }
  };

  return (
    <>
      <Button onClick={getUser} disabled={isLoading}>
        Get Users
      </Button>
    </>
  );
}

export default Auth;
