
import { NextRequest, NextResponse } from "next/server";
import DB from "../../../../../database/db";

export async function GET(req: NextRequest, { params }: { params: { types: string } }) {
    const types = params.types

    const db = new DB
    const allData = await db.getAll()
    const filter = allData.filter((data) => data.types === types)

    const data = JSON.stringify(filter)

    return new NextResponse(data, {
        headers: { 'Content-type': 'application/json' },
        status: 200,
    })
}