import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
const Form = ({ isSignInPage = false }) => {
  const [data, setData] = useState({
    ...Button(
      !isSignInPage && {
        fullName: "",
      }
    ),
    email: "",
    password: "",
  });
  

  return (
    <div className="bg-white w-[420px] h-[520px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-extrabold">
        Welcome {isSignInPage && "Back"}
      </div>
      <div className="text-xl font-light mb-9">
        {isSignInPage ? "Sign in to get explore" : "Sign up now to get started"}
      </div>
      <form
        className="flex flex-col items-center w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        {!isSignInPage && (
          <Input
            label="Full name"
            name="name"
            placeholder="Enter your full name"
            className="mb-6 w-[75%]"
            value={data.fullName}
            onChange={(e) => setData({ ...data, fullName: e.target.value })}
          />
        )}
        <Input
          label="Email address"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="mb-6 w-[75%]"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your Password"
          className="mb-14 w-[75%]"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <Button
          label={isSignInPage ? "Sign in" : "Sign up"}
          type="submit"
          className="w-[50%] mb-2"
        />
      </form>
      <div>
        {isSignInPage ? "Didn't have an account?" : "Already have an account?"}{" "}
        <span className="text-primary cursor-pointer underline">
          {isSignInPage ? "Sign up" : "Sign in"}
        </span>
      </div>
    </div>
  );
};

export default Form;
