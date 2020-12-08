import React from "react";

const HeaderPeopleList = ({ numPeoples}) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-4">
        <h2>
        No. People{" "}
          <span className="badge badge-pill badge-success">{numPeoples}</span>
        </h2>
      </div>
    </div>
  );
};

export default HeaderPeopleList;