function App() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  return (
    <>
      <Header />
      <PageHero />
      <Matrix />
      <KapitelList />
      <BergbahnStripe />
      <CTABuchen />
      <Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
