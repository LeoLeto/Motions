import { VideocamTwoTone } from "@mui/icons-material";
import Button from "@mui/material/Button";
import orb from "../../assets/img/temp_orb.png";
import logo from "../../assets/img/logo.png";
import "../SidebarLayout.scss";
// interface SidebarLayoutProps {
//   children: ReactNode;
// }

export default function SidebarLayout() {
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
        <img src={logo} className="logo" style={{ marginTop: "auto" }} />
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
