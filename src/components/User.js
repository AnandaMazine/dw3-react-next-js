// Expressões JavaScript dentro do HTML
const User = () => {
  // Criando variáveis para o componente
  const name = "Ananda Mazine";
  return (
    <>
        {/*Esse é p comentário em JSX - CTRL ; */}
      <div>Usuário logado: <strong>{name}</strong></div>
      
    </>
  );
};

export default User;
