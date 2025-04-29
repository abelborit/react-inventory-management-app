/* Hay que crear este archivo de definición de tipos porque si se quiere colocar de forma directa alguna propiedad de algún tema creado por nosotros, notaremos que no hay un autocompletado y nos dará un mensaje como "Property 'bgTotal' does not exist on type 'DefaultTheme'.ts(2339)" y no veremos ningún cambio de los estilos reflejado en la app */

/* Ese error se debe a que TypeScript no sabe cómo es el tema (theme), ya que styled-components usa un tipo por defecto (DefaultTheme) que no incluye las propiedades personalizadas como "bgTotal" o algún otro estilo. Para solucionarlo, se necesita extender el tipo DefaultTheme usando declaration merging en un archivo de tipos */
/* ******************************************************************************************************************* */
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    rgbafondoanimado: string;
    body: string;
    text: string;
    bodyRgba: string;
    textRgba: string;
    carouselColor: string;
    fontxs: string;
    fontsm: string;
    fontmd: string;
    font16px: string;
    fontlg: string;
    fontxl: string;
    fontxxl: string;
    fontxxxl: string;
    fontButton: string;
    navHeight: string;
    whiteBg: string;
    bg: string;
    bgAlpha: string;
    bg2: string;
    bg3: string;
    primary: string;
    bg4: string;
    bg5: string;
    bgtotal: string;
    bgtgderecha: string;
    colorToggle: string;
    translateToggle: string;

    logorotate: string;
    slideroffset: string;
    sizeoficon: string;
    colorSubtitle: string;
    colorScroll: string;
    bgcards: string;
    colortitlecard: string;
    colorsubtitlecard: string;
  }
}
