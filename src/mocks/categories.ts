export interface CategoryProps {
  id: number;
  nome: string;
  categoria: string;
  imagem: string;
  href: string;
  descricao: string;
}

export const categoriesMock: CategoryProps[] = [
  {
    id: 1,
    nome: "Suculentas",
    categoria: "Suculentas",
    imagem: "/images/categories/suculenta.webp",
    href: "/catalogo?category=Suculentas",
    descricao:
      "Plantas resistentes e de fácil cuidado, perfeitas para ambientes internos e externos.",
  },
  {
    id: 2,
    nome: "Orquídeas",
    categoria: "Orquídeas",
    imagem: "/images/categories/orquideas.webp",
    href: "/catalogo?category=Orquídeas",
    descricao:
      "Flores exóticas e elegantes que trazem sofisticação para qualquer ambiente.",
  },
  {
    id: 3,
    nome: "Samambaias",
    categoria: "Samambaias",
    imagem: "/images/categories/samambaia.webp",
    href: "/catalogo?category=Samambaias",
    descricao:
      "Folhagens exuberantes ideais para criar um ambiente fresco e natural.",
  },
];
