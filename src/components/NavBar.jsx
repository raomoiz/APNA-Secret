import React from 'react'
import { useRef,useContext } from 'react'
import { FormContext } from '../context/form'
import { SearchContext } from '../context/search'
import './NavBar.css'

function NavBar() {
  // const searchInput = useRef()
  const {search,Setsearch} = useContext(SearchContext)
  const { passArr, setPassArr } = useContext(FormContext);
  const handleClick=()=>{
    console.log("Hello")
  }
  const handleSearchVal=(e)=>{
    Setsearch(e.target.value);
    
  }
  return (
    <>
    <div className='NavBar'>
    <div className='logoSection'>
    <span className='logoText logoTextUp'>APNA</span>
      <img className="logo"src="\logo.png" alt="" />
      <span className='logoText logoTextDown'>Secret</span>
    </div>
    <div className='searchSection'>
        <input type="search" placeholder='Search'  name="search" onChange={(e)=>handleSearchVal(e)} id="search"  />
        <button onClick={()=>handleClick()} className="searchBtn greenBtn">Search</button>
    </div>
    </div>
    </>
  )
}

export default NavBar
