import { ReactNode } from "react";

interface MetricCardProps {
  label: string;
  value: string;
  icon: ReactNode;
  variant?: "default" | "success" | "warning";
  delay?: number;
}

const MetricCard = ({ label, value, icon, variant = "default", delay = 0 }: MetricCardProps) => {
  const variantStyles = {
    default: "bg-card",
    success: "bg-success/5 border-success/20",
    warning: "bg-warning/5 border-warning/20",
  };

  const iconStyles = {
    default: "bg-secondary text-muted-foreground",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
  };

  return (
    <div 
      className={`metric-card ${variantStyles[variant]} animate-slide-up`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`w-8 h-8 rounded-lg ${iconStyles[variant]} flex items-center justify-center mb-2`}>
        {icon}
      </div>
      <p className="font-display text-xl font-bold text-foreground">{value}</p>
      <p className="text-[10px] text-muted-foreground leading-tight mt-1">{label}</p>
    </div>
  );
};

export default MetricCard;
