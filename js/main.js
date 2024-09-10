import { chooseUniversity } from "./sections/chooseUniversity.js"
import { educationAdvantages } from "./sections/educationAdvantages.js"
import { educationInAustria } from "./sections/educationInAustria.js"
import { feedback } from "./sections/feedback.js"
import { header } from "./sections/header.js"
import { leadForm } from "./sections/leadForm.js"
import { steppedForm } from "./sections/steppedForm.js"
import { team } from "./sections/team.js"
import { workStages } from "./sections/workStages.js"

document.addEventListener('DOMContentLoaded', () => {
  header()

  educationAdvantages()

  steppedForm()

  chooseUniversity()

  leadForm()

  educationInAustria()

  workStages()

  feedback()

  team()
})