import { createSlice } from "@reduxjs/toolkit";

const ChatSlicer = createSlice({
  name: "activeChats",
  initialState: {
    chatId: null,
  },
  reducers: {
    setActive: (state, action) => {
      state.chatId = action.payload;
    },
  },
});

export const { setActive } = ChatSlicer.actions;
export default ChatSlicer.reducer;
