import styled from "styled-components";
import { Text } from "@radix-ui/themes";
import { formatDatetime } from "../../../utils/datetime";

export type ExperienceTimelineProps = {
  startDate: Date;
  endDate: Date | null;
};

const Wrapper = styled(Text)``;

export const ExperienceTimeline = ({
  startDate,
  endDate,
}: ExperienceTimelineProps) => {
  return (
    <Wrapper>
      {formatDatetime(startDate)} -{" "}
      {endDate ? formatDatetime(endDate) : "current"}
    </Wrapper>
  );
};
