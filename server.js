const http = require("http");
const port = 3000;
const server = http.createServer(() => {});
const socketIo = require("socket.io");
const io = socketIo(server, {
  cors: {
    origin: [
      /[a-zA-Z][\w^a-zA-z0-9]+.coachchat.me/,
      "https://coachchat.me",
      "http://127.0.0.1:4500",
      "http://localhost:4500",
      "http://localhost:4200",
      "https://www.piesocket.com",
      "https://websocketking.com",
      "http://127.0.0.1:5501",
      "https://coachchat-admin.web.app",
    ],
    credentials: true,
  },
  methods: ["GET", "POST"],
  // transports: ["websocket", "polling"],
});
io.on("connection", (socket) => {
  console.log("socket connection : ", socket.id);
  socket.on("joinConversation", async (data) => {
    console.log(data);
  });
});
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
