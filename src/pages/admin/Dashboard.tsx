import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Mic2,
  Store,
  Award,
  Users,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";

interface Stats {
  events: number;
  speakers: { total: number; pending: number };
  exhibitors: { total: number; pending: number };
  cases: { total: number; pending: number };
  influencers: { total: number; pending: number };
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats>({
    events: 0,
    speakers: { total: 0, pending: 0 },
    exhibitors: { total: 0, pending: 0 },
    cases: { total: 0, pending: 0 },
    influencers: { total: 0, pending: 0 },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Events count
        const { count: eventsCount } = await supabase
          .from("events")
          .select("*", { count: "exact", head: true });

        // Speaker submissions
        const { count: speakersTotal } = await supabase
          .from("speaker_submissions")
          .select("*", { count: "exact", head: true });
        const { count: speakersPending } = await supabase
          .from("speaker_submissions")
          .select("*", { count: "exact", head: true })
          .eq("status", "pendente");

        // Exhibitor submissions (only expositor category)
        const { count: exhibitorsTotal } = await supabase
          .from("exhibitor_submissions")
          .select("*", { count: "exact", head: true })
          .eq("categoria", "expositor");
        const { count: exhibitorsPending } = await supabase
          .from("exhibitor_submissions")
          .select("*", { count: "exact", head: true })
          .eq("categoria", "expositor")
          .eq("status", "pendente");

        // Cases submissions
        const { count: casesTotal } = await supabase
          .from("exhibitor_submissions")
          .select("*", { count: "exact", head: true })
          .eq("categoria", "case");
        const { count: casesPending } = await supabase
          .from("exhibitor_submissions")
          .select("*", { count: "exact", head: true })
          .eq("categoria", "case")
          .eq("status", "pendente");

        // Influencer submissions
        const { count: influencersTotal } = await supabase
          .from("influencer_submissions")
          .select("*", { count: "exact", head: true });
        const { count: influencersPending } = await supabase
          .from("influencer_submissions")
          .select("*", { count: "exact", head: true })
          .eq("status", "pendente");

        setStats({
          events: eventsCount || 0,
          speakers: { total: speakersTotal || 0, pending: speakersPending || 0 },
          exhibitors: { total: exhibitorsTotal || 0, pending: exhibitorsPending || 0 },
          cases: { total: casesTotal || 0, pending: casesPending || 0 },
          influencers: { total: influencersTotal || 0, pending: influencersPending || 0 },
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Eventos",
      icon: Calendar,
      total: stats.events,
      pending: null,
      link: "/admin/eventos",
      color: "bg-blue-500",
    },
    {
      title: "Palestrantes",
      icon: Mic2,
      total: stats.speakers.total,
      pending: stats.speakers.pending,
      link: "/admin/palestrantes",
      color: "bg-purple-500",
    },
    {
      title: "Expositores",
      icon: Store,
      total: stats.exhibitors.total,
      pending: stats.exhibitors.pending,
      link: "/admin/expositores",
      color: "bg-green-500",
    },
    {
      title: "Cases",
      icon: Award,
      total: stats.cases.total,
      pending: stats.cases.pending,
      link: "/admin/cases",
      color: "bg-orange-500",
    },
    {
      title: "Influencers",
      icon: Users,
      total: stats.influencers.total,
      pending: stats.influencers.pending,
      link: "/admin/influencers",
      color: "bg-pink-500",
    },
  ];

  const totalPending =
    stats.speakers.pending +
    stats.exhibitors.pending +
    stats.cases.pending +
    stats.influencers.pending;

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Visão geral do sistema administrativo
          </p>
        </div>

        {/* Alert for pending submissions */}
        {totalPending > 0 && (
          <Card className="border-yellow-500/50 bg-yellow-500/10">
            <CardContent className="flex items-center gap-4 py-4">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="font-semibold text-yellow-700 dark:text-yellow-400">
                  {totalPending} submissão(ões) pendente(s) de aprovação
                </p>
                <p className="text-sm text-muted-foreground">
                  Revise e aprove ou recuse as propostas pendentes
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card key={card.title} className="hover-lift">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${card.color}`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{card.total}</div>
                  {card.pending !== null && card.pending > 0 && (
                    <p className="text-sm text-yellow-600 dark:text-yellow-400 flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3" />
                      {card.pending} pendente(s)
                    </p>
                  )}
                  <Link to={card.link}>
                    <Button variant="link" className="p-0 h-auto mt-2 text-primary">
                      Ver detalhes
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-yellow-500" />
                Submissões Pendentes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {stats.speakers.pending > 0 && (
                <Link to="/admin/palestrantes?status=pendente">
                  <Button variant="outline" className="w-full justify-between">
                    Palestrantes
                    <span className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 rounded text-sm">
                      {stats.speakers.pending}
                    </span>
                  </Button>
                </Link>
              )}
              {stats.exhibitors.pending > 0 && (
                <Link to="/admin/expositores?status=pendente">
                  <Button variant="outline" className="w-full justify-between">
                    Expositores
                    <span className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 rounded text-sm">
                      {stats.exhibitors.pending}
                    </span>
                  </Button>
                </Link>
              )}
              {stats.cases.pending > 0 && (
                <Link to="/admin/cases?status=pendente">
                  <Button variant="outline" className="w-full justify-between">
                    Cases
                    <span className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 rounded text-sm">
                      {stats.cases.pending}
                    </span>
                  </Button>
                </Link>
              )}
              {stats.influencers.pending > 0 && (
                <Link to="/admin/influencers?status=pendente">
                  <Button variant="outline" className="w-full justify-between">
                    Influencers
                    <span className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 rounded text-sm">
                      {stats.influencers.pending}
                    </span>
                  </Button>
                </Link>
              )}
              {totalPending === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <CheckCircle2 className="h-12 w-12 mx-auto mb-2 text-green-500" />
                  <p>Todas as submissões foram revisadas!</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Ações Rápidas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/admin/eventos">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  Gerenciar Eventos
                </Button>
              </Link>
              <Link to="/admin/palestrantes">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Mic2 className="h-4 w-4" />
                  Revisar Palestrantes
                </Button>
              </Link>
              <Link to="/admin/expositores">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Store className="h-4 w-4" />
                  Revisar Expositores
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
