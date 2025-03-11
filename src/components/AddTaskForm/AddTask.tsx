import { useRef, useState } from "react";
import { FormElement, InputElement, SubmitButton } from "./AddTask.styled";
import { useDispatch } from "react-redux";
import { createTask } from "../../redux/taskReducer";

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 1001);
};

const AddTaskForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) {
      inputRef.current?.focus();
      return;
    }

    dispatch(
      createTask({
        title: inputValue,
        userId: 1,
        completed: false,
        id: getRandomNumber(),
      })
    );

    setInputValue("");
  };

  return (
    <FormElement onSubmit={onSubmit}>
      <InputElement
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Start typing.."
      />

      <SubmitButton type="submit">Create task</SubmitButton>
    </FormElement>
  );
};

export default AddTaskForm;
