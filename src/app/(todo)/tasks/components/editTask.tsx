import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { Badge } from "../../../../components/ui/badge";
import Category from "@/app/(todo)/tasks/components/category";
import { Plus } from "lucide-react";

const EditTask = ({ task }: EditTaskProps): React.ReactElement => {
  const date = new Date(task.due_date);
  return (
    <form className="p-12 h-full flex flex-col justify-between w-full">
      <fieldset className="flex flex-col gap-4">
        <legend className="text-lg font-semibold tracking-tight">
          Edit Task:
        </legend>
        <Separator className="mt-1" />
        <div>
          <Label>Name:</Label>
          <Input type="text" placeholder={task.name} />
        </div>
        <div>
          <Label>Description:</Label>
          <Textarea rows={4} placeholder={task.description} />
        </div>
        <div>
          <Label>Due Date:</Label>
          <DatePicker placeholder={date} />
        </div>
        <div>
          <Label>Categories:</Label>
          <div className="flex flex-row items-center gap-2 flex-wrap">
            {task.categories.map((category) => (
              <Category key={category.category} category={category} />
            ))}
            <Badge className="ml-2 rounded-full">
              <Plus className="h-4 w-4" />
            </Badge>
          </div>
        </div>
      </fieldset>
      <div className="flex justify-end mt-4 gap-4 w-full px-4">
        <Button variant="ghost" type="button" className="w-full">
          Delete
        </Button>
        <Button type="submit" className="w-full">
          Save
        </Button>
      </div>
    </form>
  );
};

export default EditTask;
