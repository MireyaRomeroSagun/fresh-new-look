interface StatusBarProps {
  message?: string;
  version?: string;
}

const StatusBar = ({ message = "Listo", version = "Vers. 1.0.0" }: StatusBarProps) => {
  return (
    <div className="status-bar justify-between">
      <span>{message}</span>
      <span>{version}</span>
    </div>
  );
};

export default StatusBar;
