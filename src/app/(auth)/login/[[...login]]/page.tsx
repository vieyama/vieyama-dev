"use client";
import {setCookie} from "cookies-next";
import {useRouter} from "next/navigation";

import {Button} from "~/components/ui";

const LoginComponent = () => {
  const {replace} = useRouter();
  const handleLogin = () => {
    setCookie("accessToken", "whahaha cookies", {maxAge: 60 * 6 * 24});
    replace("/workspace");
  };
  return (
    <div>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default LoginComponent;
