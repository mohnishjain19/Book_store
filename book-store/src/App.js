import React from "react";
import { Header } from "./Components/Header";
import { Routes, Route } from 'react-router-dom';
import { Home } from "./Components/Home";
import { AddBook } from "./Components/AddBook";
import {Books} from "./Components/Book/Books";
import { About } from "./Components/About";
import BookDetails from "./Components/Book/BookDetails"
function App() {
  return (
   <React.Fragment>
     <header>
      <Header/>
     </header>
     <main>
       <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/add" element={<AddBook/>} exact/>
          <Route path="/books" element={<Books/>} exact/>
          <Route path="/about" element={<About/>} exact />
          <Route path="/books/:id" element={<BookDetails/> } exact/>
       </Routes>
     </main>

   </React.Fragment>
  ); 
}

export default App;
