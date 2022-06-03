import React, { useState ,useEffect } from 'react'
import axios from 'axios';
import Book from './Book';
import "./Book.css";
const URL="http://localhost:5000/books";

const fetchHandler =async()=> 
{
    return await axios.get(URL).then((res)=>res.data) 

}
export const Books = () => {    
        const[books,setBooks] =useState();
        const[fetched, setFetched]=useState(false);
    useEffect(() => {
     
        fetchHandler().then(data=>{setBooks(data.books);setFetched(true)});    

    },[]);
    console.log(books);
    return (
    <div>
        <ul>
            {fetched ?(<>{books.length===0 ? <h1>No books</h1>:books.map((book,i)=>(
                <li className='book' key={i}>
                    <Book book={book}/>
                </li>
            ))}</>):<h1>Loading</h1>}
            
        </ul>
    </div>
  )
}
