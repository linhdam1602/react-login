import styled, { css } from 'styled-components';

export const Label = styled.span`
  font-weight: 600;
  display: block;
  white-space: pre-line;
  overflow-wrap: break-word;
  word-break: break-word;

  ${(props) =>
    props.truncate &&
    css`
      overflow: hidden;
      white-space: nowrap;
      max-width: 100%;
      text-overflow: ellipsis;
    `};
`;

export const Desc = styled.div`
  white-space: pre-line;
  overflow-wrap: break-word;
  word-break: break-word;

  ${(props) =>
    props.truncate &&
    css`
      overflow: hidden;
      white-space: nowrap;
      max-width: 100%;
      text-overflow: ellipsis;
    `};
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;

  .block-info-wrapper {
    padding: 0 10px;
  }
`;

export const InfoWrapper = styled.div`
  flex: 1;
  margin-bottom: 20px;
  white-space: pre-line;

  ${(props) =>
    props.fullWidth &&
    css`
      flex: 0 0 100%;
    `};

  ${(props) =>
    props.center &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `};

  ${(props) =>
    props.inline &&
    css`
      display: flex;
      flex-direction: row;
    `};

  ${(props) =>
    props.noMargin &&
    css`
      margin: 0;
    `};

  ${(props) =>
    !props.autoWidth &&
    css`
      flex: 0 0 auto;
    `};
`;

export const LineBreaker = styled.div`
  flex-basis: 100%;
  width: 0px;
  height: 0px;
  overflow: hidden;
`;
