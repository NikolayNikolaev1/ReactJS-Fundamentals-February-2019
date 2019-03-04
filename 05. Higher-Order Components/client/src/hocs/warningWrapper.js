import React from "react";

function warningWrapper(WrappeedComponent) {
  return function(props) {
    return (
      <div class="alert">
        <span class="alert-symbol">&#9888;</span>
        <WrappeedComponent {...props} />
      </div>
    );
  };
}

export default warningWrapper;