/**
 * useAutoSave.js
 * React hook to autosave input and textarea values to sessionStorage
 * on blur and at regular intervals, and load them on mount.
 */
import { useEffect } from "react";

/**
 * @param {string} storageKey - Key under which to store form data
 */
export function useAutoSave(storageKey = "fantasyPlanner") {
  useEffect(() => {
    // Load saved data on mount
    const saved = JSON.parse(sessionStorage.getItem(storageKey) || "{}");
    document.querySelectorAll("input, textarea").forEach((el, i) => {
      const key = `field_${i}`;
      if (saved[key]) el.value = saved[key];
    });

    // Function to gather and save current field values
    const saveData = () => {
      const data = {};
      document.querySelectorAll("input, textarea").forEach((el, i) => {
        if (el.value.trim()) data[`field_${i}`] = el.value;
      });
      sessionStorage.setItem(storageKey, JSON.stringify(data));
    };

    // Save on blur
    document.querySelectorAll("input, textarea").forEach((el) => {
      el.addEventListener("blur", saveData);
    });
    // Save every 30s
    const interval = setInterval(saveData, 30000);

    // Cleanup listeners and interval
    return () => {
      document.querySelectorAll("input, textarea").forEach((el) => {
        el.removeEventListener("blur", saveData);
      });
      clearInterval(interval);
    };
  }, [storageKey]);
}
