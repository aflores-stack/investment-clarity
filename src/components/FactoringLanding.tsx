import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Facebook,
  FileCheck2,
  Instagram,
  Landmark,
  Linkedin,
  Menu,
  MessageCircle,
  PieChart,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  X,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fondos-mutuos-factoring-hero.png";
import logo from "@/assets/prestamype/logo.svg";
import stepRegister from "@/assets/prestamype/step-register.png";
import stepOpportunities from "@/assets/prestamype/step-opportunities.png";
import stepReturn from "@/assets/prestamype/step-return.png";
import clientMarcos from "@/assets/prestamype/client-marcos.png";
import clientXimena from "@/assets/prestamype/client-ximena.png";
import clientLuis from "@/assets/prestamype/client-luis.png";
import clientCristian from "@/assets/prestamype/client-cristian.png";
import clientClaudia from "@/assets/prestamype/client-claudia.png";
import clientEsteffano from "@/assets/prestamype/client-esteffano.png";

const registerUrl =
  "https://www.prestamype.com/registro?ref=cotizador_invertir&type_investment=factoring";
const whatsappUrl =
  "https://api.whatsapp.com/send?phone=51924605244&text=Hola,%20deseo%20más%20información%20sobre%20Inversiones%20Factoring";

const benefits = [
  { icon: TrendingUp, title: "Rentabilidad", text: "Podrás ganar con retornos anuales estimados hasta 20%." },
  { icon: PieChart, title: "Diversificación", text: "Rentabiliza tu dinero en empresas de distintas industrias y reduce el riesgo de tu portafolio." },
  { icon: ShieldCheck, title: "Seguridad", text: "Prestamype tiene más de 10 años de experiencia y trabaja de la mano con CAVALI." },
  { icon: Star, title: "Experiencia", text: "Nos posicionamos como fintech líder en Perú desde 2017, con más de S/1,900 millones invertidos." },
  { icon: FileCheck2, title: "Respaldo", text: "Esta inversión cuenta con el respaldo de un título valor registrado en CAVALI." },
  { icon: MessageCircle, title: "Asesoría personalizada", text: "Si tienes dudas, un ejecutivo podrá ayudarte durante tu registro e inversión." },
];

const steps = [
  { image: stepRegister, title: "Registro", text: "Regístrate y sube los documentos requeridos para activar tu perfil.", note: "¡Es 100% online!" },
  { image: stepOpportunities, title: "Oportunidades", text: "Revisa las facturas disponibles e invierte en las que prefieras.", note: "Desde S/100 o $25." },
  { image: stepReturn, title: "Retorno", text: "Recibe tu capital más la ganancia de tu inversión.", note: "¡Retira o vuelve a invertir!" },
];

const testimonials = [
  { image: clientMarcos, name: "Marcos D.", text: "Al probar factoring en Prestamype, la rentabilidad que obtuve me animó a seguir. Además, me ayudó a ampliar mi portafolio." },
  { image: clientXimena, name: "Ximena R.", text: "Encontré facturas de distintos rubros y vi que Prestamype era una de las plataformas que mejor se había manejado. Hasta ahora me va bien." },
  { image: clientLuis, name: "Luis W.", text: "La comunicación con los ejecutivos fue bastante fluida y me animó a probar la plataforma. La variedad de facturas me da seguridad." },
  { image: clientCristian, name: "Cristian A.", text: "Llegué a Prestamype después de varias experiencias en otras plataformas y hasta ahora me va bien con los pagos." },
  { image: clientClaudia, name: "Claudia F.", text: "Yo invertía en préstamos con garantía, pero cuando lanzaron factoring me animé. Ahora llevo a la par dos productos de inversión." },
  { image: clientEsteffano, name: "Esteffano J.", text: "El riesgo-retorno de invertir en factoring me animó a probar. En año y medio he llegado a 11.3% anual." },
];

