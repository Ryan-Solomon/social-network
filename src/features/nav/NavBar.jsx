import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          <img src='/assets/logo.png' alt='logo' />
          Re-vents
        </Menu.Item>
        <Menu name='Events' />
        <Button positive inverted content='Create Event' />
        <Menu.Item>
          <basic inverted content='Login' />
          <basic inverted content='Register' style={{ marginLeft: '0.5em' }} />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
