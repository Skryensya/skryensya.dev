export default function Sidebar() {
  return (
    <aside className="fixed top-0 min-h-full w-8 border-r-[1.5px] border-accent">
      <p className="w-fit -translate-x-6 translate-y-24 rotate-[270deg] md:-translate-x-8 md:translate-y-24 ">
        <a
          className="text-sm md:text-base"
          href="https://instagram.com/skryensya_"
          target="_blank"
          title="Go to my instagram!"
        >
          @Skryensya_
        </a>
      </p>
    </aside>
  );
}
