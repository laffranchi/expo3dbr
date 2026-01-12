import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

const exhibitorFormSchema = z.object({
  categoria: z.enum(["expositor", "patrocinador", "case"], {
    required_error: "Selecione uma categoria",
  }),
  nomeCompleto: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  empresa: z.string().min(2, "Empresa obrigatória"),
  siteRedeSocial: z.string().url("Link inválido - inclua https://"),
  cargo: z.string().min(2, "Cargo obrigatório"),
  telefone: z
    .string()
    .min(10, "Telefone inválido")
    .regex(/^[\d\s()\-+]+$/, "Formato inválido"),
  comoConheceu: z.string().min(3, "Campo obrigatório"),
});

type ExhibitorFormData = z.infer<typeof exhibitorFormSchema>;

interface ExhibitorSubmissionFormProps {
  onSuccess?: () => void;
}

const categoriaOptions = [
  {
    value: "expositor",
    label: "Expositor",
    description: "Quero mostrar meus produtos e serviços",
  },
  {
    value: "patrocinador",
    label: "Patrocinador",
    description: "Quero apoiar e ter visibilidade no evento",
  },
  {
    value: "case",
    label: "Case de Sucesso",
    description: "Quero compartilhar minha história",
  },
];

const ExhibitorSubmissionForm = ({ onSuccess }: ExhibitorSubmissionFormProps) => {
  const { toast } = useToast();

  const form = useForm<ExhibitorFormData>({
    resolver: zodResolver(exhibitorFormSchema),
    defaultValues: {
      categoria: undefined,
      nomeCompleto: "",
      email: "",
      empresa: "",
      siteRedeSocial: "",
      cargo: "",
      telefone: "",
      comoConheceu: "",
    },
  });

  const onSubmit = (data: ExhibitorFormData) => {
    console.log("Formulário enviado:", data);
    toast({
      title: "Proposta enviada com sucesso!",
      description:
        "Nossa equipe entrará em contato em breve para apresentar os benefícios de participar da Expo3DBr 2026.",
    });
    form.reset();
    onSuccess?.();
  };

  return (
    <ScrollArea className="h-[55vh] sm:h-[65vh] md:h-[70vh] pr-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pb-4">
          {/* Categoria de Participação */}
          <FormField
            control={form.control}
            name="categoria"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-base font-semibold">
                  Categoria de Participação *
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                  >
                    {categoriaOptions.map((option) => (
                      <div key={option.value}>
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="peer sr-only"
                        />
                        <label
                          htmlFor={option.value}
                          className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 cursor-pointer transition-all text-center"
                        >
                          <span className="font-semibold">{option.label}</span>
                          <span className="text-xs text-muted-foreground mt-1">
                            {option.description}
                          </span>
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nome Completo */}
          <FormField
            control={form.control}
            name="nomeCompleto"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo *</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Empresa */}
          <FormField
            control={form.control}
            name="empresa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Empresa *</FormLabel>
                <FormControl>
                  <Input placeholder="Nome da sua empresa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Site ou Rede Social */}
          <FormField
            control={form.control}
            name="siteRedeSocial"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Site ou Rede Social *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://www.suaempresa.com.br"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Cargo */}
          <FormField
            control={form.control}
            name="cargo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cargo *</FormLabel>
                <FormControl>
                  <Input placeholder="Seu cargo na empresa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Telefone */}
          <FormField
            control={form.control}
            name="telefone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone *</FormLabel>
                <FormControl>
                  <Input placeholder="(11) 99999-9999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Como Conheceu */}
          <FormField
            control={form.control}
            name="comoConheceu"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Como conheceu o Expo3DBr? *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Redes sociais, indicação, evento anterior..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="pt-4">
            <Button type="submit" className="w-full" size="lg">
              ENVIAR PROPOSTA
            </Button>
          </div>
        </form>
      </Form>
    </ScrollArea>
  );
};

export default ExhibitorSubmissionForm;
