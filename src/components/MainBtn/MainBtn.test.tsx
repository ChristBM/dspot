import { render, screen } from '@testing-library/react';
import MainBtn from '.';

describe('<MainBtn />', () => {
  const text = 'details';
  const id = 1;

  it('should render a button', () => {
    render(<MainBtn text={text} id={id.toString()} disable={false} />);
    expect(screen.getByRole('button', { name: text })).toBeInTheDocument();
  });
});
