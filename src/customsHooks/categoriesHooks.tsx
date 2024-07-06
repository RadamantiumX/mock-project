import { useState } from "react";
  
  export const useDropDownCategories = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleMouseEnter = () => {
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsOpen(false);
    };
   return {isOpen, handleMouseEnter, handleMouseLeave}
  }