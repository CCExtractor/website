function displayInternationalTimes() {
    const baseDate = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  
    // Set to 8:30 AM in California
    const [month, day, year] = formatter.format(baseDate).split("/");
    const californiaTime = new Date(
      `${year}-${month}-${day}T08:30:00-08:00`
    ); // PST is UTC-8
  
    const locations = [
        { zone: 'America/Los_Angeles', name: 'California, USA' },
        { zone: 'Europe/London', name: 'London, UK' },
        { zone: 'Asia/Kolkata', name: 'India (IST)' },
        { zone: 'Australia/Sydney', name: 'Sydney, Australia' },
        { zone: 'Asia/Tokyo', name: 'Tokyo, Japan' }
    ];
  
    let html = "<table>";
    html += "<tr><th>Location</th><th>Local Time</th></tr>";
  
    locations.forEach((location) => {
      const options = {
        timeZone: location.zone,
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      };
  
      // Use Intl.DateTimeFormat to get the time in the target time zone
      const localTimeFormatter = new Intl.DateTimeFormat("en-US", options);
      const timeString = localTimeFormatter.format(californiaTime);
  
      // Get the date string in the target time zone
      const dateString = californiaTime.toLocaleDateString("en-US", {
        timeZone: location.zone,
      });
      const currentDateString = new Date().toLocaleDateString("en-US", {
        timeZone: "America/Los_Angeles",
      });
  
      let dayDiff = "";
      if (dateString !== currentDateString) {
        if (location.zone === "Asia/Tokyo" || location.zone === "Australia/Sydney") {
          dayDiff = "(Next Day)";
        } else {
          dayDiff = `(${dateString.split("/")[0]}/${dateString.split("/")[1]})`;
        }
      }
  
      html += `<tr><td>${location.name}</td><td>${timeString} ${dayDiff}</td></tr>`;
    });
  
    html += "</table>";
    document.getElementById("timeDisplay").innerHTML = html;
  }
  
  displayInternationalTimes();