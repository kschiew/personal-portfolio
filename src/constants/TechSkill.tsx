export enum TechSkill {
  JavaScript,
  TypeScript,
  PostgreSQL,
  React,
  NodeJs,
  NestJs,
  Aws,
  Pulumi,
  Sst,
  AngularJs,
  Kotlin,
  Java,
  Django,
  PHP,
  GraphQL,
  Python,
  Mercurial,
  Express,
}

export const getTechSkillIcon = (techSkill?: TechSkill) => {
  if (techSkill === undefined) {
    return
  }

  const classKey = TechSkill[techSkill].toLowerCase();

  return <i className={`devicon-${classKey}-plain`} style={{fontSize: '64px'}}>{TechSkill[techSkill]}</i>;
};
