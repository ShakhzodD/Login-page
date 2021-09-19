import React from 'react';

class Companent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            isCounting: false
        };
    }


    // getData(){
        // setTimeout(()=>{
        //     console.log("our data is update")
        //     this.setState({data:"John doil"})
        // }, 3000)

    // }

//     componentDidMount(){
//    console.log("CompanentdidMouth")
//    fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => this.setState({posts:data, loading:false}))
    
//     this.timerId=setInterval(()=>{
//     fetch('https://jsonplaceholder.typicode.com/comments')
//   .then(response => response.json())
//   .then(data => this.setState({comments:data}))
//     },3000)
// }
//     componentDidUpdate(){
// console.log("companentdidUptade");
//  }

// componentDidMount(){
//     setTimeout(()=>{
// this.setState({favouriteColor: "yellow"})
//     }, 3000)
// }

componentDidMount(){
    console.log("componentdidMount");
    const userCount=localStorage.getItem("timer");
    if(userCount) {
        this.setState({count: +userCount})
    }
}

componentDidUpdate(){
console.log("CompanentdidUptade")
localStorage.setItem("timer", this.state.count)
}

componentWillUnmount(){
    clearInterval(this.counterId)
}

handleStop=()=>{
    this.setState({isCounting:false})
clearInterval(this.counterId)
}

handleStart=()=>{
    this.setState({isCounting:true})

    this.counterId=setInterval(()=>{
        this.setState({count:this.state.count+1})
    }, 1000)
}

handleReset=()=>{
    this.setState({count:0, isCounting:false})
    clearInterval(this.counterId)
}
    render() {
        return (
            <div className="App">
            <p>React Timer</p>
            <p>{this.state.count}</p>
            {!this.state.isCounting ? (
                <button onClick={this.handleStart}>Start</button>
            ):(
                <button onClick={this.handleStop}>Stop</button>
            )}
            <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Companent;
