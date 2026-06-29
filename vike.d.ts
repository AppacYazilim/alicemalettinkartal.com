import "vike-react/types";

declare global {
  namespace VikeReact {
    interface PageContext {
      locale: string;
    }
  }
  namespace Vike {
    interface PageContext {
      locale: string;
    }
  }
}

declare module "*.jpg?format=webp" {
  const src: string;
  export default src;
}

export { };

