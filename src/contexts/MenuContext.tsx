import React, { createContext, useContext, useState, useEffect } from 'react';
import { CategoryType } from '../types/menu';

interface MenuContextType {
  activeCategory: CategoryType | null;
  setActiveCategory: (category: CategoryType) => void;
  getMenuData: () => any;
  isMinimized: boolean;
  toggleMinimized: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<CategoryType | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);

  // Set initial category when menu structure is loaded
  useEffect(() => {
    const menuStructure = JSON.parse(localStorage.getItem('menuStructure') || '[]');
    if (menuStructure.length > 0 && !activeCategory) {
      setActiveCategory(menuStructure[0].id as CategoryType);
    }
  }, [activeCategory]);

  const getMenuData = () => {
    if (!activeCategory) return null;
    
    const menuStructure = JSON.parse(localStorage.getItem('menuStructure') || '[]');
    return menuStructure.find((item: any) => item.id === activeCategory);
  };

  const toggleMinimized = () => setIsMinimized(!isMinimized);

  return (
    <MenuContext.Provider value={{ 
      activeCategory, 
      setActiveCategory, 
      getMenuData, 
      isMinimized, 
      toggleMinimized 
    }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}