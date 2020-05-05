# Ariela Chatbot

Chatbot simples chamado Ariela, criado para o projeto do Sebrae do evento Megahack.

<img src="https://cloud.githubusercontent.com/assets/1014326/25716667/2d4bb4c4-30d6-11e7-996e-30c8fb316361.gif" height="400" />

## Getting Start

```bash
npm install
npm install react-simple-chatbot --save
npm run build
```

## Usage
Here is the first one to get you started:

``` javascript
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];

ReactDOM.render(
  <div>
    <ChatBot steps={steps} />
  </div>,
  document.getElementById('root')
);
```

## License

MIT · [Digitalize.me](https://digitalizeme.us)
