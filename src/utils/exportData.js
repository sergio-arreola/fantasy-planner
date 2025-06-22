/**
 * exportData.js
 * Helper to gather all input and textarea values and trigger a JSON download
 */
export function exportData() {
  // Collect all form fields
  const data = {};
  document.querySelectorAll("input, textarea").forEach((el, i) => {
    if (el.value.trim()) {
      data[`field_${i}`] = {
        value: el.value,
        placeholder: el.placeholder || null,
      };
    }
  });

  // Create a blob and download link
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "fantasy_planner_data.json";
  a.click();
  URL.revokeObjectURL(url);
}
