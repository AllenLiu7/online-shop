import React from "react";
import "./custom-button.styles.scss";

function CustomButton({ children, isGoogleSignIn, inverted, ...otherprops }) {
  return (
    <button
      className={`${inverted ? "inverted-button" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherprops}
    >
      {children}
    </button>
  );
}

export default CustomButton;
