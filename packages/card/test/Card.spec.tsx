import * as React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '../src';
import { render, screen, testA11y } from '../../../test/utils';
import { Button } from '@manifest-ui/button';

describe('@manifest-ui/card', () => {
  it('should pass accessibility', async () => {
    await testA11y(
      <Card>
        <CardHeader>Title</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </CardBody>
        <CardFooter>
          <Button colorTheme="neutral" variant="outlined">
            Cancel
          </Button>
          <Button variant="filled">Submit</Button>
        </CardFooter>
      </Card>,
    );
  });

  it('should render', () => {
    render(
      <Card>
        <CardHeader>Title</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </CardBody>
        <CardFooter>
          <Button colorTheme="neutral" variant="outlined">
            Cancel
          </Button>
          <Button variant="filled">Submit</Button>
        </CardFooter>
      </Card>,
    );

    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      ),
    ).toBeVisible();
  });
});
