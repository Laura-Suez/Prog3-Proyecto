import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BookItem = ({ title, author, rating, pageCount, imageUrl, available }) => {
    return (
        <>
            <Card className="mx-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{author}</Card.Subtitle>
                    <div>
                        <div>{rating} estrellas</div>
                        <p>{pageCount} páginas</p>
                        <p>{available ? "Disponible" : "Reservado"}</p>
                    </div>
                    <Button variant="dark">Cambiar titulo</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default BookItem