import { NextResponse } from "next/server";
import validator from "validator";

export async function POST(req: Request) {
  const { firstName, lastName, email, phone, city, password } =
    await req.json();

  const errorMessages: string[] = [];

  const validationSchema = [
    {
      valid: validator.isLength(firstName, { min: 2, max: 20 }),
      errorMessage: "First name must be at least 2 characters",
    },
    {
      valid: validator.isLength(lastName, { min: 2, max: 20 }),
      errorMessage: "Last name must be at least 2 characters",
    },
    {
      valid: validator.isEmail(email),
      errorMessage: "Email is invalid",
    },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: "Mobile phone is invalid",
    },
    {
      valid: validator.isLength(city, { min: 2 }),
      errorMessage: "City must be at least 2 characters",
    },
    {
      valid: validator.isStrongPassword(password),
      errorMessage: "Password is not strong enough",
    },
  ];

  validationSchema.forEach((input) => {
    if (!input.valid) errorMessages.push(input.errorMessage);
  });

  const success = NextResponse.json(
    {
      errorMessages: errorMessages.join(" | "),
    },
    {
      status: 400,
    }
  );
  const faild = NextResponse.json(
    { firstName, lastName, email, city, phone },
    { status: 201 }
  );

  return errorMessages.length ? success : faild;
}
