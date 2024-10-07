let organizadores = []; 
let id_organizador = 1;

module.exports = class organizadorController {
  static async createOrganizador(req, res) {
    const { telefone, email, senha, nome } = req.body;

    if (!telefone || !email || !senha || !nome) {
      return res.status(400).json({ error: "Todos os campos devem ser preenchidos" });
    } else if (isNaN(telefone) || telefone.length !== 11) {
      return res.status(400).json({ error: "Telefone inválido. Deve conter exatamente 11 dígitos numéricos" });
    } else if (!email.includes("@")) {
      return res.status(400).json({ error: "Email inválido. Deve conter @" });
    }

    // Verifica se já existe um Organizador com o mesmo Telefone
    const existingOrganizador = organizadores.find(organizador => organizador.email === email);
    if (existingOrganizador) {
      return res.status(400).json({ error: "email já cadastrado" });
    }

    // Cria e adiciona novo Organizador
    const newOrganizador = {id: id_organizador++, telefone, email, senha, nome };
    organizadores.push(newOrganizador);

    return res.status(201).json({ message: "Organizador criado com sucesso", organizador: newOrganizador });
  }

    //Obtendo todos os organizadores   
  static async getAllOrganizador(req, res) {
    return res.status(200).json({ message: "Obtendo todos os organizadores", organizadores });
  }

    // Atualização de organizadores
  static async updateOrganizador(req, res) {
    // Desestrutura e recupera os dados enviados via corpo da requisição
    const {id, telefone, email, senha, nome} = req.body;
    
    // Validar se todos os campos foram preenchidos
    if(!id || !telefone || !email || !senha || !nome){
      return res.status(400).json({error: "Todos os campos devem ser preenchidos"});
    }
    // Procurar o indice do orgaizador Array 'organizadores' pelo telefone
    const organizadorIndex = organizadores.findIndex(organizador => organizador.id == id)
    // se o usuario nao for encontrado organizadorIndex vale a -1
    if(organizadorIndex === -1){
      return res.status(400).json({error: "Organizador não encontrado"});
    }

    // Atualiza os dados do usuário no Array 'users'
    organizadores[organizadorIndex] = {id, telefone, email, senha, nome}
    return res.status(200).json({message: "Organizador atualizado", organizador:organizadores[organizadorIndex]})
  }


//   Deletando organizador
  static async deleteOrganizador(req, res) {

    // obtem o parametro 'id' da requisição, que é o id do Organizador a ser deletado
    const organizadorId = req.params.id;

   
    const organizadorIndex = organizadores.findIndex((organizador) => organizador.id == organizadorId);
   
    // se o usuario nao for encontrado userIndex equivale a -1
    if(organizadorIndex === -1){
      return res.status(400).json({error: "Organizador não encontrado"});
  }

    // Removendo o usuário do array user
    organizadores.splice(organizadorIndex, 1); // aqui eu escolho quantos eu quero cortar
    return res.status(200).json({message: "Organizador deletado"}); 
  }
};
