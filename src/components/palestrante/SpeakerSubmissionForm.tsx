import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";

const speakerFormSchema = z.object({
  nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  celular: z.string().min(10, "Celular deve ter no mínimo 10 dígitos").regex(/^[\d\s()-]+$/, "Formato inválido"),
  cidade: z.string().min(2, "Cidade obrigatória"),
  linkedin: z.string().url("Link inválido - inclua https://"),
  biografia: z.string().min(50, "Biografia deve ter no mínimo 50 caracteres"),
  comunidade: z.string().min(1, "Campo obrigatório"),
  fotoLink: z.string().url("Link da foto inválido - inclua https://"),
  empresa: z.string().min(2, "Empresa obrigatória"),
  cargo: z.string().min(2, "Cargo obrigatório"),
  siteEmpresa: z.string().url("Link do site inválido - inclua https://"),
  setorAtividade: z.string().min(2, "Setor obrigatório"),
  temaPalestra: z.string().min(5, "Tema deve ter no mínimo 5 caracteres"),
  sintese: z.string().min(100, "Síntese deve ter no mínimo 100 caracteres"),
  linkApresentacao: z.string().url("Link inválido - inclua https://"),
  tipoConteudo: z.array(z.string()).min(1, "Selecione ao menos um tipo de conteúdo"),
  tipoConteudoOutro: z.string().optional(),
  possuiConteudoEstruturado: z.enum(["sim", "nao"], { required_error: "Selecione uma opção" }),
  experienciaPalestras: z.enum(["nao", "ate5", "5a15", "mais15"], { required_error: "Selecione uma opção" }),
});

type SpeakerFormData = z.infer<typeof speakerFormSchema>;

const tipoConteudoOptions = [
  { id: "palestra", label: "Palestra" },
  { id: "painel", label: "Painel" },
  { id: "workshop", label: "Workshop" },
  { id: "oficina", label: "Oficina" },
  { id: "outro", label: "Outro" },
];

interface SpeakerSubmissionFormProps {
  onSuccess: () => void;
}

