import Image from "next/image";
import { Input } from "./components/Input";
import { Tab } from "./components/Tab";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="text-black w-120 h-80 flex flex-col p-5 items-center shadow-md bg-stone-50 rounded-md gap-10">
        <div className="gap-5 flex flex-col items-center">
          <h1 className="text-2xl font-bold ">To-Do list</h1>

          <Input />
          <Tab />
        </div>
        <div className="text-stone-500">No tasks yet. Add one above!</div>
        <div className="flex gap-1">
          <div className="text-stone-500">Powered by</div>
          <div className="text-blue-500">Pinecone Academy</div>
        </div>
      </div>
    </div>
  );
}
