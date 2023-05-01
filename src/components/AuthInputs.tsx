"use client";
import { AuthProps } from "./AuthModal";

function AuthInputs({ inputs, setFormData, isSignIn }: AuthProps): JSX.Element {
  return (
    <div className=" flex flex-col justify-center gap-2 mt-3">
      {!isSignIn && (
        <>
          <div className="flex flex-col justify-center gap-1">
            <label htmlFor="firstName">First name: </label>
            <input
              className="border outline-none rounded px-3 py-2 border-gray-400"
              type="text"
              id="firstName"
              name="firstName"
              autoComplete="off"
              autoFocus
              value={inputs.firstName}
              onChange={setFormData}
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <label htmlFor="lastName">Last name: </label>
            <input
              className="border outline-none rounded px-3 py-2 border-gray-400"
              type="text"
              id="lastName"
              name="lastName"
              autoComplete="off"
              value={inputs.lastName}
              onChange={setFormData}
              placeholder="Enter your last name"
            />
          </div>
        </>
      )}

      <div className="flex flex-col justify-center gap-1">
        <label htmlFor="email">Email: </label>
        <input
          className="border outline-none rounded px-3 py-2 border-gray-400"
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          value={inputs.email}
          onChange={setFormData}
          placeholder="Enter your email"
        />
      </div>

      {!isSignIn && (
        <>
          <div className="flex flex-col justify-center gap-1">
            <label htmlFor="phone">Phone: </label>
            <input
              className="border outline-none rounded px-3 py-2 border-gray-400"
              type="text"
              id="phone"
              name="phone"
              autoComplete="off"
              value={inputs.phone}
              onChange={setFormData}
              placeholder="Enter your phone"
            />
          </div>
          <div className="flex flex-col justify-center gap-1">
            <label htmlFor="city">City: </label>
            <input
              className="border outline-none rounded px-3 py-2 border-gray-400"
              type="text"
              id="city"
              name="city"
              autoComplete="off"
              value={inputs.city}
              onChange={setFormData}
              placeholder="Enter your city"
            />
          </div>
        </>
      )}

      <div className="flex flex-col justify-center gap-1">
        <label htmlFor="password">Password: </label>
        <input
          className="border outline-none rounded px-3 py-2 border-gray-400"
          type="password"
          id="password"
          name="password"
          value={inputs.password}
          onChange={setFormData}
          placeholder="Enter your password"
        />
      </div>
    </div>
  );
}

export default AuthInputs;
