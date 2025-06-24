// TC36k logo - partial Tutt-Coxeter graph for 36 keys
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

    (gr_circle (center ${p.x + 11.499999999999998} ${p.y + 19.91858428704209}) (end ${p.x + 11.499999999999998} ${p.y + 19.91858428704209 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
    (gr_circle (center ${p.x + 15.390003946253739} ${p.y + 17.092330985980066}) (end ${p.x + 15.390003946253739} ${p.y + 17.092330985980066 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill none))
    (gr_circle (center ${p.x + 18.607390870623792} ${p.y + 13.519060802726882}) (end ${p.x + 18.607390870623792} ${p.y + 13.519060802726882 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
    (gr_circle (center ${p.x + 21.01154552577982} ${p.y + 9.354942790743404}) (end ${p.x + 21.01154552577982} ${p.y + 9.354942790743404 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill none))
    (gr_circle (center ${p.x + 22.49739481687753} ${p.y + 4.781968888808462}) (end ${p.x + 22.49739481687753} ${p.y + 4.781968888808462 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
    (gr_circle (center ${p.x + 23.0} ${p.y + 1.4083438190194562e-15}) (end ${p.x + 23.0} ${p.y + 1.4083438190194562e-15 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill none))
    (gr_circle (center ${p.x + 22.49739481687753} ${p.y + -4.78196888880846}) (end ${p.x + 22.49739481687753} ${p.y + -4.78196888880846 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
    (gr_circle (center ${p.x + 21.011545525779823} ${p.y + -9.3549427907434}) (end ${p.x + 21.011545525779823} ${p.y + -9.3549427907434 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill none))
    (gr_circle (center ${p.x + 18.607390870623792} ${p.y + -13.51906080272688}) (end ${p.x + 18.607390870623792} ${p.y + -13.51906080272688 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
    (gr_circle (center ${p.x + 15.390003946253744} ${p.y + -17.092330985980063}) (end ${p.x + 15.390003946253744} ${p.y + -17.092330985980063 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill none))
    (gr_circle (center ${p.x + 11.500000000000007} ${p.y + -19.918584287042084}) (end ${p.x + 11.500000000000007} ${p.y + -19.918584287042084 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
    (gr_circle (center ${p.x + 7.107390870623803} ${p.y + -21.87429987478853}) (end ${p.x + 7.107390870623803} ${p.y + -21.87429987478853 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill none))
    (gr_circle (center ${p.x + 2.4041546551560358} ${p.y + -22.874003593470285}) (end ${p.x + 2.4041546551560358} ${p.y + -22.874003593470285 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
    (gr_circle (center ${p.x + -2.4041546551560304} ${p.y + -22.874003593470285}) (end ${p.x + -2.4041546551560304} ${p.y + -22.874003593470285 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill none))
    (gr_circle (center ${p.x + -7.107390870623798} ${p.y + -21.87429987478853}) (end ${p.x + -7.107390870623798} ${p.y + -21.87429987478853 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
    (gr_circle (center ${p.x + -11.500000000000002} ${p.y + -19.918584287042087}) (end ${p.x + -11.500000000000002} ${p.y + -19.918584287042087 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill none))
    (gr_circle (center ${p.x + -15.390003946253739} ${p.y + -17.092330985980066}) (end ${p.x + -15.390003946253739} ${p.y + -17.092330985980066 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
    (gr_circle (center ${p.x + -18.60739087062379} ${p.y + -13.519060802726885}) (end ${p.x + -18.60739087062379} ${p.y + -13.519060802726885 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill none))
    (gr_circle (center ${p.x + -21.011545525779823} ${p.y + -9.354942790743403}) (end ${p.x + -21.011545525779823} ${p.y + -9.354942790743403 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
    (gr_circle (center ${p.x + -22.497394816877527} ${p.y + -4.781968888808475}) (end ${p.x + -22.497394816877527} ${p.y + -4.781968888808475 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill none))
    (gr_circle (center ${p.x + -23.0} ${p.y + -4.225031457058368e-15}) (end ${p.x + -23.0} ${p.y + -4.225031457058368e-15 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
    (gr_circle (center ${p.x + -22.497394816877527} ${p.y + 4.781968888808468}) (end ${p.x + -22.497394816877527} ${p.y + 4.781968888808468 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill none))
    (gr_circle (center ${p.x + -21.011545525779827} ${p.y + 9.354942790743394}) (end ${p.x + -21.011545525779827} ${p.y + 9.354942790743394 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
    (gr_circle (center ${p.x + -18.60739087062378} ${p.y + 13.519060802726894}) (end ${p.x + -18.60739087062378} ${p.y + 13.519060802726894 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill none))
    (gr_circle (center ${p.x + -15.390003946253737} ${p.y + 17.09233098598007}) (end ${p.x + -15.390003946253737} ${p.y + 17.09233098598007 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill solid))
    (gr_circle (center ${p.x + -11.499999999999993} ${p.y + 19.918584287042094}) (end ${p.x + -11.499999999999993} ${p.y + 19.918584287042094 + 1.25}) (layer ${p.layer}) (width ${p.node_thickness}) (fill none))
            (gr_line (start  ${p.x + 12.56501940788842} ${p.y + 19.264482533392567}) (end ${p.x + 14.438807114748608} ${p.y + 17.903096075905}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 16.295754723246606} ${p.y + 16.231092939164203}) (end ${p.x + 17.84554751276375} ${p.y + 14.509873671734411}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 19.31428736149207} ${p.y + 12.488326698069189}) (end ${p.x + 20.47235185203339} ${p.y + 10.482500162010256}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 21.488692961806862} ${p.y + 8.19976065462841}) (end ${p.x + 22.20441617812573} ${p.y + 5.996991094589715}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 22.72393956550153} ${p.y + 3.5528257237632865}) (end ${p.x + 22.966040968623776} ${p.y + 1.2493847395795965}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 22.966040968623776} ${p.y + -1.2493847395795938}) (end ${p.x + 22.72393956550153} ${p.y + -3.552825723763284}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 22.204416178125733} ${p.y + -5.9969910945897125}) (end ${p.x + 21.488692961806866} ${p.y + -8.199760654628408}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 20.472351852033388} ${p.y + -10.482500162010258}) (end ${p.x + 19.314287361492074} ${p.y + -12.488326698069187}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 17.845547512763755} ${p.y + -14.50987367173441}) (end ${p.x + 16.295754723246606} ${p.y + -16.2310929391642}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 14.438807114748611} ${p.y + -17.903096075904994}) (end ${p.x + 12.56501940788843} ${p.y + -19.26448253339256}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 10.401021560735362} ${p.y + -20.51386727297216}) (end ${p.x + 8.285132450752934} ${p.y + -21.455921799668282}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 5.908661454879129} ${p.y + -22.228084033753913}) (end ${p.x + 3.643145449043117} ${p.y + -22.709634326362817}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 1.1580644905413153} ${p.y + -22.970826860079445}) (end ${p.x + -1.15806449054133} ${p.y + -22.970826860079445}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -3.643145449043111} ${p.y + -22.709634326362817}) (end ${p.x + -5.908661454879135} ${p.y + -22.228084033753913}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -8.28513245075292} ${p.y + -21.45592179966829}) (end ${p.x + -10.401021560735366} ${p.y + -20.513867272972156}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -12.565019407888418} ${p.y + -19.26448253339257}) (end ${p.x + -14.438807114748617} ${p.y + -17.903096075904994}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -16.295754723246596} ${p.y + -16.23109293916421}) (end ${p.x + -17.84554751276376} ${p.y + -14.509873671734404}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -19.314287361492063} ${p.y + -12.4883266980692}) (end ${p.x + -20.472351852033395} ${p.y + -10.482500162010243}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -21.488692961806862} ${p.y + -8.199760654628417}) (end ${p.x + -22.204416178125733} ${p.y + -5.9969910945897125}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -22.72393956550153} ${p.y + -3.5528257237632896}) (end ${p.x + -22.966040968623776} ${p.y + -1.2493847395795892}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -22.966040968623776} ${p.y + 1.2493847395795807}) (end ${p.x + -22.72393956550153} ${p.y + 3.552825723763281}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -22.204416178125733} ${p.y + 5.9969910945897045}) (end ${p.x + -21.488692961806862} ${p.y + 8.199760654628408}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -20.472351852033402} ${p.y + 10.482500162010236}) (end ${p.x + -19.314287361492067} ${p.y + 12.488326698069194}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -17.845547512763748} ${p.y + 14.509873671734413}) (end ${p.x + -16.295754723246596} ${p.y + 16.231092939164213}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -14.438807114748613} ${p.y + 17.903096075904994}) (end ${p.x + -12.565019407888407} ${p.y + 19.264482533392577}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 11.113728757031314} ${p.y + 18.72976364167315}) (end ${p.x + -2.017883412187346} ${p.y + -21.685182948101343}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 14.378732703285054} ${p.y + 16.357599420614473}) (end ${p.x + -20.000274282811137} ${p.y + -8.620211225377812}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 17.357390870623792} ${p.y + 13.519060802726882}) (end ${p.x + -17.35739087062378} ${p.y + 13.519060802726894}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 20.625274282811137} ${p.y + 8.166122145374462}) (end ${p.x + 11.886271242968691} ${p.y + -18.72976364167314}) (layer ${p.layer}) (width ${p.edge_thickness}))

            (gr_line (start  ${p.x + 21.988728757031314} ${p.y + -0.7347315653655898}) (end ${p.x + -6.0961196276551135} ${p.y + -21.139568309422938}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 21.24739481687753} ${p.y + -4.78196888880846}) (end ${p.x + -21.247394816877527} ${p.y + -4.781968888808475}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 20.000274282811137} ${p.y + -8.62021122537781}) (end ${p.x + -14.378732703285053} ${p.y + 16.357599420614477}) (layer ${p.layer}) (width ${p.edge_thickness}))

            (gr_line (start  ${p.x + 14.140003946253744} ${p.y + -17.092330985980063}) (end ${p.x + -14.140003946253739} ${p.y + -17.092330985980066}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 6.096119627655119} ${p.y + -21.139568309422938}) (end ${p.x + -21.988728757031314} ${p.y + -0.7347315653655953}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + 2.0178834121873517} ${p.y + -21.685182948101343}) (end ${p.x + -11.113728757031309} ${p.y + 18.729763641673152}) (layer ${p.layer}) (width ${p.edge_thickness}))
            (gr_line (start  ${p.x + -11.886271242968686} ${p.y + -18.729763641673145}) (end ${p.x + -20.62527428281114} ${p.y + 8.166122145374452}) (layer ${p.layer}) (width ${p.edge_thickness}))


     `
    }
}

