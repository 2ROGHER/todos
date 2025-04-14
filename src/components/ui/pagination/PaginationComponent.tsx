import React from "react";
import "./PaginationComponent.scss";


interface PaginationComponentProps {
  items: any[];
  onGetTasks: (page: number) => void; 
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  items,
  onGetTasks = () => {},
}) => {
  return (
    <section className="pagination-component">
      <ul>
        {items.map((v, i) => (
          <li
            className="pagination-item"
            onClick={() => onGetTasks(i)} // Here we send the page number
            key={i}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PaginationComponent;
