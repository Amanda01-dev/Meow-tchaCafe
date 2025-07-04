const catArt = document.getElementById('cat-art');
if (catArt) {
    catArt.addEventListener('mouseenter', () => {
        catArt.style.transform = 'scale(1.05) rotate(-3deg)';
    catArt.style.color = '#e67e22';
    catArt.style.textShadow = '4px 4px 0 #b29393, 8px 8px 0 #ff9800';
  });
  catArt.addEventListener('mouseleave', () => {
    catArt.style.transform = '';
    catArt.style.color = '';
    catArt.style.textShadow = '';
  });
}
const menus = [
  //January
  ['Darjeeling', 'Gingerbread Espresso', 'Lemon Bar'],
  //February
  ['Vanilla', 'Sugar Cookie Latte', 'Orange Scone'],
  //March
  ['Longjing', 'White Chocolate Raspberry Macchiato', 'Strawberry Tart'],
  //April
  ['Silver Needle', 'Caramel Flat White', 'Cherry Danish'],
  //May
  ['Lemon Ginger', 'Cinnamon Vanilla Cappuccino', 'Peach Cobbler'],
  //June
  ['Matcha', 'Sweet Cream Affogato', 'Blueberry Muffin'],
  //July
  ['Ginger', 'French Vanilla Frappe', 'Banana Bread'],
  //August
  ['Hibiscus', 'Hazelnut Espresso', 'Apple Roll'],
  //September
  ['Apple Green Tea', 'Pumpkin Spice Latte', 'Cranberry Scone'],
  //October
  ['Chai Pumpkin Spice', 'Maple Pecan Macchiato', 'Apple Cider Donut'],
  //November
  ['Peppermint', 'Apple Butter Cinnamon Flat White', 'Pumpkin Pie'],
  //December
  ['English Breakfast', 'Gingerbread Latte', 'Chocolate Chip Cookie']
];

const today = new Date().getMonth();
const todayMenu = menus[today];

const menuList = document.getElementById('menu-list');
if (menuList) {
  todayMenu.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    menuList.appendChild(li);
  });
}

const pixelCat = document.getElementById('pixel-cat');
const menuContainer = document.querySelector('.menu-container');
let followMouse = true;

if (menuContainer && pixelCat) {
  menuContainer.addEventListener('mouseenter', () => {
    followMouse = false;
  });
  menuContainer.addEventListener('mouseleave', () => {
    followMouse = true;
  });
}

document.addEventListener('mousemove', (e) => {
  if (!pixelCat) return;
  if (!followMouse) return;

  // Offset so the cat doesn't cover the cursor
  const offsetX = -24;
  const offsetY = -48;

  pixelCat.style.left = (e.clientX + offsetX) + 'px';
  pixelCat.style.top = (e.clientY + offsetY) + 'px';
});
