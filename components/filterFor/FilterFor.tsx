import { ReactNode } from "react";
import "./FilterFor.css";
import Link from "next/link";

export const FilterFor = ({
  children,
  type,
}: {
  children: ReactNode;
  type: string | string[];
}): JSX.Element => {
  const links: linkBar[] = [
    { link: "/dron%20y%20camara", txt: "Dron y Cámara" },
    { link: "/TV%20y%20cinema", txt: "TV y Cinema" },
    { link: "/computadora", txt: "Computadora" },
    { link: "/technology", txt: "Technology" },
    { link: "/bocina", txt: "Bocina" },
    { link: "/celular", txt: "Bocina" },
    { link: "/offer", txt: "Offer" },
    { link: "/bestSellers", txt: "bestSellers" },
    { link: "/all", txt: "All" },
    { link: "/table", txt: "Table" },
    { link: "/audifono", txt: "Audífono" },
  ];

  return (
    <>
      <div className="contProducts">
        <div className="contProducts__contContainers">
          <div className="contContainers__title">
            <h1>
              {type === "TV%20y%20cinema" || type === "dron%20y%20camara"
                ? type.replace(/%20/g, " ")
                : type}
            </h1>
          </div>
        </div>
        <div className="contProducts__navBarFilter">
          <div className="navBarFilter__contBarProducts">
            <div className="contBarProducts__title">
              <h2>Filter for...</h2>
            </div>
            <ul className="contBarProducts__barLink">
              {links.map((date) => (
                <Link key={date.link} href={date.link}>
                  <li
                    className={
                      type === date.link.replace("/", "")
                        ? "barLink__selected"
                        : "barLink__normal"
                    }
                  >
                    {date.txt}
                  </li>
                </Link>
              ))}
            </ul>
            <input type="range" name="" id="" min="984" max="999" />
          </div>
          <div className="contProducts__productsForFilter">{children}</div>
        </div>
      </div>
    </>
  );
};
