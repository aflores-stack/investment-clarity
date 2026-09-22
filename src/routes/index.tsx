import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import heroImage from "@/assets/fondos-mutuos-factoring-hero.png";
import { Button } from "@/components/ui/button";
import rentabilidadIcon from "@/assets/benefits/rentabilidad.png.asset.json";
import diversificacionIcon from "@/assets/benefits/diversificacion.png.asset.json";
import seguridadIcon from "@/assets/benefits/seguridad.png.asset.json";
import experienciaIcon from "@/assets/benefits/experiencia.png.asset.json";
import respaldoIcon from "@/assets/benefits/respaldo.png.asset.json";
import asesoriaIcon from "@/assets/benefits/asesoria.png.asset.json";

const REGISTRO =
  "https://www.prestamype.com/registro?ref=cotizador_invertir&type_investment=factoring";
const PRESTAMYPE = "https://www.prestamype.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fondos mutuos vs Factoring: ¿dónde invertir? | Prestamype" },
      {
        name: "description",
        content:
          "Compara fondos mutuos vs factoring: rentabilidad, plazos, riesgo y monto mínimo. Invierte en factoring desde S/100 y conoce tu retorno desde el inicio.",
      },
      { property: "og:title", content: "Fondos mutuos vs Factoring | Prestamype" },
      {
        property: "og:description",
        content:
          "Conoce las diferencias entre fondos mutuos y factoring y elige una inversión con retornos más predecibles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function CtaButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={REGISTRO}
      className={`inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_10px_25px_-12px_rgba(16,110,70,0.8)] transition-colors hover:bg-primary-dark ${className}`}
    >
      {children}
    </a>
  );
}

const beneficios = [
  {
    title: "Rentabilidad",
    text: "Podrás ganar con retornos anuales estimados hasta 20%.",
    image: rentabilidadIcon.url,
  },
  {
    title: "Diversificación",
    text: "Rentabiliza tu dinero en empresas de distintas industrias, así podrás reducir el riesgo de tu portafolio.",
    image: diversificacionIcon.url,
  },
  {
    title: "Seguridad",
    text: "Prestamype es una Fintech con más de 10 años de experiencia y que trabaja de la mano con CAVALI.",
    image: seguridadIcon.url,
  },
  {
    title: "Experiencia",
    text: "Prestamype se posiciona como fintech líder en Perú desde 2017, con 1600 millones de soles invertidos.",
    image: experienciaIcon.url,
  },
  {
    title: "Respaldo",
    text: "Esta inversión cuenta con el respaldo de un título valor registrado en CAVALI.",
    image: respaldoIcon.url,
  },
  {
    title: "Asesoría personalizada",
    text: "Si tienes dudas, un ejecutivo podrá ayudarte en el proceso de registro e inversión.",
    image: asesoriaIcon.url,
  },
];

const pasos = [
  {
    img: "https://d14bodb4yrsx8y.cloudfront.net/assets/img/step-one.de83eef.png",
    title: "1. Registro",
    text: "Regístrate y sube los documentos requeridos para la activación de tu perfil. ¡Es 100% online!",
  },
  {
    img: "https://d14bodb4yrsx8y.cloudfront.net/assets/img/step-two-investment.04054d4.png",
    title: "2. Oportunidades",
    text: "Revisa en línea las facturas disponibles e invierte en las de tu preferencia. El monto mínimo es de S/100 o $25.",
  },
  {
    img: "https://d14bodb4yrsx8y.cloudfront.net/assets/img/step-three-investment.98e6eab.png",
    title: "3. Retorno",
    text: "Recibe el capital más la ganancia de tu inversión ¡Retira tu dinero o vuelve a invertir!",
  },
];

