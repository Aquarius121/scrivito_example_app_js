/* eslint-disable prettier/prettier */
import * as React from "react";
import * as Scrivito from "scrivito";
import Switch from "react-switch";
import trustpilot from "../../assets/images/trustpilot.svg";
import greenStar from "../../assets/images/green_star.svg";
import grayStar from "../../assets/images/gray_star.svg";

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
    const xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        const res = JSON.parse(xmlhttp.response);
        if (res.statusCode === 200) {
          var xmlhttp1 = new XMLHttpRequest();
          xmlhttp1.open(
            "POST",
            "https://hooks.zapier.com/hooks/catch/3840762/ou3k3l8/"
          );
          xmlhttp1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xmlhttp1.send(JSON.stringify(params));
          console.log('sent');
        }
      }
    };
    xmlhttp.open(
      "POST",
      "https://lblo7zvajf.execute-api.eu-central-1.amazonaws.com/prod/Barry-customer-signup"
    );
    // xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(params));
  }

  handleTermChange(flag) {
    this.setState({ termChecked: !flag });
  }
  
  // eslint-disable-next-line class-methods-use-this
  // eslint-disable-next-line lines-between-class-members
  render() {
    let french = false;
    let espana = false;
    if (typeof window !== 'undefined' && (window.location.pathname.indexOf('/france') >= 0)) {
      french = true;
    }
    if (typeof window !== 'undefined' && (window.location.pathname.indexOf('/espana') >= 0)) {
      espana = true;
    }

    if (french) {
      return (
        <div className="footer-widget french-footer">
          <div className="first-wrapper">
            <div className="footer-block">
              <div className="footer-logo-wrapper">
                <img src="https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/ac44668630875dc0/d710a3a5d20e/Grey-logo-.svg" alt="barry-logo"/>
              </div>
              <p>
                <span>©Barry Danmark ApS</span>
                <span>CVR 38 99 80 99</span>
                <a href="/privatlivspolitik">Privacy Policy</a>
              </p>
            </div>
  
            { document.body.clientWidth < 700 && <div className="line-break" />}
  
            <div className="footer-block big">
              <label>MAIS QUI EST CE BARRY ?</label>
  
              <p>
                Chez Barry, nous voulons rendre l’électricité très simple et équitable – pour vous comme pour notre planète. Qui a dit que l’électricité, c'est forcément compliqué et barbant ? <br/><br/><br/>

                Barry, qui a déjà lancé au Danemark, est le plus jeune membre de la famille Fortum. Fortum est un géant de l’énergie, coté en   Finlande, avec des activités en Europe du Nord et dans les pays baltes. Pour en savoir plus sur le groupe Fortum, clique <a href="https://www.fortum.fr/accueil/le-groupe-fortum/propos-de-fortum">ici</a>.
              </p>
            </div>
  
            { document.body.clientWidth < 700 && <div className="line-break" />}
  
            <div className="footer-block">
              <label>DES QUESTIONS ?</label>
              <p>Envoie-nous un mot doux à l'adresse suivante: hey@getbarry.co.</p>
              <br/>
              <label>JOIN THE BARRY-MOVEMENT🙌</label>
              <p>
                <a href="https://www.facebook.com/GetBarry-France-327674134752582/" target="_blank"><i className="fa fa-facebook-f"></i></a>
                {/* <a href="https://www.instagram.com/getbarry/?hl=en" target="_blank"><i className="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/28608159/admin/" target="_blank"><i className="fa fa-linkedin"></i></a> */}
              </p>
              
            </div>
  
          </div>
        </div>
      )
    }

    if (espana) {
      return (
        <div className="footer-widget french-footer">
          <div className="first-wrapper">
            <div className="footer-block">
              <div className="footer-logo-wrapper">
                <img src="https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/ac44668630875dc0/d710a3a5d20e/Grey-logo-.svg" alt="barry-logo"/>
              </div>
              <p>
                <span>©Barry Danmark ApS</span>
                <span>CVR 38 99 80 99</span>
                {window.location.pathname !== '/espana/preinscripcion/gracias' && <a href="/terms-of-service">Terms of service</a>}
                <a href="/privacy-policy">Privacy Policy</a>
              </p>
            </div>
  
            { document.body.clientWidth < 700 && <div className="line-break" />}
  
            <div className="footer-block big">
              <label>¿QUIÉN ES BARRY?</label>
  
              <p>
                ¿Quién dijo que la electricidad tenía que ser complicada y aburrida? 
                En Barry, queremos que la electricidad sea superfácil y superjusta; para ti y para el planeta.
                Barry fue lanzado en Dinamarca. Barry es el miembro más joven de la familia Fortum. Fortum es una compañía finlandesa dedicada a la energía que cotiza en bolsa y posee operaciones en la región escandinava, los países bálticos y Polonia. Puedes leer más sobre el grupo Fortum <a href="https://www.fortum.com/" target="_blank">aquí</a>.

              </p>
            </div>
  
            { document.body.clientWidth < 700 && <div className="line-break" />}
  
            <div className="footer-block">
              <label>¿ALGUNA PREGUNTA?</label>
              <p>Escríbenos a hey@getbarry.co</p>
              <br/>
              <label>JOIN THE BARRY-MOVEMENT🙌</label>
              <p>
                <a href="https://www.facebook.com/Barry.Electricidad/" target="_blank"><i className="fa fa-facebook-f"></i></a>
                {/* <a href="https://www.instagram.com/getbarry/?hl=en" target="_blank"><i className="fa fa-instagram"></i></a> */}
              </p>
              
            </div>
  
          </div>
        </div>
      )
    }

    let showStore = false;
    if (window.location.pathname === '/mattias' || window.location.pathname === '/signe' || window.location.pathname === '/mads') {
      showStore = true;
    }

    return (
      <div className="footer-widget">
        <div className={`trust-wrapper ${showStore ? 'showstore' : ''}`}>
          <div>
            <img src={trustpilot} />
            <p style={{marginTop: '9px'}}>Se vores anmeldelser <a href="https://dk.trustpilot.com/review/www.getbarry.dk" target="_blank">her</a></p>
          </div>
          { showStore && <div>
            <a class="android-mob-link" href="https://getbarry.app.link/fCsndIblhZ"><img height="60" src="https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/b66b66a12fc3e404/6bf3a20d5079/googleplay.svg" alt="google-play"/></a>
            <a class="ios-mob-link" href="https://getbarry.app.link/fCsndIblhZ"><img height="60" src="https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/8b5068258bd84c5e/892887bc7e79/appstore.svg" alt="apple-store" data-scrivito-is-clickable="true"/>
            </a>
          </div>}
          <div>
            <p>God</p>
            <a href="https://dk.trustpilot.com/review/www.getbarry.dk" target="_blank">
              <img src={greenStar} />
              <img src={greenStar} />
              <img src={greenStar} />
              <img src={greenStar} />
              <img src={grayStar} />
            </a>
          </div>
        </div>
        <div className="first-wrapper">
          <div className="footer-block">
            <img src="https://cdn0.scrvt.com/fb65a87dc47b5049e89f00ea0805136f/ac44668630875dc0/d710a3a5d20e/Grey-logo-.svg" alt="barry-logo"/>
            <p><a className="orange-text" href="https://helpcenter.getbarry.co/hc/da/requests/new" target="_blank">Chat</a> eller <a  className="orange-text" href="mailto:hello@getbarry.co?Subject=Contact">mail</a> os alle<br/>dage fra 09:00 til 21:00</p>

            <div className="social-links">
              <a href="https://www.facebook.com/getbarry" target="_blank"><i className="fa fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/getbarry/?hl=en" target="_blank"><i className="fa fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/28608159/admin/" target="_blank"><i className="fa fa-linkedin"></i></a>
              <a href="https://www.youtube.com/channel/UCXOqi4jMACgwvqli8GG8wyg" target="_blank"><i className="fa fa-youtube"></i></a>
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
            <label>Nysgerrig?</label>
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
