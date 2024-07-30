import './NavBar.css'
import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import List from './List'
import { InputContext } from '../context/input';
import { FormContext } from '../context/form';
import { SearchContext } from '../context/search';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Input() {
    const [webVal, setWebVal] = useState('')
    const [passVal, setPassVal] = useState('')
    const [userName, setUser] = useState('')
    const [passImg, setpassImg] = useState('text.png')
    const { passArr, setPassArr } = useContext(FormContext);
    const { search, Setsearch } = useContext(SearchContext)

    const passVission = useRef()
    const handleChangeWeb = (e) => {
        // console.log(webVal)
        setWebVal(e.target.value)
    }
    const handleChangePass = (e) => {
        // console.log(webVal)
        setPassVal(e.target.value)
    }
    const handleChangeUser = (e) => {
        // console.log(webVal)
        setUser(e.target.value)
    }
    const handlePass = (e) => {
        // console.log("Clicked")
        // console.log(e)
        if (passImg == "\\text.png") {
            setpassImg("\\password.png")
            passVission.current.type = "password"
        }
        else {
            setpassImg("\\text.png")
            passVission.current.type = "text"

        }
    }
    const  succtos=()=>{
        toast('Password Added');
    }
    const handleSubmit = (event) => {
        // event.preventDefault();
       
        let form = { 'id': passArr.length + 1, 'Website': webVal, 'UserName': userName, 'Password': passVal }
        setWebVal('')
        setUser('')
        setPassVal('')
        setPassArr([...passArr, form])
        localStorage.setItem("passwords", JSON.stringify([...passArr, form]))
        succtos()
        // console.log(passArr)
    }

    // console.log(passArr)
    return (
        <>
          




            <div className="InputSection">
                <div className="InputText">
                    <h2>Add Website & Password to save</h2>
                </div>
                <div className="InputField form" >
                    <div className="webSection">
                        <label htmlFor="web">Add Website link or Name</label>
                        <input onChange={handleChangeWeb} value={webVal} name="web" id='web' />
                    </div>
                    <div className="webSection">
                        <label htmlFor="userName">User Name</label>
                        <input value={userName} onChange={handleChangeUser} name="userName" id='user' />
                    </div>
                    <div className="passwordSection">
                        <label htmlFor="pass">Add Password</label>
                        <div className="passwordInput">
                            <input ref={passVission} value={passVal} onChange={handleChangePass} type="password" name="pass" id="pass" />
                            <img src={passImg} onClick={handlePass} className='passImg' alt="" />
                        </div>
                    </div>
                    <button className="greenBtn subBtn" onClick={handleSubmit}>Save</button>
                </div>
            </div>
            <InputContext.Provider value={{ webVal, setWebVal, passVal, setPassVal, userName, setUser }}>
                {passArr.length !== 0 ? (
                    <div className="lists" >

                        <h2><span className='headleft'>Your</span> <span className='headright'>Passwords</span></h2>
                        <ul className='heading'>
                            <li>UserName</li>
                            <li>Website</li>
                            <li>Password</li>
                            <li className='actions'>Actions</li>
                        </ul>

                        {

                            passArr.map((item, index) => {



                                return (
                                    search.length == 0 ? (
                                        <List key={uuidv4()} index={item.id} UserName={item.UserName} Password={item.Password} Website={item.Website} />
                                    ) : (
                                        item.UserName.toLowerCase().includes(search.toLowerCase()) ||
                                            item.Website.toLowerCase().includes(search.toLowerCase()) ?
                                            (
                                                <List key={item.id} index={item.id} UserName={item.UserName} Password={item.Password} Website={item.Website} />
                                            ) : (
                                                console.log("No Data")
                                            )
                                    ))
                            })}
                        {/* <h1>{data.value}</h1> */}
                    </div>
                ) : (
                    <div className="lists">
                        <h2><span className='headleft'>No Data</span> <span className='headright'>Available</span></h2>

                    </div>
                )}
            </InputContext.Provider>
        </>
    )
}

export default Input