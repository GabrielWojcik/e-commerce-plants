import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
  href: string;
}

export function Card({ image, title, description, href }: CardProps) {
  return (
    <div className="m-1 border-2  border-[#E4F1DC] rounded-t-2xl md:w-[300px] ">
      <Link href={href}>
        <Image
          alt={title}
          src={image}
          className="rounded-t-2xl w-full h-[300px]"
        />
      </Link>
      <div className="p-4">
        <div className="text-start flex  flex-col gap-2 text-[#3C6F4D]">
          <h1 className="font-bold text-xl">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
