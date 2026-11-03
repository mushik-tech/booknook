"use client";
import { useSession } from "@/lib/auth-client";
import { getTokenFromClient } from "@/lib/getTokenFromClient";
import { uploadImage } from "@/utilities/uploadImage";
import { FolderPlus } from "@gravity-ui/icons";
import {
  Button,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  toast,
  Select,
  ListBox,
  FieldError,
} from "@heroui/react";
import { useState } from "react";

const AddBook = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const image = formData.get("image");

    try {
      setIsLoading(true);
      const imageUrl = await uploadImage(image as File);

      const bookData = Object.fromEntries(formData.entries()) as Record<
        string,
        string
      >;
      bookData.image = imageUrl;

      const token = await getTokenFromClient();

      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/books`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookData),
      });

      const data = await res.json();

      if (!data.success) {
        toast.danger(data.message);
      } else {
        toast.success("Book added sucessfully");

        form.reset();
      }
    } catch (error) {
      console.error("Error adding book:", error);
      toast.danger("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Fieldset className="w-full">
        <Fieldset.Group className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {/* Book Title */}
          <TextField isRequired type="text" name="name" className="w-full">
            <Label>Book Title</Label>
            <Input placeholder="Enter book title" variant="secondary" />
            <FieldError />
          </TextField>

          {/* Author */}
          <TextField isRequired type="text" name="author" className="w-full">
            <Label>Author Name</Label>
            <Input placeholder="Enter author name" variant="secondary" />
            <FieldError />
          </TextField>

          {/* Category */}
          <Select
            name="category"
            placeholder="Select a category"
            isRequired
            variant="secondary"
            className="w-full"
          >
            <Label>Category</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <FieldError />

            <Select.Popover>
              <ListBox>
                <ListBox.Item id="fiction" textValue="Fiction">
                  Fiction
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="science" textValue="Science">
                  Science
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="history" textValue="History">
                  History
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="kids" textValue="Kids">
                  Kids
                  <ListBox.ItemIndicator />
                </ListBox.Item>

                <ListBox.Item id="others" textValue="Others">
                  Others
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <TextField
            isRequired
            name="copies"
            className="w-full"
            validate={(value) => {
              if (Number(value) < 0) {
                return "Copies need to be postive";
              }
              return null;
            }}
          >
            <Label>Total Copies</Label>
            <Input
              placeholder="Total copies"
              variant="secondary"
              type="number"
            />
            <FieldError />
          </TextField>

          {/* Photo URL */}

          <div className="flex flex-col gap-2 md:col-span-2">
            <Label>Book Cover Image</Label>

            <Input
              required
              name="image"
              type="file"
              accept="image/png, image/jpeg, image/webp"
            />
          </div>

          {/* Description */}
          <TextField
            isRequired
            name="bio"
            className="w-full sm:col-span-2"
            variant="secondary"
          >
            <Label>Book Description</Label>
            <TextArea
              placeholder="Write a short description of the book..."
              className="min-h-32"
            />

            <FieldError />
          </TextField>

          {/* User Name */}
          <TextField
            isReadOnly
            value={session?.user?.name ?? ""}
            type="text"
            name="userName"
            className="w-full"
          >
            <Label>Your Name</Label>
            <Input variant="secondary" />
          </TextField>

          {/* User Email */}
          <TextField
            isReadOnly
            name="userEmail"
            type="email"
            value={session?.user?.email ?? ""}
            className="w-full"
          >
            <Label>Your Email</Label>
            <Input variant="secondary" />
          </TextField>
        </Fieldset.Group>

        {/* Submit Button */}
        <Fieldset.Actions className="w-full">
          <Button
            type="submit"
            className="w-full sm:w-auto sm:min-w-48"
            isPending={isLoading}
          >
            <FolderPlus />
            Add Book
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
};

export default AddBook;
