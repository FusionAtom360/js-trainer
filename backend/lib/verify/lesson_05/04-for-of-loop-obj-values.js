import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

  const combinedLog = logs.map(l => l.message).join("\n")
  if (!combinedLog.includes("5:01.75\n5:11.08\n5:18.88 \n5:22.27\n5:23.47\n5:31.04")) {
    feedback.push(errorMessage.incorrectConsole)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
