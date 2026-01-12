import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

const influencerFormSchema = z.object({
  nomeCompleto: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  tipoCredenciamento: z.enum(["acompanhante", "influencer", "imprensa"], {
    required_error: "Selecione uma opção"
  }),
  email: z.string().email("E-mail inválido"),
  whatsapp: z.string().min(10, "WhatsApp inválido").regex(/^[\d\s()-]+$/, "Formato inválido"),
  dataNascimento: z.string().min(1, "Data de nascimento obrigatória"),
  endereco: z.string().optional(),
  sitePortal: z.string().url("Link inválido - inclua https://").optional().or(z.literal("")),
  linkYoutube: z.string().url("Link do YouTube inválido - inclua https://"),
  linkTiktok: z.string().url("Link do TikTok inválido - inclua https://"),
  linkInstagram: z.string().url("Link do Instagram inválido - inclua https://"),
  linksPostagens: z.string().min(5, "Informe os links das postagens"),
  eventosAnteriores: z.string().min(3, "Campo obrigatório"),
  expositorIndicou: z.string().optional(),
  objetivoPrincipal: z.string().min(10, "Campo obrigatório - mínimo 10 caracteres"),
  restricaoAlimentar: z.string().min(1, "Campo obrigatório"),
  disponibilidadeEntrevista: z.enum(["sim", "nao"], {
    required_error: "Selecione uma opção"
  }),
  autorizacaoImagem: z.literal(true, {
    errorMap: () => ({ message: "Você precisa autorizar o uso de imagem" })
  }),
});

type InfluencerFormData = z.infer<typeof influencerFormSchema>;

interface InfluencerSubmissionFormProps {
  onSuccess?: () => void;
}

