// Four existing fees, each offered through two existing appointment types.
// This display catalogue does not create or modify anything in Halaxy.
export const services = [
  { name: "Initial General Consultation", slug: "initial-general", duration: "45 minutes", price: "$100", description: "An initial discussion of your health history, current treatments and care priorities.", inPersonKey: "initialGeneralClinic", onlineKey: "initialGeneralOnline" },
  { name: "General Follow-up", slug: "general-follow-up", duration: "30 minutes", price: "$75", description: "A follow-up discussion of your concerns, current care and any changes since your last consultation.", inPersonKey: "followUpGeneralClinic", onlineKey: "followUpGeneralOnline" },
  { name: "Initial Extended Consultation", slug: "initial-extended", duration: "60 minutes", price: "$150", description: "Additional time for detailed case-taking where health history or care concerns are more complex.", inPersonKey: "initialExtendedClinic", onlineKey: "initialExtendedOnline" },
  { name: "Extended Follow-up", slug: "extended-follow-up", duration: "45 minutes", price: "$120", description: "A longer follow-up appointment where additional discussion and review time are needed.", inPersonKey: "followUpExtendedClinic", onlineKey: "followUpExtendedOnline" },
] as const;
