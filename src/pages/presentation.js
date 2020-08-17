import React from 'react';

import Layout from '../components/layout';
import violoncelle from "../images/femme-violoncelle.jpg"
import logo from "../images/logo.png"
import Navbar from '../components/navbar';
import { Link } from 'react-scroll'

const PresentationPage = () => (
  <Layout>
    <section className="hero is-primary is-fullheight" style={{ backgroundImage: 'url(' + violoncelle + ')', backgroundSize: "cover" }}>
      <div className="hero-head">
        <header className="navbar has-text-grey-darker" style={{ backgroundColor: '#ffffffbf' }}>
          <div className="container">
            <div className="navbar-brand">

              <img src={logo} alt="Logo" style={{ width: 128, height: 128 }} />
              <span className="navbar-burger burger" data-target="navbarMenuHeroC">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroC" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item has-text-grey-darker is-active">
                  Home
            </a>
                <a className="navbar-item has-text-grey-darker">
                  Examples
            </a>
                <a className="navbar-item has-text-grey-darker">
                  Documentation
            </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">Présentation</h1>
          <span className="cta-btn cta-btn--hero">
            <Link to="suite" smooth duration={1000}>
              Découvrir
            </Link>
          </span>
        </div>
      </div>
    </section>
    <div id="suite" className="container is-widescreen">
      <h1 className="title"> La page de présentation </h1>
      <img src={violoncelle} alt={violoncelle} />
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium nibh ut ante pellentesque aliquet. Donec dictum non lorem non bibendum. Vivamus non lacus eget dolor efficitur fringilla. Duis congue faucibus lorem, in ultricies nisi sagittis quis. Nam pulvinar nibh nunc, in commodo ex elementum nec. In facilisis semper arcu, ut congue velit congue vel. Sed nec orci molestie, dictum sapien a, consequat ante.
          <br /><br />
          Curabitur neque nunc, fringilla id volutpat vitae, consectetur venenatis quam. Proin aliquam urna a diam dictum, a lacinia nisi consequat. Ut dignissim mi vel tempus pretium. Nulla fringilla vehicula malesuada. Integer fringilla dolor sed neque consectetur, sed egestas ex efficitur. In diam justo, bibendum vel nulla ut, bibendum dictum elit. Mauris consectetur purus quis dui maximus volutpat. Nullam sagittis non felis id egestas. Aliquam id augue eleifend urna blandit aliquam quis sed dolor. Nunc vehicula justo id odio facilisis ullamcorper. Mauris eget quam sed sem vulputate bibendum. Ut eu erat quis dui posuere feugiat quis eget mauris. Nullam et finibus elit, ut pulvinar ante. Nam est nibh, luctus eget nibh eu, vulputate interdum lacus. Suspendisse at porta enim, vitae sollicitudin urna. In bibendum pharetra augue.
          <br /><br />
          Aenean condimentum vestibulum nibh sed euismod. Donec sem erat, ullamcorper eget leo sit amet, feugiat venenatis risus. Suspendisse potenti. Maecenas auctor scelerisque augue, vitae feugiat risus scelerisque vitae. Morbi volutpat laoreet dapibus. Vestibulum eget hendrerit odio, at blandit sapien. Suspendisse turpis enim, mollis quis arcu non, volutpat vestibulum nibh. Aenean fringilla tristique sem a malesuada. In id auctor turpis, quis consequat eros. Duis fringilla tempor ante, eget pellentesque lacus sodales eget. Phasellus molestie sollicitudin dignissim. Maecenas eu erat at neque lacinia congue.
          <br /><br />
          Donec quis lectus vitae ante finibus mollis. Donec a dui feugiat, ullamcorper lectus in, vestibulum libero. Cras ultrices lorem a quam hendrerit vestibulum. Integer tincidunt lacus et quam laoreet fringilla. Praesent viverra, erat vel vehicula hendrerit, enim tellus eleifend leo, ut facilisis sapien neque sit amet dui. Maecenas sodales mollis nisl convallis cursus. Cras mollis, massa vel sagittis egestas, ipsum lectus scelerisque urna, et rhoncus velit nulla nec orci.
          <br /><br />
          Quisque vitae risus id arcu tincidunt varius vitae imperdiet turpis. Aliquam erat volutpat. Nullam eu dolor rutrum, pellentesque dui nec, auctor erat. Duis nec quam id erat suscipit semper. Sed sit amet urna ut sapien vestibulum egestas. Cras consequat elit ac hendrerit blandit. Proin porta laoreet aliquet. Nam quam felis, semper at maximus vel, placerat non leo. Phasellus eget euismod ipsum.
        </p>
      </div>
    </div>
  </Layout>
)
export default PresentationPage;
