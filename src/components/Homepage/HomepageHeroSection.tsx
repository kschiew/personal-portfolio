import styled from "styled-components";
import * as Avatar from "@radix-ui/react-avatar";
import KokSengImage from "../../assets/images/kokseng.jpg";
import { Button, Heading, Link, Text } from "@radix-ui/themes";

export const HomepageHeroSection = () => {
  const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
  `;
  const AvatarRoot = styled(Avatar.Root)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    width: 250px;
    height: 250px;
    border-radius: 100%;
    background-color: var(--black-a3);
    margin-bottom: 16px;
  `;

  const AvatarImage = styled(Avatar.Image)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
  `;

  const Title = styled(Heading)`
    font-size: xx-large;
    margin-block: 16px;
  `;

  const Paragraph = styled(Text)`
    font-size: large;
    margin-block: 16px;
  `;

  const ResumeButton = styled(Button)`
    margin-top: 16px;
  `;
  return (
    <Section>
      <AvatarRoot>
        <AvatarImage src={KokSengImage} alt="Kok Seng avatar image" />
      </AvatarRoot>
      <Title>Hi! I'm Kok Seng.</Title>
      <Paragraph>I build all sorts of fun software projects.</Paragraph>

      <Paragraph>
        Currently, I'm working as a software engineer at{" "}
        <Link href="https://www.open.gov.sg/people/kokseng" target="_blank" rel="noopener noreferrer">Open Government Products.</Link>
      </Paragraph>

      <ResumeButton>View my resume here</ResumeButton>
    </Section>
  );
};
