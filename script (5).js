// Meeting Scheduler using JavaScript

let meetings = [];

// Function to add a meeting
function addMeeting(title, date, time, participants) {
    const meeting = {
        id: meetings.length + 1,
        title: title,
        date: date,
        time: time,
        participants: participants
    };

    meetings.push(meeting);
    console.log("Meeting Added Successfully!");
}

// Function to display all meetings
function showMeetings() {
    if (meetings.length === 0) {
        console.log("No meetings scheduled.");
        return;
    }

    console.log("\n--- Scheduled Meetings ---");

    meetings.forEach((meeting) => {
        console.log(`ID: ${meeting.id}`);
        console.log(`Title: ${meeting.title}`);
        console.log(`Date: ${meeting.date}`);
        console.log(`Time: ${meeting.time}`);
        console.log(`Participants: ${meeting.participants}`);
        console.log("--------------------------");
    });
}

// Function to delete a meeting
function deleteMeeting(id) {
    const index = meetings.findIndex(
        (meeting) => meeting.id === id
    );

    if (index === -1) {
        console.log("Meeting not found.");
        return;
    }

    meetings.splice(index, 1);
    console.log("Meeting Deleted Successfully!");
}

// Sample Data
addMeeting(
    "Project Discussion",
    "2026-06-25",
    "10:00 AM",
    "Rahul, Priya"
);

addMeeting(
    "Client Meeting",
    "2026-06-26",
    "02:00 PM",
    "Amit, Sneha"
);

// Display meetings
showMeetings();

// Delete a meeting
deleteMeeting(1);

// Display again
showMeetings();