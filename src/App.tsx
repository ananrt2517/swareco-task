import { useEffect } from "react";
import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import { getTasks } from "./api/requests";
import { useDispatch } from "react-redux";
import { initializeTasks } from "./redux/taskReducer";
import usePersistData from "./hooks/usePersistData";
import { STORAGE_KEY } from "./constants";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = localStorage.getItem(STORAGE_KEY);
      if (cachedData) {
        dispatch(initializeTasks(JSON.parse(cachedData)));
      } else {
        const data = await getTasks();
        dispatch(initializeTasks(data));
      }
    };

    fetchData();
  }, [dispatch]);

  usePersistData();

  return (
    <div className="App">
      <TaskList />
    </div>
  );
}

export default App;
