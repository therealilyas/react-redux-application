import React, { useState } from "react";

const input = ({ label, state, setState, type }) => {
  return (
    <div className="form-floating">
      <input
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="form-control"
        id="floatingInput"
        placeholder={label}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default input;
