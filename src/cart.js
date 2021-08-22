import React from "react";

export default function Cart(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{props.data.name}</div>
        Price:<strong>{props.data.amt}</strong>
        <sub>/kg</sub>
      </div>

      <button
        class="badge bg-primary rounded-pill"
        onClick={() => {
          props.removes(props.data.id);
        }}
      >
        X
      </button>
    </li>
  );
}
