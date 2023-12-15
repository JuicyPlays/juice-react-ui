import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../App";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    async function handleSignout() {
      await supabase.auth.signOut()
      console.log("Logged out user!");
      navigate("/");
    }

    handleSignout();
  }, [navigate]);

  return <></>;
};

export default Logout;
