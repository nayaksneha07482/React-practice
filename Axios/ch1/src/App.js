
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [error,setError] = useState("")

  // using promise

  // useEffect(() => {
  //   axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((res)=>setData(res.data))
  //       .catch((err)=> setError(err.message))
  // }, [])
  
  // using async await
      const getApiData = async () => {
        try {
          const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
          setData(res.data);
        } catch (err) {
          setError(err.message)
        }
      }
  useEffect(()=>{
    getApiData()
  },[])

  
  return (
    <>
      <h1>Axios concept in React</h1>
      {/* error handling */}
      {error !== "" && <h2>{error}</h2>}
      <div className='grid'>
      {data.map((post)=>{
          const {id, title, body} = post;

          return <div className="card" key={id}>
            <h2>{title.slice(0,15).toUpperCase()}</h2>
            <p>{body.slice(0,100)}</p>
          </div>
      })}
      </div>
    </>
  );
}

export default App;
