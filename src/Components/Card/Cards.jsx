import Card from "./Card";

const Cards = ({ cuentosFiltrados, agregarCuentoFavorito, handleDetallesAutor }) => {
  return (
    <div className="space-y-6">
      {cuentosFiltrados
        .filter(
          (cuento) =>
            cuento.idCuento &&
            cuento.idAutor &&
            cuento.titulo &&
            cuento.cuento &&
            cuento.imagen
        )
        .map((cuento) => (
          <Card
            key={cuento.idCuento}
            title={cuento.titulo}
            text={cuento.cuento}
            image={cuento.imagen}
            onClickFav={() => agregarCuentoFavorito(cuento)}
            onDetails={() => handleDetallesAutor(cuento.idAutor)}
            translation1="card.favorite"
            translation2="card.author"
          />
        ))}
    </div>
  );
};

export default Cards;
