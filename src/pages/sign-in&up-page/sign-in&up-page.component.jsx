import React from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-in&up.styles.scss";

function SignPage() {
  return (
    <div className="sign-in-and-sign-up">
      <SignInForm />
      <SignUp />
    </div>
  );
}

export default SignPage;
