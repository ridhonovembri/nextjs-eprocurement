import { NextResponse } from "next/server";
import http from "../../http";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const { userName, email, password } = await req.json();
  
  const hashedPassword = await bcrypt.hash(password, 5);

  const data = {
    UserName: userName,
    Email: email,
    Password: hashedPassword,
  };

  try {
    await http.post("/user/post", data);
    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse(err.message, { status: 500 });
  }
};
