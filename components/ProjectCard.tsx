import Image, { StaticImageData } from "next/image";

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
            <h2 className="card-title flex justify-between text-md">
              {title}
              <button className="flex justify-center btn btn-xs bg-base-300">
                Check it out
              </button>
            </h2>
            <div className="font-light">{children}</div>
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
