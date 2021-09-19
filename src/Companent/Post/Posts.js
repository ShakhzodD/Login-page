import PostsList from "./PostsList";

export default function Posts(props) {
    const {removePost}=props
    return(
        <div>
            {props.posts.map((post)=>(
            <PostsList key={post.id} id={post.id} name={post.name} removePost={removePost} />
            ))}
        </div>
    )
}  