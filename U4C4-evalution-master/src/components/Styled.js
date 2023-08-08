import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
width:90%;
justify-content:center;
margin:auto;
margin-top:10px;
  gap: 30px;
`;

export const Select = styled.select`
  background-color: grey;
  border: none;
  outline: none;
  font-size: 22px;
`;

export const Flex = styled.div`
  border: 1px solid #111;
  border-radius: 7px;
`;