export enum TechSkill {
  JavaScript,
  TypeScript,
  PostgreSql,
  React,
  NodeJs,
  NestJs,
  Aws,
  Pulumi,
  Sst,
  Angular,
  Kotlin,
  Java,
  Django,
  PHP,
  GraphQL,
  Python,
  Mercurial
}

export const getTechSkillIcon = (techSkill: TechSkill) => {
  let classKey = "";
  switch (techSkill) {
    case TechSkill.JavaScript:
      classKey = "javascript";
      break;
    case TechSkill.TypeScript:
      classKey = "typescript";
      break;
    case TechSkill.PostgreSql:
      classKey = "postgresql";
      break;
    case TechSkill.React:
      classKey = "react";
      break;
    default:
      classKey = TechSkill[techSkill].toLowerCase();
    // Throws an error when it's fully implemented
  }
  return <i className={`devicon-${classKey}-plain`} style={{fontSize: '64px'}}></i>;
};
