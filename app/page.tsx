import jannyPhoto from "@/public/images/janny-photo.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex">
        <div>
          <div className="avatar online">
            <div className="w-30 md:w-45 xl:w-60 rounded-full">
              <Image alt="janny-photo" src={jannyPhoto} />
            </div>
          </div>
          {/* <span className="badge">Software Engineer</span> */}
        </div>
        <div>Hi there! </div>
      </div>
    </div>
  );
}
