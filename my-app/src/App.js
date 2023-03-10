import {useState, useEffect} from 'react';

import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Search from "./componets/Search";

import UserList from "./componets/UserList";
import services from './services/usersServices';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    services.getAll()
    .then(res => setUsers(res.users))
  }, [])
 
  const onSubmitCreateNewUser = async (e) =>{
    e.preventDefault();
    console.log('Tuk');

  };
  const onClickShowEdit = async (e) =>{
    e.preventDefault();
    console.log('Tuk Edit');

  };
  return (
    <>
      <Header />

      <main className="main">

      <section className="card users-container">
        <Search />

        <UserList users={users} onSubmitCreateNewUser={onSubmitCreateNewUser} onClickShowEdit={onClickShowEdit}/>

        

      </section>
  
      </main>

      <Footer />
    </>
  );
}

export default App;
