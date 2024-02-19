import styled from 'styled-components';
import { fontSize } from '../../styles/size';

const { extraBig, medium } = fontSize;

export const MainTitle = styled.h1`
  font-size: ${extraBig}rem;
  border-bottom: 2px solid #000;
  margin-bottom: 35px;
`;

export const SubTitle = styled.h2`
  font-size: ${medium}rem;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: ${({ align }) => align || 'left'};
`;
