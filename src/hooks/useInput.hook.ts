import { useState } from "react";
/**
 * This hook is used to capture the input value from the user
 * int he input field
 * @returns { void }
 */

export const useInput = (e: string): any => {
    const [value, setValue] = useState(e);
    
    const handleInput = (e: any) => {
        setValue(e.target.value);
    };
    
    return { value, handleInput };
};