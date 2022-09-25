import React, { useState } from "react";
import { Form } from "../../components";

export default function Login() {
  const [password, setPassword] = useState("");
  const [useName, setUsername] = useState("");
  const handleLogin = () => {};
  return (
    <Form>
      <Form.Label>Username</Form.Label>
      <Form.Input />
      <Form.Label>Password</Form.Label>
      <Form.Input />
      <Form.Button>Login</Form.Button>
    </Form>
  );
}
