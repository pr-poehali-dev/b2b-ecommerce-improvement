import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useCatalogFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLine, setSelectedLine] = useState<string | null>(null);

  useEffect(() => {
    const category = searchParams.get("category");
    const line = searchParams.get("line");
    
    if (category) {
      setSelectedCategory(decodeURIComponent(category));
    }
    if (line) {
      setSelectedLine(decodeURIComponent(line));
    }
  }, [searchParams]);

  return {
    selectedCategory,
    selectedLine,
    setSelectedCategory: (cat: string | null) => {
      setSelectedCategory(cat);
      if (cat) {
        searchParams.set("category", cat);
      } else {
        searchParams.delete("category");
      }
      setSearchParams(searchParams);
    },
    setSelectedLine: (line: string | null) => {
      setSelectedLine(line);
      if (line) {
        searchParams.set("line", line);
      } else {
        searchParams.delete("line");
      }
      setSearchParams(searchParams);
    }
  };
};