const faqs = [
  {
    q: "¿Desde qué monto puedo invertir en factoring?",
    a: "El monto mínimo de inversión en una factura es de 100 soles o 25 dólares. Para que los empresarios puedan vender sus facturas, deben sumar mínimo S/1,000.",
  },
  {
    q: "¿Cuál es el proceso para invertir?",
    a: "Para invertir en Factoring, solo debes registrarte en la web y llenar los campos requeridos. Luego recibirás un correo de verificación y, finalmente, en la web tendrás que firmar el Contrato de Inversionista. ¡Es 100% digital!",
  },
  {
    q: "¿Cómo recargar saldo en la plataforma para invertir en Factoring?",
    a: 'Inicia sesión, ingresa a la pestaña "Estados de cuenta" y selecciona "Depósito". Realiza una transferencia del monto que deseas recargar a la cuenta de Factoring Prestamype. Completa los datos de la transferencia que realizaste, adjunta el voucher y acepta la declaración jurada.',
  },
  {
    q: "¿Cómo invertir en Factoring?",
    a: 'Ingresa a la plataforma y elige la factura de tu preferencia en la sección "Oportunidades". Finalmente, confirma tu inversión. Recibirás un correo indicando que la operación fue exitosa cuando la factura se haya financiado por completo.',
  },
  {
    q: "¿Cómo visualizar las oportunidades de inversión disponibles?",
    a: "Una vez que te hayas registrado en www.prestamype.com y validado tu perfil, completa los datos solicitados para verificar tu información y activar tu cuenta. Listo, ahora puedes ver todas las oportunidades de inversión disponibles en la plataforma.",
  },
  {
    q: "¿Qué niveles de riesgo manejan?",
    a: "Manejamos distintos niveles de riesgo en función de la evaluación que realizan nuestros analistas a las empresas pagadoras e indicamos el nivel de riesgo en el detalle de cada operación, desde la A hasta la E, donde la A significa un menor riesgo.",
  },
];

const comparativa = [
  {
    c: "Monto mínimo",
    ahorro: "Desde S/100 hasta S/2,000, según tipo de fondo",
    factoring: "S/100 o $25",
  },
  {
    c: "Rentabilidad",
    ahorro: "Renta fija: 2%-3% anual; Renta variable: 12%-18% anual histórico, pero con meses negativos",
    factoring: "Hasta 20% anual",
  },
  { c: "Plazos", ahorro: "6 meses a + 5 años", factoring: "15 a 180 días" },

  {
    c: "Respaldo",
    ahorro: "Regulado por SMV",
    factoring: "Título valor está registrado en CAVALI",
  },
];

const aliados = [
  { alt: "CCL", src: "https://prestamype.s3.amazonaws.com/our_allies/khtyctb3-ccl.jpg" },
  { alt: "Equifax", src: "https://prestamype.s3.amazonaws.com/our_allies/khtyd08b-equifax.jpg" },
];

const menuGroups = [
  {
    label: "Financiamiento",
    icon: "https://d14bodb4yrsx8y.cloudfront.net/assets/img/icon_menu_01.1d44b81.svg",
    links: [
      ["Préstamos", `${PRESTAMYPE}/prestamos`],
      ["Financiamiento mediante Fideicomiso en Titulización", `${PRESTAMYPE}/fideicomiso`],
      ["Crédito hipotecario", `${PRESTAMYPE}/creditos-hipotecarios`],
      ["Factoring", `${PRESTAMYPE}/factoring`],
      ["Confirming", `${PRESTAMYPE}/confirming`],
      ["Gestión de facturas", `${PRESTAMYPE}/gestion-de-facturas`],
    ],
  },
  {
    label: "Inversiones",
    icon: "https://d14bodb4yrsx8y.cloudfront.net/assets/img/icon_menu_02.7d45215.svg",
    links: [
      ["Invertir en préstamos", `${PRESTAMYPE}/invertir-prestamos`],
      ["Invertir en factoring", `${PRESTAMYPE}/invertir-factoring`],
      ["Gestora de Fondos Privados", `${PRESTAMYPE}/gestora-de-fondos`],
      ["Cambio Seguro", "https://cambioseguro.com/"],
      ["Tandia", "https://tandiashop.com/?utm_source=web_prestamype&utm_medium=btn_ref_to_web_tandiashop"],
      ["Conocer más", `${PRESTAMYPE}/invertir`],
    ],
  },
  {
    label: "Ver más",
    icon: "https://d14bodb4yrsx8y.cloudfront.net/assets/img/icon_menu_03.9f2583e.svg",
    links: [
      ["Broker", `${PRESTAMYPE}/brokers-prestamos`],
      ["Referidos", `${PRESTAMYPE}/recomendacion`],
      ["Nosotros", `${PRESTAMYPE}/nosotros`],
      ["Artículos", `${PRESTAMYPE}/articulos`],
      ["Campañas vigentes", "https://page.prestamype.com/productos-tyc"],
      ["Trabaja con nosotros", "https://grupoprestamype.hiringroom.com/jobs"],
    ],
  },
] as const;

