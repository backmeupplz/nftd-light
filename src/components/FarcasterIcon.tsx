import classnames, { fill, height, width } from 'classnames/tailwind'

const icon = classnames(fill('fill-white'), width('w-4'), height('h-4'))
export default function () {
  return (
    <svg
      className={icon}
      xmlns="http://www.w3.org/2000/svg"
      width="30.27px"
      height="28.2px"
      viewBox="0 0 30.27 28.2"
    >
      <path d="M29.26,26.18v-1.01c0-0.56-0.45-1.01-1.01-1.01V8.07h1.01l1.01-4.04h-5.04V0H5.05v4.04H0l1.01,4.04h1.01v16.09 c-0.56,0-1.01,0.45-1.01,1.01v1.01C0.45,26.18,0,26.63,0,27.19v1.01h10.09v-1.01c0-0.56-0.45-1.01-1.01-1.01v-1.01 c0-0.56-0.45-1.01-1.01-1.01v-8.1c0-3.9,3.16-7.06,7.06-7.06s7.06,3.16,7.06,7.06v8.1h0c-0.56,0-1.01,0.45-1.01,1.01v1.01 c-0.56,0-1.01,0.45-1.01,1.01v1.01h10.09v-1.01C30.27,26.63,29.82,26.18,29.26,26.18z"></path>
    </svg>
  )
}
