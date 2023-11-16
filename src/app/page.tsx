import Link from "next/link";
import Inicio from "../../components/inicio/Inicio";


// import styles from './page.module.css'

const api = async ()=>{
  const data = await fetch("http://localhost:3000/api/tasks")
  const allData = await data.json()
  return allData
}
export default async function Home() {
  const data = await api()
  console.log(data);
  
  return (
    <main>
      <Inicio/>
      <div className="moreSold">
        <div className="moreSold__content">
          <h1>More sold</h1>
          <div className="content__products">
            {data.map((p:TProduct)=>{
              return <img key={p.id} src={p.img} alt="" />
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
