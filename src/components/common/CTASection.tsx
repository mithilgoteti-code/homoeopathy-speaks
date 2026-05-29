import Link from "next/link";

type CTASectionProps = {
  title?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
};

export function CTASection({
  title = "Ready to book a consultation?",
  text = "Choose the appointment option that best matches your needs. The live website can connect this page to Cliniko, Halaxy, Acuity or another booking calendar.",
  buttonText = "Book an Appointment",
  buttonHref = "/book-appointment",
}: CTASectionProps) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-teal-800 to-teal-950 p-8 text-white md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-4 max-w-3xl text-teal-50/90">{text}</p>
          </div>
          <Link
            href={buttonHref}
            className="inline-flex w-fit items-center justify-center rounded-full bg-amber-300 px-7 py-4 font-semibold text-slate-950 transition hover:bg-amber-200"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
