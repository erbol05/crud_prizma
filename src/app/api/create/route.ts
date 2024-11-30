import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  const data = await prisma.todo.findMany();
  return NextResponse.json({ res: data });
};

export const POST = async (req: NextRequest) => {
  const { username, age } = await req.json();

  try {
    await prisma.todo.create({
      data: {
        age: age,
        username: username,
      },
    });
    return NextResponse.json({ message: "Uspeshno dobavleno" });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
};

export const DELETE = async (id: NextRequest) => {
  const { searchParams } = new URL(id.url);
  const itemId = searchParams.get("id");
  await prisma.todo.delete({
    where: {
      id: +itemId!,
    },
  });
  return NextResponse.json({ message: "Element udalen" });
};

export const PUT = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const itemId = searchParams.get("id");
  const { username, age } = await req.json();

  await prisma.todo.update({
    where: {
      id: +itemId!,
    },
    data: {
      username: username,
      age: age,
    },
  });
  return NextResponse.json({ message: "Ozgordy" });
};
