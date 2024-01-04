import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import styled from "styled-components";

export const Header = () => {

    const Wrapper = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    const ListItem = styled(NavigationMenu.Item)`
      margin: 0 4px;
    `;
  return (
    <Wrapper>
      <div>Kok Seng</div>
      <NavigationMenu.Root>
        <NavigationMenu.List className="flex">
          <ListItem>
            <NavigationMenu.Link>About</NavigationMenu.Link>
          </ListItem>
          <ListItem>
            <NavigationMenu.Link>Experience</NavigationMenu.Link>
          </ListItem>
          <ListItem>
            <NavigationMenu.Link>Education</NavigationMenu.Link>
          </ListItem>
          <ListItem>
            <NavigationMenu.Link>Contact</NavigationMenu.Link>
          </ListItem>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </Wrapper>
  );
};
