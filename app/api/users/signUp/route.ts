import User from '@/models/userModel';
import connectToDb from '@/lib/database';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateToken } from '@/lib/utils/generateToken';

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

export async function POST(request: NextRequest) {
  const body: RequestBodyTypes = await request.json();

  //   console.log(body);

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: 'Please supply the required credentials' },
      { status: 400 }
    );
  }

  // connect to database
  console.log('connecting...');
  await connectToDb();
  console.log('connected');

  // CHECK IF USER ALREADY EXISTS
  const user = await User.findOne({ email });

  // console.log(user);

  if (user) {
    // throw new Error('Email has already been used')
    return NextResponse.json(
      { error: 'Email has already been used' },
      { status: 400 }
    );
  } else {
    // 'use server'
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // console.log(hashedPassword);

    // add user to database
    const user: UserTypes = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // generate jwt
    const token = generateToken(user._id);
    // console.log(token);

    // set cookie
    const response = NextResponse.next();
    const cookie = response.cookies.set('ecocentury-token', token, {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Secure in production
    });

    console.log(cookie);

    // return user credentials
    return NextResponse.json(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      {
        status: 201,
        headers: {
          'Set-Cookie': `token=${token}; httpOnly; path=/`,
        },
      }
    );
    // return NextResponse.json({ message: "Create User" });
  }
}
