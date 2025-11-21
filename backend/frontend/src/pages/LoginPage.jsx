import React from "react";
import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <SignIn />
    </div>
  );
};

export default LoginPage;
