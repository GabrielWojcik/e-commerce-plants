import { LoginBtn } from "@/components/LoginBtn";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession();

  if (!session) {
    return redirect("/");
  }

  return (
    <div>
      <LoginBtn />
    </div>
  );
}
