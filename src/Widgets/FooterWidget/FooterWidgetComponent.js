/* eslint-disable prettier/prettier */
import * as React from "react";
import * as Scrivito from "scrivito";
import Switch from "react-switch";

class FooterWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      termChecked: false,
      email: ''
    }
  }

  subscribe() {
    const params = {
      email: this.state.email,
      source: "homepage",
    };
    console.log('params', params);
    const xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        const res = JSON.parse(xmlhttp.response);
        console.log('res', res);
      }
    };
    xmlhttp.open(
      "POST",
      "https://wpk2il4zj0.execute-api.eu-central-1.amazonaws.com/dev/user/add"
    );
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(params));
  }

  handleTermChange(flag) {
    this.setState({ termChecked: !flag });
  }
  // eslint-disable-next-line class-methods-use-this
  // eslint-disable-next-line lines-between-class-members
  render() {
    return (
      <div className="footer-widget">
        <div className="first-wrapper">
          <div className="footer-block">
            <img src="https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/ac44668630875dc0/d710a3a5d20e/Grey-logo-.svg" alt="barry-logo"/>
            <p><a className="orange-text" href="https://helpcenter.getbarry.co/hc/da/requests/new" target="_blank">Chat</a> eller <a  className="orange-text" href="mailto:hello@getbarry.co?Subject=Contact">mail</a> os alle<br/>dage fra 09:00 til 21:00</p>

            <div className="social-links">
              <a href="https://www.facebook.com/getbarry"><i className="fa fa-facebook-f"></i></a>
              <a href="https://twitter.com/hashtag/getbarry"><i className="fa fa-twitter"></i></a>
              <a href="https://www.linkedin.com/company/28608159/admin/"><i className="fa fa-linkedin"></i></a>
              <a href="https://www.youtube.com/channel/UCXOqi4jMACgwvqli8GG8wyg"><i className="fa fa-youtube"></i></a>
            </div>

            <div className="co-block">
              <a href="https://www.ingenco2.dk/crt/dispcust/c/5094/l/2" target="_blank"><img width="90" src="https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/48750219aa96c6f9/b553e7db84aa/v/9400ade541b7/logo_da_180_96-96-224.png"  alt="co-block" data-scrivito-is-clickable="true" /></a>
            </div>

            { document.body.clientWidth < 700 && <div className="store-block">
              <div className="store-item">
                <a  className="android-mob-link" href="https://getbarry.app.link/fqJvMNKAxZ"><img height="40" src="https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/b66b66a12fc3e404/6bf3a20d5079/googleplay.svg"  alt="google-play"/></a>
              </div>

              <div className="store-item">
                <a className="ios-mob-link" href="https://getbarry.app.link/fqJvMNKAxZ"><img height="40" src="https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/8b5068258bd84c5e/892887bc7e79/appstore.svg"  alt="applestore" data-scrivito-is-clickable="true"/></a>
              </div>
            </div> }
          </div>

          { document.body.clientWidth < 700 && <div className="line-break" />}

          <div className="footer-block">
            <label>Mere om Barry</label>

            <div className="site-links">
              <a href="/presse">Presse</a>
              <a href="/privatlivspolitik">Privatlivspolitik</a>
              <a href="/leveringsbetingelser-privat">Leveringsbetingelser</a>
              <a href="/Cookiepolitik">Cookie Politik</a>
              <a href="/app-vilkaar-og-betingelser">App vilkår</a>
            </div>
          </div>

          { document.body.clientWidth < 700 && <div className="line-break" />}

          <div className="footer-block">
            <label>Mere om Barry</label>
            <p>Vi forbedrer hele tiden Barry. Tilmelder du dig vores nyhedsbrev, kan du følge med i udviklingen og modtage information via e-mail om, hvordan app'en kan gøre dit strømforbrug smartere.</p>
            <p className="terms">
              <span>
                Jeg bekræfter, at have læst Barrys <a href="/privatlivspolitik" target="_blank">Privatlivspolitik</a>. Jeg kan til enhver tid kan trække mit samtykke tilbage på hey@getbarry.co.
              </span>
              <Switch onChange={() => this.handleTermChange(this.state.termChecked)} checked={this.state.termChecked} onColor="#EF7B40" offColor="#6C738A" uncheckedIcon={false} checkedIcon={false}/>
            </p>
            <div className="form">
              <input type="text" placeholder="Din email" className="email" name="EMAIL" value={this.state.email} onChange={(event) => {this.setState({email: event.target.value})}}/>
              <button type="submit" disabled={!this.state.termChecked} onClick={() => {
                this.subscribe()
              }}>Tilmeld mig</button>  
            </div>

            { document.body.clientWidth < 700 && <div className="copy-block">
              <p>
                Barry er finansieret af det finske energiselskab <a href="https://www3.fortum.com" className="orange-text" target="_blank" rel="noopener noreferrer">Fortum</a><br/><br/>
                ©Barry Danmark ApS 2018<br/>
                CVR 38998099
                <br/>
              </p>
            </div>
            }
          </div>

        </div>

        <div className="second-wrapper">
          <div className="store-block">
            <div className="store-item">
              <a  className="android-mob-link" href="https://getbarry.app.link/fqJvMNKAxZ"><img height="40" src="https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/b66b66a12fc3e404/6bf3a20d5079/googleplay.svg"  alt="google-play"/></a>
            </div>

            <div className="store-item">
              <a className="ios-mob-link" href="https://getbarry.app.link/fqJvMNKAxZ"><img height="40" src="https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/8b5068258bd84c5e/892887bc7e79/appstore.svg"  alt="applestore" data-scrivito-is-clickable="true"/></a>
            </div>
          </div>
          <div className="copy-block">
            <p>
              Barry er finansieret af det finske energiselskab <a href="https://www3.fortum.com" className="orange-text" target="_blank" rel="noopener noreferrer">Fortum</a>&nbsp;&nbsp;&nbsp;&nbsp;
              ©Barry Danmark ApS 2018
              CVR 38998099
            </p>
          </div>
        </div>
      </div>
    )
  }
}

Scrivito.provideComponent("FooterWidget", FooterWidget);
