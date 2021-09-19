import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './Login/App';
import './App.css';

// const Book =({name, extra, text,header})=>{
//   return(
//     <div>
//       <h1>{name}</h1>
//       <div className="box">
//       <p>{extra}</p>
//       <p>{text}</p>
//     </div>
//     <div className="square">
//       <h1>{header}</h1>
//     </div>

//     </div>
//   )
// }

// const App=()=>{
//   return( 
//     <div>
//       <Book name="BBC News" extra="2020" text="Shahzod Orinboev" header="BigJob" />
//       </div>
//   )
// }


//    JSX------------------

// const user={
//   firstName:"Shahzod",
//   lastName:"O'rinboev"
// }

// function fullName(user){
// return user.lastName + " " + user.firstName
// }

// const Book =(props)=>{
//   return(
//     <div>
//       <h1>{(props.name) ? <span>{props.name}</span> : "default book"}</h1>
//       <div className="box">
//       <p>{props.extra}</p>
//       <p>{props.text}</p>
//       <b>{props.children}</b>
//     </div>
//     <div className="square">
//       <h1>{props.header}</h1>
//     </div>

//     </div>
//   )
// }


// const App = () =>{
// const [gss, setGss]= useState(false)
  // return (
    // <div>
    //   {gss ?
    //    <h1>Hello Shahzod</h1>: <div><h1>Hello Samar</h1></div>} 
    // </div>

//     <div>
// <Book name="BBC" extra="2020" text="Shahzod Orinboev" header="BigJob">
//   Extra Inform
// </Book>
// <Book name="UzNews" extra="2020" text="Shahzod Orinboev" header="BigJob" />
// <Book name="UzReport" extra="2020" text="Shahzod Orinboev" header="BigJob" />
//     </div>

// LOADER -------------

// const isLoading=true

ReactDOM.render(
  <React.StrictMode>
    {/* <App isLoading={isLoading}/> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

