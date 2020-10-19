import React from "react";
import { Redirect, useHistory } from "react-router-dom"
import StylishNav from '../../components/StylishNav'
import EdmundPettus from "../../components/EdmundPettus";
import Polling from '../../components/Polling';
import ControlledCarousel from "../../components/ControlledCarousel";
import MomentCountdown from "../../components/MomentCountdown";
import WholeNavBar from '../../components/WholeNavBar';
import WhoRepresentsYou from "../../components/WhoRepresentsYou";
import Propositions from "../../components/Propositions";
import LetsReact from "../../components/letsReact";
import PollingCenters from "../../components/PollingCenters";
import HeroBar from "../../components/HeroBar";
import Posters from "../../components/Posters";
import bg from "../../assets/baner-bg.jpg";
import bg2 from "../../assets/eagle.jpg";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'


export default ({ loading, user }) => {
  let history = useHistory();

  console.log(user, loading)

  let styles = {
    whoRepsYou: {
      background: `url(${bg}) center center no-repeat`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      width: '120vw'
    },
    propositions: {
      background: `url(${bg2}) center center no-repeat`,
      backgroundSize: 'cover',
      position: 'relative',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      zIndex: '9999'
    }
  }

  return (
    <>
      <Parallax pages={9.4} scrolling={true}>

        <StylishNav />
        <EdmundPettus />
        <HeroBar positioning='top' />

        <div className='lightred'>
          <div className='container' id="momentSection">
            <section className='container clearfix' id="momentSection">
              <MomentCountdown />
            </section>
          </div>
        </div>
        <HeroBar positioning='mid' />

        <ParallaxLayer factor={3} offset={0.1} speed={0.1}>
          <img src={require("../../assets/baner-bg.jpg")} style={styles.whoRepsYou} />
        </ParallaxLayer>
        <section className='container clearfix' id="localReps">
          <WhoRepresentsYou loading={loading} user={user} />
        </section>


        <div className='sunset-colors'>
          <HeroBar positioning='mid' />
          <Posters />
          <HeroBar positioning='mid' />
        </div>

        <section className='container justify-content-center clearfix' id="votingInAction">
          <ControlledCarousel className="mx-auto" />
        </section>

        <HeroBar positioning='mid' />

        <div style={styles.propositions} >
          <section className='container-fluid clearfix' id="propSection">
            {/* <HeroBar positioning='mid'/> */}
            <Propositions />
          </section>
        </div>

        <HeroBar positioning='mid' />

        <section className="container" id="letsReact">
          <LetsReact />
        </section>

        <div className='lightblue'>
          <HeroBar positioning='mid' />

          <section id="pollingCenters">
            <PollingCenters user={user} loading={loading} />
          </section>

          <HeroBar positioning='bottom' />
        </div>
      </Parallax>

    </>
  )
}
