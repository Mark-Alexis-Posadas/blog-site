import { FC } from "react";
import { categories } from "../data/categories";

export const Home: FC = () => {
  return (
    <div>
      <ul className="flex items-center gap-4 border-b border-slate-300 p-3">
        {categories.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
