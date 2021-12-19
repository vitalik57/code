import React from "react";
const MainList = ({ value, text }) => {
  return (
    <>
      {value.map(item => (
        <li key={item.id}>
          <img width="150px" height="150px" src={item.imageUrl} alt={item.url} />
          {<h2>{item.newsSite}</h2>}
          <p>{item.title}</p>
          <p />
        </li>
      ))}
      ||{" "}
      {text.map(item => (
        <li key={item.id}>
          <img width="150px" height="150px" src={item.imageUrl} alt={item.url} />
          {<h2>{item.newsSite}</h2>}
          <p>{item.title}</p>
          <p />
        </li>
      ))}
      {/* {value.map(item => (
        <li key={item.id}>
          <img width="150px" height="150px" src={item.imageUrl} alt={item.url} />
          {<h2>{item.newsSite}</h2>}
          <p>{item.title}</p>
          <p />
        </li>
      ))} */}
    </>
  );
};

export default MainList;
