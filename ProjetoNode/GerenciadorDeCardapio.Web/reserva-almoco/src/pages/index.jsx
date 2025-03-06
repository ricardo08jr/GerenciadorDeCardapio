import { useEffect, useState } from 'react';
import api from '../services/api';
import Layout from '../components/Layout';

const Cardapio = () => {
  const [cardapio, setCardapio] = useState([]);

  useEffect(() => {
    const fetchCardapio = async () => {
      try {
        const response = await api.get('/cardapio');
        setCardapio(response.data);
      } catch (error) {
        console.error('Erro ao buscar cardápio:', error);
      }
    };
    fetchCardapio();
  }, []);

  return (
    <Layout>
      <section>
        <h1>Cardápio</h1>
        <div className="areaCardapio">
          {cardapio.map(item => (
            <div key={item.id} className="itemCardapio">
              <p>{item.data}</p>
              <p>{item.prato.nome}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Cardapio;