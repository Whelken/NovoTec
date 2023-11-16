import { NextResponse } from "next/server";
import DB from "../../../../database/db";

export async function GET() {
    const db = new DB
    const data = await db.getAll()
    const allData = JSON.stringify(data)

    return new NextResponse(allData,{
        headers: {'Content-type' : 'application/json'},
        status: 200,
    })
}