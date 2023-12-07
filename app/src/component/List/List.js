import React, { useRef, useState } from "react";
import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../ListItem/ListItem";

function List({list}) {
const [isMove, setIsMove] = useState(0);
const [slideNumber, setSliderNumber] = useState(0);
const listRef = useRef(null);

const handleClick = (direction)=>{
    setIsMove(true);
 let distance = listRef.current.getBoundingClientRect().x-50;
    if(direction === "left" && slideNumber > 0){
        setSliderNumber(slideNumber-1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if(direction === "right" && slideNumber < 5 ){
        setSliderNumber(slideNumber+1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    
}

  return (
      <div className="list">
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{display:!isMove && 'none'}}
          />
          <div className="container" ref={listRef}>
             {list.content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
            
          </div>
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    
  );
}

export default List;
