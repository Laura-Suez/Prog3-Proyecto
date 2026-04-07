import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DeleteModal from "../DeleteModal/DeleteModal";

const BookItem = ({
  id,
  title,
  author,
  rating,
  pageCount,
  imageUrl,
  available,
  onDelete,
}) => {
  const [bookTitle, setBookTitle] = useState(title);

  // Estado para controlar la visibilidad del Modal
  const [showModal, setShowModal] = useState(false);

  // Funciones de control
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleConfirmDelete = () => {
    console.log(`Eliminando: ${bookTitle}`);
    onDelete(id);
    handleCloseModal();
    setShowModal(false);
  };

  const handleChangeTitle = () => {
    setBookTitle("Actualizado!");
  };

  return (
    <>
      <Card className="mx-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{bookTitle}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
          <div>
            <div>{rating} estrellas</div>
            <p>{pageCount} páginas</p>
            <p>{available ? "Disponible" : "Reservado"}</p>
          </div>
          <Button
            variant="outline-dark"
            className="me-2"
            onClick={handleChangeTitle}
          >
            Cambiar título
          </Button>
          <Button variant="danger" onClick={handleOpenModal}>
            ELIMINAR
          </Button>
        </Card.Body>
      </Card>

      {/* Renderizamos el Modal fuera de la Card y le pasamos las funciones */}
      <DeleteModal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmDelete}
        bookTitle={bookTitle}
      />
    </>
  );
};

export default BookItem;
