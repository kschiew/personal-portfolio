import { TechSkill } from "../../../constants/TechSkill";

export type Experience = {
  organization: string;
  details: string[];
} & ExperienceTimeline;

export type ExperienceTimeline = {
  startDate: Date;
  endDate: Date | undefined;
};

export type WorkExperience = Experience & {
  jobTitle: string;
  techStack: TechSkill[];
};

export type EducationExperience = Experience & {
  qualificationLevel: string
};
