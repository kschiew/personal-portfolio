import { Footer } from "../components/Footer/Footer"
import { Header } from "../components/Header/Header"
import { MaxWidthWrapper } from "../components/MaxWidthWrapper"

export const Layout = ({children}: {children: JSX.Element}) => {
    return (
      <MaxWidthWrapper>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </MaxWidthWrapper>
    );
}