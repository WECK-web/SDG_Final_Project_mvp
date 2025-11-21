import React from "react";
import { SignUp } from "@clerk/clerk-react";

const SignupPage = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <SignUp />
    </div>
  );
};

export default SignupPage;
