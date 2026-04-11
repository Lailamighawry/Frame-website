"use client";

import { useState } from "react";
import { FlipReveal, FlipRevealItem } from "@/components/ui/flip-reveal";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const categories = [
  {
    flipKey: "modern",
    label: "Modern",
    title: "Modern & Contemporary",
    description: "Clean lines, minimal forms, neutral tones, and functional design.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    filterKey: "modern",
  },
  {
    flipKey: "classic",
    label: "Classic",
    title: "Classic / Traditional",
    description: "Elegant, timeless pieces with rich materials and ornate details.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    filterKey: "classic",
  },
  {
    flipKey: "rustic",
    label: "Rustic",
    title: "Rustic",
    description: "Natural textures, raw wood, and warm cozy aesthetics.",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
    filterKey: "rustic",
  },
  {
    flipKey: "industrial",
    label: "Industrial",
    title: "Industrial",
    description: "Metal, wood, and urban warehouse-inspired design.",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80",
    filterKey: "industrial",
  },
  {
    flipKey: "scandinavian",
    label: "Scandi",
    title: "Scandinavian",
    description: "Light colors, simplicity, and cozy minimalism.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    filterKey: "scandinavian",
  },
  {
    flipKey: "minimalist",
    label: "Minimalist",
    title: "Minimalist",
    description: "Simple, uncluttered spaces with essential furniture only.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    filterKey: "minimalist",
  },
  {
    flipKey: "bohemian",
    label: "Boho",
    title: "Bohemian (Boho)",
    description: "Eclectic, colorful, and full of personality and textures.",
    image: "https://images.unsplash.com/photo-1630699144867-37acec97df5a?auto=format&fit=crop&w=800&q=80",
    filterKey: "bohemian",
  },
  {
    flipKey: "coastal",
    label: "Coastal",
    title: "Coastal / Tropical",
    description: "Airy, beach-inspired tones with relaxed vibes.",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=800&q=80",
    filterKey: "coastal",
  },
  {
    flipKey: "midcentury",
    label: "Mid-Century",
    title: "Mid-Century Modern",
    description: "Retro-inspired furniture with clean lines and organic shapes.",
    image: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&w=800&q=80",
    filterKey: "midcentury",
  },
  {
    flipKey: "transitional",
    label: "Transitional",
    title: "Transitional",
    description: "A balanced mix between modern simplicity and classic warmth.",
    image: "https://images.unsplash.com/photo-1615875221248-9d849d43c99a?auto=format&fit=crop&w=800&q=80",
    filterKey: "transitional",
  },
  {
    flipKey: "eclectic",
    label: "Eclectic",
    title: "Eclectic / Fusion",
    description: "A creative mix of styles, textures, and influences.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
    filterKey: "eclectic",
  },
];

const filterTabs = [
  { value: "all", label: "All" },
  { value: "modern", label: "Modern" },
  { value: "classic", label: "Classic" },
  { value: "rustic", label: "Rustic" },
  { value: "industrial", label: "Industrial" },
  { value: "scandinavian", label: "Scandi" },
  { value: "minimalist", label: "Minimalist" },
  { value: "bohemian", label: "Boho" },
  { value: "coastal", label: "Coastal" },
  { value: "midcentury", label: "Mid-Century" },
  { value: "transitional", label: "Transitional" },
  { value: "eclectic", label: "Eclectic" },
];

export const FurnitureCategories = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section className="categories-section py-24 px-4 bg-[#0a0a0a] text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[#c8a96e] font-semibold mb-3">
          Explore Styles
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Browse, you will definitely find{" "}
          <span className="text-[#c8a96e]">something you like</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          From timeless classics to bold contemporary — discover frames that
          complement every aesthetic.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex justify-center mb-10">
        <div className="overflow-x-auto pb-2 max-w-full">
          <ToggleGroup
            type="single"
            value={activeFilter}
            onValueChange={(val) => val && setActiveFilter(val)}
            className="flex flex-wrap gap-2 justify-center"
          >
            {filterTabs.map((tab) => (
              <ToggleGroupItem
                key={tab.value}
                value={tab.value}
                className="px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:text-white hover:border-[#c8a96e] data-[state=on]:bg-[#c8a96e] data-[state=on]:text-black data-[state=on]:border-[#c8a96e] transition-all duration-300 bg-white/5"
              >
                {tab.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>

      {/* Grid */}
      <FlipReveal
        keys={[activeFilter]}
        showClass="flex"
        hideClass="hidden"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto"
      >
        {categories.map((cat) => (
          <FlipRevealItem key={cat.flipKey} flipKey={cat.filterKey}>
            <div className="category-card group relative overflow-hidden rounded-2xl cursor-pointer w-full aspect-[4/5]">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <h3 className="font-bold text-lg text-white mb-1 group-hover:text-[#c8a96e] transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug mb-3">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#c8a96e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#c8a96e]/40 rounded-full px-3 py-1">
                  Explore Collection →
                </span>
              </div>
            </div>
          </FlipRevealItem>
        ))}
      </FlipReveal>
    </section>
  );
};

export default FurnitureCategories;
