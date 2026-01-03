import { roomOptions } from "../../constants/roomTypes";
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

const GetRoomData = async (searchQuery: any) => {
  const query: any = { is_active: true };

  if (searchQuery?.type === roomOptions.is_deluxe) {
    query.is_deluxe = true;
  }
  if (searchQuery?.type === roomOptions.is_double) {
    query.is_double = true;
  }
  if (searchQuery?.type === roomOptions.is_executive) {
    query.is_executive = true;
  }
  if (searchQuery?.type === roomOptions.is_featured) {
    query.is_featured = true;
  }
  if (searchQuery?.type === roomOptions.is_suite) {
    query.is_suite = true;
  }

  const totalRoom = await Room.countDocuments({ is_active: true });

  const room = await Room.find(query).sort({
    sort_order: 1,
  });

  return {
    total_room: totalRoom,
    filtered_room: room.length,
    room,
  };
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
