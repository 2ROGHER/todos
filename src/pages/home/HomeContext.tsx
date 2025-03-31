import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { HomeContextProps } from "./home-context-props.interface";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { IAction } from "../../models/interfaces";
import { setFilterValueAction } from "../../redux/actions/filters.actions";

// 1. Create the context [HomeContext]
const HomeContext = createContext<HomeContextProps | undefined>(undefined);

// 2. Create the [HomeProvider]

export const HomeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [v, setV] = useState("hello");
  const [f, setF] = useState(true);

  // 1. Handle the filter state
  const [s, setS] = useState({ status: "DEFAULT" });

  // 2. Crete local status to [store] all items task statues.
  const [filterStatus, setFilterStatus] = useState<{ status: string }[]>([]);

  // 3. Create a dispatcher to [dipatch ] filter actions.
  const d = useDispatch<Dispatch<IAction<String|any>>>();


  const sayHello = () => console.log("Hello!");

  const toggleFormVisibility = useCallback(() => {
    setF((prv) => !prv);
  }, []);

  useEffect(() => {
    setFilterStatus((prev) => { // prev: [{status: "DELETED"}, {status: "COMPLETED"}]
      if (s.status && !prev.some((item) => item.status === s.status)) {
        return [...prev, { status: s.status }];
      }
      return prev;
    });

    // 3. We need to [dispatch] an action to [filter] tasks by the list.
    d(setFilterValueAction(s.status));

  }, [s, setS]);
  return (
    <HomeContext.Provider
      value={{ v, sayHello, toggleFormVisibility, f, setF, s, setS, filterStatus, setFilterStatus}}
    >
      {children}
    </HomeContext.Provider>
  );
};

// TODO("move this custom hook to it's own module")
export const useHomeContext = (): HomeContextProps => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error(`useHomeContext must be used within a HomeProvider`);
  }

  return context;
};
