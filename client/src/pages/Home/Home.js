import React from "react";
import StylishNav from '../../components/StylishNav'
import EdmundPettus from "../../components/EdmundPettus";
import Polling from '../../components/Polling';
import ControlledCarousel from "../../components/ControlledCarousel";
import MomentCountdown from "../../components/MomentCountdown";

export default ({loading, user}) => {
 return <>
  <StylishNav />
  <EdmundPettus />

     <section className='container' id="momentSection">
        <MomentCountdown />
    </section>
    <section className='container justify-content-center' id="pollingSection">

    {/* <WholeNavBar /> */}
    {/* {whoRepresentsYou}
    {polling} */}
    <Polling className="mx-auto" loading={loading} user={user}/>
    <ControlledCarousel className="mx-auto" />
    </section>
    </>
}

{/* <View>
  <BuffetPlates />
  <Stack size={16} />
  <BuffetPlates />
  <Stack size={16} />
  <BuffetPlates />
  <Stack size={16} />
  <BuffetPlates />
</View> */}