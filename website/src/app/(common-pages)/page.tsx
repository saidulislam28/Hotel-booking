// import { GET_TASK } from "@/api/endpoints";
// import { get } from "../utils/ApiCalls";
// import TaskButton from "@/component/taskButton";

// interface TASK {
//   id: number;
//   title: string;
//   sub_title: string;
// }

export default async function Home() {
  // const tasks: TASK[] = await get(GET_TASK);
  // console.log(tasks);

  return (
    <div className="max-w-7xl mx-auto">
      {/* {tasks.map((task) => (
        <TaskButton task={task} key={task?.id} />
      ))} */}
      this is Home
    </div>
  );
}
