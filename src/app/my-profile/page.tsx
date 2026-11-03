import { auth } from "@/lib/auth";
import { Card } from "@heroui/react";
import { headers } from "next/headers";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div>
      <Card className="w-100 mx-auto my-8 gap-2">
        <img
          alt="Indie Hackers community"
          className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
          loading="lazy"
          src={
            session?.user.image ||
            "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
          }
        />
        <Card.Header>
          <Card.Title>{session?.user.name}</Card.Title>
          <Card.Description>{session?.user.email}</Card.Description>
        </Card.Header>
        <Card.Footer>
          <h1>
            Account Since
            <span className="ml-2">
              {session?.user.createdAt.toLocaleDateString("en-GB", {
                dateStyle: "long",
              })}
            </span>
          </h1>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default MyProfilePage;
