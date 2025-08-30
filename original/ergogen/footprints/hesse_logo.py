import math

GRID_SIZE = 5  # mm - spacing of the 9 nodes
NODE_RADIUS = 1  # mm

print("""// Hesse Configuration logo - using Hesse Configuration Incidence Graph for 36 keys
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
""")
#        const justify = (p.layer==`B.SilkS`)&& `(justify top mirror)` || '(justify top)';
#        return `
#            (gr_text "Hesse Configuration" (at ${p.x} ${p.y + 12} 0) (layer ${p.layer})
#                (effects (font (size 1.6 1.6) (thickness 0.32) bold) ${justify})
#            )
#            (gr_text "12 lines, 9 points" (at ${p.x} ${p.y + 14} 0) (layer ${p.layer})
#                (effects (font (size 1.6 1.6) (thickness 0.32) bold) ${justify})
#            )

spacing = [-GRID_SIZE, 0, GRID_SIZE]
extend = GRID_SIZE / 3
half_length = GRID_SIZE + extend

# Filled circles for the grid of nine points:
for y in spacing:
    for x in spacing:
        print(
            f"            (gr_circle (center ${{p.x + {x}}} ${{p.y + {y}}})"
            f" (end ${{p.x + {x}}} ${{p.y + {y} + {NODE_RADIUS}}})"
            " (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))"
        )

# Diagonal lines through the grid:
for x0, y0, x1, y1 in (
    # vertical:
    (-GRID_SIZE, -GRID_SIZE - extend, -GRID_SIZE, GRID_SIZE + extend),
    (0, -GRID_SIZE - extend, 0, GRID_SIZE + extend),
    (+GRID_SIZE, -GRID_SIZE - extend, +GRID_SIZE, GRID_SIZE + extend),
    # horizontal:
    (-GRID_SIZE - extend, -GRID_SIZE, GRID_SIZE + extend, -GRID_SIZE),
    (-GRID_SIZE - extend, 0, GRID_SIZE + extend, 0),
    (-GRID_SIZE - extend, +GRID_SIZE, GRID_SIZE + extend, +GRID_SIZE),
    # diagonal down/right:
    (0, -2 * GRID_SIZE, GRID_SIZE + extend, -GRID_SIZE + extend),
    (0 - extend, -GRID_SIZE - extend, 1.5 * GRID_SIZE, 0.5 * GRID_SIZE),
    (-GRID_SIZE - extend, -GRID_SIZE - extend, GRID_SIZE + extend, GRID_SIZE + extend),
    (-1.5 * GRID_SIZE, -0.5 * GRID_SIZE, 0 + extend, GRID_SIZE + extend),
    (-GRID_SIZE - extend, GRID_SIZE - extend, 0, 2 * GRID_SIZE),
    # diagonal up/right
    (
        -2 * GRID_SIZE,
        0,
        -GRID_SIZE + extend,
        -GRID_SIZE - extend,
    ),
    (-GRID_SIZE - extend, 0 + extend, 0.5 * GRID_SIZE, -1.5 * GRID_SIZE),
    (-GRID_SIZE - extend, GRID_SIZE + extend, GRID_SIZE + extend, -GRID_SIZE - extend),
    (-0.5 * GRID_SIZE, 1.5 * GRID_SIZE, GRID_SIZE + extend, 0 - extend),
    (+GRID_SIZE - extend, GRID_SIZE + extend, 2 * GRID_SIZE, 0),
):
    print(
        "            (gr_line"
        f" (start  ${{p.x + {x0}}} ${{p.y + {y0}}})"
        f" (end ${{p.x + {x1}}} ${{p.y + {y1}}})"
        " (layer ${p.layer}) (width ${p.edge_thickness}))"
    )

# Four half-circles to connect the diagonal lines for the affine plane illustration:
for x0, y0, x1, y1, x2, y2 in (
    # top left:
    (
        0,
        -2 * GRID_SIZE,
        (-0.75 - 0.75) * GRID_SIZE,
        (-1.25 - 0.75) * GRID_SIZE,
        -1.5 * GRID_SIZE,
        -0.5 * GRID_SIZE,
    ),
    # top right:
    (
        0.5 * GRID_SIZE,
        -1.5 * GRID_SIZE,
        (1.25 + 0.75) * GRID_SIZE,
        (-0.75 - 0.75) * GRID_SIZE,
        2.0 * GRID_SIZE,
        0.0 * GRID_SIZE,
    ),
    # bottom right:
    (
        0,
        2 * GRID_SIZE,
        (0.75 + 0.75) * GRID_SIZE,
        (1.25 + 0.75) * GRID_SIZE,
        1.5 * GRID_SIZE,
        0.5 * GRID_SIZE,
    ),
    # bottom left:
    (
        -2 * GRID_SIZE,
        0,
        (-1.25 - 0.75) * GRID_SIZE,
        (0.75 + 0.75) * GRID_SIZE,
        -0.5 * GRID_SIZE,
        1.5 * GRID_SIZE,
    ),
):
    print(
        "            (gr_arc"
        f" (start  ${{p.x + {x0}}} ${{p.y + {y0}}})"
        f" (mid ${{p.x + {x1}}} ${{p.y + {y1}}})"
        f" (end ${{p.x + {x2}}} ${{p.y + {y2}}})"
        " (layer ${p.layer}) (width ${p.edge_thickness}))"
    )


# Done, footer
print("""     `
    }
}
""")
