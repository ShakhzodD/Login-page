import Header from "./Header";
export default function News(props) {
    return(
        <div>
      <h1>{(props.name) ? <span>{props.name}</span> : "default book"}</h1>
      <div className="box">
      <p>{props.extra}</p>
      <p>{props.text}</p>
      <b>{props.children}</b>
    </div>
    <div className="square">
    <Header header={props.header} matn={props.matn}/>
    </div>
        
    </div>
    )
};
