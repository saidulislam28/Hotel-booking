import RoomCardDetails from "@/component/room-details";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <RoomCardDetails id={id} />;
}