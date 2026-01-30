import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

  if (answer === undefined) {
    feedback.push(errorMessage.noReturn)
  }

  if (typeof answer !== "string") {
    feedback.push(errorMessage.wrongTypeString)
  }

  if (!answer.includes("#\n##\n###\n####\n#####\n######\n#######")) {
    feedback.push(errorMessage.incorrectString)
  }

    if (!logs || logs.length === 0) {
    feedback.push(errorMessage.noConsole)
  }

  const combinedLog = logs.map(l => l.message).join("\n")
  if (!combinedLog.includes("#\n##\n###\n####\n#####\n######\n#######")) {
    feedback.push(errorMessage.incorrectConsole)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
