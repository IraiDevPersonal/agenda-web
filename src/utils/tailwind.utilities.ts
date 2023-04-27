const POSITION_MAP = {
  top: "bottom-[110%] left-0 origin-bottom",
  bottom: "top-[110%] left-0 origin-top",
  "left-bottom": "right-[102%] top-10 origin-top-right",
  "right-bottom": "left-[102%] top-10 origin-top-left",
  "left-top": "right-[102%] bottom-10 origin-bottom-right",
  "right-top": "left-[102%] bottom-10 origin-bottom-left"
}

export type TwPositionEl = keyof typeof POSITION_MAP

export function twCn(array: string[]): string {
  return array.join(" ")
}

export function positionEl(position: TwPositionEl): string {
  return POSITION_MAP[position]
}
