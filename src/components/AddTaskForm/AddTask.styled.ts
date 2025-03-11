import styled from "styled-components";

export const FormElement = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const InputElement = styled.input`
  padding: 11px 14px;
  width: 292px;
  line-height: 1rem;
  background: #fff;
  color: rgba(0, 0, 0, 0.8);
  box-shadow: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2185d0;
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
    background-color: #1678c2;
  }
`;
