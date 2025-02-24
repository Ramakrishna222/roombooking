// Sample Data
const rooms = [
    { id: 1, name: "Cozy PG for Students", type: "shared", price: 4000, image: "Assets/images/room1.png", description: "Comfortable shared room with Wi-Fi and meals included." },
    { id: 2, name: "Single Room with AC", type: "single", price: 7000, image: "Assets/images/room2.png", description: "Private AC room with attached bathroom." },
    { id: 3, name: "Luxury PG for Professionals", type: "shared", price: 6000, image: "Assets/images/room3.png", description: "Spacious shared room with premium amenities." },
];

// DOM Elements
const roomGrid = document.getElementById("room-grid");
const searchInput = document.getElementById("search-input");
const priceRange = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");
const roomType = document.getElementById("room-type");
const applyFilters = document.getElementById("apply-filters");
const searchBar = document.getElementById("searchBar");
const resultsContainer = document.getElementById("resultsContainer");

// Function to Render Rooms
function renderRooms(filteredRooms) {
    roomGrid.innerHTML = filteredRooms.map(room => `
        <div class="room-card" data-room-type="${room.type}">
            <img src="${room.image}" alt="${room.name}">
            <h2>${room.name}</h2>
            <p>${room.description}</p>
            <p>Price: ₹${room.price}/month</p>
        </div>
    `).join('');
}

// Initial Render
renderRooms(rooms);

// Function to Filter Rooms
function filterRooms() {
    const selectedRoomType = roomType.value;
    const maxPrice = parseInt(priceRange.value);
    const searchQuery = searchBar.value.toLowerCase();

    const filteredRooms = rooms.filter(room => {
        const matchesRoomType = selectedRoomType === "all" || room.type === selectedRoomType;
        const matchesPrice = room.price <= maxPrice;
        const matchesSearch = room.name.toLowerCase().includes(searchQuery);

        return matchesRoomType && matchesPrice && matchesSearch;
    });

    renderRooms(filteredRooms);
}

// Event Listeners
applyFilters.addEventListener("click", filterRooms);
priceRange.addEventListener("input", () => {
    priceValue.textContent = `₹${priceRange.value}`;
});
searchBar.addEventListener("input", filterRooms);
