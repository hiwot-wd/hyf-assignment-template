/** @format */

function getReply(command) {
  const responses = {
    "Hello my name is Benjamin": "nice to meet you Benjamin",
    "What is my name": "your name is Benjamin",
    "Add fishing to my todo": "fishing added to your todo",
    "Add singing in the shower to my todo":
      "singing in the shower added to your todo",
    "Remove fishing from my todo": "fishing removed from your todo",
    "What is on my todo?": "you have 2 todos- fishing, singing in the shower",
    "what dy is the date today":
      "today is " + new Date().toLocaleDateString("en-GB"),
    "what is 3+4": "3+4 is 7",
    "what is 4*5": "4*5 is 20",
    "Set a timer for 4 minutes": "timer set for 4 minutes",
    "what is the weather today":
      "The weather is sunny with a high of 4 degrees celsius",
  };
  if (command in responses) {
    return responses[command];
  } else {
    return "I don't understand that command. please try again.";
  }
}
// text command input handler
function handleTextCommand() {
  const input = document.getElementById("commandInput").value;
  document.getElementById("response").innerText = getReply(input);
}

// speech command input handler
function startListening() {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.lang = "en-GB";
  recognition.start();

  recognition.onresult = function (event) {
    const spokenCommand = event.results[0][0].transcript;
    document.getElementById("response").innerText = getReply(spokenCommand);
  };
}
