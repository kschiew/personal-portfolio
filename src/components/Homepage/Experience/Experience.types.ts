import { TechSkill } from "../../../constants/TechSkill";

export type Experience = {
  jobTitle: string;
  organization: string;
  contributions: string[];
  techStack: TechSkill[]
} & ExperienceTimeline

export type ExperienceTimeline = {
    startDate: Date
    endDate: Date | null
}

