import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1>Test</h1>
      <Button className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white" variant={"outline"}>Test btn</Button>
    </div>
  );
}
