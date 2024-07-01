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

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    hit: true;
    stand: true;
    doubledown: true;
  }
}

declare module "@mui/material/Alert" {
  interface AlertPropsColorOverrides {
    hit: true;
    stand: true;
    doubledown: true;
  }
}

declare module "@mui/material/Radio" {
  interface RadioPropsColorOverrides {
    hit: true;
    stand: true;
    doubledown: true;
  }
}
