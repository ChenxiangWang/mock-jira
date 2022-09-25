import React from "react";
interface SearchProps {
  searchString: string;
  setSearchString: (search: string) => void;
}

export default function Search({ searchString, setSearchString }: SearchProps) {
  return (
    <input
      value={searchString}
      onChange={({ target }) => {
        setSearchString(target.value);
      }}
    />
  );
}
