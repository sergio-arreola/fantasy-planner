import { useState, useEffect } from "react";

function useAutoSave(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const savedRaw = localStorage.getItem(key);
      if (savedRaw && savedRaw !== "undefined") {
        try {
          return JSON.parse(savedRaw);
        } catch (error) {
          console.warn(
            `Invalid JSON in localStorage key "${key}", clearing item:`,
            error
          );
          localStorage.removeItem(key);
        }
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
    }
    return initialValue;
  });

  useEffect(() => {
    try {
      if (value === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(`Error writing localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useAutoSave;
