import React from "react";
import { Redirect, useHistory } from "react-router-dom"
import StylishNav from '../../components/StylishNav'
import EdmundPettus from "../../components/EdmundPettus";
import Polling from '../../components/Polling';
import ControlledCarousel from "../../components/ControlledCarousel";
import MomentCountdown from "../../components/MomentCountdown";
import WholeNavBar from '../../components/WholeNavBar';
import WhoRepresentsYou from "../../components/WhoRepresentsYou";

export default ({ loading, user }) => {
  let history = useHistory();

  console.log(user, loading)
  return (
    <>
      <StylishNav />
      <EdmundPettus />
      <div className='container'>
        <section className='container' id="momentSection">
          <MomentCountdown />
        </section>
        <WholeNavBar />
        <WhoRepresentsYou loading={loading} user={user} />
        {/* {polling} */}
        <section className='container justify-content-center' id="pollingSection">
          <Polling className='mx-auto' loading={loading} user={user} />
          <ControlledCarousel className="mx-auto" />
        </section>
      </div>
    </>
  )
}