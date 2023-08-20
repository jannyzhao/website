import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  image: StaticImageData;
  title: string;
  badges: string[];
  url: string;
}

export default function ProjectCard({
  children,
  image,
  title,
  badges,
  url,
}: CardProps) {
  return (
    <div>
      <a href={url} target="_blank">
        <div className="card card-compact max-w-xs bg-base-200 border">
          <figure>
            <Image alt="" src={image} className="object-cover h-44" />
          </figure>
          <div className="card-body overflow-auto h-80">
            <h2 className="card-title text-md">{title}</h2>
            <p className="font-light">{children}</p>
            <ul className="card-actions">
              {badges.map((badge) => (
                <li className="badge badge-outline" key={badge}>
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
}
