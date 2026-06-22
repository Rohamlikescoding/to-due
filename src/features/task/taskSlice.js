import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  tasks: [],
  error: null,
  searchQuery: "",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    sortTasks(state) {
      state.tasks.sort(function (taskA, taskB) {
        const taskAprogress = taskA.progress;
        const taskBprogress = taskB.progress;
        if (taskAprogress < taskBprogress) return -1;
        if (taskAprogress > taskBprogress) return 1;
      });
    },
    setTimer(state, action) {
      state.tasks = state.tasks.map((t) =>
        t.id === action.payload.id
          ? {
              ...t,
              timer: action.payload.timer,
            }
          : t,
      );
    },
    timerOpenTask(state, action) {
      state.tasks = state.tasks.map((t) =>
        t.id === action.payload ? { ...t, timerOpen: !t.timerOpen } : t,
      );
      console.log(state.tasks);
    },
    timerCounter(state, action) {
      state.tasks = state.tasks.map((t) =>
        t.id === action.payload
          ? {
              ...t,
              timer: t.timer > 0 ? t.timer - 1 : 0,
            }
          : t,
      );
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
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
            ? { ...t, progress: action.payload.progress, timer: 0, time: false }
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
        state.loading = false;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(createTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.loading = false;
      })
      .addCase(createTask.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(clearTasks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(clearTasks.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((t) => t.id !== action.payload);
        state.loading = false;
      })
      .addCase(clearTasks.rejected, (state, action) => {
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
  return id;
});

export const createTask = createAsyncThunk("task/createTask", async (task) => {
  const res = await fetch("http://localhost:8000/tasks", {
    method: "POST",
    body: JSON.stringify(task),
  });

  if (!res.ok) {
    throw new Error("Failed to create task");
  }
  const data = await res.json();
  return data;
});

export const clearTasks = createAsyncThunk("task/clearTasks", async (id) => {
  const res = await fetch(`http://localhost:8000/tasks/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete task");
  return id;
});
export const {
  setTimer,
  sortTasks,
  timerOpenTask,
  timerCounter,
  setSearchQuery,
} = taskSlice.actions;
export default taskSlice.reducer;
