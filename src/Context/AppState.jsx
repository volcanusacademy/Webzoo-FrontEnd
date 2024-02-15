import React, { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import axios from "axios";

const AppState = (props) => {
  const [entry, setEntry] = useState([]);
  const [reload,setReload]=useState(false)


  const url = "http://localhost:2000/api";

  useEffect(() => {
    const fetchResponse = async () => {
      const api = await axios.get(`${url}/allresponse`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log("fetching====",api.data.user);
      setEntry(api.data.user);
    };
    fetchResponse();
  }, [reload]);

  const register = async ({ name, email, subject,message }) => {
    try {
      const api = await axios.post(
        `${url}/register`,
        { name, email,subject,message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("Registration Response:", api.data);
      return api.data;
    } catch (error) {
      if (error.response) {
        console.log("Error response status:", error.response.status);
        console.log("Response data:", error.response.data);
        return error.response.data;
      } else if (error.request) {
        console.log("No response received");
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  

  return (
    <AppContext.Provider
      value={{
        register,
        entry
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;