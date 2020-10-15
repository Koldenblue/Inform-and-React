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


export default ({ loading, user }) => {
  let history = useHistory();

  console.log(user, loading)
 
  let styles = {
    whoRepsYou: {
      // background: `url(${bg}) center center no-repeat`,
      backgroundImage: `url(${bg})`,
      // height: '500px',
      backgroundSize: 'cover',
      // position: 'relative',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }
  }

  return (
    <>
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

      
      <div style={styles.whoRepsYou}>
      <section className='container clearfix' id="localReps">
        <WhoRepresentsYou loading={loading} user={user} />
      </section>
      </div>

      <div className='sunset-colors'>
      <HeroBar positioning='mid' />
        <Posters />
      <HeroBar positioning='mid' />
      </div>

      <section className='container justify-content-center clearfix' id="votingInAction">
        <ControlledCarousel className="mx-auto" />
      </section>

      <section id="propSection">
        {/* <HeroBar positioning='mid'/> */}
        <Propositions />
      </section>

      <section className="container" id="letsReact">
        <LetsReact />
      </section>

      <section id="pollingCenters">
        <PollingCenters user={user} loading={loading} />
      </section>

      <HeroBar positioning='bottom' />

    </>
  )
}
