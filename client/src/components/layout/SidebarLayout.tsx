import { VideocamTwoTone } from "@mui/icons-material";
import Button from "@mui/material/Button";
import orb from "../../assets/img/temp_orb.png";
import logo from "../../assets/img/logo.png";
import "../SidebarLayout.scss";
import { useNavigate } from "react-router-dom";
// interface SidebarLayoutProps {
//   children: ReactNode;
// }

export default function SidebarLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/login");
  }

  return (
    <div className="sidebarLayout">
      <div className="sidebar">
        <img src={orb} className="orb" />
        <Button
          variant="contained"
          startIcon={<VideocamTwoTone />}
          fullWidth={true}
        >
          CREAR VIDEO
        </Button>
        <Button variant="text" startIcon={<VideocamTwoTone />} fullWidth={true}>
          OPCIÓN 2
        </Button>
        <Button variant="text" startIcon={<VideocamTwoTone />} fullWidth={true}>
          OPCIÓN 3
        </Button>
        <Button
          variant="text"
          color="warning"
          style={{ marginTop: "auto" }}
          onClick={handleLogout}
        >
          Salir
        </Button>
        <img src={logo} className="logo" />
      </div>
      <div className="mainCard">
        <div>Continúa donde lo dejaste</div>
        <div>Crea un nuevo video</div>
      </div>
    </div>
  );
}
// export default function SidebarLayout({ children }: SidebarLayoutProps) {
//   return <div className="sidebarLayout">{children}</div>;
// }
