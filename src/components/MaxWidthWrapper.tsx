type MaxWidthWrapperProps = {
    children: JSX.Element | JSX.Element[]
}

export const MaxWidthWrapper = ({children}: MaxWidthWrapperProps) => {
    return <div className="max-w-screen-xl mx-auto">{children}</div>
}