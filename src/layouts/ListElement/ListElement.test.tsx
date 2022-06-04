import { render, screen } from '@testing-library/react';
import ListElement from '.';

describe('<List />', () => {
  const props = {
    id: '1',
    img: '/avatar.jpg',
    name: 'hello',
    status: 'good',
    available: true,
  };
  it('should render an image', () => {
    render(
      <ListElement
        id={props.id}
        img={props.img}
        name={props.name}
        status={props.status}
        available={props.available}
      />,
    );
    expect(screen.getByText(/Friends/i)).toBeInTheDocument();
  });
});
