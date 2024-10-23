"use client"
import Tasks from "@/app/(todo)/tasks/components/task";
import { Separator } from "@/components/ui/separator";
import CreateTask from "@/app/(todo)/tasks/components/createTask";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import EditTask from "./components/editTask";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useState } from "react";
const tasks: Task[] = [
  {
    id: "1",
    name: "Test Task",
    status: true,
    description: "This is a very simple test task",
    categories: [{ category: "Test Category", color: "blue" }],
    due_date: "Sat July 27 2024 00:00:00 GMT-0500",
  },
  {
    id: "2",
    name: "Test Task 2",
    status: false,
    description: "This is a test task holding multiple categories",
    categories: [
      { category: "Test Category", color: "blue" },
      { category: "Test Category", color: "blue" },
      { category: "Test Category", color: "blue" },
      { category: "Test Category", color: "blue" },
      { category: "Test Category", color: "blue" },
      { category: "Test Category", color: "blue" },
      { category: "Test Category", color: "blue" },
    ],
    due_date: "Sat Apr 27 2024 00:00:00 GMT-0500",
  },
  {
    id: "3",
    name: "Test Task 3",
    status: true,
    description: "This is a test task",
    categories: [{ category: "Test Category", color: "blue" }],
    due_date: "Sat Apr 27 2024 00:00:00 GMT-0500",
  },
  {
    id: "4",
    name: "Test Task 4",
    status: true,
    description: "This is a test task",
    categories: [{ category: "Test Category", color: "blue" }],
    due_date: "Sat Apr 27 2024 00:00:00 GMT-0500",
  },
  {
    id: "5",
    name: "Test Task 5",
    status: false,
    description: "This is a test task",
    categories: [{ category: "Test Category", color: "blue" }],
    due_date: "Sat Apr 27 2024 00:00:00 GMT-0500",
  },
];

const TaskPage = (): React.ReactElement => {
  const [selectedTask, setSelectedTask] = useState<Task>(tasks[0]);
  const onSelectTask = (task: Task) => setSelectedTask(task);
  return (
    <main className="flex flex-row w-full">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>
          <ScrollArea className="w-full h-screen">
            <section className="w-full p-12">
              <div className="w-fit">
                <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
                <Separator className="h-[2px] bg-foreground" />
              </div>
              <Separator className="mt-4" />
              <CreateTask />
              <Separator className="mb-4" />
              <Tasks tasks={tasks} onSelectTask={onSelectTask} />
            </section>
            <ScrollBar className="w-[4px]" />
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle className="md:flex hidden" />
        <ResizablePanel
          defaultSize={30}
          tagName="aside"
          maxSize={50}
          minSize={25}
          className="md:flex hidden sticky"
        >
          <EditTask task={selectedTask} key={selectedTask.id} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};

export default TaskPage;
