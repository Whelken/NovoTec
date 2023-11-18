import { NextResponse } from "next/server";
import DB from "../../../../database/db";

export async function GET() {
    const db = new DB
    const data = await db.getAll()
    const filter = data.filter((date)=> date.offer === true)
    const ofertes = JSON.stringify(filter)

    return new NextResponse(ofertes,{
        headers: {'Content-type' : 'application/json'},
        status: 200,
    })
}