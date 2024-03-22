import Image from "next/image";

// Componente que representa la sección de arte
function ArteSection() {
  return (
    <div className="flex justify-center items-center m-10">
      <div className="max-w-md text-center">
        <div className="relative rounded-full overflow-hidden mx-auto" style={{ width: '300px', height: '300px' }}>
          <Image
            src="/img/robotsito.jpg"
            width={300}
            height={300}
            alt="Robot de asistencia domiciliaria"
            className="rounded-full"
          />
        </div>
        <p className="text-lg font-semibold mt-8">
          Bienvenido a Homee,
        </p>
        <p className="text-lg mt-4">
          Un robot diseñado para brindar asistencia y compañía a los adultos mayores en la comodidad de sus hogares.
        </p>
        <p className="text-lg mt-4">
          Nuestro objetivo es mejorar la calidad de vida de quienes más amas, proporcionando cuidado y entretenimiento de manera segura y confiable.
        </p>
      </div>
    </div>
  );
}

// Componente principal Home
export default function Home() {
  return (
    <div>
      <main>
        {/* Renderiza la sección de Arte */}
        <ArteSection />
        {/*/Renderizar la parte de informacion */}
        <></>
      </main>
    </div>
  );
}
