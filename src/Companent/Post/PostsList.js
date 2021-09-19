export default function PostsList(props){
    const {name, id, removePost}=props
    return(
        <div className="todo">
            <h4>{name}</h4>
            <button onClick={()=>removePost(id)}>Delete</button>
        </div>
    )
}