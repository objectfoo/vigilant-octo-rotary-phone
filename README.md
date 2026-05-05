# vigilant-octo-rotary-phone

vite 8 + tsgo (typescript 7) experiment.

## TODO

* [x] inject Tokens into dom as json object
* [x] convert tokens into theme vars and add to `:root { }`
* [ ] define the css layers somewhere, @layer
* [ ] Add chrome markup to index.html
* [ ] inline js to provide minimal functionality for chrome header and footer
* [ ] setup chrome progressive enhancement to go off after host page is rendered
* [ ] render a host page via html (legacy page)
* [ ] render a host page via spa (decoupled ui)
* [ ] render a blank page with fully enhanced chrome



---

layers

```css
/* 1. Define order: first is lowest priority, last is highest */
@layer whs, mui, utilities;

/* 2. Assign variables to layers */
@layer whs {
	:root {
		--color: ;
	}
}

@layer theme {
	:root {
		--color: red;
	}
}

/* Un-layered styles win over EVERYTHING above */
:root { --color: green; } 

```

---

**WHS TOKENS**

___

base layer

```css
@layer whs {
	:root {
		--palette-action-disabled: rgba(0, 0, 0, 0.56);
		--palette-action-disabledBackground: rgba(0, 0, 0, 0.1);
		--palette-action-hoverOpacity: 0.033px;
		--palette-contrastThreshold: 4.5px;
		--palette-error-contrastText: #FFFFFF;
		--palette-error-dark: #8C0019;
		--palette-error-light: #bf334c;
		--palette-error-main: #b00020;
		--palette-info-contrastText: #FFFFFF;
		--palette-info-dark: #01579b;
		--palette-info-light: #03a9f4;
		--palette-info-main: #0288d1;
		--palette-mode: light;
		--palette-primary-contrastText: #FFFFFF;
		--palette-primary-main: #3557FF;
		--palette-secondary-contrastText: #FFFFFF;
		--palette-secondary-main: #898EB6;
		--palette-success-contrastText: #FFFFFF;
		--palette-success-dark: #103e00;
		--palette-success-light: #84bd00;
		--palette-success-main: #1a6500;
		--palette-text-disabled: #757575;
		--palette-text-primary: #000000;
		--palette-text-secondary: #494949;
		--palette-warning-contrastText: #000000;
		--palette-warning-dark: #c77700;
		--palette-warning-light: #ffd683;
		--palette-warning-main: #ffbf3f;
		--spacing: 8px;
		--typography-body1-fontSize: 16px;
		--typography-body1-fontWeight: 400;
		--typography-body1-letterSpacing: 0.15px;
		--typography-body2-fontSize: 14px;
		--typography-body2-letterSpacing: 0.1px;
		--typography-button-fontSize: 14px;
		--typography-button-fontWeight: 600;
		--typography-button-letterSpacing: 0.45px;
		--typography-caption-fontSize: 12px;
		--typography-caption-letterSpacing: 0.53px;
		--typography-fontFamily: Lato, system-ui, Segoe UI, Helvetica Neue, Helvetica, sans-serif;
		--typography-fontWeightMedium: 600px;
		--typography-h1-fontSize: 48px;
		--typography-h1-fontWeight: 300;
		--typography-h1-letterSpacing: 0.24992px;
		--typography-h2-fontSize: 36px;
		--typography-h2-fontWeight: 300;
		--typography-h2-letterSpacing: -0.13px;
		--typography-h3-fontSize: 28px;
		--typography-h3-fontWeight: 400;
		--typography-h4-fontSize: 22px;
		--typography-h4-fontWeight: 400;
		--typography-h4-letterSpacing: 0.25px;
		--typography-h5-fontSize: 20px;
		--typography-h5-fontWeight: 400;
		--typography-h5-letterSpacing: 0.25px;
		--typography-h6-fontSize: 18px;
		--typography-h6-fontWeight: 400;
		--typography-h6-letterSpacing: 0.25px;
		--typography-overline-fontSize: 12px;
		--typography-overline-letterSpacing: 1.33px;
		--typography-subtitle1-fontSize: 16px;
		--typography-subtitle1-fontWeight: 400;
		--typography-subtitle1-letterSpacing: 0.15px;
		--typography-subtitle2-fontSize: 14px;
		--typography-subtitle2-fontWeight: 400;
		--typography-subtitle2-letterSpacing: 0.1px
	}
}
```

