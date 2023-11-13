import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from "../../../store/session";
import './SignUpFormPage.css'

import FormInputs from "../FormInputs/FormInputs";
import FormPageHeader from "../FormInputs/FormComponents/FormPageHeader/FormPageHeader.jsx";

function SignupFormPage() {
  const sessionUser = useSelector(state => state.session.user);

  // ! Don't forget to reactivate because loggedin users shouldn't be able to sign up
  // if (sessionUser) return <Redirect to="/" />;

  return (
    <>
      <div className="sign-up-form-background">
        <div className="sign-up-form-container">
          <FormPageHeader bgColor='transparent' />

          <form onSubmit={(e) => e.preventDefault()}>
            <FormInputs />
          </form>

          <div className="sign-up-page-footer">
            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service Apply.</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default SignupFormPage;