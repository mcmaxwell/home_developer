import './registration.scss'

import React from 'react';

const Iplist = (props) => {
  const {ip, removeip} = props
  return(
    <div className="ip">
      <span>{ ip }</span>
      <button type="button" className="remove-ip close" onClick={removeip}>remove</button>
    </div>
  )
}


class Registration extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      ip: '',
      password: '',
      confirm: '',
      ipContent: [],
      nameValid: false,
      ipValid: false,
      emailValid: false,
      passwordValid: false,
      confirmValid: false,
      formValid: false
    }
  }

  errorField (el, valid) {
    el.className = valid ? '': 'error';
    el.nextElementSibling.className = valid ? 'error': 'error show';
  }

  validateField(fieldName, value) {
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let ipValid = this.state.ipValid;
    let passwordValid = this.state.passwordValid;
    let confirmValid = this.state.confirmValid;
    let formValid = this.state.formValid;

    switch(fieldName) {
      case 'name':
        nameValid = value.match(/^[a-z]+$/i)
        this.errorField(document.querySelector('#registration__name'), nameValid);
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        this.errorField(document.querySelector('#registration__email'), emailValid);
        break;
      case 'ip':
        ipValid = value.match(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm);
        this.errorField(document.querySelector('#registration__ip'), ipValid);
        break;
      case 'password':
        passwordValid = value.length >= 6 && value.length <= 16;
        this.errorField(document.querySelector('#registration__password'), passwordValid)
        break;
      case 'confirm':
        confirmValid = document.querySelector('#registration__password').value === value;
        this.errorField(document.querySelector('#registration__confirm-password'), confirmValid)
        break;
      default:
        break;
    }
    this.setState({
      nameValid: nameValid,
      emailValid: emailValid,
      ipValid: ipValid,
      passwordValid: passwordValid,
      confirmValid: confirmValid,
      formValid: formValid
    }, this.validateForm);
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, () => { this.validateField(name, value) });
  }

  addIp (e) {
    if(document.querySelector('#registration__ip').value !== '' && document.querySelector('#registration__ip').className !== 'error') {
      if(this.state.ipContent.length < 5) {
        if(this.state.ipContent.find( (e) => (e === document.querySelector('#registration__ip').value) )) {
          document.querySelector('#registration__ip').nextElementSibling.textContent = 'You have already entered this IP.';
          this.errorField(document.querySelector('#registration__ip'), false);
        } else {
          const ipContent = [...this.state.ipContent, document.querySelector('#registration__ip').value]
          document.querySelector('#registration__ip').nextElementSibling.textContent = 'Please, enter correct IP.';

          this.setState({
            ipContent
          })
          document.querySelector('#registration__ip').value = ''
          setTimeout(() => (this.validateForm()), 50)
        }
      }
    }
  }

  removeIp (e) {
    const rrr = e.target.previousSibling.textContent;
    this.setState({
      ipContent: this.state.ipContent.filter((e, i) => {
        return e !== rrr
      })
    });
    setTimeout(() => (this.validateForm()), 50)

  }

  validateForm () {
    this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid && this.state.confirmValid && this.state.ipContent.length});
  }

  render() {
    return (
      <div className='registration'>
        <h2>REGISTRATION</h2>
        <span className="registration__info"><span className="required-symbol">*</span> Indicates required fields </span>
        <form>
          <div className="field-contain">
            <label htmlFor="registration__name">Name <span className="required-symbol">*</span></label>
            <div className="field">
              <input type="text" name="name" id="registration__name" required onChange={(event) => this.handleUserInput(event)} />
              <span className="error"><span>!</span>This field can’t be blank.</span>
            </div>
          </div>
          <div className="field-contain">
            <label htmlFor="registration__email">Email <span className="required-symbol">*</span></label>
            <div className="field">
              <input type="email" name="email" id="registration__email" required onChange={(event) => this.handleUserInput(event)} />
              <span className="error"><span>!</span>This field can’t be blank.</span>
            </div>
          </div>
          <div className="field-contain ip-field">
            <label htmlFor="registration__confirm-ip">IP addresses <span className="required-symbol">*</span></label>
            <div className="field">
              <input type="text" name="ip" id="registration__ip" onChange={(event) => this.handleUserInput(event)} />
              <span className="error"><span>!</span>This field can’t be blank.</span>
            </div>

            <div className="add-ip__contain">
              <button type="button" className="add-ip" onClick={(event) => this.addIp(event)}>+</button><span>add IP</span>
            </div>
            <div className="ip-contain">
              {this.state.ipContent.map((val, index) => {
                 return(
                     <Iplist key={index} ip={val} removeip={(e) => this.removeIp(e)} />
                   )
               })
               }

            </div>
          </div>
          <div className="field-contain">
            <label htmlFor="registration__password">Password <span className="required-symbol">*</span></label>
            <div className="field">
              <input type="password" name="password" required id="registration__password" onChange={(event) => this.handleUserInput(event)} />
              <span className="error"><span>!</span>This field can’t be blank.</span>
            </div>
          </div>
          <div className="field-contain">
            <label htmlFor="registration__confirm-password">Confirm Password <span className="required-symbol">*</span></label>
            <div className="field">
              <input type="password" name="confirm" required id="registration__confirm-password" onChange={(event) => this.handleUserInput(event)} />
              <span className="error"><span>!</span>This field can’t be blank.</span>
            </div>
          </div>
          <button type="submit" className="btn btn-blue" disabled={!this.state.formValid}>Submit</button>
        </form>
      </div>
    );
  }
};

export default Registration;
