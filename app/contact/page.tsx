import jannyPhoto from "@/public/images/janny-photo.png";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex justify-center items-center p-4 md:p-16 lg:pt-24">
      <div className="flex flex-col items-center md:flex-row justify-center gap-20 max-w-xl">
        <div className="gap-4 text-center">
          <h1 className="font-sans text-xl gap-4 mb-4">Get in touch!</h1>
          <p className="mb-4">
            <Link href="https://www.linkedin.com/in/jannyzhao/" target="_blank">
              Linkedin
            </Link>
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
