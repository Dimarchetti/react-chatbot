import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from '../../lib/ChatBot';
//import ChatBot from 'react-simple-chatbot';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: `Olá! Meu nome é Ariela, mas pode me chamar de Ari. 
            Sou sua assistente virtual e terei o maior prazer em atendê-lo.
            Qual o seu nome por favor?`,
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: 'help1',
          },
          {
            id: 'help1',
            message: 'Ok {previousValue}! Como eu posso te ajudar?',
            trigger: 'ans1',
          },
          {
            id: 'ans1',
            options: [
              { value: '1', label: '1. Preciso de Ajuda com meu negócio.', trigger: 'help2' },
              { value: '2', label: '2. Queria saber mais sobre o Digitalize-me', trigger: 'help2' },
              { value: '3', label: '3. Queria saber mais sobre você Ari.', trigger: 'help2' },
              { value: '4', label: '4. Queria saber como isso funciona.', trigger: 'help2' },
            ],
          },
          {
            id: 'help2',
            message: `Que ótimo! Você está no lugar certo. Você gostaria de utilizar 
            tudo que a tecnologia e a internet podem oferecer para crescer seu negócio ou serviço?`,
            trigger: 'ans2',
          },
          {
            id: 'ans2',
            options: [
              { value: '1', label: 'Sim', trigger: 'help3' },
              { value: '2', label: 'Não', trigger: 'help3' },              
            ],
          },
          {
            id: 'help3',
            message: `Beleza! Agora me diz outra coisa, seu negócio
            ou serviço é registrado?`,
            trigger: 'ans3',
          },
          {
            id: 'ans3',
            options: [
              { value: '1', label: 'Sim', trigger: 'help4' },
              { value: '2', label: 'Não', trigger: 'help5' },              
            ],
          },
          {
            id: 'help4',
            message: `Qual o registro do seu negócio (CNPJ)?`,
            trigger: 'cnpj',
          },
          {
            id: 'cnpj',
            user: true,
            trigger: 'help4-1',
          },
          {
            id: 'help5',
            message: `Informe o nome do seu negócio? (Ex: Padaria do Sr. João)`,
            trigger: 'business',
          },
          {
            id: 'business',
            user: true,
            trigger: 'help5-1',
          },
          {
            id: 'help4-1',
            message: `Ok. Seu negócio está registrado no Google Maps?`,
            trigger: 'ans4',
          },
          {
            id: 'help5-1',
            message: `Selecione entre as opções qual o setor do se negócio`,
            trigger: 'ans5',
          },
          {
            id: 'ans4',
            options: [
              { value: '1', label: 'Sim', trigger: 'help6-1' },
              { value: '2', label: 'Não', trigger: 'help6-1' },              
            ],
          },
          {
            id: 'ans5',
            options: [
              { value: '1', label: 'Comércio', trigger: 'help6' },
              { value: '2', label: 'Indústria', trigger: 'help6' },              
              { value: '3', label: 'Serviços', trigger: 'help6' },              
            ],
          },
          {
            id: 'help6-1',
            message: `Seu negócio possui site ou Facebook?`,
            trigger: 'ans6-1',
          },
          {
            id: 'ans6-1',
            options: [
              { value: '1', label: 'Sim', trigger: 'help7-1' },
              { value: '2', label: 'Não', trigger: 'help7-1' },              
            ],
          },
          {
            id: 'help7-1',
            message: `Como vc classificaria seu nível ou de seus 
            funcionários em relação ao conhecimento de internet?`,
            trigger: 'ans7-1',
          },
          {
            id: 'ans7-1',
            options: [
              { value: '1', label: 'Muito Bom =D', trigger: 'help8-1' },
              { value: '2', label: 'Mais ou Menos Bom =)', trigger: 'help8-1' },              
              { value: '3', label: 'Não tão Bom =S', trigger: 'help8-1' },              
            ],
          },
          {
            id: 'help8-1',
            message: `Você possui e-mail?`,
            trigger: 'ans8-1',
          },
          {
            id: 'ans8-1',
            options: [
              { value: '1', label: 'Sim', trigger: 'help9-1' },
              { value: '2', label: 'Não', trigger: 'help9-2' },              
            ],
          },
          {
            id: 'help9-1',
            message: `Por favor, informe seu e-mail.`,
            trigger: 'email',
          },
          {
            id: 'email',
            user: true,
            trigger: 'help10-1',
          },
          {
            id: 'help9-2',
            message: `Por favor, informe seu Whatsapp.`,
            trigger: 'help10-2',
          },
          {
            id: 'whatsapp',
            user: true,
            trigger: 'help10-2',
          },
          {
            id: 'help10-1',
            message: `Enviamos um email {previousValue} com uma senha temporária
             para que você tenha acesso total a nossa plataforma de ajuda ao empreendedor. Enquanto isso, dê uma olhada
             no link abaixo que contém algumas informações sobre o seu perfil empreendedor.
             [link clicável com perfil do emrpeendedor]`,
            trigger: 'end-message',
          },
          {
            id: 'help10-2',
            message: `Enviamos uma mensagem para o Whatsapp {previousValue} com uma senha temporária
            para que você tenha acesso total a nossa plataforma de ajuda ao empreendedor. Enquanto isso, dê uma olhada
            no link abaixo que contém algumas informações sobre o seu perfil empreendedor.
            [link clicável com perfil do emrpeendedor]`,
            trigger: 'end-message',
          },
          //Fluxo 2
          {
            id: 'help6',
            message: `Selecione entre as opções qual o setor do seu negócio`,
            trigger: 'ans6',
          },
          {
            id: 'ans6',
            options: [
              { value: '1', label: 'Professor Autônomo.', trigger: 'help8' },
              { value: '2', label: 'Cabelereiro', trigger: 'help8' },              
              { value: '3', label: 'Manicure', trigger: 'help8' },              
            ],
          },
          {
            id: 'help8',
            message: `Seu negócio possui site ou Facebook?`,
            trigger: 'ans8',
          },
          {
            id: 'ans8',
            options: [
              { value: '1', label: 'Sim', trigger: 'help9' },
              { value: '2', label: 'Não', trigger: 'help9' },              
            ],
          },
          {
            id: 'help9',
            message: `Como você classificaria seu nível ou de seus 
            funcionários em relação ao conhecimento de internet?`,
            trigger: 'ans9',
          },
          {
            id: 'ans9',
            options: [
              { value: '1', label: 'Muito Bom =D', trigger: 'help10' },
              { value: '2', label: 'Mais ou Menos Bom =)', trigger: 'help10' },              
              { value: '3', label: 'Não tão Bom =S', trigger: 'help10' },              
            ],
          },
          {
            id: 'help10',
            message: `Você possui e-mail?`,
            trigger: 'ans10',
          },
          {
            id: 'ans10',
            options: [
              { value: '1', label: 'Sim', trigger: 'help11' },
              { value: '2', label: 'Não', trigger: 'help12' },              
            ],
          },
          {
            id: 'help11',
            message: `Por favor, informe seu e-mail.`,
            trigger: 'email2',
          },
          {
            id: 'email2',
            user: true,
            trigger: 'help13',
          },
          {
            id: 'help12',
            message: `Por favor, informe seu Whatsapp.`,
            trigger: 'whatsapp2',
          },
          {
            id: 'whatsapp2',
            user: true,
            trigger: 'help14',
          },
          {
            id: 'help13',
            message: `Enviamos um email para você com uma senha temporária
             para que você tenha acesso total a nossa plataforma de ajuda ao empreendedor. Enquanto isso, dê uma olhada
             no link abaixo que contém algumas informações sobre o seu perfil empreendedor.
             [link clicável com perfil do emrpeendedor]`,
            trigger: 'end-message',
          },
          {
            id: 'help14',
            message: `Enviamos uma mensagem para o seu Whatsapp com uma senha temporária
            para que você tenha acesso total a nossa plataforma de ajuda ao empreendedor. Enquanto isso, dê uma olhada
            no link abaixo que contém algumas informações sobre o seu perfil empreendedor.
            [link clicável com perfil do emrpeendedor]`,
            trigger: 'end-message',
          },  
          {
            id: 'validator',
            user: true,
            trigger: '7',
            validator: (value) => {
              if (isNaN(value)) {
                return 'value must be a number';
              } else if (value < 0) {
                return 'value must be positive';
              } else if (value > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },
          {
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'gender', label: 'Gender', trigger: 'update-gender' },
              { value: 'age', label: 'Age', trigger: 'update-age' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-gender',
            update: 'gender',
            trigger: '7',
          },
          {
            id: 'update-age',
            update: 'age',
            trigger: '7',
          },
          {
            id: 'end-message',
            message: `Obrigado! Seu negócio está mais próximo de ser digital do que antes. {https://wdots.com.br}`,
            end: true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;