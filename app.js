const Person = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', { key: 'person-child1' }, props.name),
    React.createElement('p', { key: 'person-child2' }, props.occupation),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement(
      'h1',
      { className: 'title', key: 'app-child1' },
      'Now you see React IS rendered'
    ),
    React.createElement(
      Person,
      { name: 'Yihua', occupation: 'instructor', key: 'app-child2' },
      null
    ),
    React.createElement(
      Person,
      { name: 'Andrei', occupation: 'Lead instructor', key: 'app-child3' },
      null
    ),
    React.createElement(
      Person,
      { name: 'Emily', occupation: 'Teaching Assistant', key: 'app-child4' },
      null
    ),
  ]);
};

// ReactDOM.render(React.createElement(App), document.getElementById('root'));

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
