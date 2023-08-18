import jannyPhoto from "@/public/images/janny-photo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center p-4 md:p-16 lg:pt-24">
      <div className="flex flex-col items-center md:flex-row justify-center gap-20 max-w-xl">
        <div>
          <div className="avatar online">
            <div className="w-60 md:w-45 lg:w-60 rounded-full">
              <Image alt="janny-photo" src={jannyPhoto} />
            </div>
          </div>
          {/* <span className="badge">Software Engineer</span> */}
        </div>
        <div className="gap-4 text-center">
          <h1 className="font-sans text-xl gap-4 mb-4">
            Hi there! I&apos;m Janny 👋
          </h1>
          <p className="mb-4">
            I&apos;m a software engineer with a background in tech recruiting.
            I&apos;m passionate about creating tools that help make
            people&apos;s lives easier. When I&apos;m not coding, I enjoy doing
            yoga 🧘‍♀️ and going hiking.
          </p>
          <p>
            Feel free to checkout my projects{" "}
            <Link href="/projects" className="link link-success">
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
