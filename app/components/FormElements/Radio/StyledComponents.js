import styled from 'styled-components';
import colorConfig from 'config/style';

export const RadioGroupContainer = styled.div`
  .ant-radio-group {
    display: flex;
    justify-content: space-between;
  }

  .ant-radio-wrapper > span {
    color: ${colorConfig.text};
    font-weight: 400;
  }
`;
