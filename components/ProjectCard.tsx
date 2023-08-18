import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  title: string;
  body: React.ReactNode;
  badges: string[];
}

export default function ProjectCard({ image, title, body, badges }: CardProps) {
  return (
    <div className="card card-compact max-w-xs bg-base-200 h-96 border">
      <figure>
        <Image alt="" src={image} className="object-cover h-44" />
      </figure>
      <div className="card-body overflow-auto">
        <h2 className="card-title text-md">{title}</h2>
        <p className="font-light">{body}</p>
        <ul className="card-actions">
          {badges.map((badge) => (
            <li className="badge badge-outline" key={badge}>
              {badge}
            </li>
          ))}
        </ul>
        <div className="flex justify-end pt-4">
          <button className="btn btn-primary btn-sm">Check it out!</button>
        </div>
      </div>
    </div>
  );
}
