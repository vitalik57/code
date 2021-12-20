// https://api.spaceflightnewsapi.net/v3/articles
import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import MainList from "./MainList";
import { MainStyled } from "./MainStyled";
const Main = () => {
  const [state, setstate] = useState({ res: [] });
  const [filter, setFilter] = useState("");
  const [showModal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);
  const modalText = e => {
    setModalInfo(e);
    toogleModal();
  };
  const toogleModal = () => {
    setModal(!showModal);
  };
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
      return state.res.filter(item => (item.newsSite || item.title).toLowerCase().includes(filter.toLowerCase()));
    }
  };
  const filteredText = () => {
    if (state.res.length) {
      return state.res.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));
    }
  };

  return (
    <>
      <MainStyled>
        {" "}
        <div className="finder">
          <h1>Search</h1>
          <input type="text" onChange={handleChange} value={filter} />
        </div>
        <ul className="list">
          {state.res.length ? (
            <MainList modalText={modalText} value={filteredTitle()} filter={filter} text={filteredText()} />
          ) : (
            ""
          )}
        </ul>
        {showModal ? <Modal close={toogleModal} suumary={modalInfo} /> : ""}
      </MainStyled>
    </>
  );
};

export default Main;
