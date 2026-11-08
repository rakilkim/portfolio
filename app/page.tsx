import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      welcome, to my portfolio
      <p>
        This is a simple website for my portfolio project.
      </p>
      <p className="text-muted-foreground">I hope this goes well</p>
      <button className="bg-accent px-4 py-2 rounded">
        Get Started
      </button>
    </div>
  );
}
