import {
  AppstoreOutlined,
  ContactsFilled,
  DashboardFilled,
} from "@ant-design/icons";

const menuItems = [
  {
    label: "Dashboard",
    key: "/",
    icon: <DashboardFilled />,
  },
  {
    label: "Booking",
    key: "/booking",
    icon: <DashboardFilled />,
  },
  {
    label: "User",
    key: "/users",
    icon: <ContactsFilled />,
  },
  {
    label: "Room",
    icon: <ContactsFilled />,
    children: [
      {
        label: "Room List",
        key: "/room",
      },
      {
        label: "Room Service",
        key: "/room-services",
      },
      {
        label: "Room Features",
        key: "/room-features",
      },
      {
        label: "Bathroom Features",
        key: "/bathroom-features",
      },
    ],
  },
  {
    label: "Food Items",
    key: "/food-items",
    icon: <ContactsFilled />,
  },
  {
    label: "Testimonial",
    key: "/testimonial",
    icon: <ContactsFilled />,
  },
  {
    label: "Blog",
    icon: <ContactsFilled />,
    children: [
      {
        label: "Blog List",
        key: "/blogs",
      },
      {
        label: "Tags",
        key: "/tags",
      },
    ],
  },
];

export default menuItems;
