import connectToDb from '@/lib/database';
import User from '@/models/userModel';
import { compare } from 'bcrypt';
import { verify } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
// import mongoose from 'mongoose';

interface RequestBodyTypes {
  name: string;
  email: string;
  password: string;
}

interface UserTypes {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export async function GET(request: NextRequest) {
  //   const token = request.cookies.get('energix-token')?.value;
  const token = request.cookies.get('token')?.value;

  if (!token) {
    // return NextResponse.redirect(new URL("/login", request.url));
    return NextResponse.json(
      { message: 'Not authorized, no token' },
      { status: 400 }
    );
  }

  const decoded = verify(token, process.env.JWT_SECRET!);
  //   console.log(decoded);
  //   return NextResponse.json(decoded);

  // connect to database
  await connectToDb();

  // CHECK IF USER EXISTS
  // @ts-ignore
  const user: UserTypes | undefined | null = await User.findById(decoded.id);

  // console.log(user);

  if (user) {
    return NextResponse.json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    return NextResponse.json({ message: 'Not authorized' });
  }
}
