import styled from "styled-components";
import { IContentWrapperProps } from "./ContentWrapper";


export const StyledContentWrapper = styled.div<Partial<IContentWrapperProps>>`
  max-width: ${({width}) => width ? `${width}px` : '1100px'};
  width: 100%;
  height: 100%;
  margin: ${({customMargin}) => customMargin ? customMargin === 'left' ? '0 0 0 calc((100vw - 1100px)/2)' : '0 calc((100vw - 1100px)/2) 0 auto' : '0 auto'};
`