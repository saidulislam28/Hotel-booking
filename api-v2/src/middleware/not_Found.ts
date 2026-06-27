const NotFoundRoute = (req: any, res: any) => {
  res.status(400).json({
    success: false,
    message: "Route not found",
  });
};

export default NotFoundRoute;
