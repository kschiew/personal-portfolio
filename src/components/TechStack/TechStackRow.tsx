import styled from "styled-components"
import { TechSkill, getTechSkillIcon } from "../../constants/TechSkill"

type TechStackRowProps = {
    techStack: TechSkill[]
}

const Wrapper = styled.div`
  display: flex;
  padding: 8px 0;
`;

export const TechStackRow = ({techStack}: TechStackRowProps) => {
    return (
        <Wrapper>
            {techStack.map(techSkill => getTechSkillIcon(techSkill))}
        </Wrapper>
    )
}