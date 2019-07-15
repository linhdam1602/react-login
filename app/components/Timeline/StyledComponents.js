import styled from 'styled-components';
import { colorConfig } from 'config/style';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
`;

export const LeftContainer = styled.div`
  padding-bottom: 10px;
`;

export const AnchorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 60px;
`;

export const VerticalLine = styled.div`
  width: 1px;
  background-color: ${colorConfig.primary};
  height: 100%;
  padding-bottom: 20px;

  position: absolute;
  top: 8px;
  left: 48%;
`;

export const DefaultAnchor = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${colorConfig.primary};
  margin: 0 20px;

  position: absolute;
  top: 8px;
  left: 5px;
`;
export const RightContainer = styled.div``;
