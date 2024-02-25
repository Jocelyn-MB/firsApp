import Image from "next/image";

// import styles from "@/styles/index.module.css";

export default function Home() {
  return (
    <div className="flex h-screen items-center static justify-center">
      <div className="relative text-center">
        <Image
          src="/img/art.jpg"
          width={500}
          height={600}
          alt="THEME_ART_EXHIBITION_GettyImages"
        />
        <p className="text-2x1 font-bold ">
          Arte
        </p>
      </div>
    </div>
  );
}


//se quita <navigation>