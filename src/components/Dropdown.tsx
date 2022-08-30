import React, { useState } from "react";

interface DropdownItemProps {
  options: Array<Option>;
  isEditOn: boolean;
}

export const Dropdown: React.FC<DropdownItemProps> = ({
  isEditOn,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={toggleDropdown}>
        {!isOpen ? "show options" : "hide options"}
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          {options.map((option: Option) => {
            return (
              <button
                onClick={
                  option.value === "Edit"
                    ? () => option.onClick()
                    : () => option.onClick()
                }
                className={`${option.color} dropdown-list-btn`}
              >
                {isEditOn && option.value === "Edit" ? "Save" : option.value}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
