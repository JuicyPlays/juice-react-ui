import { useNavigate } from "react-router-dom";
import { useSignOut } from "react-auth-kit";
import { useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();
  const signOut = useSignOut();

  function clearCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }

  function clearAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
      console.log("Cookie", cookie);
      const [name] = cookie.split("=");
      clearCookie(name.trim());
    });
  }

  useEffect(() => {
    signOut();
    // Example usage
    // clearAllCookies();
    navigate("/");
    // eslint-disable-next-line
  }, []);

  return <></>;
};
export default Logout;
