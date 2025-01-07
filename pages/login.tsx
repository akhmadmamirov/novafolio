import Login from "@/components/auth/Login";
import AdminEditor from "@/components/AdminEditor";
import { useState } from "react";

export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  return (
    <div>
      {isLoggedIn ? <AdminEditor /> : <Login onLogin={handleLogin} />}
    </div>
  );
}