import { ThemeProvider } from '@emotion/react';
import React from 'react';
import renderer from 'react-test-renderer';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Input from './Input';
import theme from '../../configs/theme';
import mountWithTheme from '../../utils/mountWithTheme';

test('Input smaple', () => {
  const component = mountWithTheme(
    <Input placeholder="Input test" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Input smaple type password', () => {
  const component = mountWithTheme(
    <Input placeholder="Input test" type="password" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Input smaple size big', () => {
  const component = mountWithTheme(
    <Input placeholder="Input test" size="big" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Input smaple onChange', () => {
  let variable = '';
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Input varaint="contained" onChange={(e) => { variable += e.target.value; }} />
    </ThemeProvider>,
  );

  const element = screen.getByTestId('input--test');
  fireEvent.input(element, { target: { value: 'a' } });
  expect(variable).toBe('a');
});
