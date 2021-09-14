import styled from "styled-components";
import { IContentWrapperProps } from "./ContentWrapper";


export const StyledContentWrapper = styled.div<Partial<IContentWrapperProps>>`
  max-width: ${({width}) => width ? `${width}px` : '1100px'};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 40px;
`
