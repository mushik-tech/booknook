import LoginForm from "@/Components/Auth/LoginForm";
import { Spinner } from "@heroui/react";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "BookNook | Login Account",
  description: "Browse Book By it's category",
};

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center rounded-3xl bg-surface p-6 my-16 max-w-xl mx-auto">
      <Suspense fallback={<Spinner />}>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;
