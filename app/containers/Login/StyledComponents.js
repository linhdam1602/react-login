import styled from 'styled-components';
import colorConfig from 'config/style';

export const LoginWrapper = styled.div`
  ${'' /* margin: 0 auto; */}
  max-width: 800px;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  justify-content: center;
`;
export const FormWrapper = styled.div`
  margin-top: 50px;
  button {
    margin-top: 20px;
    margin-bottom: 90px;
  }
`;

export const FieldWrapper = styled.div`
  margin-bottom: 20px;
`;
