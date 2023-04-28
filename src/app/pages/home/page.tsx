import { Modal } from "@/app/components"
import { useToggle } from "@/app/hooks"
import MainLayout from "@/app/layouts/MainLayout"

const HomePage = () => {
  const [isOpen, handleOpen, handleClose] = useToggle()
  return (
    <MainLayout pageTitle="Inicio" className="p-4 pt-0">
      Home page
      <button
        onClick={handleOpen}
        className="bg-black text-white"
      >
        open
      </button>
      <Modal
        overlayClose
        title="Modal"
        isOpen={isOpen}
        onClose={handleClose}
      >
        cositas
      </Modal>
    </MainLayout>
  )
}

export default HomePage
