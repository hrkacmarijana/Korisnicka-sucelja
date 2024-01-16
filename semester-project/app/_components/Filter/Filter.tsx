import { FC } from "react";
import Link from "next/link";
import "./filter.modules.css";

import { Dispatch, SetStateAction } from "react";
import { TypeAnimalListItem } from "@/app/lib/contentfulClient";

interface FilterProps {
  categories: string[];
  filterItems: (category: string) => void;
  allData: TypeAnimalListItem[];
  setItems: Dispatch<SetStateAction<TypeAnimalListItem[]>>;
}

const Filter: FC<FilterProps> = ({
  categories,
  filterItems,
  allData,
  setItems,
}) => {
  return (
    <div className="filtering-options-btns">
      {categories.map((cat) => (
        <button
          className="btn bg-purple-600 text-white"
          key={cat}
          onClick={() => filterItems(cat)}>
          {cat.toUpperCase()}
        </button>
      ))}
      <button
        className="btn  bg-purple-600 text-white"
        id="reset-btn"
        onClick={() => setItems(allData)}>
        RESET
      </button>
    </div>
  );
};

export default Filter;