const faqs = [
  { q: "¿Qué es el factoring?", a: "Es una alternativa de inversión que permite financiar facturas por cobrar de empresas. Al pagarse la factura, recibes el capital invertido más la rentabilidad acordada." },
  { q: "¿Cuánto necesito para comenzar?", a: "Puedes comenzar a invertir desde S/100 o $25 y distribuir tu dinero entre distintas oportunidades." },
  { q: "¿Qué rentabilidad puedo obtener?", a: "Cada oportunidad muestra su tasa y plazo antes de invertir. El retorno anual estimado puede llegar hasta 20%, según las oportunidades elegidas." },
  { q: "¿En cuánto tiempo recupero mi inversión?", a: "Las oportunidades tienen plazos aproximados de 15 a 180 días. La fecha estimada de pago se muestra antes de confirmar tu inversión." },
  { q: "¿Cómo se respalda mi inversión?", a: "Las facturas son títulos valores registrados en CAVALI. Además, las empresas deudoras y proveedoras pasan por una evaluación previa." },
];

function CtaButton({ children = "Crea tu cuenta aquí", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <Button asChild size="lg" className={`h-12 rounded-md px-7 text-base font-semibold shadow-none ${className}`}>
      <a href={registerUrl}>{children}<ArrowRight aria-hidden="true" /></a>
    </Button>
  );
}

