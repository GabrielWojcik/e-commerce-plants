export function Requested() {
  return (
    <div className="border border-[#CDE4D6] rounded-md px-6 py-1">
      <div className="py-6">
        <p className="text-2xl font-bold text-[#004D40]">Meus pedidos</p>
        <p className="text-sm">Acompanhe o status dos seus pedidos</p>
      </div>
      <div className="p-4 border border-[#CDE4D6] rounded-md gap-4 flex justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div>
              <p className="font-semibold text-[#004D40]">#0001234</p>
              <p className="text-sm">14/07/2025</p>
            </div>
            <div>
              <span className="bg-[#DCFCE7] rounded-full px-2.5 py-0.5 text-xs font-semibold text-[#23432F]">
                Entregue
              </span>
            </div>
          </div>
          <div>
            <p className="mb-2">Suculenta, Jade, Vaso Cerâmico</p>
            <div className="flex items-center gap-2">
              <button className="border-[#CDE4D6] rounded-md p-2 border flex items-center justify-center cursor-pointer text-[#23432F] font-semibold">
                Ver Detalhes
              </button>
              <button className="border-[#CDE4D6] rounded-md p-2 border flex items-center justify-center cursor-pointer text-[#23432F] font-semibold">
                Comprar Novamente
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-[#004D40]">R$ 89,90</p>
          <p className="text-gray-400 text-right">2 itens</p>
        </div>
      </div>
    </div>
  );
}
