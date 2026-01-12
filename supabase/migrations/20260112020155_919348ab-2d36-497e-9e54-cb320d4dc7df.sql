INSERT INTO public.user_roles (user_id, role)
VALUES ('a0816eab-ea14-418a-85ec-eccb6e9c726a', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;