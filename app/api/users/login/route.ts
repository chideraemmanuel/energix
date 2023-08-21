import connectToDb from '@/lib/database';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import { compare } from 'bcrypt';
import { generateToken } from '@/lib/utils/generateToken';

interface RequestBodyTypes {
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

  const { email, password } = body;

  // connect to database
  await connectToDb();

  // CHECK IF USER ALREADY EXISTS
  const user: UserTypes | undefined | null = await User.findOne({
    email,
  });

  // console.log(user);

  if (user) {
    const passwordMatches = await compare(password, user.password);
    // console.log(passwordMatches);

    if (passwordMatches) {
      // generate jwt
      const token = generateToken(user._id);
      // console.log(token);

      // set cookie
      // const response = NextResponse.next();
      // const cookie = response.cookies.set('ecocentury-token', token, {
      //   maxAge: 60 * 60 * 24 * 7, // 1 week
      //   httpOnly: true,
      //   secure: process.env.NODE_ENV === 'production', // Secure in production
      // });

      // console.log(cookie);

      // return user credentials
      return NextResponse.json(
        {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        {
          headers: {
            'Set-Cookie': `token=${token}; httpOnly; path=/`,
          },
        }
      );
    } else {
      return NextResponse.json(
        { error: 'Incorrect password' },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json(
      { error: 'No user with the provided email' },
      { status: 400 }
    );
  }

  //   return NextResponse.json({ message: "login user" });
}
