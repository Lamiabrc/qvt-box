
export const getProductImage = (productId: string): string => {
  const productImages: Record<string, string> = {
    // Thés et tisanes
    'the-detox': 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'tisane-relaxation': 'https://images.unsplash.com/photo-1597318281675-3dd0084eee1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'the-vert-bio': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'infusion-energie': 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    
    // Bien-être
    'huile-essentielle-lavande': 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'savon-artisanal': 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'bougie-naturelle': 'https://images.unsplash.com/photo-1602874801007-62ac5ac0d8d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'diffuseur-huiles': 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    
    // Snacking sain
    'fruits-seches-bio': 'https://images.unsplash.com/photo-1553279780-230325b70a7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'chocolat-artisanal': 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'miel-local': 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'biscuits-bio': 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    
    // Accessoires bureau
    'carnet-cuir': 'https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'stylo-bois': 'https://images.unsplash.com/photo-1586952518485-11b180e92764?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'plante-bureau': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'coussin-ergonomique': 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    
    // Sport et récupération
    'balle-massage': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'bande-resistance': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'tapis-yoga': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'coussin-meditation': 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    
    // Développement personnel
    'livre-meditation': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'journal-gratitude': 'https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'cartes-oracle': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'guide-respiration': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  };

  return productImages[productId] || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
};
