import { useDispatch } from "react-redux";
import { Task } from "../../types";
import {
  ButtonContainer,
  ButtonElement,
  CompleteButton,
  DeleteButton,
  ModalTitle,
  TaskItemContainer,
  TextBox,
  TextContainer,
} from "./TaskItem.styled";
import { completeTask, deleteTask } from "../../redux/taskReducer";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

const TaskItem = ({ id, title, completed }: Task) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleCompleteTask = () => {
    dispatch(completeTask(id));
  };

  const handleDeleteTask = () => {
    setDeleteModalOpen(false);
    dispatch(deleteTask(id));
  };

  return (
    <TaskItemContainer
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
    >
      <TextContainer>
        <TextBox>
          <h4>{title}</h4>
          <span>
            {completed ? "Task is completed" : "Task is not completed"}
          </span>
        </TextBox>

        <TextBox>{completed ? "✅" : "⏳"}</TextBox>
      </TextContainer>

      <ButtonContainer>
        <CompleteButton disabled={completed} onClick={handleCompleteTask}>
          {completed ? "Completed" : "Mark as completed"}
        </CompleteButton>
        <DeleteButton onClick={() => setDeleteModalOpen(true)}>
          Delete
        </DeleteButton>
      </ButtonContainer>

      <Modal
        onRequestClose={() => setDeleteModalOpen(false)}
        isOpen={isDeleteModalOpen}
        style={{
          content: {
            width: 420,
            height: "max-content",
            margin: "auto",
          },
        }}
      >
        <ModalTitle>🧹🪣 Confirm deletion</ModalTitle>
        <p>
          Are you sure you want to delete <b>{title}</b>? This action cannot be
          undone.
        </p>

        <ButtonContainer>
          <ButtonElement onClick={() => setDeleteModalOpen(false)}>
            No, cancel
          </ButtonElement>
          <DeleteButton onClick={handleDeleteTask}>Yes, delete</DeleteButton>
        </ButtonContainer>
      </Modal>
    </TaskItemContainer>
  );
};

export default TaskItem;
