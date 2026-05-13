// Leos Alpenchalet — Wohnungsübersicht components
const D = window.LEOS_DATA;
const TRAMINO = "https://leos-alpenchalet.tramino.de/api/widgets/booking/";

function useLucide(deps) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, deps || []);
}

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="index.html" className="logo">
          <img src="assets/logo-leos-alpenchalet.png" alt="Leos Alpenchalet" />
          <span className="logo-name">Leos Alpenchalet</span>
        </a>
        <nav className="nav">
          <a href="wohnungen.html" className="active">Wohnen</a>
          <a href="index.html#tipps">Aktivitäten</a>
          <a href="index.html#lage">Kontakt</a>
          <a href={TRAMINO} target="_blank" rel="noopener" className="nav-btn">Buchen</a>
        </nav>
      </div>
    </header>
  );
}

function PageHero() {
  const h = D.hero;
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb">
          <a href="index.html">Startseite</a>
          <span className="sep">/</span>
          <span>Wohnungen</span>
        </div>
        <div className="eyebrow">{h.eyebrow}</div>
        <h1 className="h1">{h.h1Pre}<em>{h.h1Italic}</em>{h.h1Post}</h1>
        <p className="lede">{h.lede}</p>
        <div className="rule" aria-hidden="true"></div>
      </div>
    </section>
  );
}