const SpeakerSubmissionForm = ({ onSuccess }: SpeakerSubmissionFormProps) => {
  const form = useForm<SpeakerFormData>({
    resolver: zodResolver(speakerFormSchema),
    defaultValues: {
      nome: "",
      email: "",
      celular: "",
      cidade: "",
      linkedin: "",
      biografia: "",
      comunidade: "",
      fotoLink: "",
      empresa: "",
      cargo: "",
      siteEmpresa: "",
      setorAtividade: "",
      temaPalestra: "",
      sintese: "",
      linkApresentacao: "",
      tipoConteudo: [],
      tipoConteudoOutro: "",
      possuiConteudoEstruturado: undefined,
      experienciaPalestras: undefined,
    },
  });

  const watchTipoConteudo = form.watch("tipoConteudo");
  const showOutroInput = watchTipoConteudo?.includes("outro");

  const onSubmit = (data: SpeakerFormData) => {
    console.log("Dados do formulário:", data);
    toast.success("Proposta enviada com sucesso!", {
      description: "Entraremos em contato em breve.",
    });
    onSuccess();
  };

  return (
    <ScrollArea className="h-[70vh] pr-4">
      <div className="space-y-6 pb-6">
        {/* Header */}
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Obrigado por seu interesse em palestrar na Expo3DBr! Preencha o formulário abaixo com suas informações e proposta de palestra.
          </p>
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">Lembretes importantes:</p>
            <ul className="text-sm text-amber-700 dark:text-amber-300 list-disc list-inside space-y-1">
              <li>Todos os campos são obrigatórios</li>
              <li>Links devem incluir https://</li>
              <li>Foto deve estar em link público (Google Drive, Dropbox, etc.)</li>
            </ul>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Seção 1: Dados Pessoais */}
            <div className="space-y-4">
              <div className="bg-primary/10 rounded-lg p-3">
                <h3 className="font-semibold text-primary">Dados Pessoais</h3>
              </div>

              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu nome para divulgação <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail de contato <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="celular"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Celular para contato (WhatsApp) <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="(11) 99999-9999" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cidade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cidade que reside <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="São Paulo, SP" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn ou rede social (link) <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="https://linkedin.com/in/seu-perfil" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="biografia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sua biografia (mini bio) <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Conte um pouco sobre sua trajetória profissional e experiência na área (mínimo 50 caracteres)"
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="comunidade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Participa de alguma comunidade, grupo, coletivo ou associação? <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Nome da comunidade ou 'Não participo'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fotoLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Foto para publicação (link) <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="https://drive.google.com/..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Seção 2: Dados Profissionais */}
            <div className="space-y-4">
              <div className="bg-primary/10 rounded-lg p-3">
                <h3 className="font-semibold text-primary">Dados Profissionais</h3>
              </div>

              <FormField
                control={form.control}
                name="empresa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Nome da empresa" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cargo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cargo <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Seu cargo atual" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="siteEmpresa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Site da empresa (link) <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="https://suaempresa.com.br" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="setorAtividade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Setor de atividade da empresa <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Manufatura Aditiva, Tecnologia, Educação..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Seção 3: Detalhes da Palestra */}
            <div className="space-y-4">
              <div className="bg-primary/10 rounded-lg p-3">
                <h3 className="font-semibold text-primary">Detalhes da Palestra</h3>
              </div>

              <FormField
                control={form.control}
                name="temaPalestra"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tema sugerido para a palestra (título) <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Título da sua palestra" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sintese"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Síntese <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Descreva o conteúdo da sua palestra, principais pontos que serão abordados e o que o público pode esperar aprender (mínimo 100 caracteres)"
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="linkApresentacao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link da apresentação (slides, vídeo, etc.) <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="https://docs.google.com/presentation/..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Seção 4: Tipo de Conteúdo */}
            <div className="space-y-4">
              <div className="bg-primary/10 rounded-lg p-3">
                <h3 className="font-semibold text-primary">Tipo de Conteúdo</h3>
              </div>

              <FormField
                control={form.control}
                name="tipoConteudo"
                render={() => (
                  <FormItem>
                    <FormLabel>Qual tipo de conteúdo deseja apresentar? <span className="text-destructive">*</span></FormLabel>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {tipoConteudoOptions.map((option) => (
                        <FormField
                          key={option.id}
                          control={form.control}
                          name="tipoConteudo"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(option.id)}
                                  onCheckedChange={(checked) => {
                                    const newValue = checked
                                      ? [...(field.value || []), option.id]
                                      : field.value?.filter((v) => v !== option.id) || [];
                                    field.onChange(newValue);
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {option.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {showOutroInput && (
                <FormField
                  control={form.control}
                  name="tipoConteudoOutro"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Especifique o outro tipo de conteúdo</FormLabel>
                      <FormControl>
                        <Input placeholder="Descreva o tipo de conteúdo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="possuiConteudoEstruturado"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Já possui o conteúdo estruturado? <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex gap-6 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sim" id="conteudo-sim" />
                          <label htmlFor="conteudo-sim" className="cursor-pointer">Sim</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="nao" id="conteudo-nao" />
                          <label htmlFor="conteudo-nao" className="cursor-pointer">Não</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experienciaPalestras"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Já palestrou em outros eventos ou empresas antes? <span className="text-destructive">*</span></FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="flex flex-col gap-2 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="nao" id="exp-nao" />
                          <label htmlFor="exp-nao" className="cursor-pointer">Não</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="ate5" id="exp-ate5" />
                          <label htmlFor="exp-ate5" className="cursor-pointer">Sim, até 5 vezes</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="5a15" id="exp-5a15" />
                          <label htmlFor="exp-5a15" className="cursor-pointer">Sim, entre 5 e 15 vezes</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mais15" id="exp-mais15" />
                          <label htmlFor="exp-mais15" className="cursor-pointer">Sim, mais de 15 vezes</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" size="lg" className="w-full gradient-primary text-white border-0">
              <Send className="w-5 h-5 mr-2" />
              Enviar Proposta
            </Button>
          </form>
        </Form>
      </div>
    </ScrollArea>
  );
};

export default SpeakerSubmissionForm;
