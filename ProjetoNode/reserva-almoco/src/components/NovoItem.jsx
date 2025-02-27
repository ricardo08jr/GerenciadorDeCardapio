import { useState, useEffect } from 'react';
import api from '../services/api';
import Toast from './Layout/Toast';

const NovoItem = () => {
  const [data, setData] = useState(new Date().toISOString().split('T')[0]);
  const [pratos, setPratos] = useState([]);
  const [selectedPrato, setSelectedPrato] = useState('');
  const [toast, setToast] = useState({ show: false, message: '' });

  useEffect(() => {
    const fetchPratos = async () => {
      try {
        const response = await api.get('/pratos');
        setPratos(response.data);
      } catch (error) {
        console.error('Erro ao buscar pratos:', error);
      }
    };
    fetchPratos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/cardapio', { data, pratoId: selectedPrato });
      setToast({ show: true, message: 'Item adicionado com sucesso!' });
      setTimeout(() => setToast({ show: false, message: '' }), 3000);
    } catch (error) {
      setToast({ show: true, message: 'Erro ao salvar item!' });
    }
  };

  return (
    <section>
      <h1>Novo Item Cardápio</h1>
      <form onSubmit={handleSubmit} className="areaCardapio">
        <p>
          <label htmlFor="data-cardapio">Data:</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="prato">Prato:</label>
          <select
            value={selectedPrato}
            onChange={(e) => setSelectedPrato(e.target.value)}
            required
          >
            <option value="">Selecione um prato</option>
            {pratos.map(prato => (
              <option key={prato.id} value={prato.id}>
                {prato.nome}
              </option>
            ))}
          </select>
        </p>
        <p className="centro">
          <button type="submit">Salvar</button>
        </p>
      </form>
      {toast.show && <Toast message={toast.message} />}
    </section>
  );
};

export default NovoItem;