import "../globals.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-20 px-4 bg-black ">
        <a className="link-underline link-underline-black  text-white font-semibold" href="/">
          Jocelyn Magali
        </a>
        <ul className="flex gap-4  text-white">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/acerca">About Me</Link>
          </li>
        </ul>
     
    </nav>
    

    // <div className={styles.container}>
    //   <nav className={styles.navbar}>
    //     <Link href="/home">Home</Link>
    //     <Link href="/acerca">Acerca de</Link>
    //     <h1 className={`${styles.h1} ${styles.navLink}`}>Jocelyn Magali</h1>
    //   </nav>
    // </div>
  );
};

export default Navigation;
