import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

  const combinedLog = logs.map(l => l.message).join("\n")
  if (!combinedLog.includes("nbc\nabc\ncbs\nfox\ncnn")) {
    feedback.push(errorMessage.incorrectConsole)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
