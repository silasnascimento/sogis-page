import {
  MapIcon,
  CodeIcon,
  ServerIcon,
  CloudIcon,
  BookOpenIcon,
  UsersIcon,
  DatabaseIcon,
  TerminalIcon,
  GlobeIcon,
  ExternalLinkIcon,
  MailIcon,
  ArrowRightIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans selection:bg-blue-200 dark:selection:bg-blue-900">
      
      {/* 1. Header / Hero Section */}
      <section className="relative w-full overflow-hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6 text-neutral-900 dark:text-white">
            Bem-vindo à <span className="text-blue-600 dark:text-blue-400">Silas Oliveira Geospatial</span>
          </h1>
          <p className="mt-6 text-lg tracking-tight leading-8 text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Sou Silas Oliveira, desenvolvedor GIS especialista em open source. Ofereço consultoria, 
            desenvolvimento de aplicações customizadas, suporte técnico e hospedagem em nuvem para 
            projetos geográficos ao redor do mundo.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#servicos"
              className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
            >
              Conheça Meus Serviços
            </a>
            <a href="#contato" className="text-sm font-semibold leading-6 text-neutral-900 dark:text-neutral-100 flex items-center gap-2 group">
              Agendar Consulta <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Seção: Especialista em Open Source GIS */}
      <section className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Especialista em Open Source GIS</h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              Meu foco principal é ajudar empresas e organizações a migrarem para soluções open source GIS de 
              forma segura e eficiente. Trabalho com as melhores tecnologias open source e adoro resolver problemas 
              reais com elas.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-start p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-shadow">
                <div className="rounded-lg bg-blue-50 dark:bg-blue-900/30 p-3 mb-4 inline-flex">
                  <DatabaseIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7">Bancos de Dados</dt>
                <dd className="mt-2 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>PostgreSQL & PostGIS</li>
                    <li>MySQL, SQLite</li>
                    <li>GeoPackage</li>
                  </ul>
                </dd>
              </div>
              <div className="flex flex-col items-start p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-shadow">
                <div className="rounded-lg bg-blue-50 dark:bg-blue-900/30 p-3 mb-4 inline-flex">
                  <TerminalIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7">Desktop & Servidores GIS</dt>
                <dd className="mt-2 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>QGIS, GDAL, GRASS</li>
                    <li>SAGA GIS</li>
                    <li>GeoServer, MapServer</li>
                  </ul>
                </dd>
              </div>
              <div className="flex flex-col items-start p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-shadow">
                <div className="rounded-lg bg-blue-50 dark:bg-blue-900/30 p-3 mb-4 inline-flex">
                  <GlobeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7">Desenvolvimento Web</dt>
                <dd className="mt-2 text-base leading-7 text-neutral-600 dark:text-neutral-400">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Python (GeoDjango, FastAPI)</li>
                    <li>React, Vue.js, Angular</li>
                    <li>Leaflet, OpenLayers</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-16 text-center">
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
            >
              Saiba Mais sobre minha consultoria <ExternalLinkIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. Seção principal: Meus Serviços e Produtos */}
      <section id="servicos" className="py-24 sm:py-32 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">O que eu ofereço</h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              Soluções sob medida para otimizar, construir e escalar sua infraestrutura geoespacial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="flex flex-col bg-neutral-50 dark:bg-neutral-950 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:-translate-y-1 transition-transform duration-300">
              <MapIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-3">Consultoria GIS</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow">
                Ajudo a implementar e otimizar fluxos open source com QGIS, PostGIS, GeoServer e mais. Migrações do ArcGIS/ESRI são minha especialidade.
              </p>
              <a href="#contato" className="text-sm font-semibold text-blue-600 dark:text-blue-400">Saiba Mais &rarr;</a>
            </div>
            
            {/* Service 2 */}
            <div className="flex flex-col bg-neutral-50 dark:bg-neutral-950 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:-translate-y-1 transition-transform duration-300">
              <CodeIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-3">Desenvolvimento de Software</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow">
                Crio aplicações webGIS customizadas e ferramentas data-driven sob medida para o seu negócio usando tecnologias web modernas.
              </p>
              <a href="#contato" className="text-sm font-semibold text-blue-600 dark:text-blue-400">Saiba Mais &rarr;</a>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col bg-neutral-50 dark:bg-neutral-950 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:-translate-y-1 transition-transform duration-300">
              <ServerIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-3">GeoServer Gerenciado</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow">
                Servidor GIS como serviço — PostgreSQL + PostGIS + GeoServer rodando na nuvem, com manutenção completa por mim.
              </p>
              <a href="#contato" className="text-sm font-semibold text-blue-600 dark:text-blue-400">Saiba Mais &rarr;</a>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col bg-neutral-50 dark:bg-neutral-950 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:-translate-y-1 transition-transform duration-300">
              <GlobeIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-3">GeoMap</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow">
                Plataforma webGIS enterprise para compartilhar e visualizar dados geoespaciais e mapas interativos de forma intuitiva.
              </p>
              <a href="#contato" className="text-sm font-semibold text-blue-600 dark:text-blue-400">Saiba Mais &rarr;</a>
            </div>

            {/* Service 5 */}
            <div className="flex flex-col bg-neutral-50 dark:bg-neutral-950 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:-translate-y-1 transition-transform duration-300">
              <CloudIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-3">Hospedagem GeoServer / PostGIS</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow">
                Instâncias dedicadas e seguras de servidores GIS, configuradas meticulosamente e monitoradas ativamente por mim.
              </p>
              <a href="#contato" className="text-sm font-semibold text-blue-600 dark:text-blue-400">Saiba Mais &rarr;</a>
            </div>

            {/* Service 6 */}
            <div className="flex flex-col bg-neutral-50 dark:bg-neutral-950 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <BookOpenIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <UsersIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Treinamentos e Workshops</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6 flex-grow">
                Ministro treinamentos virtuais/presenciais sobre QGIS, PostGIS e automação GIS, além de sessões privadas para equipes em migração.
              </p>
              <a href="#contato" className="text-sm font-semibold text-blue-600 dark:text-blue-400">Saiba Mais &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Seção: Suporte Open Source GIS */}
      <section className="relative isolate overflow-hidden bg-blue-600 dark:bg-blue-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-3xl text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Suporte Open Source GIS</h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Ofereço pacotes de suporte pré-pago ou dedicado para PostgreSQL, PostGIS, GeoServer, QGIS, pgAdmin e outras ferramentas open source. Resolvo seus problemas técnicos rapidamente com garantia de qualidade.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contato"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all shadow-lg"
              >
                Ver Pacotes de Suporte
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Seção Final / CTA Principal */}
      <section id="contato" className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Como posso ajudar você?</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            Entre em contato para agendar uma consulta gratuita de 30 minutos. Vamos conversar sobre seu projeto GIS e como eu posso te ajudar a economizar tempo e dinheiro com open source.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:soliveira796@gmail.com"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-neutral-900 dark:bg-white px-8 py-4 text-sm font-semibold text-white dark:text-neutral-900 shadow-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all w-full sm:w-auto"
            >
              <MailIcon className="h-5 w-5" />
              Agendar Consulta Gratuita
            </a>
            <a
              href="mailto:soliveira796@gmail.com"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 px-8 py-3.5 text-sm font-semibold text-neutral-900 dark:text-white shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all w-full sm:w-auto"
            >
              Envie um e-mail: soliveira796@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer simples */}
      <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} Silas Oliveira Geospatial. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
