import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return (
    <>
      <span className="centerAbsolutely">
        <Button variant="contained" onClick={handleLogin}>
          Entrar
        </Button>
      </span>
    </>
  );
}
