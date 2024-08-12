import "./DashboardOptionCard.css";

interface DashboardOptionCardProps {
  isNewVideoOption: boolean;
  type: string;
}

export default function DashboardOptionCard({
  isNewVideoOption,
  type,
}: DashboardOptionCardProps) {
  return (
    <div className="dashboardOptionCard">
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
