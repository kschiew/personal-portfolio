import styled from "styled-components";
import {Text} from '@radix-ui/themes'
import { formatDatetime } from "../../../utils/datetime";

export type ExperienceTimelineProps = {
    startDate: Date
    endDate: Date | null
}

export const ExperienceTimeline = ({startDate, endDate}: ExperienceTimelineProps) => {
    const Wrapper = styled(Text)`
    `

    return (
        <Wrapper>
            {formatDatetime(startDate)} - {endDate ? formatDatetime(endDate) : 'current'}
        </Wrapper>
    )
}