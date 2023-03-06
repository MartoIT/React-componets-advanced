import {useState, useEffect} from 'react';

import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Search from "./componets/Search";
import UserList from "./componets/UserList";
import AddUser from './services/addUser';
import getAll from './services/usersServices';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    getAll()
    .then(res => setUsers(res.users))
  }, [])

  

  return (
    <>
      <Header />

      <main className="main">

      <section className="card users-container">
        <Search />

        <UserList users={users} />

        <button className="btn-add btn" onClick={() => <AddUser/>}>Add new user</button>

      </section>
  
      </main>

      <Footer />
    </>
  );
}

export default App;
