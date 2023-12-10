// EC11 rotary encoder
//
// Nets
//    from: corresponds to switch pin 1 (for button presses)
//    to: corresponds to switch pin 2 (for button presses)
//    A: corresponds to pin 1 (for rotary)
//    B: corresponds to pin 2 (for rotary, should be GND)
//    C: corresponds to pin 3 (for rotary)

module.exports = {
    params: {
        designator: 'ROT',
        A: undefined,
        B: undefined,
        S: undefined,
        V: undefined,
        G: undefined
    },
    body: p => `
        (module rotary_encoder (layer F.Cu) (tedit 603326DE)

            ${p.at /* parametric position */}

            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0.5) (layer F.SilkS)
                ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
            (fp_text value "" (at 0 8.89) (layer F.Fab)
                (effects (font (size 1 1) (thickness 0.15))))

            ${''/* component outline */}
            (fp_line (start -0.62 -0.04) (end 0.38 -0.04) (layer F.SilkS) (width 0.12))
            (fp_line (start -0.12 -0.54) (end -0.12 0.46) (layer F.SilkS) (width 0.12))
            (fp_line (start 5.98 3.26) (end 5.98 5.86) (layer F.SilkS) (width 0.12))
            (fp_line (start 5.98 -1.34) (end 5.98 1.26) (layer F.SilkS) (width 0.12))
            (fp_line (start 5.98 -5.94) (end 5.98 -3.34) (layer F.SilkS) (width 0.12))
            (fp_line (start -3.12 -0.04) (end 2.88 -0.04) (layer F.Fab) (width 0.12))
            (fp_line (start -0.12 -3.04) (end -0.12 2.96) (layer F.Fab) (width 0.12))
            (fp_line (start -7.32 -4.14) (end -7.62 -3.84) (layer F.SilkS) (width 0.12))
            (fp_line (start -7.92 -4.14) (end -7.32 -4.14) (layer F.SilkS) (width 0.12))
            (fp_line (start -7.62 -3.84) (end -7.92 -4.14) (layer F.SilkS) (width 0.12))
            (fp_line (start -6.22 -5.84) (end -6.22 5.86) (layer F.SilkS) (width 0.12))
            (fp_line (start -2.12 -5.84) (end -6.22 -5.84) (layer F.SilkS) (width 0.12))
            (fp_line (start -2.12 5.86) (end -6.22 5.86) (layer F.SilkS) (width 0.12))
            (fp_line (start 5.98 5.86) (end 1.88 5.86) (layer F.SilkS) (width 0.12))
            (fp_line (start 1.88 -5.94) (end 5.98 -5.94) (layer F.SilkS) (width 0.12))
            (fp_line (start -6.12 -4.74) (end -5.12 -5.84) (layer F.Fab) (width 0.12))
            (fp_line (start -6.12 5.76) (end -6.12 -4.74) (layer F.Fab) (width 0.12))
            (fp_line (start 5.88 5.76) (end -6.12 5.76) (layer F.Fab) (width 0.12))
            (fp_line (start 5.88 -5.84) (end 5.88 5.76) (layer F.Fab) (width 0.12))
            (fp_line (start -5.12 -5.84) (end 5.88 -5.84) (layer F.Fab) (width 0.12))
            (fp_line (start -8.88 -7.89) (end 11.88 -7.39) (layer F.CrtYd) (width 0.05))
            (fp_line (start -8.88 -7.89) (end -8.88 10.81) (layer F.CrtYd) (width 0.05))
            (fp_line (start 11.88 10.81) (end 11.88 -7.39) (layer F.CrtYd) (width 0.05))
            (fp_line (start 11.88 10.81) (end -8.88 10.81) (layer F.CrtYd) (width 0.05))
            (fp_circle (center -0.12 -0.04) (end 2.88 -0.04) (layer F.SilkS) (width 0.12))
            (fp_circle (center -0.12 -0.04) (end 2.88 -0.04) (layer F.Fab) (width 0.12))

            ${''/* pin names */}
            (pad A thru_hole circle (at 10 -5.08) (size 2 2) (drill 1) (layers *.Cu *.Mask) ${p.A.str})
            (pad B thru_hole circle (at 10 -2.54) (size 2 2) (drill 1) (layers *.Cu *.Mask) ${p.B.str})
            (pad S thru_hole circle (at 10 0)     (size 2 2) (drill 1) (layers *.Cu *.Mask) ${p.S.str})
            (pad 1 thru_hole circle (at 10 2.54)  (size 2 2) (drill 1) (layers *.Cu *.Mask) ${p.V.str})
            (pad 2 thru_hole rect   (at 10 5.08)  (size 1.75 1.75) (drill 1) (layers *.Cu *.Mask) ${p.G.str})

            ${''/* Legs */}
            (pad "" thru_hole circle (at -5.8  8 ${p.rot}) (size 3.2 2) (drill 2.8 ) (layers *.Cu *.Mask))
            (pad "" thru_hole circle (at  9 8 ${p.rot}) (size 3.2 2) (drill 2.8 ) (layers *.Cu *.Mask))
        )
    `
}
