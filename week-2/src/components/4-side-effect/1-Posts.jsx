import { useEffect, useState } from "react";
import "./index.css";

const Posts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchDataPost() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );

        // Validasi
        if (!response.ok) throw new Error("Error data");

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      fetchDataPost();
    }, 3000);

    return function () {
      console.log("Clear component");
    };
  }, []);

  useEffect(() => {
    console.log("Count Jalan");
  }, [count]);

  if (isLoading) return <span class="loader"></span>;

  return (
    <div className="post">
      <h1>Side Effect</h1>
      {data.map((post) => (
        <div
          key={post.id}
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "red",
            margin: "10px",
            color: "white",
            position: "relative",
          }}
        >
          <span
            style={{
              backgroundColor: "black",
              width: "50px",
              height: "50px",
              lineHeight: "50px",
              textAlign: "center",
              borderRadius: "360px",
              position: "absolute",
              right: 5,
              top: 5,
            }}
          >
            {post.id}
          </span>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Posts;
