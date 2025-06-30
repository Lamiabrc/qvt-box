
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LucideIcon } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface CategoryTabsProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs = ({ categories, selectedCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <Tabs value={selectedCategory} onValueChange={onCategoryChange}>
      <TabsList className="grid grid-cols-4 md:grid-cols-8 gap-2 h-auto p-2 bg-white/60 backdrop-blur-sm soap-bubble-effect">
        {categories.map((category) => (
          <TabsTrigger
            key={category.id}
            value={category.id}
            className="flex flex-col items-center p-3 data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
          >
            <category.icon className="w-5 h-5 mb-1" />
            <span className="text-xs">{category.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default CategoryTabs;
