import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    hit: PaletteColorOptions;
    stand: PaletteColorOptions;
    doubledown: PaletteColorOptions;
  }
  interface PaletteOptions {
    hit: PaletteColorOptions;
    stand: PaletteColorOptions;
    doubledown: PaletteColorOptions;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    hit: true;
    stand: true;
    doubledown: true;
  }
}
