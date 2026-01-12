import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Loader2, Calendar } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Event {
  id: string;
  title: string;
  slug: string;
  year: number;
  location: string | null;
  event_date: string | null;
  cover_image: string | null;
  aftermovie_url: string | null;
  description: string | null;
  highlights: string[] | null;
  is_published: boolean;
  created_at: string;
}

interface EventFormData {
  title: string;
  slug: string;
  year: number;
  location: string;
  event_date: string;
  cover_image: string;
  aftermovie_url: string;
  description: string;
  highlights: string;
  is_published: boolean;
}

const defaultFormData: EventFormData = {
  title: "",
  slug: "",
  year: new Date().getFullYear(),
  location: "",
  event_date: "",
  cover_image: "",
  aftermovie_url: "",
  description: "",
  highlights: "",
  is_published: false,
};

const EventsManagement = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState<EventFormData>(defaultFormData);
  const { toast } = useToast();

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("year", { ascending: false });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
      toast({
        title: "Erro ao carregar eventos",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      slug: event.slug,
      year: event.year,
      location: event.location || "",
      event_date: event.event_date || "",
      cover_image: event.cover_image || "",
      aftermovie_url: event.aftermovie_url || "",
      description: event.description || "",
      highlights: event.highlights?.join("\n") || "",
      is_published: event.is_published,
    });
    setDialogOpen(true);
  };

  const handleCreate = () => {
    setEditingEvent(null);
    setFormData(defaultFormData);
    setDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const eventData = {
        title: formData.title,
        slug: formData.slug,
        year: formData.year,
        location: formData.location || null,
        event_date: formData.event_date || null,
        cover_image: formData.cover_image || null,
        aftermovie_url: formData.aftermovie_url || null,
        description: formData.description || null,
        highlights: formData.highlights
          ? formData.highlights.split("\n").filter((h) => h.trim())
          : null,
        is_published: formData.is_published,
      };

      if (editingEvent) {
        const { error } = await supabase
          .from("events")
          .update(eventData)
          .eq("id", editingEvent.id);

        if (error) throw error;
        toast({ title: "Evento atualizado com sucesso!" });
      } else {
        const { error } = await supabase.from("events").insert(eventData);

        if (error) throw error;
        toast({ title: "Evento criado com sucesso!" });
      }

      setDialogOpen(false);
      fetchEvents();
    } catch (error: any) {
      console.error("Error saving event:", error);
      toast({
        title: "Erro ao salvar evento",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (event: Event) => {
    if (!confirm(`Deseja excluir o evento "${event.title}"?`)) return;

    try {
      const { error } = await supabase.from("events").delete().eq("id", event.id);

      if (error) throw error;
      toast({ title: "Evento excluído com sucesso!" });
      fetchEvents();
    } catch (error: any) {
      console.error("Error deleting event:", error);
      toast({
        title: "Erro ao excluir evento",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Eventos</h1>
            <p className="text-muted-foreground">
              Gerencie os eventos e edições
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleCreate}>
                <Plus className="mr-2 h-4 w-4" />
                Novo Evento
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh]">
              <DialogHeader>
                <DialogTitle>
                  {editingEvent ? "Editar Evento" : "Novo Evento"}
                </DialogTitle>
              </DialogHeader>
              <ScrollArea className="max-h-[70vh] pr-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Título *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => {
                          const title = e.target.value;
                          setFormData({
                            ...formData,
                            title,
                            slug: editingEvent ? formData.slug : generateSlug(title),
                          });
                        }}
                        placeholder="EXPO3DBR 2025"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="slug">Slug (URL) *</Label>
                      <Input
                        id="slug"
                        value={formData.slug}
                        onChange={(e) =>
                          setFormData({ ...formData, slug: e.target.value })
                        }
                        placeholder="expo3dbr-2025"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="year">Ano *</Label>
                      <Input
                        id="year"
                        type="number"
                        value={formData.year}
                        onChange={(e) =>
                          setFormData({ ...formData, year: parseInt(e.target.value) })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event_date">Data do Evento</Label>
                      <Input
                        id="event_date"
                        type="date"
                        value={formData.event_date}
                        onChange={(e) =>
                          setFormData({ ...formData, event_date: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Local</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="São Paulo, SP"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cover_image">Imagem de Capa (URL)</Label>
                    <Input
                      id="cover_image"
                      value={formData.cover_image}
                      onChange={(e) =>
                        setFormData({ ...formData, cover_image: e.target.value })
                      }
                      placeholder="https://..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aftermovie_url">Aftermovie (URL)</Label>
                    <Input
                      id="aftermovie_url"
                      value={formData.aftermovie_url}
                      onChange={(e) =>
                        setFormData({ ...formData, aftermovie_url: e.target.value })
                      }
                      placeholder="https://youtube.com/..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      placeholder="Descrição do evento..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="highlights">Destaques (um por linha)</Label>
                    <Textarea
                      id="highlights"
                      value={formData.highlights}
                      onChange={(e) =>
                        setFormData({ ...formData, highlights: e.target.value })
                      }
                      placeholder="Workshop de impressão 3D&#10;Palestra sobre materiais&#10;Exposição de cases"
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Switch
                      id="is_published"
                      checked={formData.is_published}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, is_published: checked })
                      }
                    />
                    <Label htmlFor="is_published">Publicado</Label>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setDialogOpen(false)}
                    >
                      Cancelar
                    </Button>
                    <Button type="submit" className="flex-1" disabled={saving}>
                      {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {editingEvent ? "Salvar" : "Criar"}
                    </Button>
                  </div>
                </form>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>

        {/* Events Table */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Eventos</CardTitle>
            <CardDescription>
              {events.length} evento(s) cadastrado(s)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : events.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Calendar className="h-12 w-12 mx-auto mb-2" />
                <p>Nenhum evento cadastrado</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Título</TableHead>
                      <TableHead>Ano</TableHead>
                      <TableHead>Local</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{event.title}</TableCell>
                        <TableCell>{event.year}</TableCell>
                        <TableCell>{event.location || "-"}</TableCell>
                        <TableCell>
                          {event.is_published ? (
                            <Badge className="bg-green-500">Publicado</Badge>
                          ) : (
                            <Badge variant="secondary">Rascunho</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(event)}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive hover:text-destructive"
                              onClick={() => handleDelete(event)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
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
      </div>
    </AdminLayout>
  );
};

export default EventsManagement;
