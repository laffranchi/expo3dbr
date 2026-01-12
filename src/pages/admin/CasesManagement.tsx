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
import { Loader2, Eye, CheckCircle2, XCircle, Award } from "lucide-react";

interface CaseSubmission {
  id: string;
  nome_completo: string;
  email: string;
  empresa: string;
  status: string;
  motivo_recusa: string | null;
  created_at: string;
  [key: string]: any;
}

const caseFields = [
  { key: "nome_completo", label: "Nome Completo" },
  { key: "email", label: "E-mail" },
  { key: "empresa", label: "Empresa" },
  { key: "site_rede_social", label: "Site/Rede Social", isLink: true },
  { key: "cargo", label: "Cargo" },
  { key: "telefone", label: "Telefone" },
  { key: "como_conheceu", label: "Como conheceu" },
];

const CasesManagement = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [submissions, setSubmissions] = useState<CaseSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<CaseSubmission | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [approvalOpen, setApprovalOpen] = useState(false);
  const [approvalType, setApprovalType] = useState<"approve" | "reject">("approve");
  const { user } = useAuth();
  const { toast } = useToast();

  const statusFilter = searchParams.get("status") || "all";

  const fetchSubmissions = async () => {
    try {
      let query = supabase
        .from("exhibitor_submissions")
        .select("*")
        .eq("categoria", "case")
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

  const handleViewDetails = (submission: CaseSubmission) => {
    setSelectedSubmission(submission);
    setDetailsOpen(true);
  };

  const handleApprove = (submission: CaseSubmission) => {
    setSelectedSubmission(submission);
    setApprovalType("approve");
    setApprovalOpen(true);
  };

  const handleReject = (submission: CaseSubmission) => {
    setSelectedSubmission(submission);
    setApprovalType("reject");
    setApprovalOpen(true);
  };

  const confirmAction = async (reason?: string) => {
    if (!selectedSubmission || !user) return;

    try {
      const { error } = await supabase
        .from("exhibitor_submissions")
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

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Cases de Sucesso</h1>
            <p className="text-muted-foreground">
              Gerencie as propostas de cases de sucesso
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
            <CardTitle>Submissões de Cases</CardTitle>
            <CardDescription>
              {submissions.length} submissão(ões) encontrada(s)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : submissions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Award className="h-12 w-12 mx-auto mb-2" />
                <p>Nenhuma submissão encontrada</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Empresa</TableHead>
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
                        <TableCell>{submission.empresa}</TableCell>
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
          fields={caseFields}
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

export default CasesManagement;
