import { v4 as uuidv4 } from "uuid";
interface CatTypes {
  id: string;
  name: string;
}
export const categories: CatTypes[] = [
  { id: uuidv4(), name: "Technology" },
  { id: uuidv4(), name: "Health & Wellness" },
  { id: uuidv4(), name: "Travel" },
  { id: uuidv4(), name: "Lifestyle" },
  { id: uuidv4(), name: "Finance" },
  { id: uuidv4(), name: "Food & Drink" },
  { id: uuidv4(), name: "Education" },
  { id: uuidv4(), name: "Parenting" },
  { id: uuidv4(), name: "Business & Entrepreneurship" },
  { id: uuidv4(), name: "Entertainment" },
];
