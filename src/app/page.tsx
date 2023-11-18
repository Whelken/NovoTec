import Link from "next/link";
import Inicio from "../../components/inicio/Inicio";


// import styles from './page.module.css'

const api = async ()=>{
  const data = await fetch("http://localhost:3000/api/ofertes",{
    cache: "no-store"
  })
  const allData = await data.json()
  return allData
}
export default async function Home() {
  const data = await api()
  
  return (
    <main>
      <Inicio/>
      <div className="moreSold">
        <div className="moreSold__content">
          <h1>More sold</h1>
          <div className="content__products">
            {data.map((p:TProduct)=>{
              return (
                <>
                </>
              )
            })}
          </div>
          <Link href="/">
            <button>see everything</button>
          </Link>
        </div>
      </div>
    </main>
  )
}
