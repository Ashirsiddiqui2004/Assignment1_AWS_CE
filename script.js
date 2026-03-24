function loadEvents() {

    const events = [
        {
            name: "Tech Seminar",
            date: "2026-04-10",
            venue: "GIKI Auditorium"
        },
        {
            name: "Sports Gala",
            date: "2026-04-15",
            venue: "Main Ground"
        },
        {
            name: "AI Workshop",
            date: "2026-04-20",
            venue: "Lab 3"
        }
    ];

    let output = "";

    events.forEach(event => {
        output += `
            <div style="border:1px solid black; margin:10px; padding:10px;">
                <h3>${event.name}</h3>
                <p>Date: ${event.date}</p>
                <p>Venue: ${event.venue}</p>
            </div>
        `;
    });

    document.getElementById("events").innerHTML = output;
}