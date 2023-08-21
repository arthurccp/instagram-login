const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  u.ajax({
    url: "/.netlify/functions/receber-dados",
    method: "POST",
    data: new URLSearchParams(formData).toString(),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    success: () => {
      console.log("Form successfully submitted");
      alert("Dados enviados com sucesso!");
    },
    error: (xhr, status, error) => {
      console.error("Ocorreu um erro:", error);
      alert("Erro ao enviar os dados.");
    },
  });
};

document.querySelector("form").addEventListener("submit", handleSubmit);
