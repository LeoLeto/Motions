import "./DashboardOptionCard.css";

interface DashboardOptionCardProps {
  isNewVideoOption: boolean;
  type: string;
  handleClickDashboardOption: () => void;
}

export default function DashboardOptionCard({
  isNewVideoOption,
  type,
  handleClickDashboardOption,
}: DashboardOptionCardProps) {
  return (
    <div className="dashboardOptionCard" onClick={handleClickDashboardOption}>
      {isNewVideoOption && (
        <>
          <div>{type}</div>
        </>
      )}
      {!isNewVideoOption && (
        <>
          <div>{type}</div>
          <div>Título del video</div>
        </>
      )}
    </div>
  );
}
