# gamma-omega-tc36k - Ergogen files

The original Gamma-Omega design has a left & right PCB (with the same reversible design),
joined at the middle with the controller daughter board itself.
The original [ergogen](https://github.com/ergogen/ergogen) configuration file at
`../../ergogen/config.yaml` described the Gamma-Omega keyboard double-sided twin PCB design.

That was modified, initially using mirroring to make a single 36 key PCB.
It now uses a full 40-pin Raspberry Pi Pico controller footprint.
That required enlarging the top edge of the PCB by 2mm, which now matches the controller.
This should still fit in the same case.
The wiring net is defined using a partial Tutte-Coxeter graph,
with 26/30 nodes/vertices/pins and 36/45 edges/switches/keys.

Run ergogen on the whole folder to get it to look at the footprints:

```console
❯ ergogen tc36k/ergogen/
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

## Credits

[triliu/Heawood42](https://github.com/triliu/Heawood42) - the first no-diode keyboard using graph theory (42 key split)

[triliu/JESK56](https://github.com/triliu/JESK56) - later no-diode 56 key monoblock keyboard using graph theory

[infused-kim/kb_ergogen_fp](https://github.com/infused-kim/kb_ergogen_fp) - Awesome footprints and 3d models.

[ceoloide/ergogen-footprints](https://github.com/ceoloide/ergogen-footprints) - Also wonderful footprints!!
