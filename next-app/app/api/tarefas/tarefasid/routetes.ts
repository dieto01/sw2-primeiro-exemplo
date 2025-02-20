import { NextResponse } from "next/server";

let tasksts = [
    { id:1, title : 'apreder nextjs'},
    { id:2, title : 'criar api rest'}

];


import tasks from '@/dados.json';

export async function GET(request: Request, context: any){
    const  { params } = context;

    let resultado = null;

    tasksts.forEach((item) => {
        if (item.id == params.tarefasid) {

            resultado = item;
        }
    });

  return NextResponse.json( resultado)

}

