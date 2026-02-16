import Image from "next/image"

export function ProfileImage() {
  return (
    <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto">
      <Image
        src="/images/profile.PNG"
        alt="ishantgupta - Freelance Web Developer"
        width={224}
        height={224}
        className="rounded-2xl object-cover w-full h-full shadow-lg"
        priority
      />
    </div>
  )
}
