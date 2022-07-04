import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import styles from '../styles/Modal.module.css'

export default function Modal({ children, open, onClose }: any) {
  useEffect(() => {
    if (!open) document.body.style.overflow = 'overlay'
  }, [open])

  if (!open) return null

  let portalElement = document.getElementById('portal')
  if (!portalElement) {
    portalElement = document.createElement('div')
    portalElement.setAttribute('id', 'portal')
    document.body.appendChild(portalElement)
  }

  document.body.style.overflow = 'hidden'

  return createPortal(
    <>
      <div className={styles.overlay} onClick={onClose} />
      {children}
    </>,
    portalElement
  )
}
