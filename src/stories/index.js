import React from 'react';
import 'typeface-roboto';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withBackgrounds, withKnobs, text, boolean, number, object, select } from '@storybook/addon-knobs/react';

import { Button, Welcome } from '@storybook/react/demo';
import Typography from '@material-ui/core/Typography';
import MobileButton from '../components/MobileButton';
import IconedButton from '../components/IconedButton';
import MobileSearch from '../components/MobileSearch';
import StatusWelcome from '../components/Welcome';
import ChatyBase from '../components/ChatyBase';
import DesktopButton from '../components/desktop/Button';
import CenterWrapper from '../components/utils/CenterWrapper';
import Toolbar from '../components/Toolbar';
import Tabbar from '../components/Tabbar';
import Navigation from '../components/Navigation'
import Chatbar from '../components/Chatbar'
import SnackbarContent from '../components/SnackbarContent'

storiesOf('Welcome', module)
  .add('To Status-Storybook', () => <StatusWelcome />)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('DesktopButton', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <CenterWrapper>
      <DesktopButton
        text={text('Text', 'Your text here')}
        active={boolean('active', true)}
        style={object('Styles', {})}
        onClick={action('clicked')}/>
    </CenterWrapper>
  )

const buttonTypes = { primary: 'primary', secondary: 'secondary', next: 'next', previous: 'previous' };
storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Select Type', () =>
    <CenterWrapper>
      <MobileButton text={text('Text', 'Label')} style={object('Styles', {})} onClick={action('clicked')} buttonType={select('Button Type', buttonTypes, 'primary')} />
    </CenterWrapper>
  )

storiesOf('IconedButton', module)
  .addDecorator(withKnobs)
  .add('default', () => <IconedButton color={text('color (name or hex)', 'white')} backgroundColor={text('background-color', '#00352c')} />);

storiesOf('MobileSearch', module)
  .add('default', () => <MobileSearch />)
  .add('wide', () => <MobileSearch wide />)
  .add('placeholder', () => <MobileSearch placeholder="placeholder" />)

storiesOf('ChatyBase', module)
  .addDecorator(withKnobs)
  .add('default', () => <ChatyBase
                          component={<IconedButton color={text('color (name or hex)', 'white')} backgroundColor={text('background-color', '#00010D')} borderRadius={0}/>}
                          borderWidth={number('tag width', 20)} />)

storiesOf('Typography', module)
  .add('Display 4', () =>
    <Typography variant="display4" gutterBottom>
      Display 4
    </Typography>
  )
  .add('Display 3', () =>
    <Typography variant="display3" gutterBottom>
      Display 3
    </Typography>
  )
  .add('Display 2', () =>
    <Typography variant="display2" gutterBottom>
      Display 2
    </Typography>
  )
  .add('Display 1', () =>
    <Typography variant="display1" gutterBottom>
      Display 1
    </Typography>
  )
  .add('Headline', () =>
    <Typography variant="Headline" gutterBottom>
      Headline
    </Typography>
  )
  .add('Title', () =>
    <Typography variant="title" gutterBottom>
      Title
    </Typography>
  )
  .add('Subheading', () =>
    <Typography variant="subheading" gutterBottom>
      Subheading
    </Typography>
  )
  .add('Body 2', () =>
    <Typography variant="body2" gutterBottom>
      Body 2
    </Typography>
  )
  .add('Body 1', () =>
    <Typography variant="body1" gutterBottom>
      Body 1
    </Typography>
  )
  .add('Caption', () =>
    <Typography variant="caption" gutterBottom>
      Caption
    </Typography>
  )
  .add('Button', () =>
    <Typography variant="button" gutterBottom>
      Button
    </Typography>
  )

storiesOf('Toolbar', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Toolbar
      href={text('Link', 'https://github.com/status-im/storybook')}
      content={text('Title', 'Your content here')}
      handleNextClick={action('clicked')}
      style={object('Styles', {})}
    />
  )

storiesOf('Tab Bar', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Tabbar
      style={object('Styles', {})}
    />
  )

storiesOf('Navigation', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Navigation
      handlePreviousClick={action('clicked')}
      title={text('Title', 'Title text here')}
      details={text('Subtitle', 'Subtitle text')}
      prymary={boolean('Prymary Color', true)}
      menu={boolean('Menu', true)}
      handleMenuClick={action('clicked')}
      style={object('Styles', {})}
    />
  )

storiesOf('Chatbar', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Chatbar
      handlePreviousClick={action('clicked')}
      name={text('Name', 'Username')}
      avatarUrl={text('Avatar Url', 'https://avatars0.githubusercontent.com/u/18357049?s=400&u=efc262623265b5b527a8570faa590f9f29ae36d5&v=4')}
      description={text('Description', 'Subtitle text')}
      prymary={boolean('Prymary Color', true)}
      menu={boolean('Menu', true)}
      handleMenuClick={action('clicked')}
      unreadMessages={number('Unread Messages', 10)}
      style={object('Styles', {})}
    />
  )

storiesOf('Snackbar Content', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <SnackbarContent
      handleButtonClick={action('clicked')}
      onClose={action('clicked')}
      style={object('Styles', {})}
    />
  )
