import "../SidebarLayout.scss";
import Button from "@mui/material/Button";
import logo from "../../assets/img/temp_orb.png";

// interface SidebarLayoutProps {
//   children: ReactNode;
// }

export default function SidebarLayout() {
  return (
    <div className="sidebarLayout">
      <div className="sidebar">
        <img src={logo} className="logo" />
        <Button variant="contained">Hello world</Button>
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
