import { useTheme } from 'MyProvider';

const MyComponent = (props) => {
  const darkTheme = useTheme();

  const themeStyles = {
    color: darkTheme ? '#CCC' : '#333',
  };

  return <div style={themeStyles}>Hello</div>;
};

export default MyComponent;
