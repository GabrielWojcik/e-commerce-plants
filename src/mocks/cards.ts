import type { StaticImageData } from "next/image";

import vaso1 from "../images/flower/vaso-1.png";
import vaso2 from "../images/flower/vaso-2.png";
import vaso3 from "../images/flower/vaso-3.png";

interface CardProps {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  href: string;
  category: string;
}

export const cardMocks: CardProps[] = [
  {
    id: 1,
    image: vaso1,
    title: "Suculentas",
    description:
      "Plantas resistentes e de fácil cuidado, perfeitas para ambientes internos.",
    href: "/suculentas",
    category: "Suculentas",
  },
  {
    id: 2,
    image: vaso2,
    title: "Orquídeas",
    description:
      "Plantas delicadas que apreciam ambientes úmidos e sombreados.",
    href: "/suculentas",
    category: "Orquídeas",
  },
  {
    id: 3,
    image: vaso3,
    title: "Samambaias",
    description:
      "Clássicas de interior, com folhagem exuberante e que gostam de meia-sombra.",
    href: "/suculentas",
    category: "Samambaias",
  },
  {
    id: 4,
    image: vaso1,
    title: "Suculentas",
    description:
      "Plantas resistentes e de fácil cuidado, perfeitas para ambientes internos.",
    href: "/suculentas",
    category: "Suculentas",
  },
  {
    id: 5,
    image: vaso3,
    title: "Samambaias",
    description:
      "Clássicas de interior, com folhagem exuberante e que gostam de meia-sombra.",
    href: "/suculentas",
    category: "Samambaias",
  },
  {
    id: 6,
    image: vaso2,
    title: "Orquídeas",
    description:
      "Plantas delicadas que apreciam ambientes úmidos e sombreados.",
    href: "/suculentas",
    category: "Orquídeas",
  },
  {
    id: 7,
    image: vaso3,
    title: "Samambaias",
    description:
      "Clássicas de interior, com folhagem exuberante e que gostam de meia-sombra.",
    href: "/suculentas",
    category: "Samambaias",
  },
  {
    id: 8,
    image: vaso1,
    title: "Suculentas",
    description:
      "Plantas resistentes e de fácil cuidado, perfeitas para ambientes internos.",
    href: "/suculentas",
    category: "Suculentas",
  },
];
