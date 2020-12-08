import React from "react";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
const HeaderPeople = ({people}) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <h2>
          {people.name}
          {"  "}
          <a href={people.homepage}>
            <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default withRouter(HeaderPeople) ;




