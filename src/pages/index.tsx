import { Layout } from "../layout/Layout";
import { Section } from "../components/Section";
import { HomepageHeroSection } from "../components/Homepage/HomepageHeroSection";
import EducationExperiences from '../data/education-experiences.json'
import WorkExperiences from "../data/work-experiences.json";
import { WorkExperienceCard } from "../components/Homepage/Experience/WorkExperienceCard";
import { TechSkill } from "../constants/TechSkill";
import {Heading} from '@radix-ui/themes'
import { EducationExperienceCard } from "../components/Homepage/Experience/EducationExperienceCard";

export const HomePage = () => {
  return (
    <Layout>
      {/* Hero section */}
      <HomepageHeroSection />

      {/* About section */}
      <Section>
        <Heading mb="4" size="8">
          About Me
        </Heading>
      </Section>

      {/* Experience section */}
      <Section>
        <Heading mb="4" size="8">
          Experience
        </Heading>
        {WorkExperiences.experiences.map(
          ({
            jobTitle,
            organization,
            details,
            techStack,
            startDate,
            endDate,
          }) => (
            <WorkExperienceCard
              jobTitle={jobTitle}
              organization={organization}
              details={details}
              techStack={techStack.map(
                (key) => TechSkill[key as keyof typeof TechSkill]
              )}
              startDate={new Date(startDate)}
              endDate={endDate ? new Date(endDate) : undefined}
            ></WorkExperienceCard>
          )
        )}
      </Section>

      {/* Education section */}
      <Section>
        <Heading mb="4" size="8">
          Experience
        </Heading>
        {EducationExperiences.experiences.map(
          ({
            organization,
            details,
            startDate,
            endDate,
            qualificationLevel,
          }) => (
            <EducationExperienceCard
              organization={organization}
              details={details}
              startDate={new Date(startDate)}
              endDate={new Date(endDate)}
              qualificationLevel={qualificationLevel}
            ></EducationExperienceCard>
          )
        )}
      </Section>

      {/* Contact section */}
      <Section></Section>
    </Layout>
  );
};

export default HomePage;
