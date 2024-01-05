import styled from "styled-components";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { Experience } from "./Experience.types";
import { Text } from "@radix-ui/themes";
import { TechStackRow } from "../../TechStack/TechStackRow";

type ExperienceCardProps = Experience;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
`;

const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

const JobTitle = styled(Text)``;

const Organization = styled(Text)``;

const DetailsBlock = styled.div`
  padding: 4px;
`;

const ContributionsList = styled.ul``;

const ContributionListItem = styled.li``;

const Contribution = styled(Text)`
  text-align: left;
`;

const TechStackTitle = styled(Text)`
  font-weight: 600;
  font-size: 1rem;
`;

export const ExperienceCard = ({
  jobTitle,
  organization,
  startDate,
  endDate,
  contributions,
  techStack,
}: ExperienceCardProps) => {
  return (
    <Wrapper>
      <MainBlock>
        <JobTitle>{jobTitle}</JobTitle>
        <Organization>{organization}</Organization>
        <ExperienceTimeline
          startDate={startDate}
          endDate={endDate}
        ></ExperienceTimeline>
      </MainBlock>
      <DetailsBlock>
        <ContributionsList>
          {contributions.map((contribution) => (
            <ContributionListItem>
              <Contribution>{contribution}</Contribution>
            </ContributionListItem>
          ))}
        </ContributionsList>
        <TechStackTitle>Tech Stack:</TechStackTitle>
        <TechStackRow techStack={techStack} />
      </DetailsBlock>
    </Wrapper>
  );
};
