import React from "react";

// Mininav from blender template. JQuery dropdown doesn't work though. 
function Mininav() {
  return (
    <div class="bar">
      <div class="container_12">

        <div class="grid_10">
          <div class="mininav">
            <a href="#">Affiliates</a>&nbsp; &nbsp;<a href="#">Register</a>&nbsp; &nbsp;<a href="#">Client
            Area</a>&nbsp; &nbsp;<a href="#">Newsletter</a>&nbsp; &nbsp;<a href="#">Subscribe</a>&nbsp;
          &nbsp;<a href="#">Login</a>&nbsp; &nbsp;<a href="#">Contact</a>
          </div>
        </div>
      </div>

      <div class="grid_2">
        <ul id="dropmenu">
          <li><a href="#">Dropdown Menu<span></span></a>
            <div class="sub">
              <ul>
                <li><a href="#">Themeforest</a></li>
                <li><a href="#">Codecanyon</a></li>
                <li><a href="#">Activeden</a></li>
                <li><a href="#">Videohive</a></li>
                <li><a href="#">Audiojungle</a></li>
                <li><a href="#">Graphicriver</a></li>
                <li><a href="#">3docean</a></li>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">Photodune</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>


  )
}

export default Mininav;