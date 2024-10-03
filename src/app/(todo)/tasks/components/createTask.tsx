"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogHeader,
  DialogClose,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
const CreateTask = () => {
  return (
    <>
      <div className="hidden md:block">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="flex flex-row justify-start w-full gap-4 text-neutral-500"
            >
              <Plus />
              <h3 className="font-semibold">Add New Task</h3>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div className="mx-auto w-full max-w-sm">
              <DialogHeader>
                <DialogTitle>Create a new task</DialogTitle>
              </DialogHeader>
              <div className="p-4 pb-0">
                <div className="mt-3 h-[120px]"></div>
              </div>
              <footer className="w-full flex flex-row gap-4 justify-center">
                <Button>Submit</Button>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
              </footer>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              className="flex flex-row justify-start w-full gap-4 text-neutral-500"
            >
              <Plus />
              <h3 className="font-semibold">Add New Task</h3>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Create a new task</DrawerTitle>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="mt-3 h-[120px]"></div>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default CreateTask;
