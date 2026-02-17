import { create } from "zustand";
import axios from "axios";

export const useAIStore = create((set) => ({
  description: "",
  tags: [],
  loading: false,

  generateInfo: async (formData: unknown) => {
    set({ loading: true });
    try {
      const res = await axios.post("/ai/generate", formData);
      set({
        description: res.data.description,
        tags: res.data.tags,
        loading: false,
      });
    } catch (err) {
      set({ loading: false });
      console.error("Error generating AI content", err);
    }
  },
}));
