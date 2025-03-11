import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StoreType } from "../redux/store";
import { STORAGE_KEY } from "../constants";

const usePersistData = () => {
  const tasks = useSelector((state: StoreType) => state.tasks.value);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks]);

  return null;
};

export default usePersistData;
