//
// smaller tht diode and disable some options.
//
// @unspecworks
//
//
//
//
// PLEASE CREDIT REFERENCED ONLY BELOW COMMENTS.
// -----------------------------------------------!!
// Copyright (c) 2023 Marco Massarelli
//
// SPDX-License-Identifier: CC-BY-NC-SA-4.0
//
// To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
//
// Authors: @ergogen + (@infused-kim, @ceoloide, @achamian, @im-AMS improvements)
//
// Description:
//  Combined Thru-Hole and SMD diode footprint for SOD-123 package, like the Semtech 1N4148W
//  component sold by Typeractive.xyz or LCSC.
//

module.exports = {
  params: {
    designator: 'D',
    side: 'B',
    reversible: false,
    include_traces_vias: false,
    trace_distance: { type: 'number', value: 1.2 },
    trace_width: 0.25,
    via_size: 0.6,
    via_drill: 0.3,
    include_tht: false,
    include_thru_hole_smd_pads: false,
    diode_3dmodel_filename: '',
    diode_3dmodel_xyz_offset: [0, 0, 0],
    diode_3dmodel_xyz_rotation: [0, 0, 0],
    diode_3dmodel_xyz_scale: [1, 1, 1],
    from: { type: 'net', value: undefined },
    to: { type: 'net', value: undefined }
  },
  body: p => {
    const standard_opening = `
    (footprint "ceoloide:diode_tht_sod123"
        (layer "${p.reversible ? 'F' : p.side}.Cu")
        ${p.at}
        (property "Reference" "${p.ref}"
            (at 0 0 ${p.r})
            (layer "${p.reversible ? 'F' : p.side}.SilkS")
            ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
        )
        `
    // This can be useful to avoid confusion from the fab, since via-in-pads are usually premium
    const thru_hole_smd_pads_description = `
      (property "Description" "Thru-hole SMD pads, *NOT* via-in-pad (do not plug or tent)."
        (at 0 0 0)
        (unlocked yes)
        (layer "F.Fab")
        (hide yes)
        (effects
          (font
            (size 1.27 1.27)
          )
        )
      )
    `
    const front_silk = `
(fp_line (start -0.25 0) (end -0.75 0) (layer "F.SilkS") (stroke (width 0.1) (type solid)))
      (fp_line (start -0.25 0.4) (end 0.35 0) (layer "F.SilkS") (stroke (width 0.1) (type solid)))
      (fp_line (start -0.25 -0.4) (end -0.25 0.4) (layer "F.SilkS") (stroke (width 0.1) (type solid)))
      (fp_line (start 0.35 0) (end -0.25 -0.4) (layer "F.SilkS") (stroke (width 0.1) (type solid)))
      (fp_line (start 0.35 0) (end 0.35 0.55) (layer "F.SilkS") (stroke (width 0.1) (type solid)))
      (fp_line (start 0.35 0) (end 0.35 -0.55) (layer "F.SilkS") (stroke (width 0.1) (type solid)))
      (fp_line (start 0.75 0) (end 0.35 0) (layer "F.SilkS") (stroke (width 0.1) (type solid)))
        `

    const front_smd_pads = `
        `
    const back_silk = `
(fp_line (start -0.25 0) (end -0.75 0) (layer "B.SilkS") (stroke (width 0.1) (type solid)))
      (fp_line (start -0.25 0.4) (end 0.35 0) (layer "B.SilkS") (stroke (width 0.1) (type solid)))
      (fp_line (start -0.25 -0.4) (end -0.25 0.4) (layer "B.SilkS") (stroke (width 0.1) (type solid)))
      (fp_line (start 0.35 0) (end -0.25 -0.4) (layer "B.SilkS") (stroke (width 0.1) (type solid)))
      (fp_line (start 0.35 0) (end 0.35 0.55) (layer "B.SilkS") (stroke (width 0.1) (type solid)))
      (fp_line (start 0.35 0) (end 0.35 -0.55) (layer "B.SilkS") (stroke (width 0.1) (type solid)))
      (fp_line (start 0.75 0) (end 0.35 0) (layer "B.SilkS") (stroke (width 0.1) (type solid)))
        `
    const back_smd_pads = `
        `
      
    const reversible_tht_pads = `
        `

    const tht = `
      (pad "1" thru_hole rect (at 2.75 0 ${p.r}) (size 1.778 1.778) (drill 0.9906) (layers "*.Cu" "*.Mask") ${p.to.str})
      (pad "2" thru_hole circle (at -2.75 0 ${p.r}) (size 1.905 1.905) (drill 0.9906) (layers "*.Cu" "*.Mask") ${p.from.str})
        `

    const diode_3dmodel = `
      (model ${p.diode_3dmodel_filename}
          (offset (xyz ${p.diode_3dmodel_xyz_offset[0]} ${p.diode_3dmodel_xyz_offset[1]} ${p.diode_3dmodel_xyz_offset[2]}))
          (scale (xyz ${p.diode_3dmodel_xyz_scale[0]} ${p.diode_3dmodel_xyz_scale[1]} ${p.diode_3dmodel_xyz_scale[2]}))
          (rotate (xyz ${p.diode_3dmodel_xyz_rotation[0]} ${p.diode_3dmodel_xyz_rotation[1]} ${p.diode_3dmodel_xyz_rotation[2]})))
        `
    const standard_closing = `
    )
        `
    const tht_traces = `
    (segment
      (start ${p.eaxy(3.81, 0)})
      (end ${p.eaxy(1.65, 0)})
      (width ${p.trace_width})
      (layer "F.Cu")
      (net ${p.from.index})
    )
    (segment
      (start ${p.eaxy(3.81, 0)})
      (end ${p.eaxy(1.65, 0)})
      (width ${p.trace_width})
      (layer "B.Cu")
      (net ${p.from.index})
    )
    (segment
      (start ${p.eaxy(-1.65, 0)})
      (end ${p.eaxy(-3.81, 0)})
      (width ${p.trace_width})
      (layer "F.Cu")
      (net ${p.to.index})
    )
    (segment
      (start ${p.eaxy(-1.65, 0)})
      (end ${p.eaxy(-3.81, 0)})
      (width ${p.trace_width})
      (layer "B.Cu")
      (net ${p.to.index})
    )
    `

    const smd_pad_traces = `
    (segment
      (start ${p.eaxy(1.65, 0)})
      (end ${p.eaxy(1.65 + 1*p.trace_distance, 0)})
      (width ${p.trace_width})
      (layer "F.Cu")
      (net ${p.from.index})
    )
    (via
      (at ${p.eaxy(1.65 + 1*p.trace_distance, 0)})
      (size ${p.via_size})
      (drill ${p.via_drill})
      (layers "F.Cu" "B.Cu")
      (net ${p.from.index})
    )
    (segment
      (start ${p.eaxy(1.65 + 1*p.trace_distance, 0)})
      (end ${p.eaxy(1.65, 0)})
      (width ${p.trace_width})
      (layer "B.Cu")
      (net ${p.from.index})
    )
    (segment
      (start ${p.eaxy(-1.65, 0)})
      (end ${p.eaxy(-1.65 - 1*p.trace_distance, 0)})
      (width ${p.trace_width})
      (layer "F.Cu")
      (net ${p.to.index})
    )
    (via
      (at ${p.eaxy(-1.65 - 1*p.trace_distance, 0)})
      (size ${p.via_size})
      (drill ${p.via_drill})
      (layers "F.Cu" "B.Cu")
      (net ${p.to.index})
    )
    (segment
      (start ${p.eaxy(-1.65 - 1*p.trace_distance, 0)})
      (end ${p.eaxy(-1.65, 0)})
      (width ${p.trace_width})
      (layer "B.Cu")
      (net ${p.to.index})
    )
    `

    let final = standard_opening;

    if (p.side == "F" || p.reversible) {
      final += front_silk;
      if(!p.include_thru_hole_smd_pads) {
        final += front_smd_pads;
      }
    }
    if (p.side == "B" || p.reversible) {
      final += back_silk;
      if(!p.include_thru_hole_smd_pads) {
        final += back_smd_pads;
      }
    }
    if (p.include_tht) {
      final += tht;
    }
    if (p.reversible && p.include_thru_hole_smd_pads) {
      final += thru_hole_smd_pads_description;
      final += reversible_tht_pads;
    }

    if (p.diode_3dmodel_filename) {
      final += diode_3dmodel;
    }

    final += standard_closing;

    if (p.reversible && p.include_traces_vias) {
      if(p.include_tht) {
        final += tht_traces;
      } else if (!p.include_tht && !p.include_thru_hole_smd_pads) {
        final += smd_pad_traces;
      }
    }

    return final;
  }
}

