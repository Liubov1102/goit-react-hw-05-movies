// import styled from "styled-components";
 



// export const Input = styled.input`
//   padding: 8px 32px 8px 8px;
//   border-radius: 4px;
//   font: inherit;
// `;



import styled from 'styled-components';
import { Field } from 'formik';
import { HiSearch } from "react-icons/hi";

export const Input = styled(Field)`
  border: 1px solid black;
  font: inherit;
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  width: 360px;
  outline: 0;
`;

export const Button = styled.button`
   display: flex;
  cursor: pointer;
  padding: 4px;
 
  background: rgb(226, 226, 226);
  border: none;
  border-radius: 4px;
  
`;

export const ErrorText = styled.p`
  color: red;
`;
 export const Icon = styled(HiSearch)`
   width: 28px;
   height: 28px;
   
   
 `;
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;