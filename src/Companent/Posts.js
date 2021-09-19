import PostList from "./PostsList"

export default function Posts(props) {
    return (
        <div>
            {props.posts.map((post)=>(
                <PostList key={post.id} name={post.name} cb={props.callback}/>
            ))}
        </div>
    )
}