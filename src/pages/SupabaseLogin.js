import { Container } from "@mui/material";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../App";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SupabaseLogin() {
  const navigate = useNavigate();
  const [session, setSession] = useState(null)

  useEffect(() => {
    // Looks like this runs first when the user logs in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/home")
      }

      setSession(session)
    })

    // Looks like this is invoked whenever the auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session === null || session === undefined) {
        return;
      }

      const user = await supabase.auth.getUser();
      const userId = user.data.user.id;
      if(userId === null || userId === undefined) {
        setSession(null)
        supabase.auth.signOut()
        navigate("/")
      }

      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [navigate])

  if (!session) {
    return (
      <Container className='container'>
        <Auth
          supabaseClient={supabase}
          theme="dark"
          appearance={{ theme: ThemeSupa }}
          providers={['google', 'twitter']}
        />
      </Container>
    );
  } else {
    return (<div></div>);
  }
}

