"use client";
import { Checkbox } from "../../../../components/ui/checkbox";
import { CalendarClock } from "lucide-react";
import Category from "@/app/(todo)/tasks/components/category";
import { format } from "date-fns";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Tasks = ({ tasks }: TaskProps): React.ReactElement => {
  return (
    <Accordion
      type="single"
      collapsible
      className="rounded-md border px-4 py-3 w-full text-sm space-y-2"
    >
      {tasks.map((task) => (
        <AccordionItem value={task.id} key={task.id}>
          <div className="flex flex-row gap-2 items-center w-full basis-full">
            <Checkbox id={`${task.id}`} defaultChecked={task.status} />
            <AccordionTrigger className="w-full">
              <p>{task.name}</p>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            <div className="w-full font-mono">{task.description}</div>
            <div className="flex flex-row">
              <div className="w-3/4 flex flex-row items-center gap-2 flex-wrap">
                {task.categories.map((category) => (
                  <Category key={category.category} category={category} />
                ))}
              </div>
              <div className="w-1/4 text-right font-medium">
                <CalendarClock className="h-4 w-4 md:inline-block md:mr-2 hidden" />
                {format(task.due_date, "PPP")}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Tasks;
