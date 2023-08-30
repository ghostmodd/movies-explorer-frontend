import React from "react";

// Кастомный хук, который позволяет проверить, соответствует...
// ...ли окно различным параметрам, использую медиа-запрос
function useMediaQuery(query) {
  // проверка по медиа-запросу
  const getMatches = (query) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = React.useState(getMatches(query));

  function handleMatchesChange() {
    setMatches(getMatches(query));
  }

  React.useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleMatchesChange();
    matchMedia.addEventListener("change", handleMatchesChange);
    return () => {
      matchMedia.removeEventListener("change", handleMatchesChange);
    }
  }, [query]);

  return matches;
}

export default useMediaQuery;
