import styles from "@/styles/index.module.css"
const Navigation = () =>{
return (
    <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="./home">Home</a>
          <a href="./acerca">Acerca de</a>
        </nav>

        <div>
        <h1 className="text-3xl font-bold underline">
        Jocelyn Magali
        </h1>
        </div>
      </div>
   )
}
export default Navigation