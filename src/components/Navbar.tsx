import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { navbarData } from "../data/navbar";

export const Navbar: FC = () => {
  return (
    <nav>
      <ul>
        {navbarData.map((item) => (
          <li key={uuidv4()}>{item.name}</li>
        ))}
      </ul>
    </nav>
  );
};
