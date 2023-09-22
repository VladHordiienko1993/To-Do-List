import { useEffect, useState } from "react";

const useCurrentLocation = (initialValue) => {
  const [showPath, setShowPath] = useState("");

  useEffect(() => {
    switch (initialValue) {
      case "/":
        setShowPath("All Tasks");
        break;
      case "/Done":
        setShowPath("Done Tasks");
        break;
      case "/NotDone":
        setShowPath("Not Done Tasks");
        break;
      case "/DeletedTasks":
        setShowPath("Deleted Tasks");
        break;
    }
  }, [initialValue]);

  return { showPath };
};
export default useCurrentLocation;
