import "./style.css";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Gallery } from "./Gallery";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("cats");
  const [page, setPage] = useState(1);

  const clientId = "FXTf4NgsuN9x83dG1pHi1G6g2JsyytX8TD_MEIG89pE";
  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${query}&page=${page}`;

  const fetchImages = () => {
    axios
      .get(fetchUrl)
      .then((response) => {
        setData([...data, ...response.data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar />
        <Gallery data={data} />
      </div>
    </>
  );
}
