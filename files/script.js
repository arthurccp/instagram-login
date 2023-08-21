document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    
    const response = await fetch('URL_DO_SEU_BACKEND', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      alert('Dados enviados com sucesso!');
    } else {
      alert('Erro ao enviar os dados.');
    }
  });
  