"use client";
import { signIn } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Separator,
  Surface,
  TextField,
  toast,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    console.log(userData);

    const { data, error } = await signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (data?.token) {
      toast.success("Login Successfull");
    }

    if (error) {
      toast.danger(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center rounded-3xl bg-surface p-6 my-16 max-w-xl mx-auto">
      <Surface className="min-w-95">
        <Form onSubmit={onSubmit}>
          <Fieldset className="w-full">
            <Fieldset.Legend>Login into Account</Fieldset.Legend>
            <Description>Provide your profile information.</Description>
            <Fieldset.Group>
              {/* Email */}
              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <Input placeholder="john@example.com" variant="secondary" />
              </TextField>

              {/* Password */}
              <TextField isRequired name="password" type="password">
                <Label>Password</Label>
                <Input placeholder="Enter your password" variant="secondary" />
              </TextField>
            </Fieldset.Group>

            <Fieldset.Actions>
              <Button type="submit" className="w-full">
                <FloppyDisk />
                Login
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>

        <div className="flex items-center gap-2 mt-6 mb-4 w-43">
          <Separator />
          <p className="text-gray-500">OR</p>
          <Separator />
        </div>

        <Button className="w-full mb-4" variant="tertiary">
          <Icon icon="devicon:google" />
          Continue with Google
        </Button>

        <p className="text-center text-sm">
          Don't have an account?
          <Link className="underline text-sky-600" href={"/register"}>
            Register
          </Link>
        </p>
      </Surface>
    </div>
  );
};

export default LoginPage;
