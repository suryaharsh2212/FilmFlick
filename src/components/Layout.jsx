import React, { useCallback, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import Showmovies from './Showmovies';
// import { info } from 'autoprefixer'; 
// import givedata from './api'; 
// https://www.omdbapi.com/?i=tt3896198&apikey=e3956d65
// https://www.omdbapi.com/?s=random&y=&apikey=e3956d65

function Layout({search}) {
  const [state, setstate] = useState(null);
  

  useEffect(()=>{
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=e3956d65`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
        alert("deg")
      }
      return response.json();
    })
    .then(data => {
       
       setstate(data.Search);
      
      
    })
    .catch(error => {
      console.error('Fetch error:', error);
      // alert("Search Item not Found") 
    });
    
  },[search,state])
  

  return (
    <div>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4'>
     
      {state && state.map(element => (
        <Showmovies  image={element.Poster} link={element.Title} year={element.Year} />
      ))}
      </div>
      

    </div>

  );
}

export default Layout;
