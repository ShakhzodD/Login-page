import React from 'react';
import Posts from './Posts';

class Keyy extends React.Component {
state={
    posts:[
        {id:1, name: "Javascript"},
        {id:2, name: "Reactjs"},
        {id:3, name: "VueJs"},
    ]
};

handleSomthing=()=>{
    console.log("App.js setState update")
}

    render() {
        return (
            <div>
                <Posts posts={this.state.posts} callback={this.handleSomthing}/>
            </div>
        );
    }
}

export default Keyy;
