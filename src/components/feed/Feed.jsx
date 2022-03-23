
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import {Posts} from "../../dummyData";

export default function Feed({ username }) {
  
  return (
    <div className="feed">
     <Share/>
     {Posts.map((p)=>(
       <Post post={p} key={p.id} />
     ))};
    
    
    </div>
  );
}
