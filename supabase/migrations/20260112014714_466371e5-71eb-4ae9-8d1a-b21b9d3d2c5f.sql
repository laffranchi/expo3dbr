-- 1. Create enum for roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- 2. Create user_roles table
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE (user_id, role)
);

-- 3. Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 4. Create security definer function to check roles (prevents recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- 5. RLS policies for user_roles (admins only)
CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
ON public.user_roles FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 6. Create events table
CREATE TABLE public.events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  year integer NOT NULL,
  location text,
  event_date date,
  cover_image text,
  aftermovie_url text,
  description text,
  highlights text[],
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published events"
ON public.events FOR SELECT
USING (is_published = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage events"
ON public.events FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 7. Create speaker_submissions table
CREATE TABLE public.speaker_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  nome text NOT NULL,
  email text NOT NULL,
  celular text NOT NULL,
  cidade text NOT NULL,
  linkedin text NOT NULL,
  biografia text NOT NULL,
  foto_link text NOT NULL,
  empresa text NOT NULL,
  cargo text NOT NULL,
  site_empresa text NOT NULL,
  setor_atividade text NOT NULL,
  tema_palestra text NOT NULL,
  sintese text NOT NULL,
  link_apresentacao text NOT NULL,
  tipo_conteudo text[] NOT NULL,
  possui_conteudo_estruturado text NOT NULL,
  experiencia_palestras text NOT NULL,
  status text DEFAULT 'pendente' CHECK (status IN ('pendente', 'aprovado', 'recusado')),
  motivo_recusa text,
  reviewed_by uuid REFERENCES auth.users(id),
  reviewed_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.speaker_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own speaker submissions"
ON public.speaker_submissions FOR SELECT
TO authenticated
USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can create speaker submissions"
ON public.speaker_submissions FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

CREATE POLICY "Admins can update speaker submissions"
ON public.speaker_submissions FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 8. Create exhibitor_submissions table
CREATE TABLE public.exhibitor_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  categoria text NOT NULL CHECK (categoria IN ('expositor', 'patrocinador', 'case')),
  nome_completo text NOT NULL,
  email text NOT NULL,
  empresa text NOT NULL,
  site_rede_social text NOT NULL,
  cargo text NOT NULL,
  telefone text NOT NULL,
  como_conheceu text NOT NULL,
  status text DEFAULT 'pendente' CHECK (status IN ('pendente', 'aprovado', 'recusado')),
  motivo_recusa text,
  reviewed_by uuid REFERENCES auth.users(id),
  reviewed_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.exhibitor_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own exhibitor submissions"
ON public.exhibitor_submissions FOR SELECT
TO authenticated
USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can create exhibitor submissions"
ON public.exhibitor_submissions FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

CREATE POLICY "Admins can update exhibitor submissions"
ON public.exhibitor_submissions FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 9. Create influencer_submissions table
CREATE TABLE public.influencer_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  nome_completo text NOT NULL,
  tipo_credenciamento text NOT NULL,
  email text NOT NULL,
  whatsapp text NOT NULL,
  data_nascimento date NOT NULL,
  endereco text,
  site_portal text,
  link_youtube text,
  link_tiktok text,
  link_instagram text,
  links_postagens text NOT NULL,
  eventos_anteriores text NOT NULL,
  expositor_indicou text,
  objetivo_principal text NOT NULL,
  restricao_alimentar text NOT NULL,
  disponibilidade_entrevista text NOT NULL,
  status text DEFAULT 'pendente' CHECK (status IN ('pendente', 'aprovado', 'recusado')),
  motivo_recusa text,
  reviewed_by uuid REFERENCES auth.users(id),
  reviewed_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.influencer_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own influencer submissions"
ON public.influencer_submissions FOR SELECT
TO authenticated
USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can create influencer submissions"
ON public.influencer_submissions FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

CREATE POLICY "Admins can update influencer submissions"
ON public.influencer_submissions FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 10. Create trigger function for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- 11. Create trigger for events updated_at
CREATE TRIGGER update_events_updated_at
BEFORE UPDATE ON public.events
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();