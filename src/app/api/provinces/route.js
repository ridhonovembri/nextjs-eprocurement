import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async () => {
  let data = [];
  try {
    const res = await axios.get("https://wilayah.id/api/provinces.json");

    data = await res.data.data;
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err.message), {
      status: 500,
    });
  }
};
