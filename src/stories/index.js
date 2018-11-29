import React from 'react'
import 'typeface-roboto'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number, object, select } from '@storybook/addon-knobs/react'

import { Welcome } from '@storybook/react/demo'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'
import MobileButton from '../components/MobileButton'
import IconedButton from '../components/IconedButton'
import MobileSearch from '../components/MobileSearch'
import StatusWelcome from '../components/Welcome'
import ChatyBase from '../components/ChatyBase'
import DesktopButton from '../components/desktop/Button'
import CenterWrapper from '../components/utils/CenterWrapper'
import Toolbar from '../components/Toolbar'
import Tabbar from '../components/Tabbar'
import Navigation from '../components/Navigation'
import Chatbar from '../components/Chatbar'
import SnackbarContent from '../components/SnackbarContent'
import BallotResult from '../components/BallotResult'
import BottomSheetExample from '../components/BottomSheetExample'
import BottomSheetItem from '../components/BottomSheetItem'
import Badge from '../components/Badge'
import Switch from '../components/Switch'
import CheckBox from '../components/CheckBox'
import Input from '../components/Input'
import Tooltip from '../components/Tooltip'
import Cell from '../components/Cell'
import List from '@material-ui/core/List'
import ChevronRight from '@material-ui/icons/ChevronRight'
import PanTool from '@material-ui/icons/PanTool'

storiesOf('Welcome', module)
  .add('To Status-Storybook', () => <StatusWelcome />)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

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

const buttonTypes = { primary: 'primary', secondary: 'secondary', next: 'next', previous: 'previous' }
storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Select Type', () =>
    <CenterWrapper>
      <MobileButton text={text('Text', 'Label')} style={object('Styles', {})} onClick={action('clicked')} buttonType={select('Button Type', buttonTypes, 'primary')} />
    </CenterWrapper>
  )

storiesOf('IconedButton', module)
  .addDecorator(withKnobs)
  .add('default', () => <IconedButton color={text('color (name or hex)', 'white')} backgroundColor={text('background-color', '#00352c')} />)

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
    <CenterWrapper>
      <Toolbar
        href={text('Link', 'https://github.com/status-im/storybook')}
        content={text('Title', 'Your content here')}
        handleNextClick={action('clicked')}
        style={object('Styles', {})}
      />
    </CenterWrapper>
  )

storiesOf('Tab Bar', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <CenterWrapper>
      <Tabbar
        style={object('Styles', {})}
      />
    </CenterWrapper>
  )

storiesOf('Navigation', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <CenterWrapper>
      <Navigation
        handlePreviousClick={action('clicked')}
        title={text('Title', 'Title text here')}
        details={text('Subtitle', 'Subtitle text')}
        primary={boolean('Primary Color', true)}
        menu={boolean('Menu', true)}
        handleMenuClick={action('clicked')}
        style={object('Styles', {})}
      />
    </CenterWrapper>
  )

storiesOf('Chatbar', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <CenterWrapper>
      <Chatbar
        handlePreviousClick={action('clicked')}
        name={text('Name', 'Username')}
        avatarUrl={text('Avatar Url', 'https://status.im/img/status-logo-symbol.svg')}
        description={text('Description', 'Subtitle text')}
        primary={boolean('Primary Color', true)}
        menu={boolean('Menu', true)}
        handleMenuClick={action('clicked')}
        unreadMessages={number('Unread Messages', 10)}
        style={object('Styles', {})}
      />
    </CenterWrapper>
  )

storiesOf('Snackbar Content', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <CenterWrapper>
      <SnackbarContent
        handleButtonClick={action('clicked')}
        onClose={action('clicked')}
        style={object('Styles', {})}
      />
    </CenterWrapper>
  )

storiesOf('BallotResult', module)
  .addDecorator(withKnobs)
  .add('Default', () =>
    <CenterWrapper>
      <BallotResult title={text('Text', 'Your text here')} quadraticVotes={number('quadraticVotes', 25)} tokenTotal={number('tokenTotal', 65)} totalVotes={number('totalVotes', 100)} />
    </CenterWrapper>
  )

