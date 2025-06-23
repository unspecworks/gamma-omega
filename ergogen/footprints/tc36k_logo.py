import math

nodes = 26
SIZE = 30
FIG_RADIUS = 23.0  # mm
NODE_RADIUS = 1.25  # mm

print("""// TC36k logo - partial Tutt-Coxeter graph for 36 keys
// Params: None

module.exports = {
    params: {
        layer: 'F.SilkS',
        edge_thickness: 0.1,
        node_thickness: 0.3,
    },
    body: p => {
        const justify = (p.layer==`B.SilkS`)&& `(justify top mirror)` || '(justify top)';
        return `
            (gr_text "TC36K: Partial" (at ${p.x} ${p.y + 15} 0) (layer ${p.layer})
                (effects (font (size 1.6 1.6) (thickness 0.32) bold) ${justify})
            )
            (gr_text "Tutte-Coxeter" (at ${p.x} ${p.y + 18} 0) (layer ${p.layer})
                (effects (font (size 1.6 1.6) (thickness 0.32) bold) ${justify})
            )
            (gr_text "Graph Layout" (at ${p.x} ${p.y + 21} 0) (layer ${p.layer})
                (effects (font (size 1.6 1.6) (thickness 0.32) bold) ${justify})
            )
""")

offset = 0.5 * (SIZE + 1 - nodes) / SIZE  # zero straight down
# Draw cirles for the nodes (altenate filled/not for the bipartite row/col scanning):
for i in range(nodes):
    angle = i / SIZE + offset
    x = FIG_RADIUS * math.sin(angle * 2 * math.pi)
    y = FIG_RADIUS * math.cos(angle * 2 * math.pi)
    print(
        f"    (gr_circle (center ${{p.x + {x}}} ${{p.y + {y}}}) (end ${{p.x + {x}}} ${{p.y + {y} + {NODE_RADIUS}}}) (layer ${{p.layer}}) (width ${{p.node_thickness}}) (fill {'none' if i % 2 else 'solid'}))"
    )


def connecting_line(n0, n1):
    if n0 >= nodes or n1 >= nodes:
        return ""
    angle = n0 / SIZE + offset
    x0 = FIG_RADIUS * math.sin(angle * 2 * math.pi)
    y0 = FIG_RADIUS * math.cos(angle * 2 * math.pi)
    angle = n1 / SIZE + offset
    x1 = FIG_RADIUS * math.sin(angle * 2 * math.pi)
    y1 = FIG_RADIUS * math.cos(angle * 2 * math.pi)
    dist = math.sqrt((x1 - x0) ** 2 + (y1 - y0) ** 2)
    x0_clipped = x0 + (NODE_RADIUS / dist) * (x1 - x0)
    y0_clipped = y0 + (NODE_RADIUS / dist) * (y1 - y0)
    x1_clipped = x1 - (NODE_RADIUS / dist) * (x1 - x0)
    y1_clipped = y1 - (NODE_RADIUS / dist) * (y1 - y0)
    return f"            (gr_line (start  ${{p.x + {x0_clipped}}} ${{p.y + {y0_clipped}}}) (end ${{p.x + {x1_clipped}}} ${{p.y + {y1_clipped}}}) (layer ${{p.layer}}) (width ${{p.edge_thickness}}))"


# Connect along outer circle with straight edges
masked = NODE_RADIUS / (FIG_RADIUS * 2 * math.pi)
for i in range(nodes):
    if i == 0:
        if nodes == 30:
            i = 30
        else:
            continue
    angle = (i - 1) / SIZE + offset + masked
    x0 = FIG_RADIUS * math.sin(angle * 2 * math.pi)
    y0 = FIG_RADIUS * math.cos(angle * 2 * math.pi)
    angle = i / SIZE + offset - masked
    x1 = FIG_RADIUS * math.sin(angle * 2 * math.pi)
    y1 = FIG_RADIUS * math.cos(angle * 2 * math.pi)
    print(
        f"            (gr_line (start  ${{p.x + {x0}}} ${{p.y + {y0}}}) (end ${{p.x + {x1}}} ${{p.y + {y1}}}) (layer ${{p.layer}}) (width ${{p.edge_thickness}}))"
    )

# And the rest of the edges:
print(connecting_line(0, 13))
print(connecting_line(1, 18))
print(connecting_line(2, 23))  # horizontal with 26 nodes
print(connecting_line(3, 10))
print(connecting_line(4, 27))
print(connecting_line(5, 14))
print(connecting_line(6, 19))  # horizontal with 26 nodes
print(connecting_line(7, 24))
print(connecting_line(8, 29))
print(connecting_line(9, 16))  # horizontal with 26 nodes
print(connecting_line(11, 20))
print(connecting_line(12, 25))
print(connecting_line(15, 22))
print(connecting_line(17, 26))
print(connecting_line(21, 28))


print("""     `
    }
}
""")
