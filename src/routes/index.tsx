import { createFileRoute } from "@tanstack/react-router";
import { FactoringLanding } from "@/components/FactoringLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fondos mutuos vs Factoring: ¿dónde invertir? | Prestamype" },
      { name: "description", content: "Compara fondos mutuos vs factoring: rentabilidad, plazos, riesgo y monto mínimo. Invierte en factoring desde S/100 y conoce tu retorno desde el inicio." },
      { property: "og:title", content: "Fondos mutuos vs Factoring | Prestamype" },
      { property: "og:description", content: "Conoce las diferencias entre fondos mutuos y factoring y elige una inversión con retornos más predecibles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <FactoringLanding />;
}
