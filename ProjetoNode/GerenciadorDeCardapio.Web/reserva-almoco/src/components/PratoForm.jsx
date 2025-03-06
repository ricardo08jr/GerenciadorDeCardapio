import { useState } from 'react';

export const PratoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    proteina: '',
    detalhe: '',
    acompanhamento: '',
    salada: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="areaCardapio">
      <div>
        <label>Proteína:</label>
        <select 
          value={formData.proteina}
          onChange={(e) => setFormData({ ...formData, proteina: e.target.value })}
          required
        >
          <option value="">Selecione</option>
          {/* Opções devem vir da API */}
        </select>
      </div>

      <div>
        <label>Detalhe:</label>
        <input
          type="text"
          value={formData.detalhe}
          onChange={(e) => setFormData({ ...formData, detalhe: e.target.value })}
          required
        />
      </div>

      <div>
        <label>Acompanhamento:</label>
        <select
          value={formData.acompanhamento}
          onChange={(e) => setFormData({ ...formData, acompanhamento: e.target.value })}
          required
        >
          <option value="">Selecione</option>
          {/* Opções devem vir da API */}
        </select>
      </div>

      <div>
        <label>Salada:</label>
        <select
          value={formData.salada}
          onChange={(e) => setFormData({ ...formData, salada: e.target.value })}
          required
        >
          <option value="">Selecione</option>
          {/* Opções devem vir da API */}
        </select>
      </div>

      <div className="centro">
        <button type="submit">Salvar</button>
      </div>
    </form>
  );
};