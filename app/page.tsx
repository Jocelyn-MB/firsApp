
'use client'
import Image from "next/image";
import Head from 'next/head';
import Counter from './components/Counter';


function ArteSection() {
  return (
    <div className="flex h-full items-center static justify-center m-10">
      <div className="relative text-center">
        <Image
          src="/img/art.jpg"
          width={500}
          height={500}
          alt="THEME_ART_EXHIBITION_GettyImages"
          style={{ maxWidth: "100%", height: "auto" , borderRadius: "10%"}}
        />
        <p className="text-2xl font-bold">
          Arte
        </p>
      </div>
    </div>
  );
}

// Componente principal Home que renderiza 
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