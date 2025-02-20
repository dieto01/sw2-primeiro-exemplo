import { NextResponse } from "next/server";

let tasksts = [
    { id:1, title : 'apreder nextjs'},
    { id:2, title : 'criar api rest'}

];

export async function GET() {
    return NextResponse.json(tasksts);  
}

export async function POST(request: Request){
    const data = await request.json()
    return NextResponse.json({
      data
    });
}