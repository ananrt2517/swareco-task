import { RefetchButton, TaskListContainer } from "./TaskList.styled";
import TaskItem from "../TaskItem/TaskItem";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import AddTask from "../AddTaskForm/AddTask";
import { AnimatePresence } from "motion/react";
import { STORAGE_KEY } from "../../constants";

const handleClearCache = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
};

const TaskList = () => {
  const data = useSelector((store: StoreType) => store.tasks.value);

  return (
    <TaskListContainer>
      <RefetchButton title="Clear cache" onClick={handleClearCache}>♻</RefetchButton>

      <AddTask />
      <AnimatePresence>
        {data.map((item) => {
          return <TaskItem key={item.id} {...item} />;
        })}
      </AnimatePresence>
    </TaskListContainer>
  );
};

export default TaskList;
