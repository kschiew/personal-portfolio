import styled from "styled-components";
import { TechSkill } from "../../constants/TechSkill";

type TechSkillIconProps = {
  techSkill: TechSkill;
};

const Wrapper = styled.i`
    display: inline-flex;
    flex-direction: column;
    margin-right: 16px;
`

const IconLabel = styled.span`
    font-size: 0.75rem;
    opacity: 0;
    ${Wrapper}:hover & {
        opacity: 1;
        transition-duration: .2s;
        text-align: center;
    }
`

export const TechSkillIcon = ({ techSkill }: TechSkillIconProps) => {
  if (techSkill === undefined) {
    return;
  }

  const classKey = TechSkill[techSkill].toLowerCase();

  return (
    <Wrapper className={`devicon-${classKey}-plain`} style={{ fontSize: "3rem" }}>
      <IconLabel>{TechSkill[techSkill]}</IconLabel>
    </Wrapper>
  );
};
