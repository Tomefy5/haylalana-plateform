import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations("homePage");

  return (
    <div>
      <h1>{t("title")}</h1>
      <Button className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white" variant={"outline"}>Test btn</Button>
    </div>
  );
}
