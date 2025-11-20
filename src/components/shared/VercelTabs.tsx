
"use client";

import { useState, useRef, useEffect } from "react";

interface VercelTabsProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export function VercelTabs({ tabs, activeTab, onTabChange }: VercelTabsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverStyle, setHoverStyle] = useState({});
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" });
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeIndex = tabs.indexOf(activeTab);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex]);

  useEffect(() => {
    const activeElement = tabRefs.current[activeIndex];
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setActiveStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeIndex, tabs]);
   
  useEffect(() => {
    // Set initial active style without animation
     const activeElement = tabRefs.current[activeIndex];
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        setActiveStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
        });
    }
  }, []);

  return (
    <div className="relative">
      {/* Hover Highlight */}
      <div
        className="absolute h-[30px] transition-all duration-300 ease-out bg-black/5 dark:bg-white/10 rounded-md flex items-center"
        style={{
          ...hoverStyle,
          opacity: hoveredIndex !== null ? 1 : 0,
        }}
      />

      {/* Active Indicator */}
      <div
        className="absolute bottom-[-6px] h-[2px] bg-foreground transition-all duration-300 ease-out"
        style={activeStyle}
      />

      {/* Tabs */}
      <div className="relative flex space-x-1 items-center p-1">
        {tabs.map((tab, index) => (
          <div
            key={index}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`px-3 py-1.5 cursor-pointer transition-colors duration-300 h-[30px] rounded-md ${
              index === activeIndex
                ? "text-foreground"
                : "text-muted-foreground"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => onTabChange(tab)}
          >
            <div className="text-sm leading-5 whitespace-nowrap flex items-center justify-center h-full">
              {tab}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
