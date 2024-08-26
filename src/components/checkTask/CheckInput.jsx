import React, { useState } from "react";
import "./style.css"; // Arquivo CSS para estilos personalizados

export const CheckInput = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="checkbox-custom"></span>
    </label>
  );
};