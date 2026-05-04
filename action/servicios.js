const items = document.querySelectorAll(".list-group-item");
items.forEach(item => {item.style.color = "green";
  item.textContent += " ✅ ";
});
