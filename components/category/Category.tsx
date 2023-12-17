import Link from "next/link";
import "./Category.css";

export const Category = () => {
  const array: category[] = [
    {
      img: "./images/c22c23_01a8a61a9f6c4e3a97711b8c684050e9~mv2.webp",
      link: "/",
      type: "computadora",
    },
    {
      img: "./images/c22c23_7c88223cd6d647ca80670b82509dbf15~mv2.webp",
      link: "/",
      type: "celular",
    },
    {
      img: "./images/c22c23_2d5a87c251274b8083356fd1e61cf68d~mv2.webp",
      link: "/",
      type: "Dron y Cámara",
    },
    {
      img: "./icons/iconsInicial/icons8-oferta-96.png",
      link: "/",
      type: "Oferta",
    },
    {
      img: "./images/c22c23_9a6d29ecf9c640b28cc79f695e9fb3c2~mv2.webp",
      link: "/",
      type: "Tabletas",
    },
    {
      img: "./icons/iconsInicial/icons8-mejor-100 (3).png",
      link: "/",
      type: "Mas vendidos",
    },
    {
      img: "./images/c22c23_4fc66d5377a64a80a4c5a303bf338a5d~mv2.webp",
      link: "/",
      type: "TV y cinema",
    },
    {
      img: "./images/c22c23_35b786fdd0bb443e9ac09561af1569d3~mv2.webp",
      link: "/",
      type: "technology",
    },
    {
      img: "./images/c22c23_7b3b59adc71d48aea694647bfb4385b8~mv2.webp",
      link: "/",
      type: "bocina",
    },
    {
      img: "./images/c22c23_0d97e80aa2aa4072878ad49cbe04e926~mv2.webp",
      link: "/",
      type: "audifono",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="category__content">
          <div className="content__title">
            <h1>Store</h1>
          </div>
          <div className="content__navigate">
            {array.map((date) => (
              <Link href={date.link}>
                <div className="navigate__info">
                  <div className="info__content">
                    <div className="content__cont">
                      <div className="cont213__img">
                        <img src={date.img} alt="" />
                      </div>
                    </div>
                    <h3>{date.type}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
