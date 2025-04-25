//
// For Only Left Side Holes for Pi Pico (20pin oneside)
//
// @unspecworks
//
//
//
//
// PLEASE CREDIT REFERENCED ONLY BELOW COMMENTS.
// -----------------------------------------------!!
//
//
//
//
//
//
//
// Author: @infused-kim
//
// A reversible footprint for the nice!nano (or any pro-micro compatible
// controller) that uses jumpers instead of two rows socket rows to achieve
// reversablity.
//
// This is a re-implementation of the promicro_pretty footprint made popular
// by @benvallack.
//
// The following improvements have been made:
//    1. It uses real traces instead of pads, which gets rid of hundreds of
//       DRC errors.
//    2. It leaves more space between the vias to allow easier routing through
//       the middle of the footprint
//
//
// # Placement and jumper soldering:
// The footprint is meant to be used with a nice!nano (or any other pro micro
// compatible board) that is placed on the top side of the PCB with the
// components facing down.
//
// This means when you look down at it, the RAW pin is in the upper left
// corner and the 006 pin in the upper right corner.
//
// To make it work in this configuration, you solder the jumpers on the
// OPPOSITE side.
//
// Due to the way how this footprint works, you can also place it with the
// components facing up or even at the bottom. You just need to make sure you
// solder the jumpers on the correct side.
//
// Regardless, the silkscreen labels are displayed in location that match when
// the controller is placed with the components facing down.
//
// # Credits
// This footprint was created from scratch, but is based on the ideas from
// these footprints:
// https://github.com/Albert-IV/ergogen-contrib/blob/main/src/footprints/promicro_pretty.js
// https://github.com/50an6xy06r6n/keyboard_reversible.pretty

