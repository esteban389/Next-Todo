type Category = {
  category: string;
  color: string;
};
type Task = {
  id: string;
  name: string;
  status: boolean;
  description: string;
  categories: Category[];
  due_date: string;
};
type TaskProps = {
  children?: never;
  tasks: Task[];
};
type EditTaskProps = {
  task: Task;
};