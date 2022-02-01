import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps"></span>
        <span>{props.year}</span>
        <span>{props.category}</span>
        <span>{props.motivation}</span>
        <span>{props.laureates}</span>
      </dt>
      <dd>
          {props.key}
      {props.firstname}
      {props.surname}
      </dd>
    </div>
  );
}

export default Entry;