import styled from "styled-components"

type MaxWidthWrapperProps = {
    children: JSX.Element | JSX.Element[]
}

const Wrapper = styled.div`
   max-width: 990px;
   margin-inline: auto;
`

export const MaxWidthWrapper = ({children}: MaxWidthWrapperProps) => {
    return <Wrapper>{children}</Wrapper>
}