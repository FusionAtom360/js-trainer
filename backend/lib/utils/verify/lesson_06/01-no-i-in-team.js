import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

  const combinedLog = logs.map(l => l.message).join("\n")
  if (!combinedLog.includes("Dodgers\nPadres")) {
    feedback.push(errorMessage.incorrectConsole)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
