import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("src/components/pages/Home"));

export default function Home() {
  return <DynamicHeader />;
}
