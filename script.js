// Predefined room assignments for dynamic splitting
const allPeople = ["Noah", "Thomas", "Luke", "Josh", "Olly", "Tom Lee", "Mark", "Lucas", "James"];

// Input and list display functionality
const nameInput = document.getElementById("nameInput");
const addNameButton = document.getElementById("addNameButton");
const nameListDiv = document.getElementById("nameList");

// Add event listener for adding names
addNameButton.addEventListener("click", () => {
  const name = nameInput.value.trim(); // Get the input value
  if (name) {
    // Create a new name element
    const nameElement = document.createElement("div");
    nameElement.textContent = name;
    nameElement.className = "added-name";

    // Append the name to the list
    nameListDiv.appendChild(nameElement);

    // Clear the input field
    nameInput.value = "";
  } else {
    alert("Please enter a valid name."); // Handle empty input
  }
});

// Room selection logic
const roomCountSelect = document.getElementById("roomCount");
const selectRoomButton = document.getElementById("selectRoomButton");
const roomResultsDiv = document.getElementById("roomResults");

selectRoomButton.addEventListener("click", () => {
  const roomCount = parseInt(roomCountSelect.value, 10);
  roomResultsDiv.innerHTML = ""; // Clear previous results

  if (roomCount === 1) {
    const roomElement = document.createElement("div");
    roomElement.textContent = `Room 1: ${allPeople.join(", ")}`;
    roomResultsDiv.appendChild(roomElement);
  } else if (roomCount === 2) {
    const room1 = ["Luke", "Thomas", "Noah", "Olly", "Tom Lee"];
    const room2 = ["Lucas", "James", "Josh", "Mark"];

    const roomElement1 = document.createElement("div");
    roomElement1.textContent = `Room 1: ${room1.join(", ")}`;
    roomResultsDiv.appendChild(roomElement1);

    const roomElement2 = document.createElement("div");
    roomElement2.textContent = `Room 2: ${room2.join(", ")}`;
    roomResultsDiv.appendChild(roomElement2);
  } else if (roomCount === 3) {
    const roomAssignments = [
      { room: "Room 1", people: ["Noah", "Thomas", "Luke"] },
      { room: "Room 2", people: ["Josh", "Olly", "Tom Lee"] },
      { room: "Room 3", people: ["Mark", "Lucas", "James"] },
    ];

    roomAssignments.forEach(assignment => {
      const roomElement = document.createElement("div");
      roomElement.textContent = `${assignment.room}: ${assignment.people.join(", ")}`;
      roomResultsDiv.appendChild(roomElement);
    });
  } else if (roomCount === 4) {
    const room1 = ["Luke", "Noah"];
    const room2 = ["Olly", "Thomas"];
    const room3 = ["Tom Lee", "Josh"];
    const room4 = ["Lucas", "Mark", "James"];

    const roomElement1 = document.createElement("div");
    roomElement1.textContent = `Room 1: ${room1.join(", ")}`;
    roomResultsDiv.appendChild(roomElement1);

    const roomElement2 = document.createElement("div");
    roomElement2.textContent = `Room 2: ${room2.join(", ")}`;
    roomResultsDiv.appendChild(roomElement2);

    const roomElement3 = document.createElement("div");
    roomElement3.textContent = `Room 3: ${room3.join(", ")}`;
    roomResultsDiv.appendChild(roomElement3);

    const roomElement4 = document.createElement("div");
    roomElement4.textContent = `Room 4: ${room4.join(", ")}`;
    roomResultsDiv.appendChild(roomElement4);
  } else {
    const errorElement = document.createElement("div");
    errorElement.textContent = "Please select a valid number of rooms (1-4).";
    roomResultsDiv.appendChild(errorElement);
  }
});
