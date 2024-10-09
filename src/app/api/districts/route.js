import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  let data = [];
  try {
    if (id !== null) {
      const res = await axios.get(
        `https://wilayah.id/api/regencies/${id}.json`
      );

      data = await res.data.data;
    }

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify(err.message), {
      status: 500,
    });
  }
};
