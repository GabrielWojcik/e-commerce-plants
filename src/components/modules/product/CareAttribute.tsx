interface CareAttributeProps {
  title: string;
  subTitle: string;
  icon: React.ElementType;
  iconColor: string;
}

export function CareAttribute({
  title,
  subTitle,
  icon: Icon,
  iconColor,
}: CareAttributeProps) {
  return (
    <div className="bg-white p-3 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center gap-1 shadow-sm h-full">
      <Icon color={iconColor} size={18} />
      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">
        {title}
      </span>
      <span className="text-xs font-semibold text-slate-700 leading-tight">
        {subTitle}
      </span>
    </div>
  );
}
