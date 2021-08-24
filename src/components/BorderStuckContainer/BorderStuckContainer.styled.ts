import styled from "styled-components";

interface IProps {
  inversed?:boolean
}
export const StyledBorderStuck = styled.div<IProps>`
  width: 89.5%;
  max-width: 1720px;
  margin-right:${({ inversed }) =>!inversed && 'auto'};
  margin-left:${({ inversed }) =>inversed && 'auto'};
`