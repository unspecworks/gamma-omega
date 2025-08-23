# gamma-omega-hesse - Ergogen files

This is based on the [ergogen](https://github.com/ergogen/ergogen) configuration file
at `../../tc36k/config.yaml` which describes the Gamma-Omega TC36K keyboard mono PCB.
The changes are to use a smaller "SuperMini NRF52840" controller, with less GPIO pins
and thus a different wiring net, and make a cut out for the inclusion of a battery.
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

## Credits

[triliu/Heawood42](https://github.com/triliu/Heawood42) - the first no-diode keyboard using graph theory (42 key split)

[triliu/JESK56](https://github.com/triliu/JESK56) - later no-diode 56 key monoblock keyboard using graph theory

[infused-kim/kb_ergogen_fp](https://github.com/infused-kim/kb_ergogen_fp) - Awesome footprints and 3d models.

[ceoloide/ergogen-footprints](https://github.com/ceoloide/ergogen-footprints) - Also wonderful footprints!!
