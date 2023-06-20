import React, { useState } from "react";
import { icon } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
  };

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

            <button
              className="btn btn-primary w-100  mt-2"
              type="submit"
              disabled={isLoading}
              onClick={loginHandler}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
