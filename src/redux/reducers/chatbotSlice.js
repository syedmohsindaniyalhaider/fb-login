import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//   });
const options = {
  "x-access-token": "skip_validation_for_admin",
  "Content-Type": "application/json",
};
export const allChatBots = createAsyncThunk("chatbot/list", async (data) => {
  const response = await axios.post(
    `https://api.chatsimple.ai/v0/users/${data?.userID}/chatbots`,
    data?.pageToken,
    options
  );
  return response.data;
});

const initialState = {
  loading: false,
  chatBots: null,
  error: null,
  status: null,
};

const chatBotSlice = createSlice({
  name: "chatbot",
  initialState,
  reducers: {},
  extraReducers: {
    [allChatBots.pending]: (state, action) => {
      state.loading = true;
    },
    [allChatBots.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [allChatBots.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default chatBotSlice.reducer;
