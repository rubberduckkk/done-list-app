export const saveDoneListItem = async (item) => {
  const response = await fetch("http://localhost:5173");
  await new Promise(r => setTimeout(r, 3000));
  if (!response.ok) {
    console.log("save done list item failed");
    throw new Error("save done list item failed");
  }

  console.log("save done list item success");
  return {
    status: 200,
    message: "save successfully"
  };
}