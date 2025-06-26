const Menus = [
  { name: "Home", to: "/" },
  {
    name: "About",
    subMenu: [
      { name: "WHO ARE WE", to: "/about" },
      { name: "BELIEFS & PRINCIPLES", to: "/beliefs" },
      { name: "VALUES", to: "/values" },
    ],
    gridCols: 2,
  },
  {
    name: "Ministries",
    subMenu: [
      { name: "WOMEN'S MINISTRY", to: "/womens-ministry" },
      { name: "MEN'S MINISTRY", to: "/mens-ministry" },
      { name: "YOUTH MINISTRY", to: "/youth-ministry" },
      { name: "CHILDREN MINISTRY", to: "/children-ministry" },
      { name: "EVANGELISM MINISTRY", to: "/evangelism-ministry" },
    ],
    gridCols: 3,
  },
  { name: "Events", to: "/events" },
  { name: "Contact", to: "/contact" },
  { name: "Give", to: "/give" },
];

export default Menus;
