import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import AdminLayout from "@/components/admin/AdminLayout";
import SubmissionStatusBadge from "@/components/admin/SubmissionStatusBadge";
import ApprovalDialog from "@/components/admin/ApprovalDialog";
import SubmissionDetailsDialog from "@/components/admin/SubmissionDetailsDialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Eye, CheckCircle2, XCircle, Users } from "lucide-react";

interface InfluencerSubmission {
  id: string;
  nome_completo: string;
  email: string;
  tipo_credenciamento: string;
  status: string;
  motivo_recusa: string | null;
  created_at: string;
  [key: string]: any;
}

const influencerFields = [
  { key: "nome_completo", label: "Nome Completo" },
  { key: "tipo_credenciamento", label: "Tipo de Credenciamento" },
  { key: "email", label: "E-mail" },
  { key: "whatsapp", label: "WhatsApp" },
  { key: "data_nascimento", label: "Data de Nascimento" },
  { key: "endereco", label: "Endereço" },
  { key: "site_portal", label: "Site/Portal", isLink: true },
  { key: "link_youtube", label: "YouTube", isLink: true },
  { key: "link_tiktok", label: "TikTok", isLink: true },
  { key: "link_instagram", label: "Instagram", isLink: true },
  { key: "links_postagens", label: "Links de Postagens" },
  { key: "eventos_anteriores", label: "Eventos Anteriores" },
  { key: "expositor_indicou", label: "Expositor que Indicou" },
  { key: "objetivo_principal", label: "Objetivo Principal" },
  { key: "restricao_alimentar", label: "Restrição Alimentar" },
  { key: "disponibilidade_entrevista", label: "Disponibilidade para Entrevista" },
];

const InfluencersManagement = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [submissions, setSubmissions] = useState<InfluencerSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<InfluencerSubmission | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [approvalOpen, setApprovalOpen] = useState(false);
  const [approvalType, setApprovalType] = useState<"approve" | "reject">("approve");
  const { user } = useAuth();
  const { toast } = useToast();

  const statusFilter = searchParams.get("status") || "all";

  const fetchSubmissions = async () => {
    try {
      let query = supabase
        .from("influencer_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (statusFilter !== "all") {
        query = query.eq("status", statusFilter);
      }

      const { data, error } = await query;

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      toast({
        title: "Erro ao carregar submissões",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [statusFilter]);

  const handleStatusChange = (value: string) => {
    if (value === "all") {
      searchParams.delete("status");
    } else {
      searchParams.set("status", value);
    }
    setSearchParams(searchParams);
  };

  const handleViewDetails = (submission: InfluencerSubmission) => {
    setSelectedSubmission(submission);
    setDetailsOpen(true);
  };

  const handleApprove = (submission: InfluencerSubmission) => {
    setSelectedSubmission(submission);
    setApprovalType("approve");
    setApprovalOpen(true);
  };

  const handleReject = (submission: InfluencerSubmission) => {
    setSelectedSubmission(submission);
    setApprovalType("reject");
    setApprovalOpen(true);
  };

  const confirmAction = async (reason?: string) => {
    if (!selectedSubmission || !user) return;

    try {
      const { error } = await supabase
        .from("influencer_submissions")
        .update({
          status: approvalType === "approve" ? "aprovado" : "recusado",
          motivo_recusa: reason || null,
          reviewed_by: user.id,
          reviewed_at: new Date().toISOString(),
        })
        .eq("id", selectedSubmission.id);

      if (error) throw error;

      toast({
        title:
          approvalType === "approve"
            ? "Submissão aprovada com sucesso!"
            : "Submissão recusada.",
      });

      fetchSubmissions();
      setDetailsOpen(false);
    } catch (error: any) {
      console.error("Error updating submission:", error);
      toast({
        title: "Erro ao atualizar submissão",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getCredentialLabel = (tipo: string) => {
    switch (tipo) {
      case "acompanhante":
        return "Acompanhante";
      case "influencer":
        return "Influencer";
      case "imprensa":
        return "Imprensa";
      default:
        return tipo;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Influencers</h1>
            <p className="text-muted-foreground">
              Gerencie as solicitações de credenciamento
            </p>
          </div>
          <Select value={statusFilter} onValueChange={handleStatusChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="pendente">Pendentes</SelectItem>
              <SelectItem value="aprovado">Aprovados</SelectItem>
              <SelectItem value="recusado">Recusados</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <Card>
          <CardHeader>
            <CardTitle>Solicitações de Credenciamento</CardTitle>
            <CardDescription>
              {submissions.length} solicitação(ões) encontrada(s)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : submissions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-2" />
                <p>Nenhuma solicitação encontrada</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>E-mail</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium">
                          {submission.nome_completo}
                        </TableCell>
                        <TableCell>
                          {getCredentialLabel(submission.tipo_credenciamento)}
                        </TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>
                          <SubmissionStatusBadge status={submission.status} />
                        </TableCell>
                        <TableCell>
                          {new Date(submission.created_at).toLocaleDateString("pt-BR")}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleViewDetails(submission)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            {submission.status === "pendente" && (
                              <>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-green-600 hover:text-green-700"
                                  onClick={() => handleApprove(submission)}
                                >
                                  <CheckCircle2 className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-red-600 hover:text-red-700"
                                  onClick={() => handleReject(submission)}
                                >
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Details Dialog */}
        <SubmissionDetailsDialog
          open={detailsOpen}
          onOpenChange={setDetailsOpen}
          submission={selectedSubmission}
          fields={influencerFields}
          onApprove={() => {
            setApprovalType("approve");
            setApprovalOpen(true);
          }}
          onReject={() => {
            setApprovalType("reject");
            setApprovalOpen(true);
          }}
        />

        {/* Approval Dialog */}
        <ApprovalDialog
          open={approvalOpen}
          onOpenChange={setApprovalOpen}
          type={approvalType}
          submissionName={selectedSubmission?.nome_completo || ""}
          onConfirm={confirmAction}
        />
      </div>
    </AdminLayout>
  );
};

export default InfluencersManagement;
