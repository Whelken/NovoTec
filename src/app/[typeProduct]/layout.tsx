"use client";
import { useParams } from "next/navigation";
import "./page.css"
import { FilterFor } from "../../../components/filterFor/FilterFor";

export default function TypeProductLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const param = useParams();
  const type: string | string[] = param.typeProduct;

  return (
    <section>
      <FilterFor children={children} type={type}/>
    </section>
  );
}
