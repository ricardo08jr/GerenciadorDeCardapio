export const CardapioItem = ({ item }) => {
    return (
      <div className="itemCardapio">
        <p>Data: {new Date(item.data).toLocaleDateString()}</p>
        <p>Prato: {item.prato.nome}</p>
        <p>Proteína: {item.prato.proteina}</p>
        <p>Acompanhamento: {item.prato.acompanhamento}</p>
        <p>Salada: {item.prato.salada}</p>
      </div>
    );
  };