export function FactoringLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const moveTestimonial = (delta: number) => {
    setTestimonial((current) => (current + delta + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[testimonial];
  if (!activeTestimonial) return null;

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="https://www.prestamype.com" aria-label="Prestamype, inicio" className="shrink-0">
            <img src={logo} alt="Prestamype" width={185} height={37} className="h-8 w-auto" />
          </a>
          <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">
            <a href="https://www.prestamype.com/prestamos" className="nav-link">Financiamiento <ChevronDown /></a>
            <a href="https://www.prestamype.com/invertir-factoring" className="nav-link">Inversiones <ChevronDown /></a>
            <a href="https://www.prestamype.com/nosotros" className="nav-link">Ver más <ChevronDown /></a>
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="outline" className="h-10 border-primary px-5 text-primary hover:bg-brand-soft hover:text-primary"><a href="https://www.prestamype.com/login">Iniciar sesión</a></Button>
            <Button asChild className="h-10 px-5 shadow-none"><a href={registerUrl}>Regístrate</a></Button>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Navegación móvil">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {[["Financiamiento", "https://www.prestamype.com/prestamos"], ["Inversiones", "https://www.prestamype.com/invertir-factoring"], ["Nosotros", "https://www.prestamype.com/nosotros"]].map(([label, href]) => <a key={label} href={href} className="py-3 font-medium">{label}</a>)}
              <div className="mt-3 grid grid-cols-2 gap-3"><Button asChild variant="outline"><a href="https://www.prestamype.com/login">Iniciar sesión</a></Button><Button asChild><a href={registerUrl}>Regístrate</a></Button></div>
            </div>
          </nav>
        )}
      </header>

      <section className="bg-brand-soft">
        <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-8 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <div className="relative z-10 max-w-xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-semibold text-primary"><Sparkles /> Una alternativa de inversión</span>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">Fondos mutuos <span className="text-primary">vs Factoring</span></h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">Invierte en factoring y conoce tu retorno desde el día uno, sin depender de la volatilidad del mercado.</p>
            <div className="mt-8"><CtaButton>Invierte en factoring</CtaButton></div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium">
              <span className="inline-flex items-center gap-2"><Check className="text-primary" /> Desde S/100 o $25</span>
              <span className="inline-flex items-center gap-2"><Check className="text-primary" /> Proceso 100% online</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-x-8 bottom-4 h-16 rounded-full bg-primary/10 blur-3xl" />
            <img src={heroImage} alt="Comparación entre la volatilidad de un fondo mutuo y el retorno predecible del factoring" width={1024} height={800} fetchPriority="high" className="relative w-full max-w-[650px] rounded-lg object-cover" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-8">
        <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-border px-5 text-center">
          <div><strong className="block text-2xl text-primary sm:text-3xl">+17,000</strong><span className="mt-1 block text-xs text-muted-foreground sm:text-sm">Inversionistas activos</span></div>
          <div><strong className="block text-2xl text-primary sm:text-3xl">+S/1,900 MM</strong><span className="mt-1 block text-xs text-muted-foreground sm:text-sm">Invertidos</span></div>
          <div><strong className="block text-2xl text-primary sm:text-3xl">10 años</strong><span className="mt-1 block text-xs text-muted-foreground sm:text-sm">de operaciones</span></div>
        </div>
      </section>

      <section className="py-20 lg:py-28" id="comparativa">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <span className="section-kicker">Compara antes de invertir</span>
              <h2 className="section-title mt-3">¿Fondo mutuo o Factoring?</h2>
              <p className="mt-5 leading-7 text-muted-foreground">Tanto un fondo mutuo como el factoring te permiten invertir tu dinero y buscar una rentabilidad, pero se diferencian en la predictibilidad de los retornos. Mientras la rentabilidad de un fondo mutuo puede variar según el desempeño de los activos en los que invierte, el factoring ofrece retornos más predecibles al conocer de antemano la tasa y el plazo de tu inversión. Conoce las principales diferencias.</p>
              <div className="mt-7"><CtaButton>Invierte en factoring</CtaButton></div>
            </div>
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left">
                  <thead><tr className="bg-brand-deep text-primary-foreground"><th className="p-5 text-sm font-semibold uppercase">Características</th><th className="p-5 text-sm font-semibold uppercase">Fondo mutuo</th><th className="bg-primary p-5 text-sm font-semibold uppercase">Factoring</th></tr></thead>
                  <tbody className="divide-y divide-border text-sm">
                    {[
                      ["Monto mínimo", "Desde S/100 hasta S/2,000, según tipo de fondo", "S/100 o $25"],
                      ["Rentabilidad", "Renta fija: 2%-3% anual; renta variable: 12%-18% anual histórico, pero con meses negativos", "Hasta 20% anual"],
                      ["Plazos", "6 meses a más de 5 años", "15 a 180 días"],
                      ["Riesgo", "Variable según el tipo de fondo", "Medio"],
                      ["Respaldo", "Regulado por SMV", "Título valor registrado en CAVALI"],
                    ].map(([feature, mutual, factoring]) => (
                      <tr key={feature}><th className="bg-muted/60 p-5 font-semibold">{feature}</th><td className="p-5 leading-6 text-muted-foreground">{mutual}</td><td className="bg-brand-soft/50 p-5 font-semibold text-brand-deep"><span className="flex gap-2"><Check className="mt-0.5 shrink-0 text-primary" />{factoring}</span></td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-4xl border-l-4 border-primary bg-brand-soft px-6 py-5 text-center text-sm leading-6 text-brand-deep"><strong>Ejemplo de simulación:</strong> si invirtieras S/5,000 durante un año, una rentabilidad de 20% podría generar hasta S/1,000 de ganancia, mientras que una tasa de 12% en un fondo mutuo generaría S/600.</div>
        </div>
      </section>

      <section className="bg-muted/60 py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-full bg-brand-soft">
            <div className="absolute h-[70%] w-[70%] rounded-full border-2 border-dashed border-primary/40" />
            <div className="relative grid h-56 w-56 place-items-center rounded-full bg-background shadow-lg"><FileCheck2 className="h-20 w-20 text-primary" /><span className="absolute bottom-11 text-sm font-bold text-brand-deep">FACTURA REGISTRADA</span></div>
            <div className="absolute left-2 top-16 rounded-md bg-background p-4 shadow-md"><BriefcaseBusiness className="text-primary" /></div>
            <div className="absolute bottom-14 right-3 rounded-md bg-background p-4 shadow-md"><CircleDollarSign className="text-primary" /></div>
          </div>
          <div><span className="section-kicker">Una inversión de corto plazo</span><h2 className="section-title mt-3">¿Qué es invertir en factoring?</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Consiste en financiar facturas por cobrar emitidas a grandes empresas, generando un adelanto de liquidez para las PYMEs. Cuando las facturas son pagadas, recuperas tu inversión más una ganancia.</p><p className="mt-4 leading-7 text-muted-foreground">Ayudas a las PYMEs financieramente y ganas dinero en el proceso.</p><div className="mt-8 inline-flex items-center gap-4 border-l-4 border-primary pl-5"><ShieldCheck className="h-10 w-10 text-primary" /><div><span className="block text-xs uppercase text-muted-foreground">Registrados en</span><strong className="text-xl text-brand-deep">CAVALI</strong></div></div></div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"><div><span className="section-kicker">Haz crecer tu dinero</span><h2 className="section-title mt-3">Beneficios de invertir en factoring con Prestamype</h2></div><CtaButton /></div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-7 lg:p-8"><div className="mb-5 grid h-11 w-11 place-items-center rounded-md bg-brand-soft"><Icon className="text-primary" /></div><h3 className="text-lg font-bold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p>{title === "Asesoría personalizada" && <a className="mt-3 inline-flex font-semibold text-primary hover:underline" href={whatsappUrl}>Escríbenos aquí</a>}</article>)}
          </div>
        </div>
      </section>

      <section className="bg-brand-deep py-20 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="text-center"><span className="text-sm font-semibold uppercase text-brand-lime">Comienza hoy</span><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Pasos para comenzar a invertir en factoring</h2></div>
          <div className="relative mt-14 grid gap-8 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-12 hidden border-t-2 border-dashed border-brand-lime/50 md:block" />
            {steps.map((step, i) => <article key={step.title} className="relative text-center"><div className="relative z-10 mx-auto grid h-24 w-24 place-items-center rounded-full bg-background shadow-lg"><img src={step.image} alt="" width={96} height={96} loading="lazy" className="h-20 w-20 object-contain" /></div><span className="mx-auto mt-6 grid h-8 w-8 place-items-center rounded-full bg-brand-lime font-bold text-brand-deep">{i + 1}</span><h3 className="mt-4 text-xl font-bold">{step.title}</h3><p className="mx-auto mt-3 max-w-xs leading-7 text-primary-foreground/75">{step.text}</p><strong className="mt-2 block text-brand-lime">{step.note}</strong></article>)}
          </div><div className="mt-12 text-center"><CtaButton className="bg-brand-lime text-brand-deep hover:bg-brand-lime/90" /></div>
        </div>
      </section>

      <section className="py-20 lg:py-24"><div className="mx-auto max-w-5xl px-5 lg:px-8"><div className="grid gap-10 lg:grid-cols-[0.55fr_1fr]"><div><span className="section-kicker">Antes de invertir</span><h2 className="section-title mt-3">Consideraciones a tener en cuenta</h2></div><ul className="space-y-4">{[
        "Las empresas deudoras y proveedoras pasan por un proceso de evaluación previo a la carga de sus operaciones en la plataforma.",
        "El inversionista puede invertir de forma parcial o total en las oportunidades de inversión.",
        "Prestamype gestiona la anotación en cuenta de la factura a través de CAVALI para registrar una obligación de pago y realizar la cobranza posteriormente.",
      ].map((item) => <li key={item} className="flex gap-4 rounded-md border border-border p-5 leading-7 text-muted-foreground"><Check className="mt-1 shrink-0 text-primary" />{item}</li>)}</ul></div></div></section>

      <section className="bg-brand-soft"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-7 px-5 py-14 text-center sm:flex-row sm:text-left lg:px-8"><div><span className="font-semibold text-primary">¡No esperes más!</span><h2 className="mt-2 text-3xl font-bold">Regístrate y comienza a invertir</h2></div><CtaButton /></div></section>

      <section className="py-20 lg:py-28"><div className="mx-auto max-w-6xl px-5 lg:px-8"><div className="flex items-end justify-between gap-5"><div><span className="section-kicker">Experiencias reales</span><h2 className="section-title mt-3">Conoce lo que dicen nuestros clientes</h2></div><div className="hidden gap-2 sm:flex"><Button variant="outline" size="icon" aria-label="Testimonio anterior" onClick={() => moveTestimonial(-1)}><ChevronLeft /></Button><Button variant="outline" size="icon" aria-label="Siguiente testimonio" onClick={() => moveTestimonial(1)}><ChevronRight /></Button></div></div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.55fr]"><article className="grid min-h-[310px] items-center gap-7 rounded-lg bg-brand-deep p-8 text-primary-foreground sm:grid-cols-[140px_1fr] lg:p-10"><img src={activeTestimonial.image} alt={`Retrato de ${activeTestimonial.name}`} width={140} height={140} loading="lazy" className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-brand-lime" /><div><div className="mb-5 flex gap-1 text-brand-lime">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="fill-current" />)}</div><blockquote className="text-lg leading-8">“{activeTestimonial.text}”</blockquote><strong className="mt-6 block text-lg">{activeTestimonial.name}</strong><span className="text-sm text-primary-foreground/60">Inversionista frecuente</span></div></article><div className="grid grid-cols-3 gap-3 lg:grid-cols-2">{testimonials.map((item, i) => <Button key={item.name} variant="ghost" className={`h-auto p-2 ${i === testimonial ? "bg-brand-soft ring-2 ring-primary" : "opacity-60"}`} onClick={() => setTestimonial(i)} aria-label={`Ver testimonio de ${item.name}`}><img src={item.image} alt="" width={84} height={84} loading="lazy" className="h-20 w-20 rounded-md object-cover" /></Button>)}</div></div>
        <div className="mt-5 flex justify-center gap-2 sm:hidden"><Button variant="outline" size="icon" aria-label="Testimonio anterior" onClick={() => moveTestimonial(-1)}><ChevronLeft /></Button><Button variant="outline" size="icon" aria-label="Siguiente testimonio" onClick={() => moveTestimonial(1)}><ChevronRight /></Button></div>
      </div></section>

      <section className="border-y border-border bg-muted/50"><div className="mx-auto grid max-w-7xl divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0"><div className="flex items-center gap-5 px-5 py-12 lg:px-12"><div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-soft"><MessageCircle className="text-primary" /></div><div><h3 className="text-xl font-bold">¿Necesitas comunicarte con un ejecutivo?</h3><a href={whatsappUrl} className="mt-2 inline-flex items-center gap-2 font-semibold text-primary">Conversa con un ejecutivo <ArrowRight /></a></div></div><div className="flex items-center gap-5 px-5 py-12 lg:px-12"><div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-soft"><Landmark className="text-primary" /></div><div><h3 className="text-xl font-bold">También te puede interesar</h3><a href="https://www.prestamype.com/invertir-prestamos" className="mt-2 inline-flex items-center gap-2 font-semibold text-primary">Invierte en préstamos con garantía <ArrowRight /></a></div></div></div></section>

      <section className="py-20 lg:py-24"><div className="mx-auto max-w-4xl px-5 lg:px-8"><div className="text-center"><span className="section-kicker">Resolvemos tus dudas</span><h2 className="section-title mt-3">Preguntas frecuentes</h2></div><div className="mt-10 divide-y divide-border border-y border-border">{faqs.map((faq, i) => <div key={faq.q}><Button variant="ghost" className="flex h-auto w-full justify-between whitespace-normal rounded-none px-0 py-6 text-left text-base hover:bg-transparent" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{faq.q}</span><ChevronDown className={`shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} /></Button>{openFaq === i && <p className="max-w-3xl pb-6 leading-7 text-muted-foreground">{faq.a}</p>}</div>)}</div><div className="mt-8 text-center"><a href="https://www.prestamype.com/centro-de-asistencia" className="font-semibold text-primary hover:underline">Ver más consultas</a></div></div></section>

      <section className="bg-muted/60 py-16"><div className="mx-auto max-w-6xl px-5 text-center lg:px-8"><h2 className="text-2xl font-bold">¿Quiénes hablan de Prestamype?</h2><div className="mt-9 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-xl font-bold text-muted-foreground/70"><span>Gestión</span><span>Semana Económica</span><span>Forbes Perú</span><span>El Comercio</span><span>RPP</span></div><div className="mx-auto mt-14 max-w-3xl border-t border-border pt-10"><h3 className="text-lg font-bold">Nuestros aliados</h3><div className="mt-6 flex flex-wrap justify-center gap-8 text-sm font-semibold text-muted-foreground"><span className="inline-flex items-center gap-2"><FileCheck2 className="text-primary" /> CAVALI</span><span className="inline-flex items-center gap-2"><BriefcaseBusiness className="text-primary" /> Asociación Fintech del Perú</span><span className="inline-flex items-center gap-2"><Users className="text-primary" /> Endeavor</span></div></div></div></section>

      <footer className="bg-brand-ink text-primary-foreground"><div className="mx-auto max-w-7xl px-5 py-14 lg:px-8"><div className="grid gap-10 border-b border-primary-foreground/15 pb-12 sm:grid-cols-2 lg:grid-cols-4"><div><img src={logo} alt="Prestamype" width={185} height={37} className="h-8 w-auto brightness-0 invert" /><p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/65">Soluciones financieras para personas y empresas que buscan avanzar.</p><div className="mt-6 flex gap-3">{[[Facebook,"https://www.facebook.com/Prestamype","Facebook"],[Instagram,"https://www.instagram.com/prestamype_peru","Instagram"],[Linkedin,"https://www.linkedin.com/company/prestamype","LinkedIn"],[Youtube,"https://www.youtube.com/@Prestamype","YouTube"]].map(([Icon,href,label]) => { const SocialIcon = Icon as typeof Facebook; return <a key={label as string} href={href as string} aria-label={label as string} className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/25 hover:border-brand-lime hover:text-brand-lime"><SocialIcon className="h-4 w-4" /></a>; })}</div></div>{[
          ["Financiamiento", [["Préstamos", "https://www.prestamype.com/prestamos"], ["Factoring", "https://www.prestamype.com/factoring"], ["Confirming", "https://www.prestamype.com/confirming"]]],
          ["Inversiones", [["Invertir en préstamos", "https://www.prestamype.com/invertir-prestamos"], ["Invertir en factoring", "https://www.prestamype.com/invertir-factoring"], ["Gestora de fondos", "https://www.prestamype.com/gestora-de-fondos"]]],
          ["Prestamype", [["Nosotros", "https://www.prestamype.com/nosotros"], ["Artículos", "https://www.prestamype.com/articulos"], ["Centro de ayuda", "https://www.prestamype.com/centro-de-asistencia"]]],
        ].map(([title, links]) => <div key={title as string}><h3 className="font-bold">{title as string}</h3><ul className="mt-5 space-y-3 text-sm text-primary-foreground/65">{(links as string[][]).map(([label,href]) => <li key={label}><a href={href} className="hover:text-brand-lime">{label}</a></li>)}</ul></div>)}</div><div className="flex flex-col justify-between gap-4 pt-7 text-xs text-primary-foreground/50 sm:flex-row"><span>© {new Date().getFullYear()} Prestamype. Todos los derechos reservados.</span><div className="flex flex-wrap gap-5"><a href="https://www.prestamype.com/terminos-y-condiciones">Términos y condiciones</a><a href="https://www.prestamype.com/politicas-de-privacidad">Políticas de privacidad</a></div></div></div></footer>

      <a href={whatsappUrl} aria-label="Habla con un asesor por WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-transform hover:scale-105"><MessageCircle /></a>
    </main>
  );
}