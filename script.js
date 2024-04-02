const jobs = [];

function listJobs() {
  const jobsText = jobs.reduce(function (finalText, job, index) {
    finalText += index + ". ";
    finalText += job.name;
    finalText += " (" + job.candidates.length + " candidates)\n";
    return finalText;
  }, "");

  alert(jobsText);
}

function newJob() {
  const name = prompt("Enter a name for the job:");
  const description = prompt("Enter a description:");
  const deadline = prompt("Enter a deadline (month/day/year):");

  const confirmation = confirm(
    "Please check the following informations:\n" +
      "\nJob name: " +
      name +
      "\nJob description: " +
      description +
      "\nJob deadline: " +
      deadline +
      "\n\nDo you confirm the job creation with the data above?"
  );

  if (confirmation) {
    const newJob = { name, description, deadline, candidates: [] };
    jobs.push(newJob);
    alert("Job posted!");
  }
}

function showJob() {
  const index = prompt("Enter the index of the job you wish to see:");
  const job = jobs[index];

  const candidatesText = job.candidates.reduce(function (finalText, candidate) {
    return finalText + "\n - " + candidate;
  }, "");

  alert(
    "Job nº " +
      index +
      "\nName: " +
      job.name +
      "\nDescription: " +
      job.description +
      "\nDeadline: " +
      job.deadline +
      "\nNumber of candidates: " +
      job.candidates.length +
      "\nCandidates: " +
      candidatesText
  );
}

function enterCandidate() {
  const candidate = prompt("Enter the candidate's name:");
  const index = prompt("Enter the index of the desired job:");
  const job = jobs[index];

  const confirmation = confirm(
    "Please check the following informations:\n" +
      "\nCandidate name: " +
      candidate +
      "\nJob: " +
      job.name +
      "\n\nDo you confirm the appliance with the data above?"
  );

  if (confirmation) {
    job.candidates.push(candidate);
    alert("Appliance done!");
  }
}

function deleteJob() {
  const index = prompt("Enter the job's index:");
  const job = jobs[index];

  const confirmation = confirm(
    "Please check the following informations:\n" +
      "\nJob name: " +
      job.name +
      "\nJob description: " +
      job.description +
      "\nJob deadline: " +
      job.deadline +
      "\n\nAre you sure you wish to delete this job?"
  );

  if (confirmation) {
    jobs.splice(index, 1);
    alert("Job deleted.");
  }
}

function showMenu() {
  const option = prompt(
    "Job Vacancy Registration System" +
      "\n\nPlease select one of the options below:" +
      "\n1) List available jobs" +
      "\n2) Create a new job" +
      "\n3) Display a job" +
      "\n4) Register a candidate" +
      "\n5) Delete a job" +
      "\n6) End the program"
  );

  return option;
}

function exec() {
  let option = "";

  do {
    option = showMenu();

    switch (option) {
      case "1":
        listJobs();
        break;
      case "2":
        newJob();
        break;
      case "3":
        showJob();
        break;
      case "4":
        enterCandidate();
        break;
      case "5":
        deleteJob();
        break;
      case "6":
        alert("Ending the program...");
        break;
      default:
        alert("Invalid option, please type a number.");
    }
  } while (option !== "6");
}

exec();