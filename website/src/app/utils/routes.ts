const Routes = [
  {
    title: "Home",
    path: "/",
    icon: true,
    children: [
      { title: "dropdown_option_1", path: "/option_1" },
      { title: "dropdown_option_2", path: "/option_2" },
      { title: "dropdown_option_3", path: "/option_3" },
    ],
  },
  {
    title: "Rooms",
    path: "/rooms",
    icon: true,
    children: [{ title: "dropdown_option_1", path: "/option_1" }],
  },
  {
    title: "Restaurant and Bar",
    path: "/restaurant",
    icon: true,
    children: [{ title: "dropdown_option_1", path: "/option_1" }],
  },
  {
    title: "Local Activities",
    path: "/local-activities",
    icon: true,
    children: [{ title: "dropdown", path: "/option_1" }],
  },
  {
    title: "Features",
    path: "/features",
     icon: true,
    children: [{ title: "dropdown_option_1", path: "/option_1" }],
  },
  {
    title: "Contact",
    path: "/contact",
     icon: false,
  },
];
export default Routes;
