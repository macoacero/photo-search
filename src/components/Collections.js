import React from "react";

function Collections(props) {

  return (
    <div className="collections">
      <h2>My collections</h2>
      <ul>
        {props.collections.map((img, index) => (
          <li onClick={props.handleChange} id={img} key={`img${index}`} >
            <div className={`image image${index}`}></div>
            <p>{props.collections[index]}</p>
          </li>
        ))}
      </ul>
      <h2>Activity feed</h2>
    </div>
  );
}

export default Collections;