export class MessageObj {
  constructor(chatId, message, sent, time) {
    this.chatId = chatId;
    this.message = message;
    this.sent = sent;
    this.time = time;
  }
}

export class ChatObj {
  constructor(chatId, messages) {
    this.chatId = chatId;
    this.messages = messages;
  }
}

export class UserObj {
  constructor(id, email, name, chatList) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.chatList = chatList;
  }
}
//   {
//     message: "Hii",
//     time: "10:20 PM",
//     chatId: "F3078",
//     sender: "Nayandeep8234",
//     sent: true,
//   },
// ];

// const users = [
//   {
//     id: "abhish342wr",
//     email: "abhishek@gmail.com",
//     name: "Abhishek Acharya",
//     chatList: [{ id: "ASDK4" }, { id: "KSD42" }],
//   },
// ];

// const chats = [
//   {
//     chatId: "ASDK4",
//     messages: [
//       {
//         message: "Hii",
//         time: "10:20 PM",
//         sender: "Nayandeep",
//         sent: true,
//         // chatId: "ASDK4",
//       },
//     ],
//   },
// ];
