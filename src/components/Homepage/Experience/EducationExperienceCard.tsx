import styled from "styled-components";
import { EducationExperience } from "./Experience.types";
import { ExperienceTimeline } from "./ExperienceTimeline";
import {Text} from '@radix-ui/themes'

type EducationExperienceCardProps = EducationExperience

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
`;

const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

const Organization = styled(Text)``;

const QualificationLevel = styled(Text)`
`

const DetailsBlock = styled.div`
  padding: 4px;
`;

const DetailsList = styled.ul``;
const DetailListItem = styled.li``;

const DetailEntry = styled(Text)`
  text-align: left;
`;



export const EducationExperienceCard = ({organization, startDate, endDate, details, qualificationLevel}: EducationExperienceCardProps ) => {
  return (
    <Wrapper>
      <MainBlock>
        <Organization>{organization}</Organization>
        <QualificationLevel>{qualificationLevel}</QualificationLevel>
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
      </DetailsBlock>
    </Wrapper>
  );
};
