import ToggleTheme from "@/components/toggleTheme";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[min(65ch)]">
      <h1 className="text-3xl">Lorem ipsum</h1>
      <p className="mb-6">
        at voluptatum dolorum amet distinctio nihil ipsa. Consequatur adipisci
        necessita
      </p>

      <ul className="list-square ml-6 mb-6">
        <li className="">
          <a href="">apiente ipsa</a>
        </li>
        <li>
          <a href="">s archit</a>
        </li>
        <li>
          <a href="">t molestias maxi</a>
        </li>
      </ul>

      <p className="mb-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eaque
        corrupti laudantium, sapiente ipsam praesentium doloribus aliquid
        pariatur est cumque aspernatur. Distinctio excepturi accusantium veniam
        modi consectetur, quae labore repellat! Sunt molestias maxime quo
        explicabo repellat voluptatum dolorum amet distinctio nihil ipsa.
        Consequatur adipisci necessitatibus architecto earum perferendis
        deserunt vitae unde atque, omnis placeat quasi.
      </p>
      <p className="mb-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eaque
        corrupti laudantium, sapiente ipsam praesentium doloribus aliquid
        pariatur est cumque aspernatur. Distinctio excepturi accusantium veniam
        modi consectetur, quae labore repellat! Sunt molestias maxime quo
        explicabo repellat voluptatum dolorum amet distinctio nihil ipsa.
        Consequatur adipisci necessitatibus architecto earum perferendis
        deserunt vitae unde atque, omnis placeat quasi.
      </p>
      <p className="mb-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eaque
        corrupti laudantium, sapiente ipsam praesentium doloribus aliquid
        pariatur est cumque aspernatur. Distinctio excepturi accusantium veniam
        modi consectetur, quae labore repellat! Sunt molestias maxime quo
        explicabo repellat voluptatum dolorum amet distinctio nihil ipsa.
        Consequatur adipisci necessitatibus architecto earum perferendis
        deserunt vitae unde atque, omnis placeat quasi.
      </p>
      <ToggleTheme />
    </main>
  );
}
