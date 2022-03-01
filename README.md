# Ignição React - AlgaWorks

**ToDo list:**

[x] Update git version

[x] Update brew version

[x] Install or updtate nvm

[x] Use nvm: _v12.18.2_

[x] _cd alga-stock && npm start_ to init the project

Como criar SPA usando react? => CLI

### Life Cicle (Ciclo de vida no componente):

1. Mounting
   `componentDidMount`
   - constuctor (instanciaamento da classe)
   - render
   - react atualiza o comp. no DOM
2. Updating
   (New props, setState(), forceUpdate())
   render
   react atualiza o comp. no DOM
   componentDidUpdate
3. Unmounting
   componentWillUnmount
   dificilmente utilizado

### Hook

Permite trabalhar com estado dentro de componentes funcionais.

- useState
  `const[getter, setter] = useState<type>(initialValue)`

- useEffect
  só é executado depois que o componente é renderizado
  possui uma lista de dependências, observando o estado e reagindo a alterações em determinados estados.

`React.FC<{ name: type }>` ou `React.FC<nomeDaProps>`
React Functional Componente

Componentes reagem aos estados e propriedades
