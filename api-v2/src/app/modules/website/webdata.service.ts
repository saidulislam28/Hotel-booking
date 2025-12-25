import { Blog, FoodItem, Room, Testimonial } from "../../model";

const GetWebData = async () => {
  const blogs = await Blog.find({ is_active: true }).sort({ sort_order: 1 });
  const featuredBlogs = blogs.filter((blog) => blog?.is_featured).slice(0, 3);
  const myBlogs = blogs.filter((blog) => !blog.is_featured && blog.is_active);
  const localBlogs = blogs.filter((blog) => !blog.is_local_activities);

  const roomTestimonials = await Testimonial.find({
    is_active: true,
    is_room: true,
  }).sort({ sort_order: 1 });

  const foodTestimonial = await Testimonial.find({
    is_active: true,
    is_food: true,
  });

  const room = await Room.find({ is_active: true, is_featured: true })
    .sort({
      sort_order: 1,
    })
    .limit(6);

  return {
    featuredBlogs,
    myBlogs,
    roomTestimonials,
    foodTestimonial,
    localBlogs,
    room,
  };
};

const GetRoomData = async () => {
  const room = await Room.find({ is_active: true }).sort({
    sort_order: 1,
  });

  return room;
};
const GetSingleRoomData = async (id: string) => {
  const room = await Room.findById(id).populate([
    { path: "room_services", select: "title" },
    { path: "room_features", select: "title" },
    { path: "room_bathroom_features", select: "title" },
  ]);

  return room;
};
const GetSingleBlog = async (id: string) => {
  const blog = await Blog.findById(id);

  return blog;
};
const GetFoodData = async () => {
  const food = await FoodItem.find({ is_active: true }).sort({
    sort_order: 1,
  });

  return food;
};

export const WebDataService = {
  GetWebData,
  GetRoomData,
  GetFoodData,
  GetSingleRoomData,
  GetSingleBlog,
};
