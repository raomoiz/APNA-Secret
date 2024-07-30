import React, { useRef, useContext } from 'react';
import './NavBar.css';
import { v4 as uuidv4 } from 'uuid';
import { FormContext } from '../context/form';
import { InputContext } from '../context/input';
import { ToastContainer, toast } from 'react-toastify';
import Popup from 'reactjs-popup';
function List(props) {
  const pass = useRef();
  const user = useRef();
  const url = useRef();
  const { passArr, setPassArr } = useContext(FormContext);
  const { webVal, setWebVal, passVal, setPassVal, userName, setUser } = useContext(InputContext)

  const handleDelete = (id) => {

    const updatedPassArr = passArr.filter(item => item.id !== id);
    setPassArr(updatedPassArr);
    localStorage.setItem("passwords", JSON.stringify(updatedPassArr));
    toast('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });

  };
  const handleEdit = (id) => {
    const edit = passArr.filter(item => item.id == id);
    setWebVal(edit[0].Website)
    setUser(edit[0].UserName)
    setPassVal(edit[0].Password)
    handleDelete(id)
  };

  const MobileFunc = () => (
    <Popup trigger={<li className='mobile'><i className="fa-solid fa-ellipsis-vertical"></i></li>} position="">
      <li key={uuidv4()} className='func func2'>
        <span>
          <img className='eye' src="/password.png" onClick={handlePass} alt="" />
        </span>
        <span className="delet" onClick={() => handleDelete(props.index)}>
          <lord-icon
            src="https://cdn.lordicon.com/xekbkxul.json"
            trigger="hover"
          >
          </lord-icon>
        </span>
        <span className='edit' onClick={() => handleEdit(props.index)}>
          <lord-icon
            src="https://cdn.lordicon.com/wuvorxbv.json"
            trigger="hover"
            stroke="bold"
          >
          </lord-icon>
        </span>
      </li>
    </Popup>
  );

  const handlePass = (e) => {
    const url = e.target.src;
    if (url.includes("text.png")) {
      e.target.src = "\\password.png";
      pass.current.style.webkitFilter = "blur(4px)";
    } else if (url.includes("password.png")) {
      e.target.src = "\\text.png";
      pass.current.style.webkitFilter = "blur(0px)";
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
      {/* Same as */}

      <div className='List'>


        <ul>
          {/* <li className='li' ><p>{props.index}</p></li> */}
          <li className='li userName' ><p ref={user}>{props.UserName}</p>
            <span>
              <lord-icon className="ic" style={{ width: "20px" }}
                src="https://cdn.lordicon.com/yqiuuheo.json"
                trigger="hover"
                onClick={() => { navigator.clipboard.writeText(user.current.innerHTML); }}
              >
              </lord-icon>
            </span>
          </li>
          <li className='li url'><p ref={url}>{props.Website}</p>
            <span><a href={props.Website}>  <lord-icon
              src="https://cdn.lordicon.com/mqwitsmv.json"
              trigger="hover"
              stroke="bold"
              style={{ width: "20px" }}
              colors="primary:#4f1091,secondary:#a39cf4"
            >
            </lord-icon></a>

            </span>
            <span>
              <lord-icon className="ic" style={{ width: "20px" }}
                src="https://cdn.lordicon.com/yqiuuheo.json"
                trigger="hover"
                onClick={() => { navigator.clipboard.writeText(url.current.innerHTML); }}
              >
              </lord-icon>
            </span>
          </li>
          <li className='li pass'>
            <p style={{ WebkitFilter: "blur(4px)" }} ref={pass} className="passw">{props.Password}</p>
            <span>
              <lord-icon className="ic" style={{ width: "20px" }}
                src="https://cdn.lordicon.com/yqiuuheo.json"
                trigger="hover"
                onClick={() => { navigator.clipboard.writeText(pass.current.innerHTML); }}
              >
              </lord-icon>
            </span>
          </li>
          <li key={uuidv4()} className='func'>
            <span>
              <img className='eye' src="/password.png" onClick={handlePass} alt="" />
            </span>
            <span className="delet" onClick={() => handleDelete(props.index)}>
              <lord-icon
                src="https://cdn.lordicon.com/xekbkxul.json"
                trigger="hover"
              >
              </lord-icon>
            </span>
            <span onClick={() => handleEdit(props.index)}>
              <lord-icon
                src="https://cdn.lordicon.com/wuvorxbv.json"
                trigger="hover"
                stroke="bold"
              >
              </lord-icon>
            </span>
          </li>
          <MobileFunc></MobileFunc>

        </ul>
      </div >
    </>
  );
}

export default List;
