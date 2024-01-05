import styled from "styled-components"
import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { MaxWidthWrapper } from "../components/MaxWidthWrapper"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Children = styled.div`
  flex-grow: 1;
`
export const Layout = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    return (
      <MaxWidthWrapper>
      <Container>
          <Header />
          <Children>{children}</Children>
          <Footer />
        </Container>
      </MaxWidthWrapper>
    );
}