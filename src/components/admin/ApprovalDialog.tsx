import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

interface ApprovalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "approve" | "reject";
  submissionName: string;
  onConfirm: (reason?: string) => Promise<void>;
}

const ApprovalDialog = ({
  open,
  onOpenChange,
  type,
  submissionName,
  onConfirm,
}: ApprovalDialogProps) => {
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm(type === "reject" ? reason : undefined);
      setReason("");
      onOpenChange(false);
    } finally {
      setLoading(false);
    }
  };

  const isApproval = type === "approve";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {isApproval ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500" />
            )}
            {isApproval ? "Aprovar Submissão" : "Recusar Submissão"}
          </DialogTitle>
          <DialogDescription>
            {isApproval
              ? `Confirma a aprovação de "${submissionName}"?`
              : `Informe o motivo da recusa para "${submissionName}".`}
          </DialogDescription>
        </DialogHeader>

        {!isApproval && (
          <div className="space-y-2">
            <Label htmlFor="reason">Motivo da recusa *</Label>
            <Textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Descreva o motivo da recusa..."
              rows={4}
            />
          </div>
        )}

        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={loading}
          >
            Cancelar
          </Button>
          <Button
            variant={isApproval ? "default" : "destructive"}
            onClick={handleConfirm}
            disabled={loading || (!isApproval && !reason.trim())}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isApproval ? "Aprovar" : "Recusar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApprovalDialog;
