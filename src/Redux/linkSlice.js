import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: [
    { title: "Facebook", url: "https://www.facebook.com" },
    { title: "Google", url: "https://www.google.com" },
    { title: "BBC", url: "https://www.bbc.co.uk" }
  ]
};

export const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    addLink: (state, action) => {
      state.links = state.links.concat([action.payload]);
    },
    clearLinks: (state) => {
      state.links = [];
    }
  }
});

export const { addLink, clearLinks } = linksSlice.actions;

export default linksSlice.reducer;
