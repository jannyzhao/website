import Image from "next/image";
import rizzume from "@/public/images/rizzume-demo.gif";
import budgetMe from "@/public/images/budgetme-demo.gif";
import ProjectCard from "@/components/ProjectCard";
import PictureCard from "@/components/PictureCard";
import goFishing from "@/public/images/gofishing-demo.gif";

export default function Projects() {
  return (
    <div className="flex items-center justify-center p-4 md:p-16 lg:p-24 gap-4 flex-col md:flex-row">
      <ProjectCard
        image={rizzume}
        title="Rizzume"
        badges={["React", "Tailwind", "TypeScript", "Vercel"]}
        url="https://rizzume.vercel.app/"
      >
        <b className="font-semibold">
          DeveloperWeek CloudX Hackathon Challenge Winner - 2024
        </b>{" "}
        <p className="mt-4">
          Ever wondered how your resume compares to the job description of the
          role that you&apos;re interested in? In other words, how much{" "}
          <i>rizz</i> does your resume have? Find out using Rizzume!
          <p className="mt-5">Check it out! ={">"}</p>
        </p>
      </ProjectCard>

      <ProjectCard
        image={budgetMe}
        title="Budget Me"
        badges={["React", "MongoDB", "Express.js", "Node.js"]}
        url="https://budgetme.onrender.com/"
      >
        How do you manage your money? With Budget Me, you can easily manage your
        finances. When you input your income and expenses, you will be able to
        see a chart of the areas where you&apos;re spending the most money.
        <p className="mt-5">Check it out! ={">"}</p>
      </ProjectCard>

      <ProjectCard
        image={goFishing}
        title="Go Fishing"
        badges={["JavaScript", "HTML", "CSS"]}
        url={"https://jannyzhao.github.io/go-fishing/"}
      >
        Inspired by Club Penguin&apos;s fishing game, players can try their best
        to catch as much fish as possible. Feel a rush of nostalgia as you
        compete in this adorable fishing game.{" "}
        <p className="mt-4">
          <b className="font-semibold">Hint:</b> The small fish are fast but
          worth more!
        </p>
        <p className="mt-5">Check it out! ={">"}</p>
      </ProjectCard>
    </div>
  );
}
