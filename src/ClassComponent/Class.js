import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        // this.handleClick=this.handleClick.bind(this)
        // this.increment=this.increment.bind(this)
        // this.ochir=this.ochir.bind(this)

    }
handleClick = (val)=>{
this.setState({count: val})
}

render(){
    return(
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.handleClick(this.state.count+1)}>+</button>
            <button onClick={()=>this.handleClick(this.state.count-1)}>-</button>
            <button onClick={()=>this.handleClick(0)}>reset</button>
        </div>
    )
}
}
export default App