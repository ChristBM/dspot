import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TabLabel from '.';

describe('<TabLabel />', () => {
  it('should render a label', () => {
    render(
      <TabLabel labelTxt="info" isDefaultChecked group="radio-group">
        <p>Children</p>
      </TabLabel>,
    );
    expect(screen.getByLabelText(/info/i)).toBeInTheDocument();
  });

  it('should render a children component', () => {
    render(
      <TabLabel labelTxt="info" isDefaultChecked group="radio-group">
        <p>Children</p>
      </TabLabel>,
    );
    expect(screen.getByText(/Children/i)).toBeInTheDocument();
  });

  describe('Radio button', () => {
    it('should render a radio button', () => {
      render(
        <TabLabel labelTxt="info" isDefaultChecked group="radio-group">
          <p>Children</p>
        </TabLabel>,
      );
      expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    it('should be checked by default', () => {
      render(
        <TabLabel labelTxt="info" isDefaultChecked group="radio-group">
          <p>Children</p>
        </TabLabel>,
      );
      expect(screen.getByRole('radio')).toBeChecked();
    });

    it('should be unchecked', () => {
      render(
        <TabLabel labelTxt="info" isDefaultChecked={false} group="radio-group">
          <p>Children</p>
        </TabLabel>,
      );
      expect(screen.getByRole('radio')).not.toBeChecked();
    });

    it('should be checkeable by the user', async () => {
      render(
        <TabLabel labelTxt="info" isDefaultChecked={false} group="radio-group">
          <p>Children</p>
        </TabLabel>,
      );
      await userEvent.click(screen.getByRole('radio'));
      expect(screen.getByRole('radio')).toBeChecked();
    });
  });
});
