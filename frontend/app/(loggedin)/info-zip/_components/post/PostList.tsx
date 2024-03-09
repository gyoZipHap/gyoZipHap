import PostCard from './PostCard';
import data from './posts.json';

interface PropsType {
  filtered: string;
}
export default function PostList(props: PropsType) {
  let posts = data.posts;
  if (props.filtered !== '전체') {
    posts = data.posts.filter((post) => post.category === props.filtered);
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.postId}
          country={post.country}
          category={post.category}
          title={post.title}
          author={post.author}
          univ={post.univ}
          date={post.date}
          comment={post.comment}
          like={post.like}
        />
      ))}
    </div>
  );
}
