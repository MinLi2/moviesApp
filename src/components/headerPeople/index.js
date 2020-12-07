import React from "react";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
const HeaderPeople = ({ people, history }) => {
  return (
    <div className="row">
             <div className="col-2">
          <button onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="2x" />
            <span>{" Back"}</span>
          </button>
        </div>
      <div className="col-6 offset-3">
      
      </div>
    </div>
  );
};

export default withRouter(HeaderPeople) ;




