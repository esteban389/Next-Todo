import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import ConfirmDelete from "./components/confirm-delete";
import React from "react";
const ProfilePage = (): React.ReactElement => {
  return (
    <main className="w-full p-12 flex flex-col bg-secondary">
      <ScrollArea className="w-full h-screen">
        <div className="w-fit mb-4">
          <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
          <Separator className="h-[2px] bg-foreground" />
        </div>
        <div className="h-fit pb-24">
          <UpdateProfileInfo />
          <UpdatePassword />
          <DeleteAccount />
        </div>
      </ScrollArea>
    </main>
  );
};

const UpdateProfileInfo = (): React.ReactElement => {
  return (
    <section className="flex flex-col gap-2 py-8 px-12 rounded-lg border border-solid shadow-md bg-background">
      <h1 className="text-lg font-bold tracking-tight">Profile information</h1>
      <p className="text-sm text-muted-foreground">
        Update your profile information here.
      </p>
      <form className="flex flex-col gap-4">
        <fieldset>
          <Label className="text-sm text-muted-foreground">Name</Label>
          <Input type="text" placeholder="John Doe" />
        </fieldset>
        <fieldset>
          <Label className="text-sm text-muted-foreground">Email</Label>
          <Input type="mail" placeholder="johndoe@mail.com" />
        </fieldset>
        <Button type="submit" className="max-w-fit">
          Save
        </Button>
      </form>
    </section>
  );
};
const UpdatePassword = (): React.ReactElement => {
  return (
    <section className="mt-8 flex flex-col gap-2 py-8 px-12 rounded-lg border border-solid shadow-md bg-background">
      <h1 className="text-lg font-bold tracking-tight">Update your password</h1>
      <p className="text-sm text-muted-foreground">
        Make sure to use a long and random password to be safe.
      </p>
      <form className="flex flex-col gap-4">
        <fieldset>
          <Label className="text-sm text-muted-foreground">
            Current password
          </Label>
          <Input type="password" />
        </fieldset>
        <fieldset>
          <Label className="text-sm text-muted-foreground">New password</Label>
          <Input type="password" />
        </fieldset>
        <fieldset>
          <Label className="text-sm text-muted-foreground">
            Confirm password
          </Label>
          <Input type="password" />
        </fieldset>
        <Button type="submit" className="max-w-fit">
          Save
        </Button>
      </form>
    </section>
  );
};
const DeleteAccount = (): React.ReactElement => {
  return (
    <section className="mt-8 flex flex-col gap-2 py-8 px-12 rounded-lg border border-solid shadow-md bg-background">
      <h1 className="text-lg font-bold tracking-tight">Delete account</h1>
      <p className="text-sm text-muted-foreground">
        Once the account is deleted, all information will be erased.
      </p>
      <ConfirmDelete>
        <Button variant="destructive" className="max-w-fit">
          Delete
        </Button>
      </ConfirmDelete>
    </section>
  );
};

export default ProfilePage;
