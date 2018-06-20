import React from 'react'
import { Link } from 'react-static'
import { Card, Container, Header, Segment } from 'semantic-ui-react'

import DocsLayout from 'docs/src/components/DocsLayout'

const LayoutsExample = () => (
  <DocsLayout additionalTitle='Layouts'>
    <Container>
      <Segment basic padded>
        <Header as='h1' content='Layouts' subheader='Examples of using Semantic UI React' />
      </Segment>

      <Segment basic padded>
        <Header
          as='h2'
          content='Starter'
          subheader='Examples to introduce components and their function'
        />

        <Card.Group stackable itemsPerRow='3'>
          <Card
            as={Link}
            to='/layouts/theming'
            header='Theming'
            description='Examples of many common UI components, useful for testing custom themes.'
            image='/images/examples/theming.png'
          />
          <Card
            as={Link}
            to='/layouts/responsive'
            header='Responsive'
            description='Patterns for adjusting display for different devices.'
            image='/images/examples/responsive.png'
          />
          <Card
            as={Link}
            to='/layouts/grid'
            header='Grid'
            description='An introduction to using Semantic UI grids.'
            image='/images/examples/grid.png'
          />
          <Card
            as={Link}
            to='/layouts/attached-content'
            header='Attached Content'
            description='Examples of content that can attach to other content'
            image='/images/examples/attached.png'
          />
          <Card
            as={Link}
            to='/layouts/bootstrap-migration'
            header='Bootstrap Migration'
            description=' Examples of replacements for components found in Bootstrap'
            image='/images/examples/bootstrap.png'
          />
        </Card.Group>

        <Header as='h2' content='Pages' subheader='Starter page templates' />

        <Card.Group stackable itemsPerRow='3'>
          <Card
            as={Link}
            to='/layouts/homepage'
            header='Homepage'
            description='A simple, responsive homepage design with sidebar.'
            image='/images/examples/homepage.png'
          />
          <Card
            as={Link}
            to='/layouts/sticky'
            header='Sticky'
            description='Using visibility APIs to fix content after passing position in page.'
            image='/images/examples/sticky.png'
          />
          <Card
            as={Link}
            to='/layouts/fixed-menu'
            header='Fixed Menu'
            description='Using a fixed menu with page content.'
            image='/images/examples/fixed.png'
          />
          <Card
            as={Link}
            to='/layouts/login'
            header='Login Form'
            description='A full-screen login form.'
            image='/images/examples/login.png'
          />
        </Card.Group>
      </Segment>
    </Container>
  </DocsLayout>
)

export default LayoutsExample
