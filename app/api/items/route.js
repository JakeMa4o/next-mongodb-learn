import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/model";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const items = await Item.find();
  return NextResponse.json({items});
}