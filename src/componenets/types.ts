export type OutletContextType = {
    sayHi: React.RefObject<HTMLButtonElement>;
    sayHiCenter: React.RefObject<HTMLButtonElement>;
    containerRef: React.RefObject<HTMLDivElement>; // or more specific type if needed
  };