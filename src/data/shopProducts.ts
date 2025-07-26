// Données des produits individuels pour la boutique
export interface Product {
  id: string;
  name: string;
  price: number; // prix public TTC incluant majoration 10%
  originalPrice?: number; // prix fournisseur ou prix initial sans marge
  category: string;
  subcategory: string;
  description: string;
  image: string; // URL de l'image produit
  tags: string[];
  inStock: boolean;
  madeInFrance: boolean;
  isVirtual?: boolean;
  boxIds?: string[]; // liste des box contenant ce produit
  productUrl?: string; // lien vers la fiche ou la boutique réelle
  editablePrice?: boolean; // si modifiable par admin
}

export const shopProducts: Product[] = [
  // 1000 produits générés, exemples réalistes avec majoration de 10 %
  ...[...Array(1000)].map((_, index) => {
    const basePrice = 10 + index * 0.7;
    const id = `produit-${index + 1}`;
    const name = `Produit Made in France n°${index + 1}`;
    const description = `Description du produit ${index + 1}, fabriqué en France avec soin et qualité.`;
    const image = `https://via.placeholder.com/200x200.png?text=Produit+${index + 1}`;
    const productUrl = `https://exemple.com/produit-${index + 1}`;
    const category = ['meditation', 'nutrition', 'bijoux', 'aromatherapie', 'hygiene'][index % 5];
    const subcategory = ['accessoires', 'plantes', 'bougies', 'cristaux', 'huiles'][index % 5];

    return {
      id,
      name,
      originalPrice: parseFloat(basePrice.toFixed(2)),
      price: parseFloat((basePrice * 1.1).toFixed(2)),
      category,
      subcategory,
      description,
      image,
      productUrl,
      tags: ['Made in France', 'Qualité', 'Éthique'],
      inStock: true,
      madeInFrance: true,
      editablePrice: true
    };
  })
];
