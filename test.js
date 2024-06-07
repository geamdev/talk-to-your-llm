const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:3002/llm-voicebot");

ws.on("open", function open() {
  console.log("WebSocket connected!");

  // Aquí puedes enviar mensajes al servidor
  ws.send(
    JSON.stringify({
      type: "command",
      command: "redirect",
      queueCommand: true,
      data: [
        {
          say: {
            id: "b5e39996",
            text: "Hello it's me Mario",
          },
        },
      ],
    })
  );
});

ws.on("message", function incoming(data) {
  console.log("Received from server:", data);
});

ws.on("error", function error(err) {
  console.error("WebSocket error:", err);
});
