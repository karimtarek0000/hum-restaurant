"use client";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ChangeEvent, useState } from "react";
import LoginModal from "./LoginModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  minWidth: "450px",
  boxShadow: 24,
  p: 4,
};

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  password: string;
};

export type LoginInProps = {
  inputs: Inputs;
  setFormData(e: ChangeEvent<HTMLInputElement>): void;
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputs, setInputs] = useState<Inputs>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const setFormData = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setInputs((prevData) => {
      return { ...prevData, [target.name]: target.value };
    });
  };

  const styleButton = {
    signUp: "border p-1 px-4 rounded",
    signIn: "bg-blue-400 text-white border p-1 px-4 rounded mr-3",
  };

  const renderTitle: Function = (title1: string, title2: string): string => {
    return isSignIn ? title1 : title2;
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className={`${isSignIn ? styleButton.signIn : styleButton.signUp}`}
      >
        {renderTitle("Sign in", "Sign up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="px-3">
            {/* HEADER */}
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              <h3 className="text-center">
                {renderTitle("sign in with HUM", "Create account with HUM")}
              </h3>
            </div>
            {/* CONTENT */}
            <div className="mt-2">
              <LoginModal inputs={inputs} setFormData={setFormData} />

              <button className="uppercase mt-5 bg-red-500 rounded px-3 py-2 w-[100%] text-white">
                {renderTitle("login", "signup")}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
