"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const GoogleSignIn = () => {
  const handleGoogleSign = async () => {
    const { data } = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Button
      onClick={handleGoogleSign}
      className="w-full mb-4"
      variant="tertiary"
    >
      <Icon icon="devicon:google" />
      Continue with Google
    </Button>
  );
};

export default GoogleSignIn;
