// Helper function that parses a date/time string as if it were in America/Los_Angeles
function parseSFDate(dateStr, timeStr) {
  // Parse the date components
  let year, month, day;
  if (dateStr) {
    [year, month, day] = dateStr.split("-").map(Number);
  } else {
    // If no date provided, use current date in San Francisco
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const [m, d, y] = formatter.format(now).split("/");
    year = parseInt(y);
    month = parseInt(m);
    day = parseInt(d);
  }

  // Parse the time components
  let hour = 0,
    minute = 0,
    seconds = 0;
  if (timeStr) {
    // Remove the leading "T" if present
    const cleanTimeStr = timeStr.startsWith("T")
      ? timeStr.substring(1)
      : timeStr;
    // Handle different time formats
    if (cleanTimeStr.includes(":")) {
      const timeParts = cleanTimeStr.split(":");
      hour = parseInt(timeParts[0]);
      minute = parseInt(timeParts[1]);
      if (timeParts.length > 2) {
        seconds = parseInt(timeParts[2]);
      }
    }
  }

  // Create a temporary date to determine if DST is in effect
  const tempDate = new Date(year, month - 1, day, hour, minute, seconds);
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    timeZoneName: "short",
  });
  const parts = formatter.formatToParts(tempDate);
  const tzName = parts.find((part) => part.type === "timeZoneName").value;

  // Adjust offset based on DST
  const offsetHours = tzName === "PDT" ? 7 : 8;

  // Calculate UTC time
  const utcMillis = Date.UTC(
    year,
    month - 1,
    day,
    hour + offsetHours,
    minute,
    seconds
  );
  return new Date(utcMillis);
}

function displayInternationalTimes(timeInput, dateInput) {
  // Create the date object representing SF local time
  const californiaTime = parseSFDate(dateInput, timeInput);

  const locations = [
    { zone: "America/Los_Angeles", name: "California, USA" },
    { zone: "Europe/London", name: "London, UK" },
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
      second: "2-digit",
      timeZoneName: "short",
      weekday: "short",
      month: "short",
      day: "numeric",
    };

    // Get formatted time for this location
    const localFormatter = new Intl.DateTimeFormat("en-US", options);
    const formattedTime = localFormatter.format(californiaTime);

    // Check if date differs from SF date
    const dateOptions = {
      timeZone: location.zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const dateString = californiaTime.toLocaleDateString("en-US", dateOptions);
    const sfDateString = californiaTime.toLocaleDateString("en-US", {
      timeZone: "America/Los_Angeles",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    let dayDiff = "";
    if (dateString !== sfDateString) {
      if (
        location.zone === "Asia/Tokyo" ||
        location.zone === "Australia/Sydney"
      ) {
        dayDiff = "(Next Day)";
      } else {
        const [m, d] = dateString.split("/");
        dayDiff = `(${m}/${d})`;
      }
    }

    html += `<tr><td>${location.name}</td><td>${formattedTime} ${dayDiff}</td></tr>`;
  });

  html += "</table>";
  document.getElementById("timeDisplay").innerHTML = html;
}
