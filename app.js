
/* StudyFlow — Study Session Tracker */

// 1. STATE: This array holds all study sessions.
let sessions = [];

// 2. LOAD: Get saved sessions when the page opens.
function loadFromStorage() {
  try {
    const saved = localStorage.getItem("study-sessions");
    const parsed = saved ? JSON.parse(saved) : [];

    sessions = Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    sessions = [];
    console.error("Could not load sessions:", error);
  }
}

// 3. SAVE: Remember sessions after a change.
function saveToStorage() {
  try {
    localStorage.setItem(
      "study-sessions",
      JSON.stringify(sessions)
    );
  } catch (error) {
    console.error("Could not save sessions:", error);
  }
}

// 4. Find Monday of the current week.
function getWeekStart() {
  const today = new Date();
  const day = today.getDay();
  const difference = day === 0 ? -6 : 1 - day;

  const monday = new Date(today);
  monday.setDate(today.getDate() + difference);
  monday.setHours(0, 0, 0, 0);

  return monday;
}

// 5. Get only this week's sessions.
function thisWeekSessions() {
  const monday = getWeekStart();

  return sessions.filter(session => {
    const date = new Date(session.date);
    return date >= monday && date <= new Date();
  });
}

// 6. Convert minutes into readable hours and minutes.
function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;

  if (hours === 0) return `${remaining} min`;
  if (remaining === 0) return `${hours} hr`;

  return `${hours} hr ${remaining} min`;
}

// 7. Safely display subject names.
function escapeHTML(value) {
  const element = document.createElement("div");
  element.textContent = String(value);
  return element.innerHTML;
}

// 8. Format dates for session history.
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric"
    }
  );
}

// 9. Update all sections of the website.
function redrawUI() {
  drawWeeklyTotal();
  drawSubjectSummary();
  drawSessionList();
}

// 10. Calculate the total time studied this week.
function drawWeeklyTotal() {
  const total = thisWeekSessions().reduce(
    (sum, session) => sum + session.duration,
    0
  );

  document.getElementById("weekly-total").textContent =
    formatTime(total);
}

// 11. Calculate study time for each subject.
function drawSubjectSummary() {
  const container = document.getElementById("subject-summary");
  const weeklySessions = thisWeekSessions();

  if (weeklySessions.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        No study sessions this week.
        Add your first session!
      </div>
    `;
    return;
  }

  const totals = {};

  weeklySessions.forEach(session => {
    const subject = session.subject;

    totals[subject] =
      (totals[subject] || 0) + session.duration;
  });

  container.innerHTML = Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .map(([subject, minutes]) => `
      <div class="subject-card">
        <div class="subj-name">
          ${escapeHTML(subject)}
        </div>
        <div class="subj-total">
          ${formatTime(minutes)}
        </div>
      </div>
    `)
    .join("");
}

// 12. Show and sort saved study sessions.
function drawSessionList() {
  const container = document.getElementById("session-list");

  if (sessions.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        No sessions yet. Log your first one above.
      </div>
    `;
    return;
  }

  const sort = document.getElementById("sort-select").value;
  const sorted = [...sessions];

  if (sort === "date-desc") {
    sorted.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  } else if (sort === "date-asc") {
    sorted.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  } else if (sort === "subject") {
    sorted.sort(
      (a, b) => a.subject.localeCompare(b.subject)
    );
  } else if (sort === "duration") {
    sorted.sort(
      (a, b) => b.duration - a.duration
    );
  }

  container.innerHTML = sorted.map(session => `
    <div class="session-row">
      <div class="session-info">
        <span class="session-subject">
          ${escapeHTML(session.subject)}
        </span>
        <span class="session-meta">
          ${formatTime(session.duration)}
          · ${formatDate(session.date)}
        </span>
      </div>

      <button
        type="button"
        class="btn-delete"
        data-id="${session.id}"
        aria-label="Delete study session"
      >
        Delete
      </button>
    </div>
  `).join("");

  container.querySelectorAll(".btn-delete").forEach(button => {
    button.addEventListener("click", () => {
      deleteSession(button.dataset.id);
    });
  });
}

// 13. Add a new study session.
document.getElementById("session-form")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const subjectInput = document.getElementById("subject");
    const durationInput = document.getElementById("duration");

    const subjectError =
      document.getElementById("subject-error");

    const durationError =
      document.getElementById("duration-error");

    subjectError.textContent = "";
    durationError.textContent = "";

    subjectInput.classList.remove("invalid");
    durationInput.classList.remove("invalid");

    const subject = subjectInput.value.trim();
    const duration = Number(durationInput.value);

    let valid = true;

    if (!subject) {
      subjectError.textContent =
        "Please enter a subject name.";

      subjectInput.classList.add("invalid");
      valid = false;
    }

    if (
      durationInput.value.trim() === "" ||
      !Number.isInteger(duration) ||
      duration <= 0
    ) {
      durationError.textContent =
        "Please enter a valid number of minutes greater than 0.";

      durationInput.classList.add("invalid");
      valid = false;
    }

    if (!valid) return;

    // Add the new session to the array.
    sessions.push({
      id: String(Date.now()) + "-" +
          Math.random().toString(36).slice(2),
      subject: subject,
      duration: duration,
      date: new Date().toISOString()
    });

    saveToStorage();
    redrawUI();

    subjectInput.value = "";
    durationInput.value = "";

    subjectInput.focus();
  });

// 14. Remove an individual session.
function deleteSession(id) {
  sessions = sessions.filter(
    session => session.id !== id
  );

  saveToStorage();
  redrawUI();
}

// 15. Show an in-page reset confirmation.
const resetButton = document.getElementById("reset-btn");
const confirmation =
  document.getElementById("reset-confirmation");

resetButton.addEventListener("click", () => {
  if (sessions.length === 0) return;

  confirmation.hidden = false;
});

// 16. Confirm reset and clear all sessions.
document.getElementById("confirm-reset")
  .addEventListener("click", () => {

    sessions = [];

    saveToStorage();
    redrawUI();

    document.getElementById("session-form").reset();

    confirmation.hidden = true;
  });

// 17. Cancel reset without deleting anything.
document.getElementById("cancel-reset")
  .addEventListener("click", () => {
    confirmation.hidden = true;
  });

// 18. Re-sort when the dropdown changes.
document.getElementById("sort-select")
  .addEventListener("change", redrawUI);

// 19. Remove error messages when inputs are corrected.
document.getElementById("subject")
  .addEventListener("input", () => {
    document.getElementById("subject-error").textContent = "";
    document.getElementById("subject").classList.remove("invalid");
  });

document.getElementById("duration")
  .addEventListener("input", () => {
    document.getElementById("duration-error").textContent = "";
    document.getElementById("duration").classList.remove("invalid");
  });

// 20. Start the application.
loadFromStorage();
redrawUI();
