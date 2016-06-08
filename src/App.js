import React from 'react';
import { Media, Card, Container, PageHeader, Button, Divider, Fixed, Heading, Footer, Drawer, Input, Textarea, Checkbox, Close } from 'rebass';

export class App extends React.Component {
	render() {
		return (
			<Container>
				<Top />
				<MiddleLeft />
				<MiddleRight />
				<Bottom />
				<Foot />
				<Side />
			</Container>
		);
	}
}

export class Top extends React.Component {
	render() {
		return(
			<Card rounded backgroundColor="white" width={920}>
				<Media
					align="center"
					img="https://user.cyverse.org/artwork/logo.png">
				</Media>
				<Divider />
				<div className="left">
					<Heading level={1}>Trellis: CyVerse User Management</Heading>
					<Heading level={3}>A centralized place for you to manage your CyVerse user profile and services.</Heading>
				</div>
				<div className="login"><Button>Login</Button></div>
			</Card>
		);
	}
}

export class MiddleLeft extends React.Component {
	render() {
		return(
				<div className="left">
					<Card rounded backgroundColor="white" width={450}>
						<Heading level={3}>New User?</Heading>
						<Button>Register</Button>
						<div className="right">Click to manage your CyVerse user profile information and the CyVerse services that are available to you.</div>
					</Card>
				</div>
		);
	}
}

export class MiddleRight extends React.Component {
	render() {
		return(
			<div className="right">
				<Card rounded backgroundColor="white" width={450}>
					<Heading level={3}>Forgot Password?</Heading>
					<Button>Reset Password</Button>
					<div className="right">Click here to reset your password.</div>
				</Card>
			</div>
		);
	}
}

export class Bottom extends React.Component {
	render() {
		return(
			<Card backgroundColor="white" width={920}>
				<Heading level={3}>Login</Heading>
				<Button>Login</Button>
				<div className="right">Click here if you have previously created a CyVerse user ID.</div>
			</Card>
		);
	}
}

export class Foot extends React.Component {
	render() {
		return(
				<div className="center">Trellis 1.1.2; © Copyright 2016 by CyVerse</div>
			
		);
	}
}

export class Side extends React.Component {
	constructor() {
		super();
		this.state = {
			drawer: false,
			checkbox: false
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleCheckbox = this.handleCheckbox.bind(this);
	}
	handleClick() {
		this.setState({drawer: !this.state.drawer});
	}
	handleCheckbox() {
		this.setState({checkbox: !this.state.checkbox});
	}

	render() {
		return(
			<Container>
				<Drawer size={300} open={this.state.drawer} backgroundColor="clear" position="left" mt={4} mb={4} rounded={true}>
					<Card backgroundColor="white" width={270} color="black">
						<div className="left"><Heading level={3} className="left">Help Request</Heading></div>
						<div className="right"><Close onClick={this.handleClick} /></div>
						<br /><p>Tell us how we can help you.</p>
							<Input name="email" label="Email" placeholder="Placeholder" rounded type="text" />
							<Textarea pr={0} name="body" label="Body" placeholder="Placeholder" rounded type="text" height={300} />
							<Checkbox checked={this.state.checkbox} label="Totally not a robot" name="checkbox_1" onClick={this.handleClick} />
						<Button onClick={this.handleClick}>Send Mail</Button>
					</Card>	
				</Drawer>
				<div className={this.state.drawer ? "indent" : "noindent"}><Button onClick={this.handleClick}>Contact</Button></div>
			</Container>
		);
	}
}