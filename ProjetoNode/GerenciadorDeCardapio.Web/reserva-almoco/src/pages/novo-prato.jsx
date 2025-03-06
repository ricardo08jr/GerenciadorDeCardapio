import { useState, useEffect } from 'react';
import api from '../services/api';
import Layout from '../components/Layout';

export default function Pratos() {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    const carregarPratos = async () => {
      try {
        const response = await api.get('/pratos');
        setPratos(response.data);
      } catch (error) {
        console.error('Erro ao carregar pratos:', error);
      }
    };
    carregarPratos();
  }, []);

  return (
    <Layout>
      <section>
        <h1>Pratos</h1>
        <div className="areaCardapio">
          {pratos.map(prato => (
            <div key={prato.id} className="itemCardapio">
              <h3>{prato.nome}</h3>
              <p>Proteína: {prato.proteina}</p>
              <p>Acompanhamento: {prato.acompanhamento}</p>
              <p>Salada: {prato.salada}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}