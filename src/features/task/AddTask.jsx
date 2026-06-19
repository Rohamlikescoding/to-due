import { useEffect } from "react";
import Button from "../../ui/Button";

function AddTask() {
  async function handleAddTask() {}

  return (
    <Button className="px-2 border-sky-800/10" onClick={handleAddTask}>
      ➕
    </Button>
  );
}

export default AddTask;
