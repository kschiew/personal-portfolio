import styled from "styled-components";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { WorkExperience } from "./Experience.types";
import { Text } from "@radix-ui/themes";
import { TechStackRow } from "../../TechStack/TechStackRow";

type WorkExperienceCardProps = WorkExperience;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  padding: 16px 0;
`;

const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobTitle = styled(Text)``;

const Organization = styled(Text)``;

const DetailsBlock = styled.div``;
const DetailsList = styled.ul``;
const DetailListItem = styled.li``;

const DetailEntry = styled(Text)`
  text-align: left;
`;

const TechStackTitle = styled(Text)`
  font-weight: 600;
  font-size: 1rem;
`;

export const WorkExperienceCard = ({
  jobTitle,
  organization,
  startDate,
  endDate,
  details,
  techStack,
}: WorkExperienceCardProps) => {
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
        <DetailsList>
          {details.map((detailEntry) => (
            <DetailListItem>
              <DetailEntry>{detailEntry}</DetailEntry>
            </DetailListItem>
          ))}
        </DetailsList>
        <TechStackTitle>Tech Stack:</TechStackTitle>
        <TechStackRow techStack={techStack} />
      </DetailsBlock>
    </Wrapper>
  );
};
