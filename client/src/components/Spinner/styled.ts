import styled, { keyframes } from "styled-components";
import Props from './types'

const spinnerAnimation = keyframes`
from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const SpinnerBody = styled.div<Props>`
  height: ${(props) => (props.height ? props.height : "32px")};
  width: ${(props) => (props.width ? props.width : "32px")};
  border: ${(props) =>
    (props.borderWidth ? props.borderWidth : "4px")} solid ${props => props.theme.colors.grey};
  border-top-color: ${(props) => (props.borderColor ? props.borderColor : props.theme.colors.secondary)};
  border-radius: 50%;
  animation: ${spinnerAnimation}
    ${(props) => (props.duration ? `${props.duration}ms` : "800ms")} linear infinite;
`;