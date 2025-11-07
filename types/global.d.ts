// types/global.d.ts

export {};

declare global {
  interface Window {
    jQuery: any;
    $: any;
    funciones: {
      getTeamLatinAdvisorHome?: () => void;
      [key: string]: any;
    };
  }
}
