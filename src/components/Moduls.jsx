import "../assets/css/moduls.css"
import { useRef, useEffect } from "react"

export default function Moduls({ modal, setModal, title, value }) {
    const elDverlay = useRef(null)

    const closeModalDeverlay = (evt) => {
        if (evt.target === elDverlay.current) {
            setModal(false)
        }
    }

    useEffect(() => {
        const closeModal = (evt) => {
            if (evt.key === "Escape") {
                setModal(false)
            }
        }

        if (modal) {
            window.addEventListener("keyup", closeModal)
        }

        return () => {
            window.removeEventListener("keyup", closeModal)
        }
    }, [modal])

    return (
        <div
            ref={elDverlay}
            onClick={closeModalDeverlay}
            className={`overlay ${modal ? "" : "overlay_none"}`}
        >
            <div className="modal_bg">
                <div className="modal_header">
                    <h1>{title}</h1>
                    <button onClick={() => setModal(false)}>&times;</button>
                </div>

                <h2>{value}</h2>
                <hr />

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa unde cum itaque sit aliquid possimus quasi animi, illo exercitationem, voluptas adipisci. Animi minus, dicta quia maiores at pariatur ullam veritatis!</p>
            </div>
        </div>
    )
}