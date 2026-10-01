import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo" aria-label="Impor Kargu">
            <span>Impor</span> Kargu
          </Link>

          <nav className="nav">
            <Link href="/como-funciona">Como funciona</Link>
            <Link href="/sobre">Sobre nós</Link>
            <Link href="/contactos">Contactos</Link>
            <Link href="/login" className="nav-button">
              Entrar
            </Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-cover">
            <img
              src="/impor-kargu-capa.png"
              alt="Impor Kargu - Da China para Moçambique, sem complicação"
              className="hero-cover-image"
            />
          </div>

          <div className="hero-grid hero-content-section">
            <div className="hero-content">
              <div className="eyebrow">IMPORTAÇÃO PARA MOÇAMBIQUE</div>

              <h1>
                Da China para Moçambique,
                <span> sem complicação.</span>
              </h1>

              <p className="hero-text">
                Encontra o produto que procuras, envia-nos o link e recebe uma
                cotação. Tratamos do processo de compra e importação até o teu
                produto estar disponível em Moçambique.
              </p>

              <div className="hero-actions">
                <Link href="/registar" className="primary-button">
                  Começar agora
                </Link>
                <Link href="/como-funciona" className="secondary-button">
                  Como funciona
                </Link>
              </div>

              <p className="trust-text">
                Processo simples, acompanhamento da encomenda e pontos de
                levantamento em Moçambique.
              </p>
            </div>

            <div className="hero-panel" aria-label="Processo da Impor Kargu">
              <div className="panel-label">COMO FUNCIONA</div>

              <div className="process-step">
                <div className="step-number">01</div>
                <div>
                  <h2>Envia o link</h2>
                  <p>Partilha o link do produto que queres importar.</p>
                </div>
              </div>

              <div className="process-line" />

              <div className="process-step">
                <div className="step-number">02</div>
                <div>
                  <h2>Recebe a cotação</h2>
                  <p>Calculamos os custos e apresentamos o valor total.</p>
                </div>
              </div>

              <div className="process-line" />

              <div className="process-step">
                <div className="step-number">03</div>
                <div>
                  <h2>Recebe em Moçambique</h2>
                  <p>Acompanhamos o processo até ao levantamento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">UMA NOVA FORMA DE IMPORTAR</p>
            <h2>Mais simples. Mais claro. Mais organizado.</h2>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-number">01</div>
              <h3>Cotação transparente</h3>
              <p>
                Recebes uma discriminação dos principais custos antes de
                confirmar a encomenda.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-number">02</div>
              <h3>Acompanhamento</h3>
              <p>
                Consulta o estado da tua encomenda durante as diferentes fases
                do processo.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-number">03</div>
              <h3>Levantamento</h3>
              <p>
                Quando a encomenda chegar a Moçambique, recebes a indicação de
                que está pronta para levantamento.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <p className="eyebrow">PRONTO PARA COMEÇAR?</p>
            <h2>Envia o teu primeiro produto.</h2>
            <p>
              Cria a tua conta e envia o link do produto que pretendes importar.
            </p>
          </div>
          <Link href="/registar" className="primary-button">
            Criar conta
          </Link>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="logo footer-logo">
              <span>Impor</span> Kargu
            </div>
            <p>Da China para Moçambique, sem complicação.</p>
          </div>
          <p>© {new Date().getFullYear()} Impor Kargu.</p>
        </div>
      </footer>
    </main>
  );
}
