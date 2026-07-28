import "./Menu.css";

const menuItems = [
  {
    name: "Cappuccino",
    price: "₹180",
    image: `${import.meta.env.BASE_URL}cappuccino.png`,
  },
  {
    name: "Latte",
    price: "₹190",
    image: `${import.meta.env.BASE_URL}latte.png`,
  },
  {
    name: "Chocolate Cake",
    price: "₹220",
    image: `${import.meta.env.BASE_URL}chocolate-cake.png`,
  },
  {
    name: "Butter Croissant",
    price: "₹150",
    image: `${import.meta.env.BASE_URL}butter-croissant.png`,
  },
  {
    name: "Blueberry Muffin",
    price: "₹160",
    image: `${import.meta.env.BASE_URL}blueberry-muffin.png`,
  },
  {
    name: "Iced Coffee",
    price: "₹200",
    image: `${import.meta.env.BASE_URL}iced-coffee.png`,
  },
  {
    name: "Sandwich",
    price: "₹210",
    image: `${import.meta.env.BASE_URL}sandwich.png`,
  },
  {
    name: "Cookies",
    price: "₹120",
    image: `${import.meta.env.BASE_URL}cookies.png`,
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