import { FC, useEffect, useState } from "react";
import axios from "axios";
import { categories } from "../data/categories";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/posts/get-all-posts"
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul className="flex items-center gap-4 border-b border-slate-300 p-3">
        {categories.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {data.map((item) => (
        <Link to={`/post/${item.id}`}>
          <Card key={item.id} item={item} />
        </Link>
      ))}
    </div>
  );
};
