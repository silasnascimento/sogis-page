import Image from "next/image";
import { Link } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAssetPath } from "@/lib/utils";
import SomapDemoForm from "@/components/SomapDemoForm";
import EditionCtaButton from "@/components/EditionCtaButton";
import {
  Users,
  Navigation,
  MapPin,
  Satellite,
  Sparkles,
  Layers,
  ShieldCheck,
  Check,
  ArrowRight,
  ArrowLeft,
  Server,
  Cloud,
  Database,
  Building2,
  Truck,
  Sprout,
  Landmark,
  Cpu,
  BarChart3,
  Zap,
  Sliders,
  Eye,
  Activity,
  Droplets,
  ThermometerSun
} from "lucide-react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamic = "force-static";

export default async function SomapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("SomapPage");

  const differentials = [
    {
      icon: <Users className="w-6 h-6 text-teal" />,
      title: t("differentials.items.unlimited_users.title"),
      description: t("differentials.items.unlimited_users.description"),
      badge: "Zero Assentos",
    },
    {
      icon: <Navigation className="w-6 h-6 text-teal" />,
      title: t("differentials.items.topological_routing.title"),
      description: t("differentials.items.topological_routing.description"),
      badge: "pgRouting Real",
    },
    {
      icon: <MapPin className="w-6 h-6 text-teal" />,
      title: t("differentials.items.geocoding.title"),
      description: t("differentials.items.geocoding.description"),
      badge: "OSM + CNEFE",
    },
    {
      icon: <Satellite className="w-6 h-6 text-teal" />,
      title: t("differentials.items.remote_sensing.title"),
      description: t("differentials.items.remote_sensing.description"),
      badge: "Sentinel-2 & NDVI",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-teal" />,
      title: t("differentials.items.whitelabel.title"),
      description: t("differentials.items.whitelabel.description"),
      badge: "Sua Marca",
    },
    {
      icon: <Layers className="w-6 h-6 text-teal" />,
      title: t("differentials.items.workspaces.title"),
      description: t("differentials.items.workspaces.description"),
      badge: "Ambientes Seguros",
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-navy font-body selection:bg-teal/20">
      
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between text-xs">
          <Link
            href="/#somap"
            className="inline-flex items-center gap-1.5 text-text-muted hover:text-teal font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar para Visão Geral SOGIS
          </Link>
          <div className="flex items-center gap-2 font-semibold text-navy/70">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            SOMAP WebGIS v2.4 (Open Source Enterprise)
          </div>
        </div>
      </div>

      {/* 1. Hero Section (A Primeira Impressão) */}
      <section className="relative w-full overflow-hidden bg-white border-b border-border pt-16 pb-20 sm:pt-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          
          {/* Logo & Category Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 text-xs font-bold tracking-widest uppercase bg-teal/10 text-teal rounded-full">
            <div className="w-5 h-5 rounded bg-navy flex items-center justify-center overflow-hidden">
              <Image
                src={getAssetPath("/images/somap-icons/somap-mark-paper.svg")}
                alt="SOMAP Logo"
                width={14}
                height={14}
                className="w-3.5 h-3.5 object-contain"
              />
            </div>
            <span>SOMAP — {t("hero.badge")}</span>
          </div>

          {/* Main Title (H1) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-navy leading-[1.1] max-w-5xl mx-auto mb-8 font-display">
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-text-muted max-w-3xl mx-auto mb-10 leading-relaxed font-body">
            {t("hero.subtitle")}
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#demonstracao"
              className="w-full sm:w-auto rounded-full bg-teal px-10 py-4 text-sm font-bold text-white shadow-lg hover:bg-teal-light transition-all flex items-center justify-center gap-2 group"
            >
              {t("hero.cta_primary")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#diferenciais"
              className="w-full sm:w-auto rounded-full bg-white border-2 border-border px-10 py-3.5 text-sm font-bold text-navy hover:bg-bg-alt transition-all text-center"
            >
              {t("hero.cta_secondary")}
            </a>
          </div>

          {/* Credibility Note */}
          <p className="text-xs sm:text-sm font-semibold text-text-muted flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
            {t("hero.credibility")}
          </p>

          {/* Hero Interface Mockup */}
          <div className="mt-16 sm:mt-20 max-w-6xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-white p-2">
              
              {/* Browser Window Chrome */}
              <div className="bg-bg-alt/70 border-b border-border/80 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-1 rounded-md text-xs font-mono text-text-muted border border-border/80">
                  <ShieldCheck className="w-3 h-3 text-teal" />
                  <span>https://somap.empresa.com.br/webgis</span>
                </div>
                <div className="text-xs font-semibold text-text-muted">
                  Workspace: Sul e Sudeste
                </div>
              </div>

              {/* Interface Screenshot */}
              <div className="relative overflow-hidden bg-neutral-900 group">
                <Image
                  src={getAssetPath("/images/somap-webgis-interface.png")}
                  alt="Interface corporativa do WebGIS SOMAP com árvore de camadas e mapa de alta precisão"
                  width={1600}
                  height={900}
                  priority
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700"
                />

                {/* Floating Quick Feature Highlights */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex flex-wrap gap-2 pointer-events-none">
                  <div className="bg-navy/90 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full border border-white/20 font-medium flex items-center gap-1.5 shadow-lg">
                    <Layers className="w-3.5 h-3.5 text-teal-light" />
                    Múltiplas Camadas: CAR, Obras, MAXAR, IBGE
                  </div>
                  <div className="bg-navy/90 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full border border-white/20 font-medium flex items-center gap-1.5 shadow-lg">
                    <Navigation className="w-3.5 h-3.5 text-teal-light" />
                    Motor de Roteirização Topológica Integrado
                  </div>
                  <div className="bg-navy/90 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full border border-white/20 font-medium flex items-center gap-1.5 shadow-lg">
                    <Satellite className="w-3.5 h-3.5 text-teal-light" />
                    Sentinel-2 & Índices NDVI em Tempo Real
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Ambient background blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal/15 blur-3xl rounded-full" />
          <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-navy/10 blur-3xl rounded-full" />
        </div>
      </section>

      {/* 2. Seção de Diferenciais (Por que escolher o SOMAP?) */}
      <section id="diferenciais" className="py-24 sm:py-32 bg-bg-alt border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-teal font-bold tracking-widest uppercase text-xs mb-3 block">
              {t("differentials.tag")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight mb-4 font-display">
              {t("differentials.title")}
            </h2>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed">
              {t("differentials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal bg-teal/10 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 font-display">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Deep-Dive Feature Spotlight: Sensoriamento Remoto & NDVI */}
      <section className="py-24 sm:py-32 bg-white border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Text & Specs */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal/10 text-teal text-xs font-bold uppercase tracking-wider">
                <Satellite className="w-3.5 h-3.5" />
                {t("deep_dive.badge")}
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight font-display">
                {t("deep_dive.title")}
              </h2>

              <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                {t("deep_dive.subtitle")}
              </p>

              {/* Key Indicators Display */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-bg-alt p-5 rounded-2xl border border-border">
                  <div className="flex items-center gap-2 text-teal mb-1">
                    <Activity className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">{t("deep_dive.stats.ndvi_avg")}</span>
                  </div>
                  <div className="text-3xl font-extrabold text-navy font-display">0.147</div>
                  <div className="text-[11px] text-text-muted mt-1 font-medium">Mín: 0.124 | Máx: 0.223</div>
                </div>

                <div className="bg-bg-alt p-5 rounded-2xl border border-border">
                  <div className="flex items-center gap-2 text-teal mb-1">
                    <Droplets className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">{t("deep_dive.stats.rain")}</span>
                  </div>
                  <div className="text-3xl font-extrabold text-navy font-display">208.3 mm</div>
                  <div className="text-[11px] text-text-muted mt-1 font-medium">Média diária: 6.94 mm/d</div>
                </div>

                <div className="bg-bg-alt p-5 rounded-2xl border border-border">
                  <div className="flex items-center gap-2 text-teal mb-1">
                    <ThermometerSun className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">{t("deep_dive.stats.temp")}</span>
                  </div>
                  <div className="text-3xl font-extrabold text-navy font-display">24.2 °C</div>
                  <div className="text-[11px] text-text-muted mt-1 font-medium">Variação: 13.2 a 36.3 °C</div>
                </div>

                <div className="bg-bg-alt p-5 rounded-2xl border border-border">
                  <div className="flex items-center gap-2 text-teal mb-1">
                    <Sliders className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">Opacidade NDVI</span>
                  </div>
                  <div className="text-3xl font-extrabold text-teal font-display">80%</div>
                  <div className="text-[11px] text-text-muted mt-1 font-medium">Camada dinâmica ativa</div>
                </div>
              </div>

              {/* Bullet Features */}
              <ul className="space-y-3 pt-2">
                {[
                  "Delimitação vetorial de polígonos de análise e talhões com 1 clique",
                  "Processamento de índices espectrais Sentinel-2 sem necessidade de GIS desktop",
                  "Correlação instantânea com estatísticas meteorológicas e satélite RGB",
                  "Exportação de dados vetoriais para CAR, relatórios e auditorias",
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                    <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Screenshot Mockup */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Visual card wrapper */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-white p-2">
                  <div className="bg-bg-alt/70 border-b border-border/80 px-4 py-2.5 flex items-center justify-between text-xs font-semibold text-navy">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal" />
                      Análise NDVI-Clima — Delimitação de Talhão
                    </span>
                    <span className="text-text-muted font-mono text-[11px]">Satélite: Sentinel-2</span>
                  </div>
                  <div className="overflow-hidden rounded-2xl bg-neutral-900">
                    <Image
                      src={getAssetPath("/images/somap-ndvi-clima.jpg")}
                      alt="Modal de Análise NDVI e Clima do SOMAP com área delimitada e estatísticas vegetativas"
                      width={1000}
                      height={900}
                      className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-teal text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  100% no Navegador
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. As Três Edições (O Modelo de Negócios) */}
      <section id="edicoes" className="py-24 sm:py-32 bg-bg-alt border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-teal font-bold tracking-widest uppercase text-xs mb-3 block">
              {t("editions.tag")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight mb-4 font-display">
              {t("editions.title")}
            </h2>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed">
              {t("editions.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* 1. Cloud Edition */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-6">
                  <Cloud className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-teal mb-1">
                  {t("editions.cloud.subtitle")}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2 font-display">
                  {t("editions.cloud.title")}
                </h3>
                <p className="text-sm font-semibold text-text-muted mb-4">
                  {t("editions.cloud.tagline")}
                </p>
                <p className="text-sm text-text-muted leading-relaxed mb-8">
                  {t("editions.cloud.description")}
                </p>

                <div className="space-y-3 mb-10 pt-6 border-t border-border">
                  {[
                    "Interface WebGIS SOMAP hospedada e sempre atualizada",
                    "Conexão segura via túnel a PostGIS e GeoServer do cliente",
                    "Workspaces ilimitados para equipes internas",
                    "Suporte a camadas XYZ, WMS, WFS e GeoJSON",
                    "Zero taxa por usuário ou por assento",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-navy/80">
                      <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <EditionCtaButton
                editionKey="cloud"
                label={t("editions.cloud.cta")}
              />
            </div>

            {/* 2. Managed Edition (Featured) */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-teal shadow-xl flex flex-col justify-between relative hover:shadow-2xl transition-all scale-100 lg:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                {t("editions.managed.badge")}
              </div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal text-white flex items-center justify-center mb-6 shadow-md">
                  <Server className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-teal mb-1">
                  {t("editions.managed.subtitle")}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2 font-display">
                  {t("editions.managed.title")}
                </h3>
                <p className="text-sm font-semibold text-text-muted mb-4">
                  {t("editions.managed.tagline")}
                </p>
                <p className="text-sm text-text-muted leading-relaxed mb-8">
                  {t("editions.managed.description")}
                </p>

                <div className="space-y-3 mb-10 pt-6 border-t border-border">
                  {[
                    "Stack geoespacial completa gerenciada na nuvem",
                    "Instâncias dedicadas de PostGIS + GeoServer + pgRouting",
                    "Monitoramento 24/7, backups automáticos e alta disponibilidade",
                    "Módulo de Sensoriamento Remoto e NDVI habilitado",
                    "Suporte técnico prioritário e manutenções inclusas",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-navy font-medium">
                      <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <EditionCtaButton
                editionKey="managed"
                label={t("editions.managed.cta")}
                isPopular
              />
            </div>

            {/* 3. Enterprise Edition */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-card flex flex-col justify-between hover:shadow-card-hover transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-navy/10 flex items-center justify-center text-navy mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-navy mb-1">
                  {t("editions.enterprise.subtitle")}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2 font-display">
                  {t("editions.enterprise.title")}
                </h3>
                <p className="text-sm font-semibold text-text-muted mb-4">
                  {t("editions.enterprise.tagline")}
                </p>
                <p className="text-sm text-text-muted leading-relaxed mb-8">
                  {t("editions.enterprise.description")}
                </p>

                <div className="space-y-3 mb-10 pt-6 border-t border-border">
                  {[
                    "Implantação On-Premise ou Kubernetes na infraestrutura do cliente",
                    "Controle topológico total e customização de código-fonte",
                    "Integração direta com ERP, WMS e barramentos corporativos",
                    "SLA de atendimento de nível sênior dedicado",
                    "White-label total e soberania irrestrita de dados",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-navy/80">
                      <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <EditionCtaButton
                editionKey="enterprise"
                label={t("editions.enterprise.cta")}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 5. Seção de Casos de Uso (Setores Atendidos) */}
      <section className="py-24 sm:py-32 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-teal font-bold tracking-widest uppercase text-xs mb-3 block">
              {t("use_cases.tag")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight mb-4 font-display">
              {t("use_cases.title")}
            </h2>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed">
              {t("use_cases.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Logística */}
            <div className="bg-bg-alt p-8 sm:p-10 rounded-3xl border border-border flex flex-col justify-between hover:shadow-card transition-all">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-6">
                  <Truck className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 font-display">
                  {t("use_cases.logistics.title")}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6 font-body">
                  {t("use_cases.logistics.description")}
                </p>
              </div>
              <div className="pt-4 border-t border-border/80 text-xs font-bold text-teal flex items-center gap-1.5">
                <Check className="w-4 h-4" /> Despacho de frota & Roteamento multi-paradas
              </div>
            </div>

            {/* Agronegócio */}
            <div className="bg-bg-alt p-8 sm:p-10 rounded-3xl border border-border flex flex-col justify-between hover:shadow-card transition-all">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-6">
                  <Sprout className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 font-display">
                  {t("use_cases.agribusiness.title")}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6 font-body">
                  {t("use_cases.agribusiness.description")}
                </p>
              </div>
              <div className="pt-4 border-t border-border/80 text-xs font-bold text-teal flex items-center gap-1.5">
                <Check className="w-4 h-4" /> Monitoramento NDVI & Limites do CAR
              </div>
            </div>

            {/* Cidades Inteligentes */}
            <div className="bg-bg-alt p-8 sm:p-10 rounded-3xl border border-border flex flex-col justify-between hover:shadow-card transition-all">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-6">
                  <Landmark className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 font-display">
                  {t("use_cases.public_sector.title")}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6 font-body">
                  {t("use_cases.public_sector.description")}
                </p>
              </div>
              <div className="pt-4 border-t border-border/80 text-xs font-bold text-teal flex items-center gap-1.5">
                <Check className="w-4 h-4" /> Cadastro CNEFE & Gestão de Infraestrutura
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Stack & Backend Robustness Section */}
      <section className="py-20 bg-bg-alt border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-teal font-bold tracking-widest uppercase text-xs mb-2 block">
              Tecnologia como Motor de Liberdade
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-navy font-display">
              Construído 100% sobre Padrões Abertos e Alta Performance
            </h3>
            <p className="text-sm text-text-muted mt-2">
              Sem licenças por assento. Sem APIs de terceiros que cobram por requisição. Total governança sobre os seus dados.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              { label: "PostgreSQL & PostGIS", sub: "Banco Espacial Topológico" },
              { label: "pgRouting", sub: "Grafos & Algoritmos Viários" },
              { label: "GeoServer", sub: "Serviços WMS, WFS e Tiles" },
              { label: "FastAPI (Python)", sub: "Microsserviços de Alta Velocidade" },
              { label: "OpenLayers 10 & Vue 3", sub: "Interface Reativa no Navegador" },
              { label: "Docker & Cloudflare", sub: "Infraestrutura Segura e Resiliente" },
            ].map((tech, i) => (
              <div
                key={i}
                className="bg-white px-6 py-4 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center min-w-[200px]"
              >
                <span className="font-bold text-navy text-sm font-display">{tech.label}</span>
                <span className="text-[11px] text-text-muted mt-0.5">{tech.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Formulário de Conversão (Agendar Demonstração) */}
      <section id="demonstracao" className="py-24 sm:py-32 bg-navy text-white relative overflow-hidden">
        {/* Glow decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/10 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Col: Consultation & Value */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-teal-light font-bold tracking-widest uppercase text-xs block">
                Agendamento Direto
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
                Veja o SOMAP em ação com a sua realidade
              </h2>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed font-body">
                Nossa demonstração técnica é focada nos desafios concretos da sua empresa. Sem apresentações genéricas de slides: analisamos sua malha de dados e estruturamos um ambiente sob medida.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal-light shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Demonstração Interativa de 30 Minutos</h4>
                    <p className="text-xs text-white/60 mt-0.5">Exploração prática de camadas, roteirização e painéis analíticos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal-light shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Auditoria de Custos de APIs Comerciais</h4>
                    <p className="text-xs text-white/60 mt-0.5">Simulação comparativa de economia financeira ao migrar para infraestrutura própria.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal-light shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Orientação da Melhor Edição</h4>
                    <p className="text-xs text-white/60 mt-0.5">Definição entre Cloud, Managed ou Enterprise conforme sua equipe técnica.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Form */}
            <div className="lg:col-span-7">
              <SomapDemoForm />
            </div>

          </div>
        </div>
      </section>

      {/* 8. Rodapé Dedicado do SOMAP */}
      <div className="bg-white border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Logo and Message */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center overflow-hidden">
                  <Image
                    src={getAssetPath("/images/somap-icons/somap-mark-paper.svg")}
                    alt="SOMAP Logo"
                    width={18}
                    height={18}
                    className="w-4 h-4 object-contain"
                  />
                </div>
                <span className="font-bold text-navy text-lg font-display">SOMAP</span>
              </div>
              <span className="hidden sm:inline text-border text-lg">|</span>
              <span className="text-xs text-text-muted font-medium">
                {t("footer_sub.badge")}
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-text-muted font-medium">
              <Link href="/#sobre" className="hover:text-teal transition-colors">
                {t("footer_sub.consulting")}
              </Link>
              <Link href="/#contato" className="hover:text-teal transition-colors">
                {t("footer_sub.support")}
              </Link>
              <a
                href="https://github.com/silasnascimento"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal transition-colors"
              >
                {t("footer_sub.docs")}
              </a>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-border/60 text-center text-xs text-text-muted">
            {t("footer_sub.rights")}
          </div>
        </div>
      </div>

    </div>
  );
}
