export interface ModalProps {
  text?: string
  show: boolean
  onClose?: () => void
  onConfirm?: () => void
}
