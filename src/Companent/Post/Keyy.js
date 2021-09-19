import React from 'react'
import Posts from './Posts';

class Keyy extends React.Component {
    state={
        post:[
            {id:1, name:"Shahzod"},
            {id:2, name:"Samar"},
            {id:3, name:"Temur"}
        ]
    };

    removePost=(id)=>{
   this.setState({post: this.state.post.filter(post=>post.id !==id)})
    }
    
    render(){
        const {post}=this.state
        return(
            <div>
                <Posts posts={post} removePost={this.removePost}/>
            </div>
        )
    }
}

export default Keyy;