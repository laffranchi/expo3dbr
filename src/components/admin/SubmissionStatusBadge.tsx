import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SubmissionStatusBadgeProps {
  status: string;
}

const SubmissionStatusBadge = ({ status }: SubmissionStatusBadgeProps) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "aprovado":
        return {
          label: "Aprovado",
          className: "bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30",
        };
      case "recusado":
        return {
          label: "Recusado",
          className: "bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/30",
        };
      default:
        return {
          label: "Pendente",
          className: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30",
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <Badge variant="outline" className={cn("font-medium", config.className)}>
      {config.label}
    </Badge>
  );
};

export default SubmissionStatusBadge;