storiesOf('Bottom Sheet', module)
  .addDecorator(withKnobs)
  .add('Default', () =>
    <CenterWrapper>
      <BottomSheetExample />
    </CenterWrapper>
  )

storiesOf('Bottom Sheet Item', module)
  .addDecorator(withKnobs)
  .add('Default', () =>
    <CenterWrapper>
      <BottomSheetItem
        handleOnClick={action('clicked')}
        style={object('Styles', {})}
        content={text('Content', 'Your content here')}
        error={boolean('Error', false)}
        icon={<AddIcon />}
      />
    </CenterWrapper>
  )

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .add('Default', () =>
    <CenterWrapper>
      <Badge
        count={number('count', 5)}
        large={boolean('large', false)}
      />
    </CenterWrapper>
  )

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .add('Default', () =>
    <CenterWrapper>
      <Switch
        checked={boolean('checked', false)}
        handleSwitchClick={action('clicked')}
      />
    </CenterWrapper>
  )

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('Default', () =>
    <CenterWrapper>
      <CheckBox
        checked={boolean('checked', false)}
        handleCheckClick={action('clicked')}
        disabled={boolean('disabled', false)}
      />
    </CenterWrapper>
  )

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Default', () =>
    <CenterWrapper>
      <Input
        idFor={text('idFor', 'input')}
        label={text('label', 'Input Label')}
        placeholder={text('placeholder', 'Placeholder')}
        handleInputField={action('input')}
      />
    </CenterWrapper>
  )

storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .add('Default', () =>
    <CenterWrapper>
      <Tooltip
        title={text('title', 'Tooltip')}
        bottom={boolean('bottom', false)}
        error={boolean('error', false)}
      >
        <MobileButton style={{marginTop: '100px'}} text="Hover me" buttonType="primary" />
      </Tooltip>
    </CenterWrapper>
  )

storiesOf('Cell item', module)
  .addDecorator(withKnobs)
  .add('Default', () =>
    <CenterWrapper>
      <List>
        <Cell
          small={boolean('small', false)}
          imageUrl={text('imageSrc', 'https://status.im/img/status-logo-symbol.svg')}
          primaryText={text('primaryText', 'Title')}
          titleIcon={<PanTool />}
          secondaryText={text('secondaryText', 'Subtitle')}
          accessoryText={text('accessoryText', 'Cell accessory')}
          secondComponent={<CheckBox checked={boolean('checked', false)} handleCheckClick={action('check clicked')} />}
        />
        <Cell
          small={boolean('small', false)}
          imageUrl={text('imageSrc', 'https://status.im/img/status-logo-symbol.svg')}
          primaryText={text('primaryText', 'Title')}
          secondaryText={text('secondaryText', 'Subtitle')}
          accessoryText={text('accessoryText', 'Cell accessory')}
          secondComponent={<Switch checked={boolean('checked', false)} handleSwitchClick={action('clicked')} />}
        />
        <Cell
          small={boolean('small', false)}
          imageUrl={text('imageSrc', 'https://status.im/img/status-logo-symbol.svg')}
          primaryText={text('primaryText', 'Title')}
          secondaryText={text('secondaryText', 'Subtitle')}
          accessoryText={text('accessoryText', 'Cell accessory')}
          secondComponent={<ChevronRight />}
        />
        <Cell
          small={boolean('small', false)}
          imageUrl={text('imageSrc', 'https://status.im/img/status-logo-symbol.svg')}
          primaryText={text('primaryText', 'Title')}
          secondaryText={text('secondaryText', 'Subtitle')}
          accessoryText={text('accessoryText', 'Cell accessory')}
          secondComponent={<Badge count={number('count', 5)} />}
        />
      </List>
    </CenterWrapper>
  )

