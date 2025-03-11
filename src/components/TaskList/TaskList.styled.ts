import styled from "styled-components";

export const TaskListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RefetchButton = styled.button`
  position: absolute;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f39c12;
  color: #fff;
  text-shadow: none;
  background-image: none;
  cursor: pointer;
  font-weight: 700;
  line-height: 1rem;
  font-size: 1rem;
  padding: 11px 21px;
  border-radius: 4px;
  border: none;
  height: 40px;

  &:hover {
    background-color: #e67e22;
  }
`;
