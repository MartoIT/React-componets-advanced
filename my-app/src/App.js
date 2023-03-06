import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Search from "./componets/Search";

function App() {
  return (
    <>
      <Header />

      <main className="main">

      <section className="card users-container">
        <Search />

      </section>
  
      </main>

      <Footer />
    </>
  );
}

export default App;