---

**MUI TOKENS**

The real tokens are in layers when enabled.
___

```css
@layer mui {
	:root {
		--font-body1: 400 16px/1.5 Lato,system-ui,Segoe UI,Helvetica Neue,Helvetica,sans-serif;
		--font-body2: 400 14px/1.43 Lato,system-ui,Segoe UI,Helvetica Neue,Helvetica,sans-serif;
		--font-button: 600 14px/1.75 Lato,system-ui,Segoe UI,Helvetica Neue,Helvetica,sans-serif;
		--font-caption: 400 12px/1.66 Lato,system-ui,Segoe UI,Helvetica Neue,Helvetica,sans-serif;
		--font-h1: 300 48px/1.167 Lato,system-ui,Segoe UI,Helvetica Neue,Helvetica,sans-serif;
		--font-h2: 300 36px/1.2 Lato,system-ui,Segoe UI,Helvetica Neue,Helvetica,sans-serif;
		--font-h3: 400 28px/1.167 Lato,system-ui,Segoe UI,Helvetica Neue,Helvetica,sans-serif;
		--font-h4: 400 22px/1.235 Lato,system-ui,Segoe UI,Helvetica Neue,Helvetica,sans-serif;
		--font-h5: 400 20px/1.334 Lato,system-ui,Segoe UI,Helvetica Neue,Helvetica,sans-serif;
		--font-h6: 400 18px/1.6 Lato,system-ui,Segoe UI,Helvetica Neue,Helvetica,sans-serif;
		--font-inherit: inherit inherit/inherit inherit;
		--font-overline: 400 12px/2.66 Lato,system-ui,Segoe UI,Helvetica Neue,Helvetica,sans-serif;
		--font-subtitle1: 400 16px/1.75 Lato,system-ui,Segoe UI,Helvetica Neue,Helvetica,sans-serif;
		--font-subtitle2: 400 14px/1.57 Lato,system-ui,Segoe UI,Helvetica Neue,Helvetica,sans-serif;
		--opacity-inputPlaceholder: 0.42;
		--opacity-inputUnderline: 0.42;
		--opacity-switchTrack: 0.38;
		--opacity-switchTrackDisabled: 0.12;
		--palette-Alert-errorColor: rgb(76, 20, 30);
		--palette-Alert-errorFilledBg: #b00020;
		--palette-Alert-errorFilledColor: #fff;
		--palette-Alert-errorIconColor: #b00020;
		--palette-Alert-errorStandardBg: rgb(248, 234, 237);
		--palette-Alert-infoColor: rgb(1, 67, 97);
		--palette-Alert-infoFilledBg: #0288d1;
		--palette-Alert-infoFilledColor: rgba(0, 0, 0, 0.87);
		--palette-Alert-infoIconColor: #0288d1;
		--palette-Alert-infoStandardBg: rgb(229, 246, 253);
		--palette-Alert-successColor: rgb(52, 75, 0);
		--palette-Alert-successFilledBg: #1a6500;
		--palette-Alert-successFilledColor: #fff;
		--palette-Alert-successIconColor: #1a6500;
		--palette-Alert-successStandardBg: rgb(242, 248, 229);
		--palette-Alert-warningColor: rgb(102, 85, 52);
		--palette-Alert-warningFilledBg: #ffbf3f;
		--palette-Alert-warningFilledColor: rgba(0, 0, 0, 0.87);
		--palette-Alert-warningIconColor: #ffbf3f;
		--palette-Alert-warningStandardBg: rgb(255, 250, 242);
		--palette-AppBar-defaultBg: #f5f5f5;
		--palette-Avatar-defaultBg: #bdbdbd;
		--palette-Button-inheritContainedBg: #e0e0e0;
		--palette-Button-inheritContainedHoverBg: #f5f5f5;
		--palette-Chip-defaultAvatarColor: #616161;
		--palette-Chip-defaultBorder: #bdbdbd;
		--palette-Chip-defaultIconColor: #616161;
		--palette-FilledInput-bg: rgba(0, 0, 0, 0.06);
		--palette-FilledInput-disabledBg: rgba(0, 0, 0, 0.12);
		--palette-FilledInput-hoverBg: rgba(0, 0, 0, 0.09);
		--palette-LinearProgress-errorBg: rgb(224, 158, 170);
		--palette-LinearProgress-infoBg: rgb(158, 209, 237);
		--palette-LinearProgress-primaryBg: rgb(178, 191, 255);
		--palette-LinearProgress-secondaryBg: rgb(210, 212, 227);
		--palette-LinearProgress-successBg: rgb(167, 196, 158);
		--palette-LinearProgress-warningBg: rgb(255, 230, 182);
		--palette-Skeleton-bg: rgba(0 0 0 / 0.11);
		--palette-Slider-errorTrack: rgb(224, 158, 170);
		--palette-Slider-infoTrack: rgb(158, 209, 237);
		--palette-Slider-primaryTrack: rgb(178, 191, 255);
		--palette-Slider-secondaryTrack: rgb(210, 212, 227);
		--palette-Slider-successTrack: rgb(167, 196, 158);
		--palette-Slider-warningTrack: rgb(255, 230, 182);
		--palette-SnackbarContent-bg: rgb(50, 50, 50);
		--palette-SnackbarContent-color: #fff;
		--palette-SpeedDialAction-fabHoverBg: rgb(216, 216, 216);
		--palette-StepConnector-border: #bdbdbd;
		--palette-StepContent-border: #bdbdbd;
		--palette-Switch-defaultColor: #fff;
		--palette-Switch-defaultDisabledColor: #f5f5f5;
		--palette-Switch-errorDisabledColor: rgb(224, 158, 170);
		--palette-Switch-infoDisabledColor: rgb(158, 209, 237);
		--palette-Switch-primaryDisabledColor: rgb(178, 191, 255);
		--palette-Switch-secondaryDisabledColor: rgb(210, 212, 227);
		--palette-Switch-successDisabledColor: rgb(167, 196, 158);
		--palette-Switch-warningDisabledColor: rgb(255, 230, 182);
		--palette-TableCell-border: rgba(224, 224, 224, 1);
		--palette-Tooltip-bg: rgba(97, 97, 97, 0.92);
		--palette-action-activatedOpacity: 0.12;
		--palette-action-active: rgba(0, 0, 0, 0.54);
		--palette-action-activeChannel: 0 0 0;
		--palette-action-disabled: rgba(0, 0, 0, 0.56);
		--palette-action-disabledBackground: rgba(0, 0, 0, 0.1);
		--palette-action-disabledOpacity: 0.38;
		--palette-action-focus: rgba(0, 0, 0, 0.12);
		--palette-action-focusOpacity: 0.12;
		--palette-action-hover: rgba(0, 0, 0, 0.04);
		--palette-action-hoverOpacity: 0.033;
		--palette-action-selected: rgba(0, 0, 0, 0.08);
		--palette-action-selectedChannel: 0 0 0;
		--palette-action-selectedOpacity: 0.08;
		--palette-background-default: #fff;
		--palette-background-defaultChannel: 255 255 255;
		--palette-background-paper: #fff;
		--palette-background-paperChannel: 255 255 255;
		--palette-common-background: #fff;
		--palette-common-backgroundChannel: 255 255 255;
		--palette-common-black: #000;
		--palette-common-onBackground: #000;
		--palette-common-onBackgroundChannel: 0 0 0;
		--palette-common-white: #fff;
		--palette-divider: rgba(0, 0, 0, 0.12);
		--palette-dividerChannel: 0 0 0;
		--palette-error-contrastText: #FFFFFF;
		--palette-error-contrastTextChannel: 255 255 255;
		--palette-error-dark: #8C0019;
		--palette-error-darkChannel: 140 0 25;
		--palette-error-light: #bf334c;
		--palette-error-lightChannel: 191 51 76;
		--palette-error-main: #b00020;
		--palette-error-mainChannel: 176 0 32;
		--palette-grey-100: #f5f5f5;
		--palette-grey-200: #eeeeee;
		--palette-grey-300: #e0e0e0;
		--palette-grey-400: #bdbdbd;
		--palette-grey-50: #fafafa;
		--palette-grey-500: #9e9e9e;
		--palette-grey-600: #757575;
		--palette-grey-700: #616161;
		--palette-grey-800: #424242;
		--palette-grey-900: #212121;
		--palette-grey-A100: #f5f5f5;
		--palette-grey-A200: #eeeeee;
		--palette-grey-A400: #bdbdbd;
		--palette-grey-A700: #616161;
		--palette-info-contrastText: #FFFFFF;
		--palette-info-contrastTextChannel: 255 255 255;
		--palette-info-dark: #01579b;
		--palette-info-darkChannel: 1 87 155;
		--palette-info-light: #03a9f4;
		--palette-info-lightChannel: 3 169 244;
		--palette-info-main: #0288d1;
		--palette-info-mainChannel: 2 136 209;
		--palette-primary-contrastText: #FFFFFF;
		--palette-primary-contrastTextChannel: 255 255 255;
		--palette-primary-dark: rgb(37, 60, 178);
		--palette-primary-darkChannel: 37 60 178;
		--palette-primary-light: rgb(93, 120, 255);
		--palette-primary-lightChannel: 93 120 255;
		--palette-primary-main: #3557FF;
		--palette-primary-mainChannel: 53 87 255;
		--palette-secondary-contrastText: #FFFFFF;
		--palette-secondary-contrastTextChannel: 255 255 255;
		--palette-secondary-dark: rgb(95, 99, 127);
		--palette-secondary-darkChannel: 95 99 127;
		--palette-secondary-light: rgb(160, 164, 196);
		--palette-secondary-lightChannel: 160 164 196;
		--palette-secondary-main: #898EB6;
		--palette-secondary-mainChannel: 137 142 182;
		--palette-success-contrastText: #FFFFFF;
		--palette-success-contrastTextChannel: 255 255 255;
		--palette-success-dark: #103e00;
		--palette-success-darkChannel: 16 62 0;
		--palette-success-light: #84bd00;
		--palette-success-lightChannel: 132 189 0;
		--palette-success-main: #1a6500;
		--palette-success-mainChannel: 26 101 0;
		--palette-text-disabled: #757575;
		--palette-text-primary: #000000;
		--palette-text-primaryChannel: 0 0 0;
		--palette-text-secondary: #494949;
		--palette-text-secondaryChannel: 73 73 73;
		--palette-warning-contrastText: #000000;
		--palette-warning-contrastTextChannel: 0 0 0;
		--palette-warning-dark: #c77700;
		--palette-warning-darkChannel: 199 119 0;
		--palette-warning-light: #ffd683;
		--palette-warning-lightChannel: 255 214 131;
		--palette-warning-main: #ffbf3f;
		--palette-warning-mainChannel: 255 191 63;
		--shadows-0: none;
		--shadows-1: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
		--shadows-10: 0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12);
		--shadows-11: 0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12);
		--shadows-12: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12);
		--shadows-13: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12);
		--shadows-14: 0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12);
		--shadows-15: 0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12);
		--shadows-16: 0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12);
		--shadows-17: 0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12);
		--shadows-18: 0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12);
		--shadows-19: 0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12);
		--shadows-2: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
		--shadows-20: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12);
		--shadows-21: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12);
		--shadows-22: 0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12);
		--shadows-23: 0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12);
		--shadows-24: 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);
		--shadows-3: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
		--shadows-4: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
		--shadows-5: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);
		--shadows-6: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
		--shadows-7: 0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12);
		--shadows-8: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
		--shadows-9: 0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12);
		--shape-borderRadius: 4px;
		--spacing: 8px;
		--zIndex-appBar: 1100;
		--zIndex-drawer: 1200;
		--zIndex-fab: 1050;
		--zIndex-mobileStepper: 1000;
		--zIndex-modal: 1300;
		--zIndex-snackbar: 1400;
		--zIndex-speedDial: 1050;
		--zIndex-tooltip: 1500;
	}
}
```