function BenefitIcon({ icon, paths }: { icon: string; paths: number }) {
  return (
    <span className={`benefit-icon ${icon}`} aria-hidden="true">
      {Array.from({ length: paths }, (_, index) => (
        <span key={index} className={`path${index + 1}`} />
      ))}
    </span>
  );
}

function Header() {
  return (
    <header className="relative z-50 border-b border-border bg-card">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5">
        <a href={PRESTAMYPE} aria-label="Ir al inicio de Prestamype">
          <img
            src="https://d14bodb4yrsx8y.cloudfront.net/static/logo.svg"
            alt="Prestamype"
            className="h-9 w-auto"
          />
        </a>

        <nav className="hidden h-full items-center gap-7 lg:flex" aria-label="Navegación principal">
          {menuGroups.map((group) => (
            <div key={group.label} className="group relative flex h-full items-center">
              <a
                href={group.links[0][1]}
                className="flex items-center gap-1 text-sm font-semibold text-navy transition-colors hover:text-primary-dark"
              >
                {group.label}
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <div className="invisible absolute top-[64px] left-1/2 w-72 -translate-x-1/2 border border-border bg-card p-5 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                <div className="mb-4 flex items-center gap-3">
                  <img src={group.icon} alt="" className="h-10 w-10" />
                  <span className="font-semibold text-navy">{group.label}</span>
                </div>
                <div className="space-y-3">
                  {group.links.map(([label, href]) => (
                    <a key={label} href={href} className="block text-sm text-muted-foreground hover:text-primary-dark">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <a href={`${PRESTAMYPE}/centro-de-asistencia/`} className="text-sm font-semibold text-navy hover:text-primary-dark">
            Centro de ayuda
          </a>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" className="h-10 border-primary text-primary-dark hover:text-primary-dark">
            <a href={`${PRESTAMYPE}/login`}>Iniciar sesión</a>
          </Button>
          <Button asChild className="h-10">
            <a href={REGISTRO}>Regístrate</a>
          </Button>
        </div>

        <details className="mobile-menu relative lg:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center text-navy" aria-label="Abrir menú">
            <Menu className="menu-open h-6 w-6" />
            <X className="menu-close hidden h-6 w-6" />
          </summary>
          <div className="absolute top-[55px] right-[-20px] w-screen border-t border-border bg-card px-5 py-5 shadow-lg">
            {menuGroups.map((group) => (
              <details key={group.label} className="border-b border-border py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy">
                  <span className="flex items-center gap-3"><img src={group.icon} alt="" className="h-8 w-8" />{group.label}</span>
                  <ChevronDown className="h-4 w-4" />
                </summary>
                <div className="space-y-3 pt-3 pl-11">
                  {group.links.map(([label, href]) => <a key={label} href={href} className="block text-sm text-muted-foreground">{label}</a>)}
                </div>
              </details>
            ))}
            <a href={`${PRESTAMYPE}/centro-de-asistencia/`} className="block py-4 font-semibold text-navy">Centro de ayuda</a>
            <div className="mt-2 grid grid-cols-2 gap-3">
              <Button asChild variant="outline"><a href={`${PRESTAMYPE}/login`}>Iniciar sesión</a></Button>
              <Button asChild><a href={REGISTRO}>Regístrate</a></Button>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

function Landing() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      {/* Hero */}
      <section className="bg-hero-gradient">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl leading-tight font-extrabold md:text-5xl">
              Fondos mutuos <span className="text-primary-dark">vs</span> Factoring
            </h1>
            <p className="mt-5 max-w-xl text-lg text-foreground/80">
              Invierte en factoring y conoce tu retorno desde el día uno, sin depender de la
              volatilidad del mercado.
            </p>
            <CtaButton className="mt-8">Invierte en factoring</CtaButton>
          </div>
          <img
            src={heroImage}
            alt="Comparación entre el retorno variable de un fondo mutuo y el retorno conocido del factoring"
            className="h-auto w-full"
            width={1200}
            height={1014}
            fetchPriority="high"
          />
        </div>
      </section>

      {/* Comparación */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">¿Fondo mutuo o Factoring?</h2>
            <p className="mt-5 text-base text-muted-foreground">
              Tanto un fondo mutuo como el factoring te permiten invertir tu dinero y buscar una
              rentabilidad, pero se diferencian en la predictibilidad de los retornos. Mientras la
              rentabilidad de un fondo mutuo puede variar según el desempeño de los activos en los
              que invierte, el factoring ofrece retornos más predecibles al conocer de antemano la
              tasa y el plazo de tu inversión. Conoce las principales diferencias.
            </p>
            <CtaButton className="mt-7">Invierte en factoring</CtaButton>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-[0_18px_50px_-30px_rgba(16,64,45,0.5)]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="bg-muted p-4 font-semibold text-navy">Características</th>
                  <th className="bg-muted p-4 font-semibold text-navy">Fondo mutuo</th>
                  <th className="bg-primary p-4 font-semibold text-primary-foreground">Factoring</th>
                </tr>
              </thead>
              <tbody>
                {comparativa.map((r) => (
                  <tr key={r.c} className="border-t border-border align-top">
                    <td className="p-4 font-semibold text-navy">{r.c}</td>
                    <td className="p-4 text-muted-foreground">{r.ahorro}</td>
                    <td className="bg-primary-soft p-4 font-medium text-navy">{r.factoring}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground italic">
          Por ejemplo, si invirtieras S/5,000 durante un año, una rentabilidad de 20% podría generar
          hasta S/1,000 de ganancia, mientras que una tasa de 12% en un fondo mutuo generaría S/600.
        </p>
      </section>

      {/* ¿Qué es invertir en factoring? */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src="https://d14bodb4yrsx8y.cloudfront.net/assets/img/video-que-es-inversion-factoring.f0d91bf.png"
            alt="¿Qué es inversión factoring y qué ventajas tiene?"
            loading="lazy"
            className="w-full rounded-2xl"
          />
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">¿Qué es invertir en factoring?</h2>
            <p className="mt-5 text-muted-foreground">
              Consiste en financiar facturas por cobrar emitidas a las grandes empresas, generando
              un adelanto de liquidez para las PYMEs. Cuando las facturas son pagadas, recuperas tu
              inversión más una ganancia. Ayudas a las PYMEs financieramente y ganas dinero en el
              proceso.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 1024 1024"
                className="h-6 w-6 shrink-0 fill-primary"
              >
                <path
                  transform="translate(0 960) scale(1 -1)"
                  d="M510 960 422 897 316 919 256 828 150 808 130 702 39 642 61 537 0 447 61 357 39 251 130 192 150 85 256 65 316-25 422-3 512-64 602-3 708-25 768 65 874 85 894 192 985 251 963 357 1024 447 963 537 985 642 893 703 873 810 767 830 707 921 601 899 510 960ZM510 816Q565 816 617.5 800T715 754Q760 724 795 681.5T851 589Q871 539 876.5 484.5T872 377Q861 323 835 275T771 189Q732 150 684 124.5T582 88Q529 78 474.5 83T370 109Q319 130 277 164.5T204 244Q174 290 158 342T142 448Q142 521 170 588.5T250 708Q302 760 369.5 788T510 816ZM510 784Q461 784 413 769.5T323 728Q282 700 250.5 661.5T199 577Q180 531 175 481.5T180 383Q190 334 213.5 290T272 211Q307 176 351 152.5T444 119Q493 110 543 114.5T639 138Q685 157 723.5 188.5T790 262Q817 303 831.5 351T846 448Q846 515 820.5 576.5T748 685Q700 731 638.5 756.5T510 782V784ZM686 611 755 543 721 509 466 254 268 427 331 499 367 467 462 385 653 576 686 611Z"
                />
              </svg>
              <span className="text-sm text-muted-foreground">Registrados en</span>
              <span className="text-xl font-semibold text-navy">Cavali</span>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-muted/60 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Beneficios de invertir en factoring con Prestamype
            </h2>
            <CtaButton className="mt-7">Crea tu cuenta aquí</CtaButton>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {beneficios.map((b) => (
              <div key={b.title}>
                <img
                  src={b.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="mb-4 h-20 w-20 object-contain"
                />
                <h3 className="text-base font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pasos */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Pasos para comenzar a invertir en factoring
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {pasos.map((p) => (
            <div key={p.title} className="text-center">
              <img src={p.img} alt={p.title} loading="lazy" className="mx-auto h-28 object-contain" />
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaButton>Crea tu cuenta aquí</CtaButton>
        </div>
      </section>

      {/* Consideraciones */}
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <h2 className="text-3xl font-bold">Consideraciones a tener en cuenta</h2>
        <ul className="mt-6 space-y-3 text-muted-foreground">
          {[
            "Las empresas deudoras y proveedoras pasan por un proceso de evaluación previo a la carga de sus operaciones en la plataforma.",
            "El inversionista puede invertir de forma parcial o el total en las oportunidades de inversión.",
            "Prestamype gestiona la anotación en cuenta de la factura a través de Cavali para registrar una obligación de pago y realizar la cobranza posteriormente.",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="icon-checkmark-outline-im mt-0.5 shrink-0 text-xl text-primary" aria-hidden="true" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA banda */}
      <section className="bg-green-gradient">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-14 text-center">
          <h2 className="text-2xl font-extrabold text-primary-foreground">¡No esperes más!</h2>
          <p className="text-primary-foreground/90">Regístrate y comienza a invertir</p>
          <a
            href={REGISTRO}
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-card px-7 py-3.5 text-base font-semibold text-primary-dark transition-opacity hover:opacity-90"
          >
            Crea tu cuenta aquí
          </a>
        </div>
      </section>

      {/* Contacto */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border p-7">
            <BenefitIcon icon="icon-message-chat-im" paths={2} />
            <h3 className="text-lg font-semibold">¿Necesitas comunicarte con un ejecutivo?</h3>
            <a
              className="mt-2 inline-block font-semibold text-primary-dark hover:underline"
              href="https://api.whatsapp.com/send?phone=51924605244&text=Hola%2C%20deseo%20mas%20informaci%C3%B3n%20sobre%20Inversiones%20Factoring"
            >
              Conversa con un ejecutivo aquí
            </a>
          </div>
          <div className="rounded-2xl border border-border p-7">
            <BenefitIcon icon="icon-invoice-im" paths={2} />
            <h3 className="text-lg font-semibold">También te puede interesar</h3>
            <a
              className="mt-2 inline-block font-semibold text-primary-dark hover:underline"
              href="https://www.prestamype.com/invertir-prestamos"
            >
              Invierte en préstamos con garantía hipotecaria aquí
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/60 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Preguntas frecuentes</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl bg-card p-5 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-navy">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://www.prestamype.com/centro-de-asistencia"
              className="font-semibold text-primary-dark hover:underline"
            >
              Ver más consultas
            </a>
          </div>
        </div>
      </section>

      {/* Aliados */}
      <section className="mx-auto max-w-6xl px-5 py-16 text-center">
        <h2 className="text-2xl font-bold">Nuestros aliados</h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          {aliados.map((a) => (
            <img key={a.alt} src={a.src} alt={a.alt} loading="lazy" className="h-14 object-contain" />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy/5 py-12">
        <div className="mx-auto max-w-5xl space-y-5 px-5 text-xs leading-relaxed text-muted-foreground">
          <div className="flex flex-wrap gap-5">
            <a
              href="https://www.prestamype.com/terminos-y-condiciones"
              className="font-semibold hover:underline"
            >
              Términos y condiciones
            </a>
            <a
              href="https://www.prestamype.com/politicas-de-privacidad"
              className="font-semibold hover:underline"
            >
              Políticas de privacidad
            </a>
          </div>
          <p>
            Préstamos con garantía hipotecaria: Prestamype, a través de su razón social P2P FINANCE
            CONSULTING SAC, asesora a personas que buscan un préstamo y los conecta a inversionistas
            interesados en prestar directamente su capital. No canaliza los fondos ni realiza
            intermediación financiera. Los contratos de préstamo son de 12, 18, 24, 36, 48, 60 y 72
            meses, sin periodo mínimo de cancelación. La Tasa Costo Efectivo Anual (TCEA) promedio
            es de 35%. Esta TCEA incluye a la tasa de interés mensual y los gastos de tasación,
            registrales y notariales.
          </p>
          <p>
            Factoring: FACTORING PRESTAMYPE SAC, perteneciente al grupo Prestamype, es una empresa
            participante de CAVALI (Registro Central de Valores y Liquidaciones) e inscrita en el
            “Registro de empresas de factoring no comprendidas en el ámbito de la Ley General”
            (Oficio SBS N°19585-2020). De acuerdo a la regulación vigente de la Superintendencia del
            Mercado de Valores (SMV), Prestamype no está sujeta a una autorización como Sociedad
            Administradora de Plataformas de Financiamiento Participativo Financiero, y las
            operaciones e información de la plataforma no se encuentran bajo supervisión de la SMV.
          </p>
        </div>
      </footer>
    </main>
  );
}
