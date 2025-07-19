# GAMMA OMEGA

A 36 Keys low-profile unibody ergonomic keyboard designed for portability and durability while still maintaining comfort.

![Gamma-Omega](images/gamma.jpg)
![Gamma-Omega-Wireframe](images/wireframe.png)
*Portable? It may not be very compact, but you can still just toss it in your bag, right?*

## Variants
There are currently 3 variants of Gamma Omega in this repository.

|   | PCB | Diodeless | Switch | WIP |
|-|-|-|-|-|
| [Original](/original/) | Reversible |  | Choc v1, v2[^1] | |
| [TC36k](/tc36k/) | Mono | :white_check_mark: | Choc v1 | :construction: |
| [ULP](/ulp/) | Mono | :white_check_mark: | Cherry MX ULP | :construction: |


[^1]: Limited by switch spacing.

Both versions use the same layout, case, and MCU controller.

_See the `README.md` in each folder for more information._

## Technical Details

### Spacing

18 x 17mm (Choc spacing with a tighter grid)

### Dimensions

 - Length: 246mm
 -  Width: 119mm
 - Height: approx. 18mm 
   - feet to keycap (2mm height rubber feet and CFX choc v1 keycap)

### Weight

full built: approx. 301g

### ergogen

The PCB was generated using [Ergogen](https://github.com/ergogen/ergogen), an ergonomic keyboard generator tool that simplifies the creation of custom keyboard layouts.

## Development Roadmap

- [ ] Support FDM/MJF version case w/ heat set insert method.
- [ ] Cherry MX ULP Switch Variant.

## SPECIAL THANKS 

[@GEIGEIGEIST](https://github.com/GEIGEIGEIST)
- This project was greatly inspired by his work. In particular, TOTEM. [TOTEM](https://github.com/GEIGEIGEIST/totem) is my favorite lo-pro split keyboard. Please check it out.​​​​​​​​​​​​​​​​

[Peter Cock](https://github.com/peterjc)
- Thanks for creating and contributing to the TC36k variant.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any improvements or bug fixes.

The repository uses git-submodules for some footprints, it can easily be setup locally with:

```console
git clone --recurse-submodules https://github.com/unspecworks/gamma-omega.git
```

But I don't know much about modeling and PCB design.
