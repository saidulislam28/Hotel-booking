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
    children: [{ title: "Room List", path: "/room-list" }],
  },
  {
    title: "Restaurant and Bar",
    path: "/restaurant-bar",
    icon: true,
    children: [{ title: "Restaurant", path: "/restaurant" }],
  },
  {
    title: "Local Activities",
    path: "/local-activities",
    icon: true,
    children: [
      {
        title: "Activities Details",
        path: "/activities-details",
      },
    ],
  },
  {
    title: "Features",
    path: "",
    icon: true,
    children: [
      {
        title: "Blog",
        path: "/blog",
      },
      {
        title: "Wellness & Fitness",
        path: "/wellness-fitness",
      },
      {
        title: "Events & Meetings",
        path: "/events-meetings",
      },
      {
        title: "Amenities & Services",
        path: "/amenities-services",
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    icon: false,
  },
];
export default Routes;
