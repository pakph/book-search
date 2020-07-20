import React from "react";
import ViewBtn from "../ViewBtn";
import "./style.css";
import SaveBtn from "../SaveBtn";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h5 className="card-title booktitle">{props.title}</h5>
            <div className="float-right">
              <a href={props.href} rel="noopener noreferrer" target="_blank">
                <ViewBtn />
              </a>
              <SaveBtn id={props.id} handleSave={props.handleSave} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-muted author">{props.author}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <img className="card-img-top" src={props.img} alt="Blank" />
          </div>
          <div className="col-10">
            <div className="float-left">
              <p className="card-text text-left">{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
