import React, { useEffect, useState } from "react";
import { AcUnit } from "@material-ui/icons";
import "./home.scss";
import NavBar from "../../component/NavBar/NavBar";
import Featured from "../../component/Featured/Featured";
import List from "../../component/List/List";
import axios from "axios";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomList();
  }, [type, genre]);

  return (
    <div className="home">
      <NavBar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
}

export default Home;
