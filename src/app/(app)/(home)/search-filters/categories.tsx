import { Category } from "@/payload-types";
import CategoryDropdown from "./category-dropdown";

interface Props {
  data: any;
}
const Categories = ({ data }: Props) => {
  return (
    <div>
      {data.map((category: Category) => {
        return (
          <div key={category.id}>
            <CategoryDropdown
              category={category}
              isActive={false}
              isNavigationHovered={false}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
