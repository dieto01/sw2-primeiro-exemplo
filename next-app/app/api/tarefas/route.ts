import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        mensagem: "ola next"
    });
    
}

export async function POST(){
    return NextResponse.json({
        mensagem: "ola next-post"
    });
}