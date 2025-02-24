// Sample Data
const rooms = [
    {
      id: 1,
      name: "Cozy PG for Students",
      type: "shared",
      price: 4000,
      image: "Asset/images/room1.png",
      description: "Comfortable shared room with Wi-Fi and meals included.",
    },
    {
      id: 2,
      name: "Single Room with AC",
      type: "single",
      price: 7000,
      image: "Asset/images/room2.png",
      description: "Private AC room with attached bathroom.",
    },
    {
      id: 3,
      name: "Luxury PG for Professionals",
      type: "shared",
      price: 6000,
      image: "Asset/images/room3.png",
      description: "Spacious shared room with premium amenities.",
    },
  ];
  
  // DOM Elements
  const roomGrid = document.getElementById("room-grid");
  const searchInput = document.getElementById("search-input");
  const priceRange = document.getElementById("price-range");
  const priceValue = document.getElementById("price-value");
  const roomType = document.getElementById("room-type");
  const applyFilters = document.getElementById("apply-filters");
  
  // Render Rooms
  function renderRooms(filteredRooms) {
    roomGrid.innerHTML = filteredRooms
      .map(
        (room) => `
        <div class="room-card">
          <img src="${room.image}" alt="${room.name}">
          <div class="details">
            <h3>${room.name}</h3>
            <p>${room.description}</p>
            <p class="price">₹${room.price}/month</p>
            <button class="book-btn" onclick="bookRoom(${room.id})">Book Now</button>
          </div>
        </div>
      `
      )
      .join("");
  }
  
  // Filter Rooms
  function filterRooms() {
    const searchQuery = searchInput.value.toLowerCase();
    const maxPrice = parseInt(priceRange.value);
    const selectedType = roomType.value;
  
    const filteredRooms = rooms.filter((room) => {
      const matchesSearch = room.name.toLowerCase().includes(searchQuery);
      const matchesPrice = room.price <= maxPrice;
      const matchesType = selectedType === "all" || room.type === selectedType;
      return matchesSearch && matchesPrice && matchesType;
    });
  
    renderRooms(filteredRooms);
  }
  
  // Book Room
  function bookRoom(roomId) {
    const room = rooms.find((r) => r.id === roomId);
    alert(`Booking confirmed for ${room.name} at ₹${room.price}/month!`);
  }
  
  // Event Listeners
  searchInput.addEventListener("input", filterRooms);
  priceRange.addEventListener("input", () => {
    priceValue.textContent = `₹${priceRange.value}`;
    filterRooms();
  });
  roomType.addEventListener("change", filterRooms);
  applyFilters.addEventListener("click", filterRooms);
  
  // Initial Render
  renderRooms(rooms);
