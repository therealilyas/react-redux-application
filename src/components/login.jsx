import React, { useState } from "react";
import { icon } from "../constants";
import { Input } from "../ui";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="text-center mt-5">
        <main className="form-signin w-25 m-auto">
          <form>
            <img className="mb-2" src={icon} alt="" width="72" />
            <h1 className="h3 mb-3 fw-normal">Please Login</h1>

            <Input
              label={"Email"}
              type={email}
              state={email}
              setState={setEmail}
            />
            <Input
              label={"Password"}
              type={"password"}
              state={password}
              setState={setPassword}
            />

            <button className="btn btn-primary w-100 py-2" type="submit">
              Login
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
