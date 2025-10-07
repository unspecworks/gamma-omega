// Hesse Configuration logo - using Hesse Configuration Incidence Graph for 36 keys
// The Hesse Configuration is 12 lines (four drawn curved) and 9 points
// Params: None

module.exports = {
    params: {
        layer: 'F.SilkS',
        edge_thickness: 0.1,
        node_thickness: 0.3,
    },
    body: p => {
         return `

            (gr_circle (center ${p.x + -5} ${p.y + -5}) (end ${p.x + -5} ${p.y + -5 + 1}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
            (gr_circle (center ${p.x + 0} ${p.y + -5}) (end ${p.x + 0} ${p.y + -5 + 1}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
            (gr_circle (center ${p.x + 5} ${p.y + -5}) (end ${p.x + 5} ${p.y + -5 + 1}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
            (gr_circle (center ${p.x + -5} ${p.y + 0}) (end ${p.x + -5} ${p.y + 0 + 1}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
            (gr_circle (center ${p.x + 0} ${p.y + 0}) (end ${p.x + 0} ${p.y + 0 + 1}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
            (gr_circle (center ${p.x + 5} ${p.y + 0}) (end ${p.x + 5} ${p.y + 0 + 1}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
            (gr_circle (center ${p.x + -5} ${p.y + 5}) (end ${p.x + -5} ${p.y + 5 + 1}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
            (gr_circle (center ${p.x + 0} ${p.y + 5}) (end ${p.x + 0} ${p.y + 5 + 1}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
            (gr_circle (center ${p.x + 5} ${p.y + 5}) (end ${p.x + 5} ${p.y + 5 + 1}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
            (gr_line (start  ${p.x + -5} ${p.y + -6.666666666666667}) (end ${p.x + -5} ${p.y + 6.666666666666667}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 0} ${p.y + -6.666666666666667}) (end ${p.x + 0} ${p.y + 6.666666666666667}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 5} ${p.y + -6.666666666666667}) (end ${p.x + 5} ${p.y + 6.666666666666667}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -6.666666666666667} ${p.y + -5}) (end ${p.x + 6.666666666666667} ${p.y + -5}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -6.666666666666667} ${p.y + 0}) (end ${p.x + 6.666666666666667} ${p.y + 0}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -6.666666666666667} ${p.y + 5}) (end ${p.x + 6.666666666666667} ${p.y + 5}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 0} ${p.y + -10}) (end ${p.x + 6.666666666666667} ${p.y + -3.333333333333333}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -1.6666666666666667} ${p.y + -6.666666666666667}) (end ${p.x + 7.5} ${p.y + 2.5}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -6.666666666666667} ${p.y + -6.666666666666667}) (end ${p.x + 6.666666666666667} ${p.y + 6.666666666666667}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -7.5} ${p.y + -2.5}) (end ${p.x + 1.6666666666666667} ${p.y + 6.666666666666667}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -6.666666666666667} ${p.y + 3.333333333333333}) (end ${p.x + 0} ${p.y + 10}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -10} ${p.y + 0}) (end ${p.x + -3.333333333333333} ${p.y + -6.666666666666667}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -6.666666666666667} ${p.y + 1.6666666666666667}) (end ${p.x + 2.5} ${p.y + -7.5}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -6.666666666666667} ${p.y + 6.666666666666667}) (end ${p.x + 6.666666666666667} ${p.y + -6.666666666666667}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -2.5} ${p.y + 7.5}) (end ${p.x + 6.666666666666667} ${p.y + -1.6666666666666667}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 3.333333333333333} ${p.y + 6.666666666666667}) (end ${p.x + 10} ${p.y + 0}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_arc (start  ${p.x + 0} ${p.y + -10}) (mid ${p.x + -7.5} ${p.y + -10.0}) (end ${p.x + -7.5} ${p.y + -2.5}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_arc (start  ${p.x + 2.5} ${p.y + -7.5}) (mid ${p.x + 10.0} ${p.y + -7.5}) (end ${p.x + 10.0} ${p.y + 0.0}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_arc (start  ${p.x + 0} ${p.y + 10}) (mid ${p.x + 7.5} ${p.y + 10.0}) (end ${p.x + 7.5} ${p.y + 2.5}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_arc (start  ${p.x + -10} ${p.y + 0}) (mid ${p.x + -10.0} ${p.y + 7.5}) (end ${p.x + -2.5} ${p.y + 7.5}) (layer ${p.layer}) (width ${p.edge_thickness}))
     `
    }
}

