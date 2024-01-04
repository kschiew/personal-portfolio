import styled from "styled-components";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { Experience } from "./Experience.types";
import { Text } from '@radix-ui/themes'
import { TechStackRow } from "../../TechStack/TechStackRow";

type ExperienceCardProps = Experience
  
export const ExperienceCard = ({jobTitle, organization, startDate, endDate, contributions, techStack}: ExperienceCardProps) => {
const Wrapper = styled.div`
  display: flex;
`

const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
`

const JobTitle = styled(Text)``

const Organization = styled(Text)``

const DetailsBlock = styled.div``

const ContributionsList = styled.ul``

const ContributionListItem = styled.li``

const Contribution = styled(Text)``

const TechStackTitle = styled(Text)`
  font-weight: 600;
  font-size: 1rem;
`

  return (
    <Wrapper>
      <MainBlock>
        <JobTitle>{jobTitle}</JobTitle>
        <Organization>{organization}</Organization>
        <ExperienceTimeline startDate={startDate} endDate={endDate}></ExperienceTimeline>
      </MainBlock>
      <DetailsBlock>
        <ContributionsList>
          {contributions.map(contribution => (
            <ContributionListItem>
              <Contribution>
                {contribution}
              </Contribution>
              </ContributionListItem>
          ))}
        </ContributionsList>
        <TechStackTitle>Tech Stack:</TechStackTitle>
        <TechStackRow techStack={techStack}/>
      </DetailsBlock>
    </Wrapper>
  )
};
