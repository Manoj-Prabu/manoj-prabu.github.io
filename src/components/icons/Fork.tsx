import React from 'react'

type propsType = {
  label: string
  url: string
}

function Fork({ label, url }: propsType) {
  return (<a
    href={url}
    target='_blank'
    rel="noreferrer"
    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
    <svg
      fill="#fff"
      width="12px"
      height="12px"
      viewBox="-4 -2 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin"
      className="jam jam-fork">
      <path d='M8 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm1.033-3.817A3.001 3.001 0 1 1 7 14.17v-1.047c0-.074.003-.148.008-.221a1 1 0 0 0-.462-.637L3.46 10.42A3 3 0 0 1 2 7.845V5.829a3.001 3.001 0 1 1 2 0v2.016a1 1 0 0 0 .487.858l3.086 1.846a3 3 0 0 1 .443.324 3 3 0 0 1 .444-.324l3.086-1.846a1 1 0 0 0 .487-.858V5.841A3.001 3.001 0 0 1 13 0a3 3 0 0 1 1.033 5.817v2.028a3 3 0 0 1-1.46 2.575l-3.086 1.846a1 1 0 0 0-.462.637c.005.073.008.147.008.22v1.06zM3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
    </svg>
    <span style={{ paddingLeft: '5px' }}>{label}</span>
  </a>
  )
}

export default Fork
