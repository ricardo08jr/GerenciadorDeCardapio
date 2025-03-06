import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '../services/api';
import Layout from '../components/Layout';
import Toast from '../components/Layout/Toast';

const NovoItem = () => {
  const router = useRouter();
  const [pratos, setPratos] = useState([]);
  const [formData, setFormData] = useState({
    data: new Date().toISOString().split('T')[0],
    pratoId: ''
  });
  const [showToast, setShowToast] = useState(false);

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
      await api.post('/cardapio', formData);
      setShowToast(true);
      setTimeout(() => router.push('/'), 2000);
    } catch (error) {
      console.error('Erro ao salvar item:', error);
    }
  };

  return (
    <Layout>
      <section>
        <h1>Novo Item Cardápio</h1>
        <form onSubmit={handleSubmit} className="areaCardapio">
          <div>
            <label htmlFor="data">Data:</label>
            <input
              type="date"
              id="data"
              value={formData.data}
              onChange={(e) => setFormData({ ...formData, data: e.target.value })}
              required
            />
          </div>
          
          <div>
            <label htmlFor="prato">Prato:</label>
            <select
              id="prato"
              value={formData.pratoId}
              onChange={(e) => setFormData({ ...formData, pratoId: e.target.value })}
              required
            >
              <option value="">Selecione um prato</option>
              {pratos.map(prato => (
                <option key={prato.id} value={prato.id}>{prato.nome}</option>
              ))}
            </select>
          </div>

          <div className="centro">
            <button type="submit">Salvar</button>
          </div>
        </form>
        
        {showToast && <Toast message="Item adicionado com sucesso!" />}
      </section>
    </Layout>
  );
};

export default NovoItem;