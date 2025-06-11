# GAMMA OMEGA

A 36 Keys low-profile unibody ergonomic keyboard designed for portability and durability while still maintaining comfort.

![Gamma-Omega](images/gamma.jpg)
![Gamma-Omega-Wireframe](images/wireframe.png)
*Portable? It may not be very compact, but you can still just toss it in your bag, right?*

## Quick Links

- [Showcase](images/showcase.md)
- [3D Printable Case](cases/)
- [PCB Files](pcb/)
  - [Gerber](pcb/gerber/)
- [Ergogen Configuration](ergogen/README.md)
- Firmwares:
  - [QMK/VIAL Implementation](firmwares/QMK/gamma_omega/)
    - [Precompiled](firmwares/precompiled/)
  - [ZMK Firmware](https://github.com/unspecworks/zmk-config-gamma-omega)
- [Build Guide](BUILD_GUIDE.md)

## Technical Details

### Spacing

18 x 17mm (Choc spacing with in a tighter grid)

### Dimensions

 - Length: 246mm
 -  Width: 119mm
 - Height: approx. 18mm 
   - feet to keycap (2mm height rubber feet and CFX choc v1 keycap)

### Weight

full built: approx. 301g

### ergogen

The PCB was generated using [Ergogen](https://github.com/ergogen/ergogen), an ergonomic keyboard generator tool that simplifies the creation of custom keyboard layouts.

### PCB design

This uses two identical reversible PCBs for the two halves of the keyboard, joined at the RP2040 controller.
This means some pins cannot be used as there isn't a matching pin on the other side,
for example GP0 and GP1 are opposite voltage pins.

This diagram sketches the [GPIO usage](images/black-raspberry-pi-pico-pins.png)
(red and blue coloring following the convention for the two sides of the PCB).

The design assumes a specific Raspberry Pi Pico variant with GPIOs on pins 35 and 37 (GP29 and GP23),
which are not available on the original board design.
However the pairs GP13/18, GP14/17, and GP15/16 at the bottom of the board are unused,
so in theory the PCB could use those instead for compatibility with the original pin allocation.


## Changelog

### Case
- **v0.0.2**
  - Correct the inner curve's unwanted thickness on the top case.
- **v0.0.1** (Initial Release)
  - First public version of the 3D printable case

### PCB
- **v0.0.2**
  - add gerber for the production.
- **v0.0.1** (Initial Release)
  - First public version of the PCB design

### Firmware
 - **v0.0.1**
   - add default vanilla keymaps.
   - add pre-compiled firmware files.

## Development Roadmap

- [x] Fix case model warnings (minor issues)
- [ ] Correct PCB 3D model representation
- [x] Implement firmware support
- [x] Add default keymap
- [x] Clean up Ergogen configuration
- [ ] Write PCB Schematic...? maybe
- [ ] Support FDM/MJF version case w/ heat set insert method.


## SPECIAL THANKS 

[@GEIGEIGEIST](https://github.com/GEIGEIGEIST)
- This project was greatly inspired by his work. In particular, TOTEM. [TOTEM](https://github.com/GEIGEIGEIST/totem) is my favorite lo-pro split keyboard. Please check it out.​​​​​​​​​​​​​​​​

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any improvements or bug fixes.

But I don't know much about modeling and PCB design.
