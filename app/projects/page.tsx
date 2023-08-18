import Image from "next/image";
import rizzume from "@/public/images/rizzume.png";
import budgetMe from "@/public/images/budget-me.png";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="flex items-center justify-center p-4 md:p-24 gap-4 flex-col md:flex-row">
      <ProjectCard
        image={rizzume}
        title="Rizzume"
        badges={["React", "Tailwind", "TypeScript", "Vercel"]}
        url="https://rizzume.vercel.app/"
      >
        <b className="font-heavy">DeveloperWeek CloudX Hackathon Winner</b>{" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum alias ad
        tenetur minus natus ratione quasi omnis nisi consectetur quod, quo
        repellendus dolor velit sed hic corrupti! Harum, natus hic?
      </ProjectCard>

      <ProjectCard
        image={budgetMe}
        title="BudgetMe"
        badges={["React", "Tailwind", "TypeScript", "Vercel"]}
        url=""
      >
        <b className="font-heavy">DeveloperWeek CloudX Hackathon Winner</b>{" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum alias ad
        tenetur minus natus ratione quasi omnis nisi consectetur quod, quo
        repellendus dolor velit sed hic corrupti! Harum, natus hic?
      </ProjectCard>
    </div>
  );
}
