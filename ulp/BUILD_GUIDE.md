# ULP Build guide

> [!WARNING]
> Work in progress.

# Parts List
| Part | Quantity | Details | Source |
|------------------|----------|-----------------|--------|
| M2x2 Insert nut | 4 | 2mm length, 3.0mm diameter | |
| M2x3 Countersunk screw | 4 | 6mm length | |
| Feet bumpons | 8 | 8mm diameter, any height. | |
| Cherry MX ULP Switches | 36 | | |
| Keycap | 36 | Cherry OEM or 3D Prints | |
| Gamma Omega ULP PCB | 1 | ??mm thickness | JLCPCB |
| Top case | 1 | FDM PLA/PETG/ABS | your home |
| Pi Pico USB-C RP2040 | 1 | YD-RP2040 Variants are tested. [Info](https://circuitpython.org/board/vcc_gnd_yd_rp2040/) | [Aliexpress](https://a.aliexpress.com/_opuRQZl) |

> [!NOTE]
> This *requires* a variant of the original Pi Pico design with 28 GPIOs available (GP29 and GP23 on pins 35 and 37).
> The bottom case has a hole allowing access to the boot button on the RP2040 controller, which is mounted facing down once fully assembled.
> The placement of any boot/reset/user buttons varies between boards, even if they are pin-compatible.
> The expected placement (looking at the controller chips upward with the USB and pin 1 at the top) is on the left near pins 7, 8 & 9 (GP5, GND & GP6).
> This is the "black" controller at the Ali Express link:
> ![YD_PR2040 "black" Pi Pico microcontroller](../images/black-raspberry-pi-pico-boot.png)

> [!TIP]
> Actually, the PCB is compatible with choc v2 and Lofree POM switches. However, since the key spacing is 18x17mm, there may be issues with keycap compatibility. Please keep this in mind.


## Tools

- Hot plate
- Soldering tools.
- Safety gears.

> [!WARNING]
> For your safety: Wear protective eyewear, be cautious of hot components, and ensure proper ventilation to avoid inhaling toxic fumes.

# Build Guide


## Firmware Flashing
1. Press and hold the `BOOT` button while connecting the controller to your computer by USB.
2. Release the `BOOT` button when a Mass Storage device named "RPI-RP2" appears.
3. Copy the `gamma_omega_ulp_default.uf2` firmware file to this storage device.
4. The storage will disconnect automatically, and the device will function as a keyboard when the firmware is successfully installed.
5. Disconnect the USB cable.

> [!TIP]
> Flashing *before* soldering in the PCB should catch a bad controller early on.

## Soldering Switches

First time using a hot plate? Unlike a traditional soldering iron, it's not something many people have regular access to. Be sure to learn how to use it properly before starting.
In particular, thin PCBs are more prone to warping, which can lead to misalignment with the case or switches popping out.

Apply a perfect amount of solder paste to the 5 mounting points and 2 electrical contacts.

Preheat the PCB, places switches, heat it evenly, then allow it to cool down. Repeat this process as needed.

For a 50×50mm plate, it is recommended to solder 3 switches at a time for optimal results.




## Pi Pico Installation
 
1. Install the Pi Pico on the UP side of the PCB (On the same side as the switches are mounted).
2. Position the Pi Pico with its components facing down toward the PCB and the USB port facing outward.
3. Use two 2.54mm × 19-pin headers (typically with ~2.5mm height insulators) to solder the Pi Pico onto the PCB.
 
4. After soldering, carefully trim all protruding pins with a nipper.

> [!CAUTION]
> For your safety, please wear safety glasses — trimmed pins can be sharp and may fly off during cutting.
 

## Testing
Use your favorite keystroke tester (or Vial's Key matrix tester) with a conductive tweezer to verify that all keys are working properly.


## Case Assembly
 

1. Install 2mm height threaded hot seat inserts with soldering iron. 
2. Place the PCB onto the top case.
3. Secure with screws.
 

