import { ShieldCheck } from "lucide-react";

export function DisclaimerBox() {
  return (
    <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-950">
      <div className="mb-2 flex items-center gap-2 font-semibold">
        <ShieldCheck className="h-5 w-5" />
        Important health information
      </div>
      Homoeopathy Speaks provides complementary homoeopathic consultations and does not replace
      medical diagnosis, emergency care, prescribed treatment, specialist care, paediatric care,
      mental health care, fertility care, antibiotics, surgery, vaccinations or allied health therapy.
      For urgent symptoms, call 000 or attend emergency care.
    </div>
  );
}
