import React from "react";
import SignInForm from "../sign-in-form/sign-in-form.component";
import SignUp from "../sign-up/sign-up.component";
import "./sign-in&up.styles.scss";

function SignPage(props) {
  return (
    <div className="sign-in-and-sign-up">
      <SignInForm />
      <SignUp />
    </div>
  );
}

export default SignPage;
