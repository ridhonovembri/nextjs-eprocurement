import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  // console.log("id==>", id);

  let data = [];

  if (id !== null) {
    const response = await axios.get(
      `https://wilayah.id/api/regencies/${id}.json`
    );

    data = response.data;
  }

  // console.log('data==>', data)
  
  return new NextResponse(JSON.stringify(data), { status: 200 });
};
