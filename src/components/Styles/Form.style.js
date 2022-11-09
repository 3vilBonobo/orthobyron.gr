import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 500px;
`;
export const StyledFormTitle = styled.h2``;

export const StyledFormInput = styled.input`
  font-size: 1.2rem;
  min-width: 400px;
  padding: 1rem 2rem;
  margin: 1rem;
  border-radius: 10px;
`;
export const StyledFormSelect = styled.select`
  font-size: 1.2rem;
  min-width: 400px;
  padding: 1rem 2rem;
  margin-block: 1rem 2rem;
`;

export const StyledFormOption = styled.option`
  font-size: 1.2rem;
  min-width: 400px;
  padding: 1rem 2rem;
  margin-block: 1rem 2rem;
`;

export const StyledFormBtn = styled.button`
  background-color: #3579a0;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
`;
