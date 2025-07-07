
-- Ajouter le rôle administrateur pour l'utilisateur lamia.brechet@outlook.fr
-- D'abord, nous devons trouver l'ID de l'utilisateur depuis la table auth.users et l'insérer dans user_roles

-- Insertion du rôle admin pour l'utilisateur avec cet email
-- Note: Cette requête utilise une sous-requête pour trouver l'ID utilisateur
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::user_role
FROM auth.users 
WHERE email = 'lamia.brechet@outlook.fr'
ON CONFLICT (user_id, role) DO NOTHING;

-- Vérification que l'insertion a bien fonctionné
SELECT ur.user_id, ur.role, au.email 
FROM public.user_roles ur
JOIN auth.users au ON ur.user_id = au.id
WHERE au.email = 'lamia.brechet@outlook.fr';
