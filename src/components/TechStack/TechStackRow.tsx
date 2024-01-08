import styled from "styled-components"
import { TechSkill  } from "../../constants/TechSkill"
import { TechSkillIcon } from "./TechSkillIcon";

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
            {techStack.map(techSkill => <TechSkillIcon techSkill={techSkill}/>)}
        </Wrapper>
    )
}