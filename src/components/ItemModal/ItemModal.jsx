import "./ItemModal.css";

function ItemModal({ activeModal, card, handleCloseModal, handleItemDelete }) {
  const deleteCard = () => {
    handleItemDelete(card);
  };
  return (
    <div className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleCloseModal}
          type="button"
          className="modal__close"
        ></button>
        <img
          src={card.imageUrl}
          className="modal__image"
          alt="card Image"
        ></img>
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button className="modal__delete" onClick={deleteCard}>
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
