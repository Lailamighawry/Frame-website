import InteractiveSelector from "@/components/ui/interactive-selector";
import { FurnitureCategories } from "@/components/ui/furniture-categories";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section id="hero">
        <InteractiveSelector />
      </section>

      {/* Categories Section */}
      <section id="categories">
        <FurnitureCategories />
      </section>
    </main>
  );
}
