import React, { useCallback } from "react";
const Hightlight = props => {
  const { filter, str } = props;
  if (!filter) return str;
  const regexp = new RegExp(filter, "ig");
  const matchValue = str.match(regexp);

  if (matchValue) {
    return str.split(regexp).map((s, index, array) => {
      if (index < array.length - 1) {
        const c = matchValue.shift();
        return (
          <>
            {s}
            <span className="hightlight">{c}</span>
          </>
        );
      }
      return s;
    });
  }
  return str;
};
const MainList = ({ value, filter, text, modalText }) => {
  const light = useCallback(
    str => {
      return <Hightlight filter={filter} str={str} />;
    },
    [filter]
  );

  return (
    <>
      {(value && text).map(item => (
        <li
          className="card"
          key={item.id}
          onClick={() => {
            modalText(item.summary);
          }}
        >
          <img width="370px" height="270px" src={item.imageUrl} alt={item.url} />
          {<h2 className="title">{light(item.newsSite)}</h2>}
          <p className="text">{light(item.title)}</p>
          <p />
        </li>
      ))}
    </>
  );
};

export default MainList;
