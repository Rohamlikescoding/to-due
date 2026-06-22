import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  tasks: [],
  error: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // createTask(state, payload) {},
    // editTask(state, payload) {},
    // deleteTask() {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(completeTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(completeTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.map((t) =>
          t.id === action.payload.id
            ? { ...t, progress: action.payload.progress }
            : t,
        );
        state.loading = false;
      })
      .addCase(completeTask.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const fetchTasks = createAsyncThunk("task/fetchTasks", async () => {
  try {
    const res = await fetch("http://localhost:8000/tasks");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("data didnt recieved!");
  }
});

export const completeTask = createAsyncThunk(
  "task/completeTask",
  async ({ id, progress }) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        progress: !progress,
      }),
    });
    if (!res.ok) throw new Error("Failed to update task");
    const data = await res.json();

    return data;
  },
);

export const deleteTask = createAsyncThunk("task/deleteTask", async (id) => {
  const res = await fetch(`http://localhost:8000/tasks/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete task");
  const data = await res.json();
  console.log(id);
  return id;
});

export const { createTask } = taskSlice.actions;
export default taskSlice.reducer;
