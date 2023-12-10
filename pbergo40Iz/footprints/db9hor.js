// Params
module.exports = {
    params: {
      designator: 'DB9',
      P1:  {type: 'net', value: 'P1'},
      P2:  {type: 'net', value: 'P2'},
      P3:  {type: 'net', value: 'P3'},
      P4:  {type: 'net', value: 'P4'},
      P5:  {type: 'net', value: 'P5'},
      P6:  {type: 'net', value: 'P6'},
      P7:  {type: 'net', value: 'P7'},
      P8:  {type: 'net', value: 'P8'},
      P9:  {type: 'net', value: 'P9'},
      PA:  {type: 'net', value: 'PA'},
	  P0a: {type: 'net', value: 'PA'}
    },
    body: p => {
      const standard = `
        (module DSUB-9_Female_Horizontal_P2.77x2.84mm_EdgePinOffset4.94mm_Housed_MountingHolesOffset7.48mm (layer F.Cu) (tedit 59FEDEE2)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at -5.54 -3.7) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1 1) (thickness 0.15))))

        ${''/* component outline */}
        (fp_arc (start -18.04 0.3) (end -19.64 0.3) (angle 180.000000) (layer  F.SilkS) (width 0.1))
        (fp_arc (start 6.96 0.3) (end 5.36 0.3) (angle 180.000000) (layer  F.SilkS) (width 0.1))
        (fp_line (start -20.965 -2.7) (end -20.965 7.78) (layer  F.SilkS) (width 0.1))
        (fp_line (start -20.965 7.78) (end 9.885 7.78) (layer  F.SilkS) (width 0.1))
        (fp_line (start 9.885 7.78) (end 9.885 -2.7) (layer  F.SilkS) (width 0.1))
        (fp_line (start 9.885 -2.7) (end -20.965 -2.7) (layer  F.SilkS) (width 0.1))
        (fp_line (start -20.965 7.78) (end -20.965 8.18) (layer  F.SilkS) (width 0.1))
        (fp_line (start -20.965 8.18) (end 9.885 8.18) (layer  F.SilkS) (width 0.1))
        (fp_line (start 9.885 8.18) (end 9.885 7.78) (layer  F.SilkS) (width 0.1))
        (fp_line (start 9.885 7.78) (end -20.965 7.78) (layer  F.SilkS) (width 0.1))
        (fp_line (start -13.69 8.18) (end -13.69 14.35) (layer  F.SilkS) (width 0.1))
        (fp_line (start -13.69 14.35) (end 2.61 14.35) (layer  F.SilkS) (width 0.1))
        (fp_line (start 2.61 14.35) (end 2.61 8.18) (layer  F.SilkS) (width 0.1))
        (fp_line (start 2.61 8.18) (end -13.69 8.18) (layer  F.SilkS) (width 0.1))
        (fp_line (start -20.54 8.18) (end -20.54 13.18) (layer  F.SilkS) (width 0.1))
        (fp_line (start -20.54 13.18) (end -15.54 13.18) (layer  F.SilkS) (width 0.1))
        (fp_line (start -15.54 13.18) (end -15.54 8.18) (layer  F.SilkS) (width 0.1))
        (fp_line (start -15.54 8.18) (end -20.54 8.18) (layer  F.SilkS) (width 0.1))
        (fp_line (start 4.46 8.18) (end 4.46 13.18) (layer  F.SilkS) (width 0.1))
        (fp_line (start 4.46 13.18) (end 9.46 13.18) (layer  F.SilkS) (width 0.1))
        (fp_line (start 9.46 13.18) (end 9.46 8.18) (layer  F.SilkS) (width 0.1))
        (fp_line (start 9.46 8.18) (end 4.46 8.18) (layer  F.SilkS) (width 0.1))
        (fp_line (start -19.64 7.78) (end -19.64 0.3) (layer  F.SilkS) (width 0.1))
        (fp_line (start -16.44 7.78) (end -16.44 0.3) (layer  F.SilkS) (width 0.1))
        (fp_line (start 5.36 7.78) (end 5.36 0.3) (layer  F.SilkS) (width 0.1))
        (fp_line (start 8.56 7.78) (end 8.56 0.3) (layer  F.SilkS) (width 0.1))
        (fp_line (start -21.025 7.72) (end -21.025 -2.76) (layer F.SilkS) (width 0.12))
        (fp_line (start -21.025 -2.76) (end 9.945 -2.76) (layer F.SilkS) (width 0.12))
        (fp_line (start 9.945 -2.76) (end 9.945 7.72) (layer F.SilkS) (width 0.12))
        (fp_line (start -0.25 -3.654338) (end 0.25 -3.654338) (layer F.SilkS) (width 0.12))
        (fp_line (start 0.25 -3.654338) (end 0 -3.221325) (layer F.SilkS) (width 0.12))
        (fp_line (start 0 -3.221325) (end -0.25 -3.654338) (layer F.SilkS) (width 0.12))
        (fp_line (start -21.5 -3.25) (end -21.5 14.85) (layer F.SilkS) (width 0.05))
        (fp_line (start -21.5 14.85) (end 10.4 14.85) (layer F.SilkS) (width 0.05))
        (fp_line (start 10.4 14.85) (end 10.4 -3.25) (layer F.SilkS) (width 0.05))
        (fp_line (start 10.4 -3.25) (end -21.5 -3.25) (layer F.SilkS) (width 0.05))
        `
      function pins() {
        return `
          ${''/* and now the actual pins */}
          (pad 1 thru_hole rect   (at 0 0) (size 1.6 1.6) (drill 1) (layers *.Cu *.SilkS *.Mask) ${p.P1.str})
          (pad 2 thru_hole circle (at -2.77 0) (size 1.6 1.6) (drill 1) (layers *.Cu *.SilkS *.Mask) ${p.P2.str})
          (pad 3 thru_hole circle (at -5.54 0) (size 1.6 1.6) (drill 1) (layers *.Cu *.SilkS *.Mask) ${p.P3.str})
          (pad 4 thru_hole circle (at -8.31 0) (size 1.6 1.6) (drill 1) (layers *.Cu *.SilkS *.Mask) ${p.P4.str})
          (pad 5 thru_hole circle (at -11.08 0) (size 1.6 1.6) (drill 1) (layers *.Cu *.SilkS *.Mask) ${p.P5.str})
          (pad 6 thru_hole circle (at -1.385 2.84) (size 1.6 1.6) (drill 1) (layers *.Cu *.SilkS *.Mask) ${p.P6.str})
          (pad 7 thru_hole circle (at -4.155 2.84) (size 1.6 1.6) (drill 1) (layers *.Cu *.SilkS *.Mask) ${p.P7.str})
          (pad 8 thru_hole circle (at -6.925 2.84) (size 1.6 1.6) (drill 1) (layers *.Cu *.SilkS *.Mask) ${p.P8.str})
          (pad 9 thru_hole circle (at -9.695 2.84) (size 1.6 1.6) (drill 1) (layers *.Cu *.SilkS *.Mask) ${p.P9.str})
          (pad A thru_hole circle (at -18.04 0.3) (size 4 4) (drill 3.2) (layers *.Cu *.SilkS *.Mask) ${p.PA.str})
          (pad 0 thru_hole rect (at 6.96 0.3) (size 4 4) (drill 3.2) (layers *.Cu *.SilkS *.Mask) ${p.PA.str})
        `
      }
    return `
        ${standard}
        ${pins()})
        `
    }
  }
