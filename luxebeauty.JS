const messages = [
    "KLARNA - KÖP NU, BETALA SEN!",
    "FRAKT ÖVER HELA SVERIGE!",
    "30% RABATT PÅ ALLT JUST NU"
  ];
  
  let index = 0;
  setInterval(() => {
    index = (index + 1) % messages.length;
    document.getElementById("top-banner").textContent = messages[index];
  }, 4000);
  
  function toggleMenu() {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
  }