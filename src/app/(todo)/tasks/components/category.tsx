import { Badge } from "../../../../components/ui/badge";
const colors = {
  yellow: "bg-yellow-100 border-yellow-500 text-yellow-900",
  lime: "bg-lime-100 border-lime-500 text-lime-900",
  green: "bg-green-100 border-green-500 text-green-900",
  cyan: "bg-cyan-100 border-cyan-500 text-cyan-900",
  blue: "bg-blue-100 border-blue-500 text-blue-900",
  indigo: "bg-indigo-100 border-indigo-500 text-indigo-900",
  fuchsia: "bg-fuchsia-100 border-fuchsia-500 text-fuchsia-900",
  pink: "bg-pink-100 border-pink-500 text-pink-900",
  rose: "bg-rose-100 border-rose-500 text-rose-900",
};

const Category = ({ category }: any) => {
  return (
    <Badge variant="outline" className={`${colors["blue"]}`}>
      Categoría
    </Badge>
  );
};
export default Category;
