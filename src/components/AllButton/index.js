import React from "react";

function AllButton(props) {
  return (
    <button onClick={() => props.all(props.MainList)} className="all">
      Get All!
    </button>
  );
}
export default AllButton;
