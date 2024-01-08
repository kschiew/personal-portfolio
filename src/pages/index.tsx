import { Layout } from "../layout/Layout";
import { Section } from "../components/Section";
import { HomepageHeroSection } from "../components/Homepage/HomepageHeroSection";
import EducationExperiences from "../data/education-experiences.json";
import WorkExperiences from "../data/work-experiences.json";
import { WorkExperienceCard } from "../components/Homepage/Experience/WorkExperienceCard";
import { TechSkill } from "../constants/TechSkill";
import { Text, Heading, Link } from "@radix-ui/themes";
import { EducationExperienceCard } from "../components/Homepage/Experience/EducationExperienceCard";
import styled from "styled-components";

const AboutText = styled(Text)``;
const ContactText = styled(Text)``;
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
        <AboutText>
          Instead of labeling myself as a software engineer, I resonate more
          with the title of "product engineer." I love coding not just because
          it's fun; it stems from the satisfaction that comes from creating a
          product. Somewhere across the globe, there exists someone who
          discovers true joy in using what I've crafted. For me, code is merely
          a pathway, a means to a fulfilling end.
          <br></br>
          <br></br>
          Outside of work, I (used to) play a lot of basketball. I read a little
          as well - I'm currently reading <i>Sapiens</i> and having a hard time
          putting it down.
        </AboutText>
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
      <Section>
        <Heading mb="4" size="8">
          Contact
        </Heading>
        <ContactText>
          Feel free to drop me an email at{' '}
          <Link
            href="mailto:contact@kokseng.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact@kokseng.dev
          </Link>
          ! Alternatively, drop me a message on{" "}
          <Link
            href="https://sg.linkedin.com/in/kok-seng-chiew-724926156"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          .
        </ContactText>
        <ContactText></ContactText>
      </Section>
    </Layout>
  );
};

export default HomePage;
