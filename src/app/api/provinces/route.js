import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async () => {
  const response = await axios.get("https://wilayah.id/api/provinces.json");
  return new NextResponse(JSON.stringify(response.data.data), { status: 200 });
};
