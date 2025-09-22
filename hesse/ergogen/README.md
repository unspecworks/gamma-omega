# gamma-omega-hesse - Ergogen files

This is based on the [ergogen](https://github.com/ergogen/ergogen) configuration file
at `../../tc36k/config.yaml` which describes the Gamma-Omega TC36K keyboard mono PCB.
The changes are to use a smaller "Nice!Nano v2" controller (or the "SuperMini NRF52840"
aka "ProMicro52840" clone), which has Bluetooth but less GPIO pins and thus a different
wiring net. We also make a cut out for the inclusion of a battery, and a JST battery
connector, and a reset button (but no power switch in the initial version).
Otherwise the PCB outline and switch placement should be unchanged.

Run ergogen on the whole folder to get it to look at the footprints:

```console
❯ ergogen gc36k/ergogen/
Ergogen v4.1.0 CLI

Analyzing folder...
Interpreting format: YAML
Preprocessing input...
Checking compatibility...
Calculating variables...
Parsing points...
Generating outlines...
Modeling cases...
Scaffolding PCBs...
Writing output to disk...
Done.
```

To merge any changes with the manually routed PCB, try [Ergogen
Helper](https://github.com/infused-kim/kb_ergogen_helper):

```
❯ cp output/pcbs/gamma-omega-hesse.kicad_pcb hesse/pcb/gamma-omega-hesse-routed-new.kicad_pcb && \
    /Applications/KiCad/KiCad.app/Contents/Frameworks/Python.framework/Versions/Current/bin/python3 \
    resources/kb_ergogen_helper/ergogen_helper.py copy-traces \
    hesse/pcb/gamma-omega-hesse-routed.kicad_pcb hesse/pcb/gamma-omega-hesse-routed-new.kicad_pcb
```


## Credits

[triliu/Heawood42](https://github.com/triliu/Heawood42) - the first no-diode keyboard using graph theory (42 key split)

[triliu/JESK56](https://github.com/triliu/JESK56) - later no-diode 56 key monoblock keyboard using graph theory

[infused-kim/kb_ergogen_fp](https://github.com/infused-kim/kb_ergogen_fp) - Awesome footprints and 3d models.

[ceoloide/ergogen-footprints](https://github.com/ceoloide/ergogen-footprints) - Also wonderful footprints!!
