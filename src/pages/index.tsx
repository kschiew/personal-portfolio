import { Layout } from "../layout/Layout";
import { Section } from "../components/Section";
import { HomepageHeroSection } from "../components/Homepage/HomepageHeroSection";
import Experiences from "../data/experiences.json";
import { ExperienceCard } from "../components/Homepage/Experience/ExperienceCard";
import { TechSkill } from "../constants/TechSkill";

export const HomePage = () => {
  return (
    <Layout>
      {/* Hero section */}
      <HomepageHeroSection />

      {/* Experience section */}
      <Section>
        {Experiences.experiences.map(
          ({
            jobTitle,
            organization,
            contributions,
            techStack,
            startDate,
            endDate,
          }) => (
            <ExperienceCard
              jobTitle={jobTitle}
              organization={organization}
              contributions={contributions}
              techStack={techStack.map(
                (key) => TechSkill[key as keyof typeof TechSkill]
              )}
              startDate={new Date(startDate)}
              endDate={endDate ? new Date(endDate) : null}
            ></ExperienceCard>
          )
        )}
      </Section>

      {/* Education section */}
      <Section></Section>

      {/* Contact section */}
      <Section></Section>
    </Layout>
  );
};

export default HomePage;
