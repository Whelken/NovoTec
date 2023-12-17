import { NextResponse } from "next/server";
import DB from "../../../../database/db";

export async function GET() {
    const db = new DB;
    const allDate = await db.getAll()
    const filter = allDate.filter((date)=> date.BestSellers)
    const bestSellers = JSON.stringify(filter)
    return new NextResponse(bestSellers,{
        status: 200,
        headers: {'Content-type' : 'application/json'},
    })
}