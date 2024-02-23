import React from 'react'
// https://wallpaperaccess.com/full/1288436.jpg

function Showmovies({image,link,year}) {
  return (
    <div>
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img   src={image} alt="Movie"/></figure>
  <div className="card-body p-4">
    <h2 className="card-title">{link}</h2>
    <h2>{year}</h2>
    <p>Click to Watch</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Showmovies