// Raspberry Pi Pico
// Params

module.exports = {
  params: {
    designator: 'MCU',
    GP0: {type: 'net', value: 'GP0'},
    GP1: {type: 'net', value: 'GP1'},
    GP2: {type: 'net', value: 'GP2'},
    GP3: {type: 'net', value: 'GP3'},
    GP4: {type: 'net', value: 'GP4'},
    GP5: {type: 'net', value: 'GP5'},
    GP9: {type: 'net', value: 'GP9'},
    GP10: {type: 'net', value: 'GP10'},
    GP11: {type: 'net', value: 'GP11'},
    GP12: {type: 'net', value: 'GP12'},
    GP13: {type: 'net', value: 'GP13'},
    GP14: {type: 'net', value: 'GP14'},
    GP15: {type: 'net', value: 'GP15'},
    GP16: {type: 'net', value: 'GP16'},
    GP17: {type: 'net', value: 'GP17'},
    GP18: {type: 'net', value: 'GP18'},
    GP19: {type: 'net', value: 'GP19'},
    GP20: {type: 'net', value: 'GP20'},
    GP21: {type: 'net', value: 'GP21'},
    GP22: {type: 'net', value: 'GP22'},
    GP26: {type: 'net', value: 'GP26'},
    GP27: {type: 'net', value: 'GP27'},
    GP28: {type: 'net', value: 'GP28'},
    GND:  {type: 'net', value: 'GND'},
    V3:   {type: 'net', value: 'V3'},
    VBUS: {type: 'net', value: 'VBUS'},
    tp1jpr: {type: 'net', value: 'GND'},
    tp2jpr: {type: 'net', value: 'usbDM'},
    tp3jpr: {type: 'net', value: 'usbDP'}
  },
  body: p => {
    const standard = `
      (module RPi_Pico_SMD_THver20211014 (layer F.Cu) (tedit 6224DF39)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1 1) (thickness 0.15))))
      ${''/* component outline */}
      (fp_line (start 10.5 4.9) (end 10.5 5.3) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -23.1) (end -10.5 -22.7) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -20.5) (end -10.5 -20.1) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 10) (end 10.5 10.4) (layer F.SilkS) (width 0.15))
      (fp_line (start -3.7 25.5) (end -10.5 25.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 -0.2) (end 10.5 0.2) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 22.7) (end 10.5 23.1) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 -23.1) (end 10.5 -22.7) (layer F.SilkS) (width 0.15))
      (fp_line (start -7.493 -22.833) (end -7.493 -25.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 -5.3) (end 10.5 -4.9) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 20.1) (end -10.5 20.5) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -2.7) (end -10.5 -2.3) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 22.7) (end -10.5 23.1) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -15.4) (end -10.5 -15) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -5.3) (end -10.5 -4.9) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 -2.7) (end 10.5 -2.3) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 25.5) (end 3.7 25.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 -15.4) (end 10.5 -15) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 7.4) (end -10.5 7.8) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -22.833) (end -7.493 -22.833) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -7.8) (end -10.5 -7.4) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 4.9) (end -10.5 5.3) (layer F.SilkS) (width 0.15))
      (fp_line (start -1.5 25.5) (end -1.1 25.5) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -12.9) (end -10.5 -12.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 -20.5) (end 10.5 -20.1) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 15.1) (end -10.5 15.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 1.1 25.5) (end 1.5 25.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 -12.9) (end 10.5 -12.5) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 10) (end -10.5 10.4) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 2.3) (end 10.5 2.7) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -10.4) (end -10.5 -10) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -0.2) (end -10.5 0.2) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 17.6) (end -10.5 18) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 12.5) (end -10.5 12.9) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 7.4) (end 10.5 7.8) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 -10.4) (end 10.5 -10) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 17.6) (end 10.5 18) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 -7.8) (end 10.5 -7.4) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -25.5) (end -10.5 -25.2) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 20.1) (end 10.5 20.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 12.5) (end 10.5 12.9) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 -18) (end 10.5 -17.6) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 2.3) (end -10.5 2.7) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 -25.5) (end 10.5 -25.2) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -18) (end -10.5 -17.6) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 15.1) (end 10.5 15.5) (layer F.SilkS) (width 0.15))
      (fp_poly (pts
        (xy -1.5 -16.5)
        (xy -3.5 -16.5)
        (xy -3.5 -18.5)
        (xy -1.5 -18.5)
      ) (layer F.SilkS) (width 0.15) (fill solid))
      (fp_poly (pts
        (xy -1.5 -11.5)
        (xy -3.5 -11.5)
        (xy -3.5 -13.5)
        (xy -1.5 -13.5)
      ) (layer F.SilkS) (width 0.15) (fill solid))
      (fp_poly (pts
        (xy 3.7 -20.2)
        (xy -3.7 -20.2)
        (xy -3.7 -24.9)
        (xy 3.7 -24.9)
        ) (layer F.SilkS) (width 0.15) (fill solid))
      (fp_poly (pts
        (xy -1.5 -14)
        (xy -3.5 -14)
        (xy -3.5 -16)
        (xy -1.5 -16)
      ) (layer F.SilkS) (width 0.15) (fill solid))
      (fp_line (start 11 -26) (end 11 26) (layer F.SilkS) (width 0.15))
      (fp_line (start 11 26) (end -11 26) (layer F.SilkS) (width 0.15))
      (fp_line (start -11 -26) (end 11 -26) (layer F.SilkS) (width 0.15))
      (fp_line (start -11 26) (end -11 -26) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -24.2) (end -9.2 -25.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 -25.5) (end 10.5 25.5) (layer F.SilkS) (width 0.15))
      (fp_line (start 10.5 25.5) (end -10.5 25.5) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (layer F.SilkS) (width 0.15))
      (fp_line (start -10.5 25.5) (end -10.5 -25.5) (layer F.SilkS) (width 0.15))
      `
    function pins() {
      return `
        ${''/* and now the actual pins */}
        (pad "USBPadWindow" thru_hole rect (at 0 -22.5) (size 1.8 1.8) (drill 8.5) (layers *.Cu *.SilkS *.Mask) )
        (pad "" np_thru_hole oval (at 2.725 -24) (size 1.8 1.8) (drill 1.8) (layers *.Cu *.SilkS *.Mask) )
        (pad "" np_thru_hole oval (at -2.725 -24) (size 1.8 1.8) (drill 1.8) (layers *.Cu *.SilkS *.Mask) )
        (pad "" np_thru_hole oval (at -2.425 -20.97) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.SilkS *.Mask) )
        (pad "" np_thru_hole oval (at 2.425 -20.97) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.SilkS *.Mask) )
        (pad "tp1jpr" smd rect (at  1 -17)    (size 2 2) (layers *.Cu *.SilkS *.Mask) ${p.tp1jpr.str})
        (pad "tp2jpr" smd rect (at  6 -22.13) (size 2 2) (layers *.Cu *.SilkS *.Mask) ${p.tp2jpr.str})
        (pad "tp3jpr" smd rect (at -6 -22.13) (size 2 2) (layers *.Cu *.SilkS *.Mask) ${p.tp3jpr.str})
        (pad "1" thru_hole oval (at -8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP0.str})
        (pad "2" thru_hole oval (at -8.89 -21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP1.str})
        (pad "3" thru_hole rect (at -8.89 -19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad "4" thru_hole oval (at -8.89 -16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP2.str})
        (pad "5" thru_hole oval (at -8.89 -13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask)  ${p.GP3.str})
        (pad "6" thru_hole oval (at -8.89 -11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP4.str})
        (pad "7" thru_hole oval (at -8.89 -8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask)  ${p.GP5.str})
        (pad "8" thru_hole rect (at -8.89 -6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad "12" thru_hole oval (at -8.89 3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP9.str})
        (pad "13" thru_hole rect (at -8.89 6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad "14" thru_hole oval (at -8.89 8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP10.str})
        (pad "15" thru_hole oval (at -8.89 11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP11.str})
        (pad "16" thru_hole oval (at -8.89 13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP12.str})
        (pad "17" thru_hole oval (at -8.89 16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP13.str})
        (pad "18" thru_hole rect (at -8.89 19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad "19" thru_hole oval (at -8.89 21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP14.str})
        (pad "20" thru_hole oval (at -8.89 24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP15.str})
        (pad "21" thru_hole oval (at 8.89 24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP16.str})
        (pad "22" thru_hole oval (at 8.89 21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask)  ${p.GP17.str})
        (pad "23" thru_hole rect (at 8.89 19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad "24" thru_hole oval (at 8.89 16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP18.str})
        (pad "25" thru_hole oval (at 8.89 13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP19.str})
        (pad "26" thru_hole oval (at 8.89 11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP20.str})
        (pad "27" thru_hole oval (at 8.89 8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask)  ${p.GP21.str})
        (pad "28" thru_hole rect (at 8.89 6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad "29" thru_hole oval (at 8.89 3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP22.str})
        (pad "31" thru_hole oval (at 8.89 -1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP26.str})
        (pad "32" thru_hole oval (at 8.89 -3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP27.str})
        (pad "33" thru_hole rect (at 8.89 -6.35) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad "34" thru_hole oval (at 8.89 -8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GP28.str})
        (pad "36" thru_hole oval (at 8.89 -13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.V3.str})
        (pad "38" thru_hole rect (at 8.89 -19.05) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad "40" thru_hole oval (at 8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.SilkS *.Mask) ${p.VBUS.str})
        `
    }
    return `
        ${standard}
        ${pins()})
        `
  }
}
