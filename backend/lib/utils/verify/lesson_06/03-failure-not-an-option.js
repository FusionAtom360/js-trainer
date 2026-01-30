import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

  const combinedLog = logs.map(l => l.message).join("\n")
  if (!combinedLog.includes("Bob ▶ (8) [90, 85, 62, 71, 86, 100, 92, 75]\nMary ▶ (5) [65, 92, 78, 62, 92]\nJuan ▶ (7) [86, 72, 91, 99, 85, 75, 88]")) {
    feedback.push(errorMessage.incorrectConsole)
    feedback.push("Make sure the format of your console logs match exactly.")
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
