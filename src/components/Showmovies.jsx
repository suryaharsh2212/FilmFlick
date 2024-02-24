import React from 'react'
// https://wallpaperaccess.com/full/1288436.jpg

function Showmovies({image,link,year}) {
  return (  
  <grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4>
   <div className="card w-96 h-4/5 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" className='object-cover transition-transform transform hover:scale-105' /></figure>
  <div className="card-body">
    <h2 className="card-title">{link}</h2>
    <p>{year}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch Now</button>
    </div>
  </div>
</div>


  </grid>

  )
}

export default Showmovies