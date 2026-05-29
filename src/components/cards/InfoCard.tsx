import type { LucideIcon } from "lucide-react";

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export function InfoCard({ icon: Icon, title, text }: InfoCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <div className="mb-5 inline-flex rounded-2xl bg-teal-50 p-3 text-teal-800">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}
