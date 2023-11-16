import { NextRequest, NextResponse } from "next/server";
import DB from "../../../../../database/db";

export async function GET(req:NextRequest,{params}:{params:{id:string}}) {
    const id = params.id

    const db = new DB
    const data = await db.getById(id as string)
    const product = JSON.stringify(data)

    return new NextResponse(product,{
        headers: {'Content-type' : 'application/json'},
        status: 200,
    })
}