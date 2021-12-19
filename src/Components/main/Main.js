// https://api.spaceflightnewsapi.net/v3/articles
import axios from "axios";
import React, { useEffect, useState } from "react";
import MainList from "./MainList";
const Main = () => {
  const [state, setstate] = useState({ res: [] });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v3/articles")
      .then(res => setstate({ res: res.data }))
      .catch(error => console.log(error));
  }, []);
  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };
  const filteredTitle = () => {
    if (state.res.length) {
      return state.res.filter(item => item.newsSite.toLowerCase().includes(filter.toLowerCase()));
    }
  };
  const filteredText = () => {
    if (state.res.length) {
      return state.res.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));
    }
  };
  const add = () => {
    console.log(filteredTitle());
  };
  return (
    <>
      <button onClick={add}>add</button>
      <input type="text" onChange={handleChange} value={filter} />
      <ul>
        {state.res.length ? <MainList value={filteredTitle()} text={filteredText()} /> : ""
        // state.res.map(item => (
        //     <li key={item.id}>
        //       <img width="150px" height="150px" src={item.imageUrl} alt={item.url} />
        //       {<h2>{item.newsSite}</h2>}
        //       <p>{item.summary}</p>
        //       <p />
        //     </li>
        // ))
        }
      </ul>
    </>
  );
};

export default Main;
