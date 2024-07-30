import { useState ,useContext,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import Input from './components/Input'
import List from './components/List'
import './App.css'
import { FormContext } from './context/form';
import { SearchContext } from './context/search'
function App() {
  const [passArr,setPassArr] = useState([])
 

  useEffect(() => {
     let  passwords = localStorage.getItem("passwords")
      if(passwords){
          setPassArr(JSON.parse(passwords))
      }
  }, []);
  const [search,Setsearch] = useState('')
  return (
    <>
     <FormContext.Provider value={{passArr,setPassArr}}>
      <SearchContext.Provider value={{search,Setsearch}}>
     <NavBar/>

     <Input/>
     
     </SearchContext.Provider>
     </FormContext.Provider>
   
    </>
  )
}

export default App
