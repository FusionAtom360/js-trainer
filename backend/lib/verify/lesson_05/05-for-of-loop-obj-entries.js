import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

  const combinedLog = logs.map(l => l.message).join("\n")
  if (!combinedLog.includes("Name: jeffreyJackson | Time 2:31.44\nName: tylerTockstein | Time 2:35.25\nName: joshiahDowner | Time 2:39.54\nName: johnHurd | Time 2:41.40")) {
    feedback.push(errorMessage.incorrectConsole)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
