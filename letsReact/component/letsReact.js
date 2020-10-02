import React from "react";

function letsReact(){
 return (
    <div>
        <div>
            <div id="mapDiv">
                <img className="mapSection" id="daMap" src={} alt={}/>
                <div class="mapSection" id="besideDaMap">
                    <div id="electoral">It will take 270 electoral votes to win the 2020 presidential election.</div>
                </div>
            </div>

        </div>
        <div id="thisIsLegit">
            <div class="votersIn">
                <img class="voteImages" src="./letsReact/voting-by-mail-could-lead-to-prosecution.jpg" />
                <h4>This Election Voting is Different! In-person voting begins October 30th and will be open through November 3, 2020. Vote Centers provide full voting services, all while allowing you to vote at any location.</h4>
            </div>
            <div class="votersIn">
                <img class="voteImages" src="./letsReact/page-header.jpeg" />
                <h4>Choose to Vote in person (with COVID-19 safety precautions) over a 5 day period: Oct.30 - Nov.3. Vote Centers provide full voting services, all while allowing you to vote at any location.</h4>
            </div>
            <div class="votersIn">
                <img class="voteImages" src="./letsReact/vote.jpg" />
                <h4>In-person voting begins October 30th and will be open through November 3, 2020. Vote Centers provide full voting services, all while allowing you to vote at any location.</h4>
            </div>
        </div>
    </div>

    );
}

export default letsReact;