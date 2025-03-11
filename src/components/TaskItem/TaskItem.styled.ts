import styled from "styled-components";
import { motion } from "motion/react"

export const TaskItemContainer = styled(motion.li)`
  display: flex;
  flex-direction: column;
  width: 290px;
  padding: 1rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;

  h4 {
    margin: 0;
    font-size: 1rem;
    text-align: left;
    color: rgba(0, 0, 0, 0.85);
  }

  span {
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding-top: 0.5rem;
  margin-top: 1rem;
`;

export const ButtonElement = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: center;
  flex: 1 1 auto;
  border: none;
  height: 36px;
  cursor: pointer;
  width: 50%;
  box-shadow: 0 0 0 1px rgba(34, 36, 38) inset;
  color: rgba(34, 36, 38);

  font-size: 0.875rem;
`;

export const CompleteButton = styled(ButtonElement)`
  box-shadow: 0 0 0 1px #21ba45 inset;
  color: #21ba45;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &:hover {
    box-shadow: 0 0 0 1px #16ab39 inset;
    color: #16ab39;
  }

  &:disabled {
    box-shadow: 0 0 0 1px rgba(34, 36, 38, 0.6) inset;
    color: rgba(34, 36, 38, 0.6);
    cursor: default;
  }
`;

export const DeleteButton = styled(ButtonElement)`
  box-shadow: 0 0 0 1px #db2828 inset;
  color: #db2828;
  margin-left: -1px;

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  &:hover {
    box-shadow: 0 0 0 1px #d01919 inset;
    color: #d01919;
  }
`;

export const ModalTitle = styled.h4`
  margin: 0;
`;
