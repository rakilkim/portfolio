import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col sm:w-2/3 md:w-1/2 sm:px-0 px-2 pt-[25vh]">
      <div className="flex justify-end gap-4 mr-1 text-sm">
        <Link href="/">home</Link>
        <Link href="/projects">projects</Link>
        <Link href="/timeline">timeline</Link>
        <Link href="/whoami">whoami</Link>
      </div>
      <p className="pb-4 pt-1 text-xl">
        <strong>welcome</strong>, to my portfolio
      </p>
      <p className="pb-3">
        hi, my name is rakil.
      </p>
      <p className="pb-3">
        i got my bachelor's in computer science from ucla,
        worked on many projects during that time, and wanted to organize them.
        this site is the start of that process.
      </p>
      <p className="pb-3">
        feel free to explore and have fun.
      </p>
      <p className="text-muted-foreground">I hope this goes well</p>
      <button className="bg-accent px-4 py-2 rounded">
        Get Started
      </button>
    </div>
  );
}
// make cursor draw line and color the links to accent
