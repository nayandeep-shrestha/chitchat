import { createSlice } from "@reduxjs/toolkit";

const UserSlicer = createSlice({
  name: "users",
  initialState: {
      email: "user@gmail.com",
      name: "Name of User",
      profileName: "Profile Name",
      bio: "🌟 Adventure seeker | Travel enthusiast | Food lover 🍕 | Music addict 🎶 | Tech geek 📱 | Always on the lookout for new experiences and connections! Let's chat and share stories! 🌍✨",
      chats: [],
  },
  reducers: {
    setProfileName: (state, action) => {
    console.log("set profile name")
      state.profileName = action.payload;
    },
    setBio: (state, action) => {
      state.bio = action.payload;
    },
    login: (state, action) => {
      state.userDetail = action.payload;
    },
    logout: (state, action) => {
      state.userDetail = null;
    },
  },
});

export const { login, logout, setProfileName, setBio } = UserSlicer.actions;
export default UserSlicer.reducer;