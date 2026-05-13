function App() {
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <HeaderScrollAware />
      <Hero />
      <Trust />
      <Intro />
      <WohnungenGrid />
      <BergbahnStripe />
      <Reviews />
      <Familie />
      <CTABuchen />
      <Tipps />
      <Lage />
      <FAQ />
      <Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
