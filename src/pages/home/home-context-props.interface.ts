import React from "react";

export interface HomeContextProps {
  v: string;
  sayHello: () => void; // test function
  toggleFormVisibility: () => void;
  f: boolean;
  setF: (e: boolean) => void;

  // 1. Mai properties
  s: object;
  setS: React.Dispatch<React.SetStateAction<{ status: string }>>;

  filterStatus: { status: string }[];
  setFilterStatus: React.Dispatch<React.SetStateAction<{ status: string }[]>>;
}
