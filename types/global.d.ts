interface Window {
    GOVUKFrontend?: {
      initAll: () => void;
      Header?: {
        new (element: Element): {
          init: () => void;
        };
      };
      // Add other component definitions as needed
    };
  }