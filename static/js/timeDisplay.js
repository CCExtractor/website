// Office hours configuration
const OFFICE_HOURS_START = new Date("2026-02-08T10:30:00"); // First office hours
const OFFICE_HOURS_END = new Date("2026-04-30T23:59:59"); // Last day of office hours season
const OFFICE_HOURS_TIME = { hour: 10, minute: 30 }; // 10:30 AM San Francisco time

// Get the current time in San Francisco
function getSanFranciscoNow() {
  const now = new Date();
  const sfString = now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  return new Date(sfString);
}

// Create a Date object for a specific SF time
function createSFDate(year, month, day, hour, minute) {
  // Create a date string and parse it as SF time
  const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00`;

  // Create a temporary date to determine DST
  const tempDate = new Date(year, month - 1, day, hour, minute, 0);
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    timeZoneName: "short",
  });
  const parts = formatter.formatToParts(tempDate);
  const tzName = parts.find((part) => part.type === "timeZoneName").value;

  // Adjust offset based on DST (PDT = UTC-7, PST = UTC-8)
  const offsetHours = tzName === "PDT" ? 7 : 8;

  // Calculate UTC time
  const utcMillis = Date.UTC(year, month - 1, day, hour + offsetHours, minute, 0);
  return new Date(utcMillis);
}

// Find the next Sunday office hours from a given SF date
function getNextOfficeSunday(fromDate) {
  const sfNow = fromDate || getSanFranciscoNow();

  // Get current SF date components
  const sfFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    weekday: "long"
  });

  const parts = sfFormatter.formatToParts(new Date());
  const sfYear = parseInt(parts.find(p => p.type === "year").value);
  const sfMonth = parseInt(parts.find(p => p.type === "month").value);
  const sfDay = parseInt(parts.find(p => p.type === "day").value);
  const sfHour = parseInt(parts.find(p => p.type === "hour").value);
  const sfMinute = parseInt(parts.find(p => p.type === "minute").value);
  const sfWeekday = parts.find(p => p.type === "weekday").value;

  // Calculate days until next Sunday
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayIndex = weekdays.indexOf(sfWeekday);
  let daysUntilSunday = (7 - currentDayIndex) % 7;

  // If it's Sunday, check if office hours have passed
  if (currentDayIndex === 0) {
    const currentMinutes = sfHour * 60 + sfMinute;
    const officeMinutes = OFFICE_HOURS_TIME.hour * 60 + OFFICE_HOURS_TIME.minute;
    if (currentMinutes >= officeMinutes) {
      // Office hours have passed, next Sunday
      daysUntilSunday = 7;
    }
  }

  // Calculate next Sunday's date
  const nextSunday = new Date(sfYear, sfMonth - 1, sfDay + daysUntilSunday);

  // Office hours start on February 8, 2026 - ensure we don't show a date before that
  const seasonStart = new Date(2026, 1, 8); // Feb 8, 2026
  if (nextSunday < seasonStart) {
    // Return February 8, 2026 (which is a Sunday)
    return createSFDate(2026, 2, 8, OFFICE_HOURS_TIME.hour, OFFICE_HOURS_TIME.minute);
  }

  return createSFDate(
    nextSunday.getFullYear(),
    nextSunday.getMonth() + 1,
    nextSunday.getDate(),
    OFFICE_HOURS_TIME.hour,
    OFFICE_HOURS_TIME.minute
  );
}

// Check if we're in office hours season
function isOfficeHoursSeason() {
  const now = new Date();
  const seasonStart = createSFDate(2026, 2, 8, 0, 0);
  const seasonEnd = createSFDate(2026, 4, 30, 23, 59);
  return now >= seasonStart && now <= seasonEnd;
}

// Check if office hours season hasn't started yet
function isBeforeOfficeHoursSeason() {
  const now = new Date();
  const seasonStart = createSFDate(2026, 2, 8, 0, 0);
  return now < seasonStart;
}

// Format countdown
function formatCountdown(targetDate) {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    return "Office hours are happening now!";
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  let parts = [];
  if (days > 0) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
  if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
  if (seconds > 0) parts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);

  return `Next office hours start in ${parts.join(', ')}`;
}

function displayInternationalTimes() {
  const container = document.getElementById("timeDisplay");

  // Check if we're outside office hours season
  if (!isOfficeHoursSeason() && !isBeforeOfficeHoursSeason()) {
    container.innerHTML = "<p><strong>It's not office hours season, but you can reach out to us on Zulip throughout the year.</strong></p>";
    return;
  }

  const nextOfficeHours = getNextOfficeSunday();

  // If next office hours would be after the season ends, show off-season message
  const seasonEnd = createSFDate(2026, 4, 30, 23, 59);
  if (nextOfficeHours > seasonEnd) {
    container.innerHTML = "<p><strong>It's not office hours season, but you can reach out to us on Zulip throughout the year.</strong></p>";
    return;
  }

  const locations = [
    { zone: "America/Los_Angeles", name: "San Francisco, USA" },
    { zone: "America/New_York", name: "New York, USA" },
    { zone: "Europe/London", name: "London, UK" },
    { zone: "Europe/Madrid", name: "Madrid, Spain" },
    { zone: "Asia/Kolkata", name: "India (IST)" },
    { zone: "Australia/Sydney", name: "Sydney, Australia" },
    { zone: "Asia/Tokyo", name: "Tokyo, Japan" },
  ];

  let html = "<table>";
  html += "<tr><th>Location</th><th>Local Time</th></tr>";

  locations.forEach((location) => {
    const options = {
      timeZone: location.zone,
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
      weekday: "long",
      month: "short",
      day: "numeric",
    };

    const localFormatter = new Intl.DateTimeFormat("en-US", options);
    const formattedTime = localFormatter.format(nextOfficeHours);

    html += `<tr><td>${location.name}</td><td>${formattedTime}</td></tr>`;
  });

  html += "</table>";
  html += `<p id="countdown" style="text-align: center; margin-top: 10px; font-weight: bold;"></p>`;

  container.innerHTML = html;

  // Update countdown
  function updateCountdown() {
    const countdownEl = document.getElementById("countdown");
    if (countdownEl) {
      countdownEl.textContent = formatCountdown(nextOfficeHours);
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
