import ToggleTheme from "@/components/toggleTheme";
import { Card } from "@/components/card";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[min(65ch)]">
      <div>
        <span>{"Hi, i'm"}</span>
        <h1>ALLISON PEÑA</h1>
      </div>
      <p className="mb-6">
        at voluptatum dolorum amet distinctio nihil ipsa. Consequatur adipisci
        necessita
      </p>

      <ul className="mb-6 ml-6 list-square">
        <li>
          <a href="">apiente ipsa</a>
        </li>
        <li>
          <a href="">s archit</a>
        </li>
        <li>
          <a href="">t molestias maxi</a>
        </li>
      </ul>

      <Card className="mb-16">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eaque
          corrupti laudantium, sapiente ipsam praesentium doloribus aliquid
          pariatur est cumque aspernatur. Distinctio excepturi accusantium
          veniam modi consectetur, quae labore repellat! Sunt molestias maxime
          quo explicabo repellat voluptatum dolorum amet distinctio nihil ipsa.
          Consequatur adipisci necessitatibus architecto earum perferendis
          deserunt vitae unde atque, omnis placeat quasi.
        </p>
      </Card>
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
