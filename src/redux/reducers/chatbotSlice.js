import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// this files

const options = {
  "x-access-token": "skip_validation_for_admin",
  "Content-Type": "application/json",
};
export const allChatBots = createAsyncThunk("chatbot/list", async (data) => {
  console.log("chatbot list", data);
  const response = await axios.post(
    `https://api.chatsimple.ai/v0/users/${data?.userID}/chatbots`,
    data?.pageToken,
    { headers: options }
  );
  return response.data;
});

export const createChatBot = createAsyncThunk(
  "chatbot/create",
  async (data) => {
    console.log("create chatbot", data);
    const response = await axios.post(
      `https://api.chatsimple.ai/v0/users/${data?.userID}/chatbots/${data?.chatbotID}`,
      data?.chatbotDetail,
      { headers: options }
    );
    return response.data;
  }
);

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
      state.chatBots = action.payload;
    },
    [allChatBots.rejected]: (state, action) => {
      state.loading = false;
    },
    [createChatBot.pending]: (state, action) => {
      state.loading = true;
    },
    [createChatBot.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [createChatBot.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default chatBotSlice.reducer;
