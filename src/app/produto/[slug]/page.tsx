import Foto from "../../../images/flower/vaso-1.png";
import Image from "next/image";
export default function ProductPage() {
  return (
    <div className="flex h-full">
      <div className="w-1/2 bg-blue-200 flex items-center justify-center">
        <div>
          <Image
            src={Foto}
            alt=""
            height={300}
            width={800}
            className="h-auto w-auto"
          />
        </div>
      </div>
      <div className="w-1/2 bg-red-200 flex items-center justify-center">
        <p>informação do produto</p>
      </div>
    </div>
  );
}
