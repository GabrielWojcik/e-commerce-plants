import type { StaticImageData } from "next/image";

import vaso1 from "../images/flower/vaso-1.png";
import vaso2 from "../images/flower/vaso-2.png";
import vaso3 from "../images/flower/vaso-3.png";

interface CardProps {
  id: number;
  slug: string;
  image: StaticImageData;
  title: string;
  description: string;
  price: number;
  light: string;
  water: string;
  size: string;
  stock: number;
  href: string;
  category: string;
}

export const cardMocks: CardProps[] = [
  {
    id: 1,
    slug: "suculenta-especial",
    image: vaso1,
    title: "Suculenta Especial",
    description:
      "Plantas resistentes e de fácil cuidado, perfeitas para ambientes internos.",
    price: 89.9,
    light: "Luz Direta/Indireta",
    water: "1x por semana",
    size: "15cm x 18cm",
    stock: 5,
    href: "/suculentas",
    category: "Suculentas",
  },
  {
    id: 2,
    slug: "orquideas",
    image: vaso2,
    title: "Orquídeas",
    description:
      "Plantas delicadas que apreciam ambientes úmidos e sombreados.",
    price: 149.9,
    light: "Luz Indireta",
    water: "2x por semana",
    size: "20cm x 25cm",
    stock: 3,
    href: "/suculentas",
    category: "Orquídeas",
  },
  {
    id: 3,
    slug: "samambaias",
    image: vaso3,
    title: "Samambaias",
    description:
      "Clássicas de interior, com folhagem exuberante e que gostam de meia-sombra.",
    price: 119.9,
    light: "Meia Sombra",
    water: "3x por semana",
    size: "25cm x 30cm",
    stock: 7,
    href: "/suculentas",
    category: "Samambaias",
  },
  {
    id: 4,
    slug: "suculentas",
    image: vaso1,
    title: "Suculentas",
    description:
      "Plantas resistentes e de fácil cuidado, perfeitas para ambientes internos.",
    price: 79.9,
    light: "Luz Direta",
    water: "1x a cada 10 dias",
    size: "12cm x 15cm",
    stock: 12,
    href: "/suculentas",
    category: "Suculentas",
  },
  {
    id: 5,
    slug: "samambaias",
    image: vaso3,
    title: "Samambaias",
    description:
      "Clássicas de interior, com folhagem exuberante e que gostam de meia-sombra.",
    price: 109.9,
    light: "Luz Indireta",
    water: "2x por semana",
    size: "18cm x 22cm",
    stock: 2,
    href: "/suculentas",
    category: "Samambaias",
  },
  {
    id: 6,
    slug: "orquideas",
    image: vaso2,
    title: "Orquídeas",
    description:
      "Plantas delicadas que apreciam ambientes úmidos e sombreados.",
    price: 159.9,
    light: "Meia Sombra",
    water: "3x por semana",
    size: "22cm x 28cm",
    stock: 4,
    href: "/suculentas",
    category: "Orquídeas",
  },
  {
    id: 7,
    slug: "samambaias",
    image: vaso3,
    title: "Samambaias",
    description:
      "Clássicas de interior, com folhagem exuberante e que gostam de meia-sombra.",
    price: 129.9,
    light: "Luz Direta/Indireta",
    water: "1x por semana",
    size: "30cm x 35cm",
    stock: 8,
    href: "/suculentas",
    category: "Samambaias",
  },
  {
    id: 8,
    slug: "suculentas",
    image: vaso1,
    title: "Suculentas",
    description:
      "Plantas resistentes e de fácil cuidado, perfeitas para ambientes internos.",
    price: 69.9,
    light: "Luz Direta",
    water: "1x a cada 2 semanas",
    size: "10cm x 12cm",
    stock: 15,
    href: "/suculentas",
    category: "Suculentas",
  },
];
