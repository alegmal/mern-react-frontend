//TODO: form that renders password and email with validation (password length + email)
import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/utils/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Card from "../../shared/components/UIElements/Card";
import "./Auth.css"

const Auth = () => {
  const [formState, inputHandle] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const switchModeHandler = (event) => {
    event.preventDefault();
    console.log("switching to sign up");
  };

  return (
    <Card className="authenticcation">
      <form onSubmit={placeSubmitHandler}>
        <Input
          id="email"
          element="input"
          type="email"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
          onInput={inputHandle}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Your password must be minimum 5 characters long"
          onInput={inputHandle}
        />

        <Button type="submit" disabled={!formState.isValid}>
          Login
        </Button>
      </form>
      <Button type="submit" onSubmit={switchModeHandler}>
        Sign Up
      </Button>
    </Card>
  );
};

export default Auth;
