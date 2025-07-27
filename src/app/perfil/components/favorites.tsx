import { MdFavoriteBorder } from "react-icons/md";

export function Favorites() {
  return (
    <div className="border border-[#CDE4D6] rounded-md px-6 py-1">
      <div className="py-6">
        <p className="text-2xl font-bold text-[#004D40]">Produtos Favoritos</p>
        <p className="text-sm">Seus produtos salvos para comprar depois</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 my-4">
        <MdFavoriteBorder size={48} color="#004D40" />
        <p>Você ainda não tem produtos favoritos</p>
        <button className="bg-[#004D40] text-white flex justify-center items-center p-2 rounded-md cursor-pointer">
          Explorar Produtos
        </button>
      </div>
    </div>
  );
}
