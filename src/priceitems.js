import React from "react";

export default function Priceitems(props) {
  return (
    <div class="col-sm">
      <div className="card" style={{ width: "18rem" }}>
        <div className="img">
          <img
            src={props.productdata.img}
            class="card-img-top"
            alt="No Connectivity"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">
            <span style={{ fontWeight: " 350" }}> Name:</span>
            <strong>{props.productdata.name}</strong>
          </h5>
          <p class="card-text">
            Price:<strong>{props.productdata.amt}</strong>
            <sub>/kg</sub>
          </p>

          <p class="card-text">{props.productdata.adv}</p>

          <button
            class="btn btn-primary"
            onClick={() => {
              props.handlecart(props.productdata.id);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
