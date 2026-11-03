import RegisterForm from "@/Components/Auth/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookNook | Register Account",
  description: "Browse Book By it's category",
};

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center rounded-3xl bg-surface p-6 my-16 max-w-xl mx-auto">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
