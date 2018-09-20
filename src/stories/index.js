import React from 'react';
import 'typeface-roboto';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Typography from '@material-ui/core/Typography';
import MobileButton from '../components/MobileButton';
import StatusWelcome from '../components/Welcome';

storiesOf('Welcome', module)
  .add('To Status-UI', () => <StatusWelcome />)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('MobileButton', module)
  .add('default', () => <MobileButton />)
  .add('with text', () => <MobileButton text="With Text" onClick={action('clicked')}/>)

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
