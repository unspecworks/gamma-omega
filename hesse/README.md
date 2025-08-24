
# Gamma-Omega Hesse - BlueTooth mono PCB without diodes

This iteration of the Gamma Omega family of 36-key keyboards is the first wireless one
which supports BlueTooth, specifically BlueTooth Low Energy (BLE) using ZMK firmware.
This meant a change in the controller, as even through the Raspberry Pi Pico W boards
might work, they are much more battery hungry than the controllers typically used with ZMK.

In order to stick with a diode-free Graph Theory wiring design, I really wanted a
BlueTooth controller with built in LiPo battery charging *and* at least 26 GPIO pins
to follow the same partial *Tutte Coxeter graph* wiring as used in the
[Gamma Omega TC36K](../tc36k/README.md) with 6-key roll over.

Instead, this design uses a Nice!Nano v2 clone, the [SuperMini
NRF52840](https://kriscables.com/supermini-nrf52840/),
aka the TenStar Robot ProMicro NRF52840. This has built in BlueTooth, LiPro battery
charging, but "only" 21 GPIO pins. The compromise means using a bipartite girth 6
graph of 21 vertices and 36 edges, giving only 4-key roll over. This is the *Hesse
Configuration Incidence Graph*, also known as the
[https://houseofgraphs.org/graphs/44164](incidence graph of the affine plane of order 3).

## Credits

[triliu/Heawood42](https://github.com/triliu/Heawood42) - the first no-diode keyboard using graph theory (42 key split)

[triliu/JESK56](https://github.com/triliu/JESK56) - later no-diode 56 key monoblock keyboard using graph theory
