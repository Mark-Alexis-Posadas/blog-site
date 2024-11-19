import { FC } from "react";

export const Card: FC = ({ item }) => {
  return (
    <article>
      <img src={item.image} alt={item.title} />
      <h1>{item.title}</h1>
      <p>{item.content}</p>
    </article>
  );
};
