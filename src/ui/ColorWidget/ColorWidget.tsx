import React, { useState } from "react"
import "./ColorWidget.css"

function HexToRgb (colorHex: string) {
  let colorRgb: Array<Number> = []
  for (let i=1; i <= 6; i+=2) {
    console.log(i)
    colorRgb.push(parseInt(colorHex.slice(i, i+2), 16))
  }
  return colorRgb.join(', ')
}

export const ColorWidget = () => {
    const [colorRGB, setColor] = useState<number | string>("Error!")
    const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      const {value} = e.target
      if (value.length === 7 && value.slice(0, 1) === "#") {
        setColor(HexToRgb(value))
      }
      else {
        setColor("Error!")
      }
    }
  return (<div className="container" style={{backgroundColor: `rgb(${colorRGB === "Error!" ? "255, 255, 255" : colorRGB})`}}>
    <form>
        <label htmlFor="hex" className="text main--text">Введите HEX</label>
        <input type="text" id="hex" name="hex" onChange={handler} className="input"/>
        <div className="text">rgb({colorRGB})</div>
    </form>
    </div>
    
  )
}
