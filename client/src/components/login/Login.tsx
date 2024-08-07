import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return (
    <>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </>
  );
}
