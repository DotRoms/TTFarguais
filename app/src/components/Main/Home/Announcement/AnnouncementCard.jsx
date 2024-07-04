import Image from "next/image"
import ButtonGreen from "../../ButtonGreen"
export default function AnnouncementCard({src, alt, title, description, url}) {
  return (
    <article className="flex p-4 w-full border-b  md:w-4/6">
     <div className="hidden sm:block w-2/4 relative">
        <Image
          className="absolute top-0 left-0 h-full w-full object-cover"
          src={src}
          layout="fill"
          alt={alt}
        />
      </div>
      <div className="  p-4 sm:w-2/4">
        <h3 className="font-bold uppercase mb-4">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <ButtonGreen title="En savoir plus" url={url}></ButtonGreen>
      </div>
    </article>
  )
}