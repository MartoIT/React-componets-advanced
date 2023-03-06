import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Search from "./componets/Search";
import UserList from "./componets/UserList";

function App() {
  return (
    <>
      <Header />

      <main className="main">

      <section className="card users-container">
        <Search />

        <UserList />

        <button className="btn-add btn">Add new user</button>

      </section>
  
      </main>

      <Footer />
    </>
  );
}

export default App;
