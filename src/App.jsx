import React from "react";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./Layout/PageLayout";
import Profilepage from "./Profilepages/ProfilePage";




function App() {
  return (
   <PageLayout>
   <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/auth' element={<Auth/>}/>
    <Route  path='/username' element={<Profilepage/>}/>

   </Routes>
   </PageLayout>
    
  );
}

export default App;
