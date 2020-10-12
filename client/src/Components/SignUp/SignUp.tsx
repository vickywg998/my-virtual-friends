import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";

interface FormData {
  name: FormField;
  email: FormField;
  password: FormField;
}

interface FormField {
  value: string;
  errors: string[];
}

const initialFormData: FormData = {
  name: {
      value: '',
      errors: []
  },
  email: {
    value: '',
    errors: []
  },
  password: {
    value: '',
    errors: []
  }
}

const SignUp = () => {

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  // const validateName = (value: string): string[] => {
  //   return value.length > 8 ? ['Invalid name length'] : [];
  // }

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    //setName(e.target.value);
    setFormData((formData: FormData) => ({
      ...formData,
      name: {
        value,
        errors: []
      }
    }))
  };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    //setEmail(e.target.value);
    setFormData(state => ({
      ...state,
      email: {
        value,
        errors: []
      }
    }))
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setFormData(state => ({
      ...state,
      password: {
        value,
        errors: []
      }
    }))
  };

  useEffect(() => {
    console.log(` Name: ${formData.name.value}, email: ${formData.email.value}, password: ${formData.password.value}`);
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        minLength={1}
        maxLength={30}
        value={formData.name.value}
        onChange={onNameChange}
        required
      />

      <input
        type="email"
        placeholder="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        value={formData.email.value}
        onChange={onEmailChange}
        required
      />

      <input
        type="password"
        placeholder="password"
        value={formData.password.value}
        onChange={onPasswordChange}
        required
      />

      <button type="submit" className="login-form-button">
        Create Account
      </button>
    </form>
  );
};

export default SignUp;
