import { render, screen } from '@testing-library/react';
import PersonalInfo from '.';

describe('<PersonalInfo />', () => {
  it('should render a title', () => {
    render(<PersonalInfo />);
    expect(screen.getByRole('heading', { name: /bio:/i })).toBeInTheDocument();
  });
});
