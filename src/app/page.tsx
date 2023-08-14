import {cookies} from "next/headers";
import {redirect} from "next/navigation";

const page = () => {
  const cookie = cookies();
  const accessToken = cookie.get("accessToken");

  if (accessToken) {
    redirect("/workspace");
  } else {
    redirect("/login");
  }
};

export default page;
