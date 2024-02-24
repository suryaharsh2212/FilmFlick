import React, { useState } from 'react'
import Layout from './Layout'

function Header(props) {
  const [inputvalue,setinputvalue]=useState('love')
  const changetobollywood=()=>{
       setinputvalue('Aventure')
  };
  const changetohollywood=()=>{
    setinputvalue('Horror')
};

 
  return (
    <div>
       <div className='flex flex-col bg-violet-950  h-1/2 ' style={{opacity:0.7}}>
            <h1 className=' font-serif mt-20 text-center text-5xl text-gray-700'>MovieMingle</h1>
            <h1 className='text-gray-600 text-2xl text-center mt-5'> "Unlock the Magic of Cinema: Your Gateway to Cinematic Adventures!"</h1>
            <div className='flex justify-center items-center h-full w-full mt-10'>
                        <input className='p-5 h-10 w-96 rounded-3xl m-3' type="text"  placeholder='Type to search'  onChange={(e)=>setinputvalue(e.target.value)}/>
                     {/* <button onClick={(e)=>setinputvalue(e.target.value)}>  <img className='h-10 w-10'   src="https://cdn-icons-png.flaticon.com/128/8915/8915520.png" alt="" /></button>  */}
        </div>
       </div>
       <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"></a>
  </div>
  <div className="flex-none z-50">
    <ul className="menu menu-horizontal px-1 bg-slate-800 rounded-xl z-50">
    <li>
        <details>
          <summary>
           Menu 
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none ">
            <li><button  onClick={changetohollywood} ><a>Horror</a></button></li>
            <li><button onClick={changetobollywood}><a>Adventure</a></button></li>
            
          </ul>
        </details>
      </li>
      <li><a>Link</a></li>
     
    </ul>
  </div>
</div>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'><Layout search={inputvalue}/></div>

    </div>
  )
}

export default Header