import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("src/components/pages/About"));

export default function About() {
  return <DynamicHeader />;
}