function Matrix() {
  const m = D.matrix;
  const [pers, setPers] = React.useState("alle");
  const [floor, setFloor] = React.useState("alle");

  const matchPers = (w) => pers === "alle" || (pers === "2" && w.personen.max >= 2) || (pers === "3" && w.personen.max >= 3) || (pers === "4" && w.personen.max >= 4);
  const matchFloor = (w) => floor === "alle" || (floor === "EG" && w.geschoss === "EG") || (floor === "1OG" && w.geschoss === "1. OG") || (floor === "DG" && w.geschoss === "DG");

  return (
    <section className="sec sec-altpapier" id="wohnungen">
      <div className="container">
        <div className="matrix-head">
          <div className="copy">
            <div className="eyebrow">{m.eyebrow}</div>
            <h2 className="h2" style={{marginTop: '0.7rem'}}>{m.h2Pre}<em>{m.h2Italic}</em>{m.h2Post}</h2>
            <p>{m.intro}</p>
          </div>
          <div className="filters" role="group" aria-label="Filter">
            <span className="filter-label">Personen</span>
            <button className={"chip" + (pers === "alle" ? " on" : "")} onClick={() => setPers("alle")}>Alle</button>
            <button className={"chip" + (pers === "2" ? " on" : "")} onClick={() => setPers("2")}>2+</button>
            <button className={"chip" + (pers === "3" ? " on" : "")} onClick={() => setPers("3")}>3+</button>
            <button className={"chip" + (pers === "4" ? " on" : "")} onClick={() => setPers("4")}>4</button>
            <span className="filter-label" style={{marginLeft: '0.8rem'}}>Geschoss</span>
            <button className={"chip" + (floor === "alle" ? " on" : "")} onClick={() => setFloor("alle")}>Alle</button>
            <button className={"chip" + (floor === "EG" ? " on" : "")} onClick={() => setFloor("EG")}>EG</button>
            <button className={"chip" + (floor === "1OG" ? " on" : "")} onClick={() => setFloor("1OG")}>1. OG</button>
            <button className={"chip" + (floor === "DG" ? " on" : "")} onClick={() => setFloor("DG")}>DG</button>
          </div>
        </div>

        <div className="matrix-wrap">
          <table className="matrix">
            <thead>
              <tr>
                <th>Wohnung</th>
                <th>Fläche</th>
                <th>Geschoss</th>
                <th>Aussicht</th>
                <th className="col-pers">Personen</th>
                <th className="col-character">Charakter</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {D.wohnungen.map(w => {
                const dim = !(matchPers(w) && matchFloor(w));
                return (
                  <tr key={w.id} className={dim ? "dim" : ""}>
                    <td><a href={"#" + w.id} className="name">{w.name}</a></td>
                    <td className="num">{w.flaeche} m²</td>
                    <td className="num">{w.geschoss}</td>
                    <td><span className="dot">{w.ausrichtung}</span></td>
                    <td className="num col-pers">{w.personen.min}–{w.personen.max} Personen</td>
                    <td className="character col-character">{w.character}</td>
                    <td><a href={"#" + w.id} className="anchor">Ansehen →</a></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <Shared />
      </div>
    </section>
  );
}

function Shared() {
  const s = D.shared;
  useLucide([s]);
  return (
    <div className="shared">
      <div className="shared-head">
        <div>
          <div className="eyebrow">{s.eyebrow}</div>
          <h3 className="h3" style={{marginTop: '0.6rem'}}>{s.h3Pre}<em>{s.h3Italic}</em>{s.h3Post}</h3>
        </div>
        <span className="caveat">{s.note}</span>
      </div>
      <div className="shared-grid">
        {s.items.map((it, i) => (
          <div className="shared-item" key={i}>
            <i data-lucide={it.icon} className="icon"></i>
            <span>{it.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Kapitel({ w, reverse, index }) {
  useLucide([w.id]);
  const images = w.images || [w.img];
  const [slide, setSlide] = React.useState(0);
  const total = images.length;
  const prev = () => setSlide((slide - 1 + total) % total);
  const next = () => setSlide((slide + 1) % total);
  return (
    <article className={"kapitel" + (reverse ? " reverse" : "")} id={w.id} data-screen-label={`Wohnung ${w.no} ${w.name}`}>
      <div className="container kapitel-grid">
        <div className="kapitel-img">
          <div className="kapitel-img-wrap">
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Wohnung ${w.name} — Bild ${i+1}`}
                className={"kapitel-slide" + (i === slide ? " on" : "")}
              />
            ))}
            <div className="kapitel-img-num">Wohnung <em>{w.no}</em></div>
            {total > 1 && (
              <React.Fragment>
                <button className="slider-btn prev" onClick={prev} aria-label="Vorheriges Bild">
                  <i data-lucide="chevron-left" className="icon"></i>
                </button>
                <button className="slider-btn next" onClick={next} aria-label="Nächstes Bild">
                  <i data-lucide="chevron-right" className="icon"></i>
                </button>
                <div className="slider-dots" role="tablist" aria-label="Bildauswahl">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      className={"slider-dot" + (i === slide ? " on" : "")}
                      onClick={() => setSlide(i)}
                      aria-label={`Bild ${i+1}`}
                      role="tab"
                      aria-selected={i === slide}
                    ></button>
                  ))}
                </div>
                <div className="slider-count">{slide + 1} / {total}</div>
              </React.Fragment>
            )}
          </div>
        </div>
        <div className="kapitel-text">
          <div className="eyebrow">Wohnung {w.no} — {w.name}</div>
          <h2 className="kapitel-name">{w.name}<span className="dot">.</span></h2>
          <p className="kapitel-tag">{w.tag}</p>

          <div className="kapitel-meta">
            <span className="meta-item"><i data-lucide="ruler" className="icon"></i>{w.flaeche} m²</span>
            <span className="meta-item"><i data-lucide="layers" className="icon"></i>{w.geschoss}</span>
            <span className="meta-item"><i data-lucide="compass" className="icon"></i>{w.ausrichtung}</span>
            <span className="meta-item"><i data-lucide="users" className="icon"></i>{w.personen.min}–{w.personen.max} Pers.</span>
            <span className="meta-item price"><i data-lucide="moon" className="icon"></i>ab {w.preis} €/Nacht</span>
          </div>

          <p className="kapitel-body">{w.body}</p>
          <div className="kapitel-bergstory">{w.bergstory}</div>

          <div className="kapitel-actions">
            <a href={`wohnung-${w.id}.html`} className="btn-primary">Wohnung ansehen →</a>
            <a href={TRAMINO} target="_blank" rel="noopener" className="btn-link">Verfügbarkeit prüfen</a>
          </div>
        </div>
      </div>
    </article>
  );
}

function KapitelList() {
  return (
    <section className="sec-altpapier kapitel-list">
      {D.wohnungen.map((w, i) => (
        <Kapitel key={w.id} w={w} reverse={i % 2 === 1} index={i} />
      ))}
    </section>
  );
}

function BergbahnStripe() {
  const b = D.bergbahn;
  return (
    <section className="sec-wiese">
      <div className="container bergbahn-inner">
        <span className="bergbahn-cv">{b.caveat}</span>
        <h3 className="bergbahn-h3">{b.h3}</h3>
        <p className="bergbahn-sub">{b.text}</p>
      </div>
    </section>
  );
}

function CTABuchen() {
  const c = D.cta;
  return (
    <section className="sec-cta" id="kontakt">
      <div className="container cta-inner">
        <div>
          <h3 className="cta-h">{c.h3Pre}<em>{c.h3Italic}</em>{c.h3Post}</h3>
          <p className="cta-sub">{c.sub}</p>
        </div>
        <a href={c.href} target="_blank" rel="noopener" className="cta-btn">{c.button}</a>
      </div>
    </section>
  );
}

function Footer() {
  const a = D.brand.address;
  return (
    <footer className="sec-laerche footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4 className="footer-brand-name">Leos Alpenchalet</h4>
            <p className="footer-text">
              {a.street}<br />
              {a.city}<br />
              {a.region}
            </p>
          </div>
          <div>
            <h5>Wohnungen</h5>
            <ul>
              {D.wohnungen.map(w => <li key={w.id}><a href={"#" + w.id}>{w.name}</a></li>)}
            </ul>
          </div>
          <div>
            <h5>Service</h5>
            <ul>
              <li><a href="#wohnungen">Vergleich</a></li>
              <li><a href="index.html#bergbahn">Bergbahn-Ticket</a></li>
              <li><a href="index.html#lage">Lage & Region</a></li>
              <li><a href="index.html#faq">Häufige Fragen</a></li>
            </ul>
          </div>
          <div>
            <h5>Rechtliches</h5>
            <ul>
              <li><a href="#impressum">Impressum</a></li>
              <li><a href="#datenschutz">Datenschutzerklärung</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-credits">— Bilder · Nicole Pinn</span>
          <span className="footer-copy">© 2026 Leos Alpenchalet</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, PageHero, Matrix, Shared, Kapitel, KapitelList, BergbahnStripe, CTABuchen, Footer });
