import React, { useState, useEffect } from 'react';
import Layout from './Layout';

function Header(props) {
  const [inputvalue, setinputvalue] = useState('all');

  const changetobollywood = () => {
    setinputvalue('Adventure');
  };

  const changetohollywood = () => {
    setinputvalue('Horror');
  };

  const settohome = () => {
    setinputvalue('all');
  };

  return (
    <div>
      <div className='flex flex-col mb-20  h-1/2 '>
        <div className="navbar bg-slate-850">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">MovieMingle</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-auto" onChange={(e) => setinputvalue(e.target.value)} />
            </div>
            <div className="dropdown dropdown-end z-50">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar z-30">
                <div className="w-10">
                  <img alt="Tailwind CSS Navbar component" src="https://cdn-icons-png.flaticon.com/128/12028/12028894.png" />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Carousel part starts */}

        <div className="carousel w-full h-5/6 mb-20">
  <div id="slide1" className="carousel-item relative w-full h-5/6">
    <img src="https://wallpaperaccess.com/full/1288436.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

        {/* Layout component */}
        <Layout search={inputvalue} />

      </div>
    </div>
  );
}

export default Header;
