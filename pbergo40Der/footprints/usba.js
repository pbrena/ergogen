// Params
module.exports = {
    params: {
      designator: 'USBA',
      P1:  {type: 'net', value: 'P1'},
      P2:  {type: 'net', value: 'P2'},
      P3:  {type: 'net', value: 'P3'},
      P4:  {type: 'net', value: 'P4'},
      PA:  {type: 'net', value: 'GND'}
    },
    body: p => {
      const standard = `
        (module USB_A_CONNFLY_DS1095-WNR0 (layer F.Cu) (tedit 5E39FFBD)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at -1.95 -2.35) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1 1) (thickness 0.15))))

        ${''/* component outline */}
        (fp_line (start -3.75 -0.13) (end -3.75 12.99) (layer F.SilkS) (width 0.1))
        (fp_line (start 10.75 -1.01) (end 10.75 12.99) (layer F.SilkS) (width 0.1))
        (fp_line (start -2.87 -1.01) (end 10.75 -1.01) (layer F.SilkS) (width 0.1))
        (fp_line (start -3.75 12.99) (end 10.75 12.99) (layer F.SilkS) (width 0.1))
        (fp_text user %R (at 3.5 5) (layer F.SilkS) (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -2.87 -1.01) (end -3.75 -0.13) (layer F.SilkS) (width 0.1))
        (fp_line (start -5.32 -1.51) (end -5.32 13.49) (layer F.SilkS) (width 0.05))
        (fp_line (start 12.32 13.49) (end -5.32 13.49) (layer F.SilkS) (width 0.05))
        (fp_line (start 12.32 -1.51) (end 12.32 13.49) (layer F.SilkS) (width 0.05))
        (fp_line (start -5.32 -1.51) (end 12.32 -1.51) (layer F.SilkS) (width 0.05))
        (fp_line (start -3.86 4.56) (end -3.86 13.1) (layer F.SilkS) (width 0.12))
        (fp_line (start -3.86 13.1) (end 10.86 13.1) (layer F.SilkS) (width 0.12))
        (fp_line (start 10.86 4.56) (end 10.86 13.1) (layer F.SilkS) (width 0.12))
        (fp_line (start -3.86 -1.12) (end 10.86 -1.12) (layer F.SilkS) (width 0.12))
        (fp_line (start -3.86 -1.12) (end -3.86 0.86) (layer F.SilkS) (width 0.12))
        (fp_line (start 10.86 0.86) (end 10.86 -1.12) (layer F.SilkS) (width 0.12))
        (fp_line (start -0.5 -2) (end 0 -1.5) (layer F.SilkS) (width 0.12))
        (fp_line (start 0 -1.5) (end 0.5 -2) (layer F.SilkS) (width 0.12))
        (fp_line (start 0.5 -2) (end -0.5 -2) (layer F.SilkS) (width 0.12))
        `
      function pins() {
        return `
          ${''/* and now the actual pins */}
          (pad 1 thru_hole rect   (at 0 0)   (size 1.524 1.524) (drill 0.92) (layers *.Cu *.SilkS *.Mask) ${p.P1.str})
          (pad 2 thru_hole circle (at 2.5 0) (size 1.524 1.524) (drill 0.92) (layers *.Cu *.SilkS *.Mask) ${p.P2.str})
          (pad 3 thru_hole circle (at 4.5 0) (size 1.524 1.524) (drill 0.92) (layers *.Cu *.SilkS *.Mask) ${p.P3.str})
          (pad 4 thru_hole circle (at 7 0)   (size 1.524 1.524) (drill 0.92) (layers *.Cu *.SilkS *.Mask) ${p.P4.str})
          (pad A thru_hole circle (at 10.07 2.71) (size 3.5 3.5) (drill 2.3) (layers *.Cu *.SilkS *.Mask) ${p.PA.str})
          (pad 0 thru_hole circle (at -3.07 2.71) (size 3.5 3.5) (drill 2.3) (layers *.Cu *.SilkS *.Mask) ${p.PA.str})
        `
      }
    return `
        ${standard}
        ${pins()})
        `
    }
  }
