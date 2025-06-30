const DATA = [
  {
    id: "Room",
    subCat: [
      { catID: "Living Room", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Dining Room", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Home Office", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Bathroom", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Kitchen", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Laundry Room", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Basement", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Attic", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" }
    ]
  },
  {
    id: "Style",
    subCat: [
      { catID: "Modern", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Rustic", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Minimalist", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Industrial", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Victorian", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Colonial", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Traditional", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Modern", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" }
    ]
  },
  {
    id: "Seasons & Holidays",
    subCat: [
      { catID: "Winter", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Autumn", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Spring", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Summer", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Valentine’s Day", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Eid / Ramadan", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Halloween", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "New Year’s Eve", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" }
    ]
  },
  {
    id: "Furniture Type",
    subCat: [
      { catID: "Sofas & armchairs", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Beds & mattresses", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Storage furniture", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Tables & desks", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Chairs & seating", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Wardrobes & dressers", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Shelving units", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "TV & media furniture", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Cabinets & sideboards", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Benches & ottomans", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Office furniture", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Outdoor furniture", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Kids furniture", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Lighting & lamps", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Decor & accessories", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" }
    ]
  },
  {
    id: "Theme",
    subCat: [
      { catID: "Small Space Solutions", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Pet-Friendly Furniture", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Apartment Living", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Minimalist Vibes", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Cozy & Comfy", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Multi-Functional Pieces", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Budget-Friendly Finds", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Modern & Sleek", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Rustic Charm", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Eco-Friendly Picks", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Family-Friendly Furniture", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Bold & Colorful", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Luxury Living", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Industrial Style", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Vintage & Retro", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Boho Chic", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Scandinavian Simplicity", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" }
    ]
  },
  {
    id: "Launch or Trend",
    subCat: [
      { catID: "Trending Now", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Influencer Picks", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Editor’s Choice", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "New Arrivals", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Just Dropped", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Seasonal Highlights", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Back in Stock", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Bestsellers", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Online Exclusives", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Limited Edition", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Staff Favorites", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Featured Collections", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" },
      { catID: "Hot Picks This Month", catImg:"https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", catURL:"" }
    ]
  }
];

export default DATA;
