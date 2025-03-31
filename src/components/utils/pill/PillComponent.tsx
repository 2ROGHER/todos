import React, { JSX } from "react";
import "./Pill.scss";
export const PillComponent = ({
  status = "ALL",
  onClose = () => {},
}): JSX.Element => {
  return (
    <section className="pill">
      <div className="pill-box">
        <span>{status}</span>
        <span onClick={onClose} className="btn__close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#fffafa"
            fill="none"
          >
            <path
              d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};
