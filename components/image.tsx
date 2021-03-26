import Image from "next/image";

export const MyImage = () => (
    <Image
      src="/images/profile_logo.jpg" // Route of the image file
      height={250} // Desired size with correct aspect ratio
      width={250} // Desired size with correct aspect ratio
      alt="Your Name"
    />
  )