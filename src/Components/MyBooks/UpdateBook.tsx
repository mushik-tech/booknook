"use client";
import { Envelope, FolderPlus } from "@gravity-ui/icons";
import { PencilToSquare } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
  toast,
} from "@heroui/react";

import { IBook } from "@/types/book.types";
import React, { useState } from "react";
import { uploadImage } from "@/utilities/uploadImage";
import { useRouter } from "next/navigation";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

const UpdateBook = ({ book }: { book: IBook }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setIsLoading(true);

      const image = formData.get("image");
      let imageUrl = book.image;

      if (image instanceof File && image.size > 0) {
        imageUrl = await uploadImage(image);
      }

      // const imageUrl = await uploadImage(image as File);

      const bookData = Object.fromEntries(formData.entries()) as Record<
        string,
        string
      >;
      bookData.image = imageUrl;

      const token = await getTokenFromClient();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/books/${book._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bookData),
        },
      );

      const data = await res.json();

      console.log(data);

      if (!data.success) {
        toast.danger(data.message);
      } else {
        toast.success("Book updated sucessfully");
        router.push("/my-books");
      }
    } catch (error) {
      console.error("Error adding book:", error);
      toast.danger("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal>
      <Button variant="primary" size="sm">
        <PencilToSquare />
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="max-w-md md:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Book</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal
                adapts automatically when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body>
              <Surface className="w-full rounded-3xl bg-surface mt-4">
                <Form onSubmit={onSubmit}>
                  <Fieldset>
                    <Fieldset.Group className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Book Title */}
                      <TextField
                        type="text"
                        name="name"
                        defaultValue={book.name}
                        className="w-full md:col-span-2"
                      >
                        <Label>Book Title</Label>
                        <Input
                          placeholder="Enter book title"
                          variant="secondary"
                        />
                      </TextField>

                      {/* Author */}
                      <TextField
                        type="text"
                        name="author"
                        className="w-full"
                        defaultValue={book.author}
                      >
                        <Label>Author Name</Label>
                        <Input
                          placeholder="Enter author name"
                          variant="secondary"
                        />
                      </TextField>

                      {/* Category */}
                      <Select
                        name="category"
                        placeholder="Select a category"
                        variant="secondary"
                        className="w-full"
                        defaultValue={book.category}
                      >
                        <Label>Category</Label>
                        <Select.Trigger>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
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
                        name="copies"
                        className="w-full"
                        defaultValue={String(book.copies)}
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

                      <div className="flex flex-col gap-2">
                        <Label>Book Cover Image</Label>

                        <Input
                          name="image"
                          type="file"
                          accept="image/png, image/jpeg, image/webp"
                        />
                      </div>

                      {/* Description */}
                      <TextField
                        name="bio"
                        className="w-full sm:col-span-2"
                        variant="secondary"
                        defaultValue={book.bio}
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
                        value={book.userName}
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
                        value={book.userEmail}
                        className="w-full"
                      >
                        <Label>Your Email</Label>
                        <Input variant="secondary" />
                      </TextField>
                    </Fieldset.Group>

                    {/* Submit Button */}
                    <Fieldset.Actions className="w-full">
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close" isPending={isLoading}>
                        <FolderPlus />
                        Update Book
                      </Button>
                    </Fieldset.Actions>
                  </Fieldset>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateBook;
