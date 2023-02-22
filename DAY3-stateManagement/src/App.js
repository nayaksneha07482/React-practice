 import "./styles.css";
import React from "react";


const PostItem = ({title, body}) => {
  return (
    <div style={{border:"1px solid black"}}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

const getData = () => {
  return fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  ).then((res) => res.json());
};


export default function App() {
  const [data, setData] = React.useState([]);

  const fetchAndUpdateData = async() =>{
    try {
      //waiting for response from API call
      const response = await getData();
      console.log(data);
      //updating local state data value with API response
      setData(response);
    } catch (error){
      console.log(error);
    }
  }
  return (
    <div className="App">
      <h1>posts</h1>
      <button onClick={fetchAndUpdateData}>GET posts</button>

      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"10px"}} >
      {data.map( (post) => (
          <PostItem key={post.id} {...post} />
        )
        )}
      </div>
    </div>
  );
}
