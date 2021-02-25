import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Category from './components/Category';
import Shipping from './components/Shipping';
import { createContext, useState } from 'react';
export const categoryContext = createContext();

function App() {
  const [category, setcategory] = useState("laptop");
  return (
    <categoryContext.Provider value = {[category, setcategory]}>
     <Header></Header>
     <Category></Category>
    </categoryContext.Provider>
  );
}

export default App;
