import { render } from '@testing-library/react';

// import App from './app';
import { Hero } from './hero';

describe('App', () => {
  // it('should render successfully', () => {
  //   const { baseElement } = render(<App />);
  //   expect(baseElement).toBeTruthy();
  // });

  // it('should have a greeting as the title', () => {
  //   const { getAllByText } = render(<App />);
  //   expect(
  //     getAllByText(new RegExp('Graphluency', 'gi')).length > 0
  //   ).toBeTruthy();
  // });
  it('should render successfully', () => {
    const { baseElement } = render(<Hero locale='en-US'/>)
    expect(baseElement).toBeTruthy();
  })
});
