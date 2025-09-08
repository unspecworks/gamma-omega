// Copyright (c) Peter J. A. Cock
//
// SPDX-License-Identifier: MIT
//
// To view a copy of this license, visit https://opensource.org/license/mit/
//
// Author: @peterjc
//
// Description:
//  A right-angle through-hole top-actuated momentary switch, similar to the 6x6mm ones
//  but on its side to be used on the edge of a PCB as a reset button. This is based on
//  the Tyco Electronics (TE) Connectivity ALCOSWITCH Switches product number 1825027-8
//  specifications, part of their FSM 6 x 6 Series.
//  There is a 3D model available from DigiKey under part number 450-1657-ND.
//
// Datasheet:
//  https://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=1308111-1_SWITCHES_CORE_PROGRAM_CATALOG
//
// Params:
//    side: default is F for Front
//      the side on which to place the single-side footprint and designator, either F or B
//    reversible: default is false
//      if true, it will include silkscreen on both Front and Back, if silkscreen is included.
//      because the footprint is through-hole and because it's only connecting RST to GND, the
//      pads are reversible in any case.
//    include_silkscreen: default is true
//      if true it will include silkscreen markings

module.exports = {
  params: {
    designator: 'RST', // for Button
    side: 'F',
    reversible: false,
    include_silkscreen: true,
    from: { type: 'net', value: 'GND' },
    to: { type: 'net', value: 'RST' },
  },
  body: p => {
    const common_start = `
  (footprint "peterjc:reset_switch_1825027-8"
    (layer "${p.side}.Cu")
    ${p.at}
    (property "Reference" "${p.ref}"
      (at 0 2.55 ${90 + p.r})
      (layer "${p.side}.SilkS")
      ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )
        `
    const silkscreen_front = `
    (fp_line (start 4.002601 3.343101) (end 4.002601 6.594301) (layer "F.Fab") (width 0.0254))
    (fp_line (start 0.497401 3.343101) (end 0.497401 6.594301) (layer "F.Fab") (width 0.0254))
    (fp_line (start 0.497401 6.594301) (end 4.002601 6.594301) (layer "F.Fab") (width 0.0254))
    (fp_line (start -2.103999 -4.264199) (end -2.103999 6.848301) (layer "F.CrtYd") (width 0.15))
    (fp_line (start -2.103999 6.848301) (end 6.532001 6.848301) (layer "F.CrtYd") (width 0.15))
    (fp_line (start 6.532001 6.848301) (end 6.532001 -4.264199) (layer "F.CrtYd") (width 0.15))
    (fp_line (start 6.532001 -4.264199) (end -2.103999 -4.264199) (layer "F.CrtYd") (width 0.15))
    (fp_line (start -1.432999 3.470101) (end 5.933001 3.470101) (layer "F.SilkS") (width 0.15))
    (fp_line (start 5.933001 3.470101) (end 5.933001 -1.155674) (layer "F.SilkS") (width 0.15))
    (fp_line (start 5.933001 -4.137199) (end -1.432999 -4.137199) (layer "F.SilkS") (width 0.15))
    (fp_line (start -1.432999 -4.137199) (end -1.432999 -3.683) (layer "F.SilkS") (width 0.15))
    (fp_line (start -1.305999 3.343101) (end 5.806001 3.343101) (layer "F.Fab") (width 0.0254))
    (fp_line (start 5.806001 3.343101) (end 5.806001 -4.010199) (layer "F.Fab") (width 0.0254))
    (fp_line (start 5.806001 -4.010199) (end -1.305999 -4.010199) (layer "F.Fab") (width 0.0254))
    (fp_line (start -1.305999 -4.010199) (end -1.305999 3.343101) (layer "F.Fab") (width 0.0254))
    (fp_line (start -1.432999 -1.155674) (end -1.432999 3.470101) (layer "F.SilkS") (width 0.15))
    (fp_line (start 5.933001 -3.683) (end 5.933001 -4.137199) (layer "F.SilkS") (width 0.15))
        `
    const silkscreen_back = `
    (fp_line (start 4.002601 3.343101) (end 4.002601 6.594301) (layer "B.Fab") (width 0.0254))
    (fp_line (start 0.497401 3.343101) (end 0.497401 6.594301) (layer "B.Fab") (width 0.0254))
    (fp_line (start 0.497401 6.594301) (end 4.002601 6.594301) (layer "B.Fab") (width 0.0254))
    (fp_line (start -2.103999 -4.264199) (end -2.103999 6.848301) (layer "B.CrtYd") (width 0.15))
    (fp_line (start -2.103999 6.848301) (end 6.532001 6.848301) (layer "B.CrtYd") (width 0.15))
    (fp_line (start 6.532001 6.848301) (end 6.532001 -4.264199) (layer "B.CrtYd") (width 0.15))
    (fp_line (start 6.532001 -4.264199) (end -2.103999 -4.264199) (layer "B.CrtYd") (width 0.15))
    (fp_line (start -1.432999 3.470101) (end 5.933001 3.470101) (layer "B.SilkS") (width 0.15))
    (fp_line (start 5.933001 3.470101) (end 5.933001 -1.155674) (layer "B.SilkS") (width 0.15))
    (fp_line (start 5.933001 -4.137199) (end -1.432999 -4.137199) (layer "B.SilkS") (width 0.15))
    (fp_line (start -1.432999 -4.137199) (end -1.432999 -3.683) (layer "B.SilkS") (width 0.15))
    (fp_line (start -1.305999 3.343101) (end 5.806001 3.343101) (layer "B.Fab") (width 0.0254))
    (fp_line (start 5.806001 3.343101) (end 5.806001 -4.010199) (layer "B.Fab") (width 0.0254))
    (fp_line (start 5.806001 -4.010199) (end -1.305999 -4.010199) (layer "B.Fab") (width 0.0254))
    (fp_line (start -1.305999 -4.010199) (end -1.305999 3.343101) (layer "B.Fab") (width 0.0254))
    (fp_line (start -1.432999 -1.155674) (end -1.432999 3.470101) (layer "B.SilkS") (width 0.15))
    (fp_line (start 5.933001 -3.683) (end 5.933001 -4.137199) (layer "B.SilkS") (width 0.15))
        `
    const common_end = `
    (pad "1" thru_hole circle (at 0 0) (size 1.5 1.5) (drill 1.0) (layers *.Cu *.Mask) ${p.to.str})
    (pad "2" thru_hole circle (at 4.5 0) (size 1.5 1.5) (drill 1.0) (layers *.Cu *.Mask) ${p.from.str})
    (pad "3" thru_hole circle (at -1.255 -2.5) (size 1.8 1.8) (drill 1.3) (layers *.Cu *.Mask))
    (pad "4" thru_hole circle (at 5.755 -2.5) (size 1.8 1.8) (drill 1.3) (layers *.Cu *.Mask))
  )
        `
    let final = common_start;
    if (p.side == "F" || p.reversible) {
      if (p.include_silkscreen) {
        final += silkscreen_front
      }
    }
    if (p.side == "B" || p.reversible) {
      if (p.include_silkscreen) {
        final += silkscreen_back
      }
    }
    final += common_end;
    return final;
  }
}
