export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      events: {
        Row: {
          aftermovie_url: string | null
          cover_image: string | null
          created_at: string | null
          description: string | null
          event_date: string | null
          highlights: string[] | null
          id: string
          is_published: boolean | null
          location: string | null
          slug: string
          title: string
          updated_at: string | null
          year: number
        }
        Insert: {
          aftermovie_url?: string | null
          cover_image?: string | null
          created_at?: string | null
          description?: string | null
          event_date?: string | null
          highlights?: string[] | null
          id?: string
          is_published?: boolean | null
          location?: string | null
          slug: string
          title: string
          updated_at?: string | null
          year: number
        }
        Update: {
          aftermovie_url?: string | null
          cover_image?: string | null
          created_at?: string | null
          description?: string | null
          event_date?: string | null
          highlights?: string[] | null
          id?: string
          is_published?: boolean | null
          location?: string | null
          slug?: string
          title?: string
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
      exhibitor_submissions: {
        Row: {
          cargo: string
          categoria: string
          como_conheceu: string
          created_at: string | null
          email: string
          empresa: string
          id: string
          motivo_recusa: string | null
          nome_completo: string
          reviewed_at: string | null
          reviewed_by: string | null
          site_rede_social: string
          status: string | null
          telefone: string
          user_id: string | null
        }
        Insert: {
          cargo: string
          categoria: string
          como_conheceu: string
          created_at?: string | null
          email: string
          empresa: string
          id?: string
          motivo_recusa?: string | null
          nome_completo: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          site_rede_social: string
          status?: string | null
          telefone: string
          user_id?: string | null
        }
        Update: {
          cargo?: string
          categoria?: string
          como_conheceu?: string
          created_at?: string | null
          email?: string
          empresa?: string
          id?: string
          motivo_recusa?: string | null
          nome_completo?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          site_rede_social?: string
          status?: string | null
          telefone?: string
          user_id?: string | null
        }
        Relationships: []
      }
      influencer_submissions: {
        Row: {
          created_at: string | null
          data_nascimento: string
          disponibilidade_entrevista: string
          email: string
          endereco: string | null
          eventos_anteriores: string
          expositor_indicou: string | null
          id: string
          link_instagram: string | null
          link_tiktok: string | null
          link_youtube: string | null
          links_postagens: string
          motivo_recusa: string | null
          nome_completo: string
          objetivo_principal: string
          restricao_alimentar: string
          reviewed_at: string | null
          reviewed_by: string | null
          site_portal: string | null
          status: string | null
          tipo_credenciamento: string
          user_id: string | null
          whatsapp: string
        }
        Insert: {
          created_at?: string | null
          data_nascimento: string
          disponibilidade_entrevista: string
          email: string
          endereco?: string | null
          eventos_anteriores: string
          expositor_indicou?: string | null
          id?: string
          link_instagram?: string | null
          link_tiktok?: string | null
          link_youtube?: string | null
          links_postagens: string
          motivo_recusa?: string | null
          nome_completo: string
          objetivo_principal: string
          restricao_alimentar: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          site_portal?: string | null
          status?: string | null
          tipo_credenciamento: string
          user_id?: string | null
          whatsapp: string
        }
        Update: {
          created_at?: string | null
          data_nascimento?: string
          disponibilidade_entrevista?: string
          email?: string
          endereco?: string | null
          eventos_anteriores?: string
          expositor_indicou?: string | null
          id?: string
          link_instagram?: string | null
          link_tiktok?: string | null
          link_youtube?: string | null
          links_postagens?: string
          motivo_recusa?: string | null
          nome_completo?: string
          objetivo_principal?: string
          restricao_alimentar?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          site_portal?: string | null
          status?: string | null
          tipo_credenciamento?: string
          user_id?: string | null
          whatsapp?: string
        }
        Relationships: []
      }
      speaker_submissions: {
        Row: {
          biografia: string
          cargo: string
          celular: string
          cidade: string
          created_at: string | null
          email: string
          empresa: string
          experiencia_palestras: string
          foto_link: string
          id: string
          link_apresentacao: string
          linkedin: string
          motivo_recusa: string | null
          nome: string
          possui_conteudo_estruturado: string
          reviewed_at: string | null
          reviewed_by: string | null
          setor_atividade: string
          sintese: string
          site_empresa: string
          status: string | null
          tema_palestra: string
          tipo_conteudo: string[]
          user_id: string | null
        }
        Insert: {
          biografia: string
          cargo: string
          celular: string
          cidade: string
          created_at?: string | null
          email: string
          empresa: string
          experiencia_palestras: string
          foto_link: string
          id?: string
          link_apresentacao: string
          linkedin: string
          motivo_recusa?: string | null
          nome: string
          possui_conteudo_estruturado: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          setor_atividade: string
          sintese: string
          site_empresa: string
          status?: string | null
          tema_palestra: string
          tipo_conteudo: string[]
          user_id?: string | null
        }
        Update: {
          biografia?: string
          cargo?: string
          celular?: string
          cidade?: string
          created_at?: string | null
          email?: string
          empresa?: string
          experiencia_palestras?: string
          foto_link?: string
          id?: string
          link_apresentacao?: string
          linkedin?: string
          motivo_recusa?: string | null
          nome?: string
          possui_conteudo_estruturado?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          setor_atividade?: string
          sintese?: string
          site_empresa?: string
          status?: string | null
          tema_palestra?: string
          tipo_conteudo?: string[]
          user_id?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
