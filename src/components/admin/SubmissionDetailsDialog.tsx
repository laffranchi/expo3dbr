import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ExternalLink } from "lucide-react";
import SubmissionStatusBadge from "./SubmissionStatusBadge";

interface SubmissionDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  submission: Record<string, any> | null;
  fields: { key: string; label: string; isLink?: boolean }[];
  onApprove: () => void;
  onReject: () => void;
}

const SubmissionDetailsDialog = ({
  open,
  onOpenChange,
  submission,
  fields,
  onApprove,
  onReject,
}: SubmissionDetailsDialogProps) => {
  if (!submission) return null;

  const isPending = submission.status === "pendente";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            Detalhes da Submissão
            <SubmissionStatusBadge status={submission.status} />
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-4">
            {fields.map(({ key, label, isLink }) => {
              const value = submission[key];
              if (!value) return null;

              return (
                <div key={key} className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    {label}
                  </p>
                  {isLink ? (
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      {value}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : Array.isArray(value) ? (
                    <p className="text-foreground">{value.join(", ")}</p>
                  ) : (
                    <p className="text-foreground whitespace-pre-wrap">{value}</p>
                  )}
                </div>
              );
            })}

            {submission.motivo_recusa && (
              <div className="space-y-1 p-3 bg-destructive/10 rounded-lg">
                <p className="text-sm font-medium text-destructive">
                  Motivo da Recusa
                </p>
                <p className="text-foreground">{submission.motivo_recusa}</p>
              </div>
            )}

            {submission.reviewed_at && (
              <div className="text-sm text-muted-foreground">
                Revisado em:{" "}
                {new Date(submission.reviewed_at).toLocaleString("pt-BR")}
              </div>
            )}
          </div>
        </ScrollArea>

        {isPending && (
          <div className="flex gap-2 pt-4 border-t">
            <Button
              className="flex-1"
              onClick={onApprove}
            >
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Aprovar
            </Button>
            <Button
              variant="destructive"
              className="flex-1"
              onClick={onReject}
            >
              <XCircle className="mr-2 h-4 w-4" />
              Recusar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SubmissionDetailsDialog;
