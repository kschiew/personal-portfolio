import * as Menubar from "@radix-ui/react-menubar"

export const Header = () => {
    return (
        <header className="flex justify-between align items-center">
            <div>Kok Seng</div>
            <Menubar.Root>
                <Menubar.Menu>
                    
                </Menubar.Menu>
            </Menubar.Root>
        </header>
    )
}