// Params
module.exports = {
    params: {
      designator: 'USBB',
      P1:  {type: 'net', value: 'P1'},
      P2:  {type: 'net', value: 'P2'},
      P3:  {type: 'net', value: 'P3'},
      P4:  {type: 'net', value: 'P4'},
      PA:  {type: 'net', value: 'GND'}
    },
    body: p => {
      const standard = `
        (module USB_B_OST_USB-B1HSxx_Horizontal (layer F.Cu) (tedit 5AFE01FF)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 6.76 -7.77) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1 1) (thickness 0.15))))

        ${''/* component outline */}
        (fp_line (start -0.49 -4.8) (end 15.01 -4.8) (layer F.SilkS) (width 0.1))
        (fp_line (start 15.01 -4.8) (end 15.01 7.3) (layer F.SilkS) (width 0.1))
        (fp_line (start 15.01 7.3) (end -1.49 7.3) (layer F.SilkS) (width 0.1))
        (fp_line (start -1.49 7.3) (end -1.49 -3.8) (layer F.SilkS) (width 0.1))
        (fp_line (start -1.49 -3.8) (end -0.49 -4.8) (layer F.SilkS) (width 0.1))
        (fp_line (start 2.66 -4.91) (end -1.6 -4.91) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.6 -4.91) (end -1.6 7.41) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.6 7.41) (end 2.66 7.41) (layer F.SilkS) (width 0.12))
        (fp_line (start 6.76 -4.91) (end 15.12 -4.91) (layer F.SilkS) (width 0.12))
        (fp_line (start 15.12 -4.91) (end 15.12 7.41) (layer F.SilkS) (width 0.12))
        (fp_line (start 15.12 7.41) (end 6.76 7.41) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.82 0) (end -2.32 -0.5) (layer F.SilkS) (width 0.12))
        (fp_line (start -2.32 -0.5) (end -2.32 0.5) (layer F.SilkS) (width 0.12))
        (fp_line (start -2.32 0.5) (end -1.82 0) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.99 -7.02) (end -1.99 9.52) (layer F.SilkS) (width 0.05))
        (fp_line (start -1.99 9.52) (end 15.51 9.52) (layer F.SilkS) (width 0.05))
        (fp_line (start 15.51 9.52) (end 15.51 -7.02) (layer F.SilkS) (width 0.05))
        (fp_line (start 15.51 -7.02) (end -1.99 -7.02) (layer F.SilkS) (width 0.05))
        `
      function pins() {
        return `
          ${''/* and now the actual pins */}
          (pad 1 thru_hole rect (at 0 0)     (size 1.5 1.5) (drill 0.92) (layers *.Cu *.SilkS *.Mask)  ${p.P1.str})
          (pad 2 thru_hole circle (at 0 2.5) (size 1.7 1.7) (drill 0.92) (layers *.Cu *.SilkS *.Mask)  ${p.P2.str})
          (pad 3 thru_hole circle (at 2 2.5) (size 1.7 1.7) (drill 0.92) (layers *.Cu *.SilkS *.Mask)  ${p.P3.str})
          (pad 4 thru_hole circle (at 2 0)   (size 1.7 1.7) (drill 0.92) (layers *.Cu *.SilkS *.Mask)  ${p.P4.str})
          (pad A thru_hole circle (at 4.71 -4.77) (size 3.5 3.5) (drill 2.33) (layers *.Cu *.SilkS *.Mask)  ${p.PA.str})
          (pad 0 thru_hole circle (at 4.71 7.27)  (size 3.5 3.5) (drill 2.33) (layers *.Cu *.SilkS *.Mask)  ${p.PA.str})
        `
      }
    return `
        ${standard}
        ${pins()})
        `
    }
  }
