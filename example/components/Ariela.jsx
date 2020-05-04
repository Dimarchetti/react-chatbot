import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

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
              { value: '1', label: 'Sim.', trigger: 'help3' },
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
              { value: '1', label: 'Sim.', trigger: 'help4' },
              { value: '2', label: 'Não', trigger: 'help5' },              
            ],
          },
          {
            id: 'help4',
            message: `Beleza! Agora me diz outra coisa, seu negócio ou serviço é registrado?`,
            trigger: 'ans3',
          },
          {
            id: 'help5',
            message: `Beleza! Agora me diz outra coisa, seu negócio
            ou serviço é registrado?`,
            trigger: 'ans3',
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
            message: 'Thanks! Your data was submitted successfully!',
            end: true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;