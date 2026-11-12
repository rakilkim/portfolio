import Link from "next/link";

export default function Timeline() {
  return (
    <div className="flex flex-col sm:w-1/2 sm:px-0 px-2 pt-[25vh]">
      <div className="flex justify-end gap-4 mr-1 text-sm">
        <Link href="/">home</Link>
        <Link href="/projects">projects</Link>
        <Link href="/timeline">timeline</Link>
        <Link href="/whoami">whoami</Link>
      </div>
    </div>
  );
}