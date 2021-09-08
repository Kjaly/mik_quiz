import styled from 'styled-components';

export const StyledPrivacyPolicy = styled.div`
  width: 100%;
`
export const StyledTextWrapper = styled.div`
  padding: 100px 20px;
`
export const StyledParagraph = styled.p`
  margin-bottom: 20px;
  font-size: 15px;
  color: ${({theme}) => theme.color.gray}
`
export const StyledTextTitle = styled.p`
  color: ${({theme}) => theme.color.black};
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`
export const StyledTextSubTitle = styled(StyledTextTitle)`
  font-size: 20px;
`
export const StyledTextSection = styled.div`
  margin-bottom: 40px;`

export const StyledAccentText = styled.span<{ color?: string }>`
  margin-bottom: 40px;
  color: ${({color}) => color};

`
