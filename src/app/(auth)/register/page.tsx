"use client";
import { signUp } from "@/lib/auth-client";
import {PersonPlus} from '@gravity-ui/icons';
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
  TextArea,
  TextField,
  toast,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { redirect, useRouter, useSearchParams } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries()) as {
      name: string;
      photourl: string;
      email: string;
      password: string;
    };

    console.log(userData);

    const { data, error } = await signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.photourl,
    });

    console.log({ data, error });

    if (data?.token) {
      toast.success("Account Creation Successfull");
      router.push(redirectTo);
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
            <Fieldset.Legend className="text-2xl">Register Account</Fieldset.Legend>
            <Description>Provide your profile information.</Description>
            <Fieldset.Group>
              {/* Name */}
              <TextField
                isRequired
                type="text"
                name="name"
                validate={(value) => {
                  if (value.length < 3) {
                    return "Name must be at least 3 characters";
                  }
                  return null;
                }}
              >
                <Label>Name</Label>
                <Input placeholder="John Doe" variant="secondary" />
                <FieldError />
              </TextField>

              {/* Photo URL */}
              <TextField
                isRequired
                name="photourl"
                type="url"
                validate={(value) => {
                  if (!URL.canParse(value)) {
                    return "Please enter a valid url";
                  }
                  return null;
                }}
              >
                <Label>Photo URL</Label>
                <Input placeholder="John Doe" variant="secondary" />
                <FieldError />
              </TextField>

              {/* Email */}
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label>Email</Label>
                <Input placeholder="john@example.com" variant="secondary" />
                <FieldError />
              </TextField>

              {/* Password */}
              <TextField
                isRequired
                minLength={6}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 6) {
                    return "Password must be at least 6 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[a-z]/.test(value)) {
                    return "Password must contain at least one lowercase letter";
                  }
                  return null;
                }}
              >
                <Label>Password</Label>
                <Input placeholder="Enter your password" variant="secondary" />
                <FieldError />
              </TextField>
            </Fieldset.Group>

            <Fieldset.Actions>
              <Button type="submit" className="w-full">
                <PersonPlus />
                Register
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
          Already have an account?{" "}
          <Link className="underline text-sky-600" href={"/login"}>
            Login
          </Link>
        </p>
      </Surface>
    </div>
  );
};

export default RegisterPage;
