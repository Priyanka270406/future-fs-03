import "./Menu.css";

const menuItems = [
  {
    name: "Cappuccino",
    price: "₹180",
    image: "/cappuccino.png",
  },
  {
    name: "Latte",
    price: "₹190",
    image: "/latte.png",
  },
  {
    name: "Chocolate Cake",
    price: "₹220",
    image: "/chocolate-cake.png",
  },
  {
    name: "Butter Croissant",
    price: "₹150",
    image: "/butter-croissant.png",
  },
  {
    name: "Blueberry Muffin",
    price: "₹160",
    image: "/blueberry-muffin.png",
  },
  {
    name: "Iced Coffee",
    price: "₹200",
    image: "/iced-coffee.png",
  },
  {
    name: "Sandwich",
    price: "₹210",
    image: "/sandwich.png",
  },
  {
    name: "Cookies",
    price: "₹120",
    image: "/cookies.png",
  },
];

function Menu() {
  return (
    <section className="menu" id="menu">
      <h2>Our Menu</h2>
      <p>Freshly brewed coffee and delicious treats.</p>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;