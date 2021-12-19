import React, { useState, useCallback, useMemo } from "react";
import "./App.scss";
import { list } from "./data";

const Hightlight = props => {
  const { filter, str } = props;
  if (!filter) return str;
  const regexp = new RegExp(filter, "ig");
  const matchValue = str.match(regexp);

  if (matchValue) {
    console.log("matchValue", matchValue);
    console.log("str.split(regexp)", str.split(regexp));

    return str.split(regexp).map((s, index, array) => {
      if (index < array.length - 1) {
        const c = matchValue.shift();
        return (
          <>
            {s}
            <span className={"hightlight"}>{c}</span>
          </>
        );
      }
      return s;
    });
  }
  return str;
};

const Card = props => {
  const { id, name, secondName, filter } = props;
  const light = useCallback(
    str => {
      return <Hightlight filter={filter} str={str} />;
    },
    [filter]
  );
  return (
    <div className={"item"}>
      <h4>
        {light(name)} {light(secondName)}
      </h4>
      <i>id: {light(id + "")}</i>
    </div>
  );
};

function App() {
  const [filter, setFilter] = useState("");

  const items = useMemo(
    () => {
      if (filter) {
        return list.filter(item => {
          const matchValue = filter.toLowerCase();
          const { id, name, secondName } = item;
          if (id.toString().includes(matchValue)) return true;
          if (name.toLowerCase().includes(matchValue)) return true;
          if (secondName.toLowerCase().includes(matchValue)) return true;
          return false;
        });
      }
      return list;
    },
    [filter]
  );

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <div className={`wrap`}>
      <div className={"search"}>
        <input className={"input"} value={filter} onChange={handleChange} placeholder={"Поиск"} />
      </div>

      <div className={"content"}>
        {items.map(item => (
          <Card key={item.id} {...item} filter={filter} />
        ))}
      </div>
    </div>
  );
}

export default App;