const InfluencerSubmissionForm = ({ onSuccess }: InfluencerSubmissionFormProps) => {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<InfluencerFormData>({
    resolver: zodResolver(influencerFormSchema),
    defaultValues: {
      autorizacaoImagem: undefined,
    }
  });

  const tipoCredenciamento = watch("tipoCredenciamento");
  const disponibilidadeEntrevista = watch("disponibilidadeEntrevista");
  const autorizacaoImagem = watch("autorizacaoImagem");

  const onSubmit = async (data: InfluencerFormData) => {
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Solicitação enviada!",
      description: "Analisaremos sua solicitação e entraremos em contato em breve.",
    });
    
    onSuccess?.();
  };

  return (
    <ScrollArea className="max-h-[70vh] pr-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pb-4">
        {/* Nome Completo */}
        <div className="space-y-2">
          <Label htmlFor="nomeCompleto">Nome Completo *</Label>
          <Input
            id="nomeCompleto"
            {...register("nomeCompleto")}
            placeholder="Seu nome completo"
          />
          {errors.nomeCompleto && (
            <p className="text-sm text-destructive">{errors.nomeCompleto.message}</p>
          )}
        </div>

        {/* Tipo de Credenciamento */}
        <div className="space-y-2">
          <Label>Tipo de Credenciamento *</Label>
          <RadioGroup
            value={tipoCredenciamento}
            onValueChange={(value) => setValue("tipoCredenciamento", value as any)}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="acompanhante" id="acompanhante" />
              <Label htmlFor="acompanhante" className="font-normal cursor-pointer">Acompanhante</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="influencer" id="influencer" />
              <Label htmlFor="influencer" className="font-normal cursor-pointer">Influencer</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="imprensa" id="imprensa" />
              <Label htmlFor="imprensa" className="font-normal cursor-pointer">Imprensa</Label>
            </div>
          </RadioGroup>
          {errors.tipoCredenciamento && (
            <p className="text-sm text-destructive">{errors.tipoCredenciamento.message}</p>
          )}
        </div>

        {/* Email e WhatsApp */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp *</Label>
            <Input
              id="whatsapp"
              {...register("whatsapp")}
              placeholder="(11) 99999-9999"
            />
            {errors.whatsapp && (
              <p className="text-sm text-destructive">{errors.whatsapp.message}</p>
            )}
          </div>
        </div>

        {/* Data de Nascimento */}
        <div className="space-y-2">
          <Label htmlFor="dataNascimento">Data de Nascimento *</Label>
          <Input
            id="dataNascimento"
            type="date"
            {...register("dataNascimento")}
          />
          {errors.dataNascimento && (
            <p className="text-sm text-destructive">{errors.dataNascimento.message}</p>
          )}
        </div>

        {/* Endereço (opcional) */}
        <div className="space-y-2">
          <Label htmlFor="endereco">Endereço para envio de brindes (opcional)</Label>
          <Input
            id="endereco"
            {...register("endereco")}
            placeholder="Rua, número, bairro, cidade - CEP"
          />
        </div>

        {/* Site/Portal (opcional) */}
        <div className="space-y-2">
          <Label htmlFor="sitePortal">Site ou Portal (opcional)</Label>
          <Input
            id="sitePortal"
            {...register("sitePortal")}
            placeholder="https://seusite.com.br"
          />
          {errors.sitePortal && (
            <p className="text-sm text-destructive">{errors.sitePortal.message}</p>
          )}
        </div>

        {/* Redes Sociais */}
        <div className="space-y-2">
          <Label htmlFor="linkYoutube">Link do YouTube *</Label>
          <Input
            id="linkYoutube"
            {...register("linkYoutube")}
            placeholder="https://youtube.com/@seucanal"
          />
          {errors.linkYoutube && (
            <p className="text-sm text-destructive">{errors.linkYoutube.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkTiktok">Link do TikTok *</Label>
          <Input
            id="linkTiktok"
            {...register("linkTiktok")}
            placeholder="https://tiktok.com/@seuperfil"
          />
          {errors.linkTiktok && (
            <p className="text-sm text-destructive">{errors.linkTiktok.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkInstagram">Link do Instagram *</Label>
          <Input
            id="linkInstagram"
            {...register("linkInstagram")}
            placeholder="https://instagram.com/seuperfil"
          />
          {errors.linkInstagram && (
            <p className="text-sm text-destructive">{errors.linkInstagram.message}</p>
          )}
        </div>

        {/* Links de Postagens */}
        <div className="space-y-2">
          <Label htmlFor="linksPostagens">Links de postagens sobre EXPO3DBR *</Label>
          <Textarea
            id="linksPostagens"
            {...register("linksPostagens")}
            placeholder="Cole os links das suas postagens sobre a EXPO3DBR (um por linha)"
            rows={3}
          />
          {errors.linksPostagens && (
            <p className="text-sm text-destructive">{errors.linksPostagens.message}</p>
          )}
        </div>

        {/* Eventos Anteriores */}
        <div className="space-y-2">
          <Label htmlFor="eventosAnteriores">Já participou de eventos similares? *</Label>
          <Input
            id="eventosAnteriores"
            {...register("eventosAnteriores")}
            placeholder="Quais eventos você já cobriu ou participou?"
          />
          {errors.eventosAnteriores && (
            <p className="text-sm text-destructive">{errors.eventosAnteriores.message}</p>
          )}
        </div>

        {/* Expositor que Indicou (opcional) */}
        <div className="space-y-2">
          <Label htmlFor="expositorIndicou">Expositor que indicou (opcional)</Label>
          <Input
            id="expositorIndicou"
            {...register("expositorIndicou")}
            placeholder="Nome do expositor"
          />
        </div>

        {/* Objetivo Principal */}
        <div className="space-y-2">
          <Label htmlFor="objetivoPrincipal">Objetivo principal ao participar *</Label>
          <Textarea
            id="objetivoPrincipal"
            {...register("objetivoPrincipal")}
            placeholder="O que você espera alcançar participando do evento?"
            rows={3}
          />
          {errors.objetivoPrincipal && (
            <p className="text-sm text-destructive">{errors.objetivoPrincipal.message}</p>
          )}
        </div>

        {/* Restrição Alimentar */}
        <div className="space-y-2">
          <Label htmlFor="restricaoAlimentar">Restrição alimentar ou necessidade especial *</Label>
          <Input
            id="restricaoAlimentar"
            {...register("restricaoAlimentar")}
            placeholder="Informe ou digite 'Nenhuma'"
          />
          {errors.restricaoAlimentar && (
            <p className="text-sm text-destructive">{errors.restricaoAlimentar.message}</p>
          )}
        </div>

        {/* Disponibilidade para Entrevistas */}
        <div className="space-y-2">
          <Label>Disponibilidade para entrevistas? *</Label>
          <RadioGroup
            value={disponibilidadeEntrevista}
            onValueChange={(value) => setValue("disponibilidadeEntrevista", value as any)}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sim" id="disponibilidade-sim" />
              <Label htmlFor="disponibilidade-sim" className="font-normal cursor-pointer">Sim</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nao" id="disponibilidade-nao" />
              <Label htmlFor="disponibilidade-nao" className="font-normal cursor-pointer">Não</Label>
            </div>
          </RadioGroup>
          {errors.disponibilidadeEntrevista && (
            <p className="text-sm text-destructive">{errors.disponibilidadeEntrevista.message}</p>
          )}
        </div>

        {/* Autorização de Imagem */}
        <div className="space-y-2">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="autorizacaoImagem"
              checked={autorizacaoImagem === true}
              onCheckedChange={(checked) => setValue("autorizacaoImagem", checked === true ? true : undefined as any)}
            />
            <Label htmlFor="autorizacaoImagem" className="font-normal cursor-pointer text-sm leading-relaxed">
              Autorizo o uso da minha imagem para divulgação do evento EXPO3DBR em redes sociais, materiais promocionais e outros meios de comunicação. *
            </Label>
          </div>
          {errors.autorizacaoImagem && (
            <p className="text-sm text-destructive">{errors.autorizacaoImagem.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "SOLICITAR CREDENCIAMENTO"}
        </Button>
      </form>
    </ScrollArea>
  );
};

export default InfluencerSubmissionForm;
