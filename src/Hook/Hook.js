// import React, {useState, useEffect, useRef} from 'react'
// import Clicker from './Clicker'

// const Hook =()=>{
// const [count, setCount]=useState(0)
// const [isClicker, setClicker]=useState(false)

// //     setCount(count+1)
// // }
// // const increment=()=>{

// // const decrement=()=>{
// //     setCount(count-1)
// // }

//     // useEffect(() => {
//     //    console.log("Render", isClicker  )
//     // }, [isClicker]);

//     const inputRef = useRef(null)

//     const handleClick = () =>{
//         inputRef.current.focus();
//     }

//     useEffect(() => {
//         inputRef.current.focus();
//     }, []);
//      return (
//          <div>
//              <h1>{count}</h1>
//              <input type="text"
//               ref={inputRef}
//               placeholder="Enter your Name"/>
//              <button onClick={handleClick}>Clicker</button>
//          </div>
//      )
//  }

// export default Hook

// componentDidMount(){}
// componentDidUpDated(){}
// componentWilUnmount(){}
// ============================
// --------- useEffect ----------