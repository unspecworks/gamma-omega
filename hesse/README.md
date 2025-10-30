# Gamma-Omega Hesse - BlueTooth mono PCB without diodes

## Quick Links
- [3D Printable Case](cases/) (which are *different* to the original Gamma Omega and TC36K):
- [PCB](pcb/) including the Gerbers ZIP file for getting the PCB fabricated at JLCPLC or similar,
  and BOM & position files which might work for assembly with the hot-swap sockets (untested as the
  parts were not available).
- [Ergogen Configuration](ergogen/README.md) 
- Firmware (which is *different* to the original Gamma Omega and the TC36K):
    - [Hesse ZMK Firmware](https://github.com/peterjc/zmk-keyboard-graph-theory/tree/main/boards/shields/hesse)
- [Build Guide](BUILD_GUIDE.md)

## Photos

Pending, but it looks like the original Gamma Omega - the key placement, PCB outline
and case outline remain the same. However the reset button is now on the top edge along
from the USB connector.

## PCB design

This iteration of the Gamma Omega family of 36-key keyboards is the first wireless one
which supports BlueTooth, specifically BlueTooth Low Energy (BLE) using ZMK firmware.
This meant a change in the controller, as even through the Raspberry Pi Pico W boards
might work, their Bluetooth module is not yet supported in ZMK, and they are much more
battery hungry than the controllers typically used with ZMK.

In order to stick with a diode-free Graph Theory wiring design, I really wanted a
BlueTooth controller with built in LiPo battery charging *and* at least 26 GPIO pins
to follow the same partial *Tutte Coxeter graph* wiring as used in the
[Gamma Omega TC36K](../tc36k/README.md) with 6-key roll over.

Instead, this design uses a [Nice!Nano v2](https://nicekeyboards.com/nice-nano)
or the [SuperMini NRF52840](https://kriscables.com/supermini-nrf52840/) aka
[ProMicro NRF52840](https://www.nologo.tech/product/otherboard/NRF52840.html).
These have built in BlueTooth, LiPo battery charging, ZMK support, but "only"
21 GPIO pins. The compromise means using a bipartite girth 6 graph of 21
vertices and 36 edges, giving *only 4-key roll over*. This is the *Hesse
Configuration Incidence Graph*, also known as the [incidence graph of the
affine plane of order 3](https://houseofgraphs.org/graphs/44164).

It looks like the original Gamma Omega - the key placement, PCB outline and
case outline remain the same. However the case moves the reset button to the
top edge along from the USB connector, and internally adds a battery
compartment. ZMK deep sleep is used in lieu of a physical on/off switch.

## Credits

[triliu/Heawood42](https://github.com/triliu/Heawood42) - the first no-diode keyboard using graph theory (42 key split)

[triliu/JESK56](https://github.com/triliu/JESK56) - later no-diode 56 key monoblock keyboard using graph theory
