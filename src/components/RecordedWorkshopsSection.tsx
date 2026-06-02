import React from "react";
import { ArrowRight, CheckCircle2, Library } from "lucide-react";
import { Button } from "@relume_io/relume-ui";

type Props = {
  className?: string;
};

export type RecordedWorkshopsSectionProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const stats = [
  { value: "14", label: "nagranych lekcji" },
  { value: "10h+", label: "praktycznych warsztatów" },
  { value: "od razu", label: "po dołączeniu" },
];

const topics = [
  "Backend w Supabase + Lovable",
  "Lepszy design aplikacji z AI",
  "Funkcje AI w aplikacjach",
  "Subskrypcje i płatności",
  "Cursor AI od podstaw",
  "Marketing, analityka i produkcja",
];

export const RecordedWorkshopsSection = (props: RecordedWorkshopsSectionProps) => {
  return (
    <section
      {...props}
      className={`w-full bg-[#f6f6f6] px-[5%] py-16 text-black md:py-24 lg:py-28 ${
        props.className || ""
      }`}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="mx-auto max-w-[820px] text-center">
          <div className="eyebrow-label mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs uppercase tracking-[0.08em] text-gray-600">
            <Library className="size-4 text-primary" />
            Archiwum warsztatów
          </div>

          <h2 className="font-heading mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">
            Dołączasz i od razu masz co oglądać
          </h2>

          <p className="mx-auto mb-10 max-w-[680px] text-lg leading-relaxed text-gray-700 md:text-xl">
            W Vibe Hero dostajesz bibliotekę nagranych warsztatów z budowania
            aplikacji z AI. Bez nadrabiania od zera i bez czekania na następny live.
          </p>

          <div className="mx-auto mb-10 grid max-w-[520px] grid-cols-1 gap-4 md:max-w-none md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="font-heading text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[760px] rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <h3 className="font-heading mb-5 text-2xl font-bold">
            W środku znajdziesz warsztaty o:
          </h3>

          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {topics.map((topic) => (
              <li key={topic} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="mt-0.5 size-5 flex-none text-primary" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-start gap-4 border-t border-gray-100 pt-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[360px] text-sm leading-relaxed text-gray-500">
              Nowe nagrania dochodzą po kolejnych spotkaniach na żywo.
            </p>
            <a href="#pricing" className="inline-flex w-full md:w-auto">
              <Button className="group w-full bg-primary px-6 py-3 text-white hover:bg-primary/90 rounded-[3px] border-0 md:w-auto">
                Zobacz dostęp
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
