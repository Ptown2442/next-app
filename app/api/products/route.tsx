import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "milk", price: 4 },
    { id: 2, name: "honey", price: 3 },
    { id: 3, name: "almonds", price: 3 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json(
    { id: 10, name: body.name, price: body.price },
    { status: 201 }
  );
}
