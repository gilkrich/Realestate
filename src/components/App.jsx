import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './Homepage';
import Products from './Products';
import Productcard from './Productcard';
import data from './data.json';
import Notfound from './Notfound';
import Favorites from './Favorites';
import Agents from './agents';
import Userpage from './Userpage';
import Loginpage from './Loginpage';
import Signuppage from './Signuppage';
import Aboutus from './Aboutus';

function App() {
  const [maindata, setdata] = useState([])
  const [fakevalue,setfake] =useState([])
  useEffect(() => {
    setdata(data.results)
    setfake(data.results)
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Homepage />} value={maindata} setvalue={setdata} fakevalue={fakevalue}></Route>
          <Route path='Products' element={<Products value={maindata} setvalue={setdata} fakevalue={fakevalue}/>}></Route>
          <Route path='products/:id' element={< Productcard value={maindata}/>}></Route>
          <Route path='*' element={< Notfound />}></Route>
          <Route path='favorits' element={<Favorites value={maindata} setvalue={setdata} />}></Route>
          <Route path='agents' element={<Agents/>}></Route>
          <Route path='Aboutus' element={<Aboutus/>}></Route>
          <Route path='user' element={<Userpage />}>
            <Route path='' element={<Loginpage />}></Route>
            <Route path='Signup' element={<Signuppage/>}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
