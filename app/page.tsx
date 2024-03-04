
'use client'
import Image from "next/image";
import Head from 'next/head';
import Counter from './components/Counter';

// Importa los estilos si es necesario
// import styles from "@/styles/index.module.css";

// Componente para la sección de Arte
function ArteSection() {
  return (
    <div className="flex h-screen items-center static justify-center">
      <div className="relative text-center">
        <Image
          src="/img/art.jpg"
          width={500}
          height={600}
          alt="THEME_ART_EXHIBITION_GettyImages"
        />
        <p className="text-2xl font-bold">
          Arte
        </p>
      </div>
    </div>
  );
}

// Componente principal Home que renderiza las secciones correspondientes
export default function Home() {
  return (
    <div>
      <Head>
        <title>Contador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Renderiza la sección de Arte */}
        <ArteSection />

        {/* Renderiza el contador */}
        <Counter />
      </main>
    </div>
  );
}

//se quita <navigation>