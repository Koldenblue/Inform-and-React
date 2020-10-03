import React from "react";
<<<<<<< HEAD
import "./letsReact.css";
=======
import download from "../assets/letsReact_img/download.jpeg"
import vote from "../assets/letsReact_img/vote.jpg"
import sign from "../assets/letsReact_img/votesign.jpeg"
import ballot from "../assets/letsReact_img/ballotmail.jpeg"
import counts from "../assets/letsReact_img/votecounts.jpg"
import mailbox from "../assets/letsReact_img/mailbox.jpg"
import safety from "../assets/letsReact_img/covidvoting.jpg"
>>>>>>> 323696d00eb1fba8915258122b202137b8ee572f

import "./letsReact.css";




const LetsReact = () => {
 return (
    <div className="theBody">
        <div>
            <div id="mapDiv">
                <img className="mapSection" id="daMap" alt="electoral map 2020" src={download} />
                <div className="mapSection" id="besideDaMap">
                    <div id="electoral">It will take 270 electoral votes to win the 2020 presidential election.</div>
                </div>
            </div>
        </div>
        <div className="votingInfo">
            <div id="thisIsLegit">
                <div className="votersIn">
                    <img className="voteImages" alt="voting feet" src={vote} />
                    <h2>Election Day</h2>
                    <h4>The date of the 2020 US Election is set by federal law for all Americans. This year Election Day is Tuesday, November 3, 2020. This is also known as the general election.The general election determines which candidate from among the political parties wins. Political party preference has no effect on when you vote during a general election.</h4>
                </div>
                <div className="votersIn">
                    <img className="voteImages" alt="vote here sign" src={sign} />
                    <h2>States Have Different Rules & Timelines</h2>
                    <h4>Voting rules are different in each state. That means that you need to check what options you have for November. There could be early voting, voting by mail, and in-person voting on Election Day. The best source of information for how voting works in your state is your state’s election authority.</h4>
                </div>
                <div className="votersIn">
                    <img className="voteImages" alt="ballot in hand" src={ballot} />
                    <h2>Turn in Your Ballot Early</h2>
                    <h4>Make sure you understand when mail ballots must be postmarked and/or received by an election official in your state to be valid for counting. Then make sure there is enough time to request, receive, and return the mail ballot, whether you do it by mail or at a drop-off location.</h4>
                </div>
            </div>
            <div id="stillTooLegitToQuit">
                <div className="votersIn">
                    <img className="voteImages" alt="you vote counts" src={counts} />
                    <h2>Voter Fraud is Extremely Rare</h2>
                    <h4>Each voter’s identity and eligibility to vote are verified before their ballot is counted. Oregon, the first state to adopt a vote by mail system, has averaged fewer than one case of fraud per year for two decades. Claims of voter fraud are investigated by authorities and can result in criminal charges.</h4>
                </div>
                <div className="votersIn">
                    <img className="voteImages" alt="vote by mail" src={mailbox} />
                    <h2>Consider Voting Your Ballot At Home</h2>
                    <h4>Every voter will receive a ballot through the mail. By voting at home, you will avoid crowd (and COVID-19 safety precautions). Return your ballot via secure drop box, by mail(no postage required), or at one of the Vote Centers.</h4>
                </div>
                <div className="votersIn">
                    <img className="voteImages" alt="cast your ballot with safety" src={safety} />
                    <h2>Cast your ballot at any location</h2>
                    <h4>Vote in person (with COVID-19 safety precautions) over a 5 day period: Oct.30 - Nov.3. Vote Centers provide full voting services, all while allowing you to vote at any location. If you plan to vote in person, wear a mask, consider bringing hand sanitizer, and practice social distancing by standing six feet apart from your fellow voters.</h4>
                </div>
            </div>
        </div>   
    </div>

    );
}

export default LetsReact;