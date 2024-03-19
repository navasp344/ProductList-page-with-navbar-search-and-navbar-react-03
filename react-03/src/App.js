import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import ProductList from './Component/ProductList';

function App() {
  const[searchtext,setSearchtext]=useState('');
  const Onsearch=(t)=>{
   setSearchtext(t);
  }
  return (
    <div >
    <Header onSearching={Onsearch}/>
    <ProductList searching={searchtext}/>
    </div>
    
   
  );
}

export default App;