module.exports =  {
    params: {
      designator: 'MCU',
      traces: true,

      P0: {type: 'net', value: 'P0'},
      P0_label: '',
      
      VB: {type: 'net', value: 'VB'},
      VB_label: '',
      
      P1: {type: 'net', value: 'P1'},
      P1_label: '',
      
      VS: {type: 'net', value: 'VS'},
      VS_label: '',
      
      GND: {type: 'net', value: 'GND'},
      GND_label: '',
      
      P2: {type: 'net', value: 'P2'},
      P2_label: '',
      
      P23: {type: 'net', value: 'P23'},
      P23_label: '',
      
      P3: {type: 'net', value: 'P3'},
      P3_label: '',
      
      V3: {type: 'net', value: 'V3'},
      V3_label: '',
      
      P4: {type: 'net', value: 'P4'},
      P4_label: '',
      
      P29: {type: 'net', value: 'P29'},
      P29_label: '',
      
      P5: {type: 'net', value: 'P5'},
      P5_label: '',
      
      P28: {type: 'net', value: 'P28'},
      P28_label: '',
      
      GND: {type: 'net', value: 'GND'},
      GND_label: '',
      
      P6: {type: 'net', value: 'P6'},
      P6_label: '',
      
      P27: {type: 'net', value: 'P27'},
      P27_label: '',
      
      P7: {type: 'net', value: 'P7'},
      P7_label: '',
      
      P26: {type: 'net', value: 'P26'},
      P26_label: '',
      
      P8: {type: 'net', value: 'P8'},
      P8_label: '',
      
      RUN: {type: 'net', value: 'RUN'},
      RUN_label: '',
      
      P9: {type: 'net', value: 'P9'},
      P9_label: '',
      
      P22: {type: 'net', value: 'P22'},
      P22_label: '',
      
      GND: {type: 'net', value: 'GND'},
      GND_label: '',
      
      P10: {type: 'net', value: 'P10'},
      P10_label: '',
      
      P21: {type: 'net', value: 'P21'},
      P21_label: '',
      
      P11: {type: 'net', value: 'P11'},
      P11_label: '',
      
      P20: {type: 'net', value: 'P20'},
      P20_label: '',
      
      P12: {type: 'net', value: 'P12'},
      P12_label: '',
      
      P19: {type: 'net', value: 'P19'},
      P19_label: '',
      
      P13: {type: 'net', value: 'P13'},
      P13_label: '',
      
      P18: {type: 'net', value: 'P18'},
      P18_label: '',
      
      GND: {type: 'net', value: 'GND'},
      GND_label: '',
      
      P14: {type: 'net', value: 'P14'},
      P14_label: '',
      
      P17: {type: 'net', value: 'P17'},
      P17_label: '',
      
      P15: {type: 'net', value: 'P15'},
      P15_label: '',
      
      P16: {type: 'net', value: 'P16'},
      P16_label: '',

      show_instructions: false,
      show_silk_labels: false,
      show_via_labels: false,

      // This side parameter applies to all 3d models
      mcu_3dmodel_side: '',

      mcu_3dmodel_filename: '${EG_INFUSED_KIM_3D_MODELS}/Nice_Nano_V2.step',
      mcu_3dmodel_xyz_scale: '',
      mcu_3dmodel_xyz_rotation: '',
      mcu_3dmodel_xyz_offset: '',

      header_3dmodel_filename: '${EG_INFUSED_KIM_3D_MODELS}/PinHeader_2.54mm_2x-12.step',
      header_3dmodel_xyz_scale: '',
      header_3dmodel_xyz_rotation: '',
      header_3dmodel_xyz_offset: '',

      socket_3dmodel_filename: '${EG_INFUSED_KIM_3D_MODELS}/PinSocket_2.54mm_5mm_2x-12.step',
      socket_3dmodel_xyz_scale: '',
      socket_3dmodel_xyz_rotation: '',
      socket_3dmodel_xyz_offset: '',
    },
    body: p => {

      const gen_3d_model = (filename, scale, rotation, offset, side, {
        default_side =  'F',
        scale_f =       [1, 1, 1],
        rotation_f =    [0, 0, 0],
        offset_f =      [0, 0, 0],
        scale_b =       [1, 1, 1],
        rotation_b =    [0, 0, 0],
        offset_b =      [0, 0, 0]
      } = {}) => {

        if(filename == '') {
          return '';
        }

        const get_3d_model_side = (side, default_side) => {

            if(side == '') {
                if(p.reverse == true) {
                    side = default_side;
                } else {
                    side = p.side;
                }
            }

            if(side == 'F' || side == 'B') {
                return side;
            } else {
                return default_side;
            }
        }

        const final_side = get_3d_model_side(side, default_side, p);
        const is_front = final_side === 'F';

        // Determine the actual values to use
        const final_scale = scale || (is_front ? scale_f : scale_b);
        const final_rotation = rotation || (is_front ? rotation_f : rotation_b);
        let final_offset = offset || (is_front ? offset_f : offset_b);

        // Fix bug that seems to happen during the upgrade from KiCad 5 to
        // 8. All offset values seem to be multiplied by 25.4. So here we
        // divide them so that the upgrade KiCad file ends up with the
        // correct value.
        const offset_divisor = 25.4;
        final_offset = final_offset.map(value => value / offset_divisor);

        return  `
          (model ${filename}
            (at (xyz ${final_offset[0]} ${final_offset[1]} ${final_offset[2]}))
            (scale (xyz ${final_scale[0]} ${final_scale[1]} ${final_scale[2]}))
            (rotate (xyz ${final_rotation[0]} ${final_rotation[1]} ${final_rotation[2]}))
          )
        `;
      };

      const get_pin_net_name = (p, pin_name) => {
        return p[pin_name].name;
      };

      const get_pin_net_str = (p, pin_name) => {
        return p[pin_name].str;
      };

      const get_pin_label_override = (p, pin_name) => {
        prop_name = `${pin_name}_label`;
        return p[prop_name];
      };

      const get_pin_label = (p, pin_name) => {
        label = get_pin_label_override(p, pin_name);
        if(label == '') {
          label = get_pin_net_name(p, pin_name);
        }

        if(label === undefined) {
          label = '""';
        }

        return label;
      };

      const get_at_coordinates = () => {
        const pattern = /\(at (-?[\d\.]*) (-?[\d\.]*) (-?[\d\.]*)\)/;
        const matches = p.at.match(pattern);
        if (matches && matches.length == 4) {
          return [parseFloat(matches[1]), parseFloat(matches[2]), parseFloat(matches[3])];
        } else {
          return null;
        }
      }

      const adjust_point = (x, y) => {
        const at_l = get_at_coordinates();
        if(at_l == null) {
          throw new Error(
            `Could not get x and y coordinates from p.at: ${p.at}`
          );
        }
        const at_x = at_l[0];
        const at_y = at_l[1];
        const at_angle = at_l[2];
        const adj_x = at_x + x;
        const adj_y = at_y + y;

        const radians = (Math.PI / 180) * at_angle,
          cos = Math.cos(radians),
          sin = Math.sin(radians),
          nx = (cos * (adj_x - at_x)) + (sin * (adj_y - at_y)) + at_x,
          ny = (cos * (adj_y - at_y)) - (sin * (adj_x - at_x)) + at_y;

        const point_str = `${nx.toFixed(2)} ${ny.toFixed(2)}`;
        return point_str;
      }

      const gen_traces_row = (row_num) => {
        const traces = `
          (segment (start ${ adjust_point(4.775, -12.7 + (row_num * 2.54)) }) (end ${ adjust_point(3.262, -12.7 + (row_num * 2.54)) }) (width 0.25) (layer F.Cu) (net 1))
          (segment (start ${ adjust_point(-4.335002, -12.7 + (row_num * 2.54)) }) (end ${ adjust_point(-3.610001, -11.974999 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 1))
          (segment (start ${ adjust_point(-4.775, -12.7 + (row_num * 2.54)) }) (end ${ adjust_point(-4.335002, -12.7 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 1))
          (segment (start ${ adjust_point(-3.610001, -11.974999 + (row_num * 2.54)) }) (end ${ adjust_point(-2.913999, -11.974999 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 1))
          (segment (start ${ adjust_point(-2.536999, -12.351999 + (row_num * 2.54)) }) (end ${ adjust_point(-2.536999, -12.363001 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 1))
          (segment (start ${ adjust_point(-2.913999, -11.974999 + (row_num * 2.54)) }) (end ${ adjust_point(-2.536999, -12.351999 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 1))
          (segment (start ${ adjust_point(-2.536999, -12.363001 + (row_num * 2.54)) }) (end ${ adjust_point(-2.45, -12.45 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 1))
          (segment (start ${ adjust_point(3.012, -12.45 + (row_num * 2.54)) }) (end ${ adjust_point(3.262, -12.7 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 1))
          (segment (start ${ adjust_point(-2.45, -12.45 + (row_num * 2.54)) }) (end ${ adjust_point(3.012, -12.45 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 1))
          (segment (start ${ adjust_point(-4.775, -12.7 + (row_num * 2.54)) }) (end ${ adjust_point(-3.262, -12.7 + (row_num * 2.54)) }) (width 0.25) (layer F.Cu) (net 13))
          (segment (start ${ adjust_point(3.610001, -13.425001 + (row_num * 2.54)) }) (end ${ adjust_point(2.913999, -13.425001 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 13))
          (segment (start ${ adjust_point(4.335002, -12.7 + (row_num * 2.54)) }) (end ${ adjust_point(3.610001, -13.425001 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 13))
          (segment (start ${ adjust_point(4.775, -12.7 + (row_num * 2.54)) }) (end ${ adjust_point(4.335002, -12.7 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 13))
          (segment (start ${ adjust_point(2.913999, -13.425001 + (row_num * 2.54)) }) (end ${ adjust_point(2.438998, -12.95 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 13))
          (segment (start ${ adjust_point(-3.012, -12.95 + (row_num * 2.54)) }) (end ${ adjust_point(-3.262, -12.7 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 13))
          (segment (start ${ adjust_point(2.438998, -12.95 + (row_num * 2.54)) }) (end ${ adjust_point(-3.012, -12.95 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 13))
          (segment (start ${ adjust_point(-7.62, -12.7 + (row_num * 2.54)) }) (end ${ adjust_point(-5.5, -12.7 + (row_num * 2.54)) }) (width 0.25) (layer F.Cu) (net 23))
          (segment (start ${ adjust_point(-7.62, -12.7 + (row_num * 2.54)) }) (end ${ adjust_point(-5.5, -12.7 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 23))
          (segment (start ${ adjust_point(5.5, -12.7 + (row_num * 2.54)) }) (end ${ adjust_point(7.62, -12.7 + (row_num * 2.54)) }) (width 0.25) (layer F.Cu) (net 24))
          (segment (start ${ adjust_point(7.62, -12.7 + (row_num * 2.54)) }) (end ${ adjust_point(5.5, -12.7 + (row_num * 2.54)) }) (width 0.25) (layer B.Cu) (net 24))
        `

        return traces
      }

      const gen_traces = () => {
        let traces = '';
        // for (let i = 0; i < 12; i++) {
        //   row_traces = gen_traces_row(i)
        //   traces += row_traces
        // }

        return traces
      }

      const gen_socket_row = (row_num, pin_name_left, pin_name_right, show_via_labels, show_silk_labels) => {
        const row_offset_y = 2.54 * row_num

        const socket_hole_num_left = 40 - row_num
        const socket_hole_num_right = 1 + row_num
        const via_num_left = 155 - row_num
        const via_num_right = 1 + row_num

        const net_left = get_pin_net_str(p, pin_name_left)
        const net_right = get_pin_net_str(p, pin_name_right)
        const via_label_left = get_pin_label(p, pin_name_left)
        const via_label_right = get_pin_label(p, pin_name_right)

        // These are the silkscreen labels that will be printed on the PCB.
        // They tell us the orientation if the controller is placed with
        // the components down, on top of the PCB and the jumpers are
        // soldered on the opposite side than the controller.
        const net_silk_front_left = via_label_right
        const net_silk_front_right = via_label_left
        const net_silk_back_left = via_label_left
        const net_silk_back_right = via_label_right

        let socket_row = `
          ${''/* Socket Holes 7.62 */}
          (pad ${socket_hole_num_right} thru_hole circle (at -8.89 ${-24.13+ row_offset_y}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${net_right})

        `

        if(show_silk_labels == true) {
          socket_row += `

            ${''/* Silkscreen Labels - Front */}
            (fp_text user ${net_silk_front_left} (at -3 ${-24.13 + row_offset_y}) (layer F.SilkS)
              (effects (font (size 1 1) (thickness 0.15)) (justify left))
            )
            (fp_text user ${net_silk_front_right} (at 3 ${-24.13 + row_offset_y}) (layer F.SilkS)
              (effects (font (size 1 1) (thickness 0.15)) (justify right))
            )

            ${''/* Silkscreen Labels - Back */}
            (fp_text user ${net_silk_back_left} (at -3 ${-24.13 + row_offset_y} 180) (layer B.SilkS)
              (effects (font (size 1 1) (thickness 0.15)) (justify right mirror))
            )
            (fp_text user ${net_silk_back_right} (at 3 ${-24.13 + row_offset_y} 180) (layer B.SilkS)
              (effects (font (size 1 1) (thickness 0.15)) (justify left mirror))
            )



    (fp_rect (start -11.43 -26.67) (end 11.43 26.67) (layer Dwgs.User) (width 0.12))
  
    (fp_line (start -9.39 -24.13) (end -8.39 -24.13) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 -24.63) (end -8.89 -23.63) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 -21.59) (end -8.39 -21.59) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 -22.09) (end -8.89 -21.09) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 -19.05) (end -8.39 -19.05) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 -19.55) (end -8.89 -18.55) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 -16.51) (end -8.39 -16.51) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 -17.01) (end -8.89 -16.01) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 -13.97) (end -8.39 -13.97) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 -14.47) (end -8.89 -13.47) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 -11.43) (end -8.39 -11.43) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 -11.93) (end -8.89 -10.93) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 -8.89) (end -8.39 -8.89) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 -9.39) (end -8.89 -8.39) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 -6.35) (end -8.39 -6.35) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 -6.85) (end -8.89 -5.85) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 -3.81) (end -8.39 -3.81) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 -4.31) (end -8.89 -3.31) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 -1.27) (end -8.39 -1.27) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 -1.77) (end -8.89 -0.77) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 1.27) (end -8.39 1.27) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 0.77) (end -8.89 1.77) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 3.81) (end -8.39 3.81) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 3.31) (end -8.89 4.31) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 6.35) (end -8.39 6.35) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 5.85) (end -8.89 6.85) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 8.89) (end -8.39 8.89) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 8.39) (end -8.89 9.39) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 11.43) (end -8.39 11.43) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 10.93) (end -8.89 11.93) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 13.97) (end -8.39 13.97) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 13.47) (end -8.89 14.47) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 16.51) (end -8.39 16.51) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 16.01) (end -8.89 17.01) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 19.05) (end -8.39 19.05) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 18.55) (end -8.89 19.55) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 21.59) (end -8.39 21.59) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 21.09) (end -8.89 22.09) (layer Dwgs.User) (width 0.12))
    (fp_line (start -9.39 24.13) (end -8.39 24.13) (layer Dwgs.User) (width 0.12))
    (fp_line (start -8.89 23.63) (end -8.89 24.63) (layer Dwgs.User) (width 0.12))
    
    (fp_line (start 8.39 -24.13) (end 9.39 -24.13) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 -24.63) (end 8.89 -23.63) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 -21.59) (end 9.39 -21.59) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 -22.09) (end 8.89 -21.09) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 -19.05) (end 9.39 -19.05) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 -19.55) (end 8.89 -18.55) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 -16.51) (end 9.39 -16.51) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 -17.01) (end 8.89 -16.01) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 -13.97) (end 9.39 -13.97) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 -14.47) (end 8.89 -13.47) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 -11.43) (end 9.39 -11.43) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 -11.93) (end 8.89 -10.93) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 -8.89) (end 9.39 -8.89) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 -9.39) (end 8.89 -8.39) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 -6.35) (end 9.39 -6.35) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 -6.85) (end 8.89 -5.85) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 -3.81) (end 9.39 -3.81) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 -4.31) (end 8.89 -3.31) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 -1.27) (end 9.39 -1.27) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 -1.77) (end 8.89 -0.77) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 1.27) (end 9.39 1.27) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 0.77) (end 8.89 1.77) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 3.81) (end 9.39 3.81) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 3.31) (end 8.89 4.31) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 6.35) (end 9.39 6.35) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 5.85) (end 8.89 6.85) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 8.89) (end 9.39 8.89) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 8.39) (end 8.89 9.39) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 11.43) (end 9.39 11.43) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 10.93) (end 8.89 11.93) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 13.97) (end 9.39 13.97) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 13.47) (end 8.89 14.47) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 16.51) (end 9.39 16.51) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 16.01) (end 8.89 17.01) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 19.05) (end 9.39 19.05) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 18.55) (end 8.89 19.55) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 21.59) (end 9.39 21.59) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 21.09) (end 8.89 22.09) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.39 24.13) (end 9.39 24.13) (layer Dwgs.User) (width 0.12))
    (fp_line (start 8.89 23.63) (end 8.89 24.63) (layer Dwgs.User) (width 0.12))
          `
        }

        if(show_via_labels == true) {
          socket_row += `
            ${''/* Via Labels - Front */}
            (fp_text user ${via_label_left} (at -3.262 ${-13.5 + row_offset_y}) (layer F.Fab)
              (effects (font (size 0.5 0.5) (thickness 0.08)))
            )
            (fp_text user ${via_label_right} (at 3.262 ${-13.5 + row_offset_y}) (layer F.Fab)
              (effects (font (size 0.5 0.5) (thickness 0.08)))
            )

            ${''/* Via Labels - Back */}
            (fp_text user ${via_label_left} (at -3.262 ${-13.5 + row_offset_y} 180) (layer B.Fab)
              (effects (font (size 0.5 0.5) (thickness 0.08)) (justify mirror))
            )
            (fp_text user ${via_label_right} (at 3.262 ${-13.5 + row_offset_y} 180) (layer B.Fab)
              (effects (font (size 0.5 0.5) (thickness 0.08)) (justify mirror))
            )
          `
        }

        return socket_row
      }

      const gen_socket_rows = (show_via_labels, show_silk_labels) => {
        const pin_names = [
          ['P0', 'VB'],
          ['P1', 'VS'],
          ['GND', 'GND'],
          ['P2', 'P23'],
          ['P3', 'V3'],
          ['P4', 'P29'],
          ['P5', 'P28'],
          ['GND', 'GND'],
          ['P6', 'P27'],
          ['P7', 'P26'],
          ['P8', 'RUN'],
          ['P9', 'P22'],
          ['GND', 'GND'],
          ['P10', 'P21'],
          ['P11', 'P20'],
          ['P12', 'P19'],
          ['P13', 'P18'],
          ['GND', 'GND'],
          ['P14', 'P17'],
          ['P15', 'P16']
        ];
        let socket_rows = '';
        for (let i = 1; i < pin_names.length; i++) {
          pin_name_left = pin_names[i][0]
          pin_name_right = pin_names[i][1]

          const socket_row = gen_socket_row(
            i, pin_name_left, pin_name_right,
            show_via_labels, show_silk_labels
          )

          socket_rows += socket_row
        }

        return socket_rows
      }

      const common_top = `
        (module nice_nano (layer F.Cu) (tedit 6451A4F1)
          (attr virtual)
          ${p.at /* parametric position */}
          (fp_text reference "${p.ref}" (at 0 -15) (layer F.SilkS) ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
          )
    
      `;

      const instructions = `
          (fp_text user "R. Side - Jumper Here" (at 0 -15.245) (layer F.SilkS)
            (effects (font (size 1 1) (thickness 0.15)))
          )
          (fp_text user "L. Side - Jumper Here" (at 0 -15.245) (layer B.SilkS)
            (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
          )
    `

      const socket_rows = gen_socket_rows(
        p.show_via_labels, p.show_silk_labels
      )
      const traces = gen_traces()

      return `
          ${''/* Controller*/}
          ${ common_top }
          ${ socket_rows }
          ${ p.show_instructions ? instructions : '' }
          ${ gen_3d_model(
                  p.mcu_3dmodel_filename,
                  p.mcu_3dmodel_xyz_scale,
                  p.mcu_3dmodel_xyz_rotation,
                  p.mcu_3dmodel_xyz_offset,
                  p.mcu_3dmodel_side,
                  {
                    rotation_f: [0, 0, 0],
                    offset_f: [0, 0, 5.0],

                    rotation_b: [0, 180, 0],
                    offset_b: [0, 0, -6.6],
                  },
              )
          }
          ${ gen_3d_model(
                  p.header_3dmodel_filename,
                  p.header_3dmodel_xyz_scale,
                  p.header_3dmodel_xyz_rotation,
                  p.header_3dmodel_xyz_offset,
                  p.mcu_3dmodel_side,
                  {
                    rotation_f: [0, 0, 0],
                    offset_f: [0, -1.4, 1.5],

                    rotation_b: [0, 180, 0],
                    offset_b: [0, -1.4, -3.1],
                  },
              )
          }
          ${ gen_3d_model(
                  p.socket_3dmodel_filename,
                  p.socket_3dmodel_xyz_scale,
                  p.socket_3dmodel_xyz_rotation,
                  p.socket_3dmodel_xyz_offset,
                  p.mcu_3dmodel_side,
                  {
                    rotation_f: [-90, 0, -90],
                    offset_f: [0, -15.3, 0],

                    rotation_b: [90, 0, -90],
                    offset_b: [0, -15.3, -1.6],
                  },
              )
          }
        )

        ${''/* Traces */}
        ${ p.traces ? traces : ''}
    `;
    }
  }
