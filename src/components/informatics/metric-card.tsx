import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  icon: ReactNode;
  variant?: "default" | "success" | "warning";
}

export function MetricCard({ label, value, icon, variant = "default" }: MetricCardProps) {
  const variantStyles = {
    default: "",
    success: "border-green-500/20 bg-green-500/5",
    warning: "border-yellow-500/20 bg-yellow-500/5",
  };

  const iconStyles = {
    default: "bg-secondary text-muted-foreground",
    success: "bg-green-500/10 text-green-600",
    warning: "bg-yellow-500/10 text-yellow-600",
  };

  return (
    <Card className={cn("p-4", variantStyles[variant])}>
      <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center mb-2", iconStyles[variant])}>
        {icon}
      </div>
      <p className="text-xl font-bold text-foreground">{value}</p>
      <p className="text-[10px] text-muted-foreground leading-tight mt-1">{label}</p>
    </Card>
  );
}

