import React from 'react'
import Navbar from '../../components/navbar/nav';
import S_nav from "../comp/secondary_nav/police_nav";

import { Fade } from "react-awesome-reveal";
import "./common.css";
const viewfeed = () => {
  return (
   <>
    <Navbar />
    <S_nav />
    <Fade>
    <div className="station_title">KHATIPURA STATION</div>
    <div className="cummulative">
        <h1>Commulative Feedback</h1>
        <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsum velit inventore mollitia iste dolorum quia ut! Cum quo repellat ullam, delectus enim ipsam accusantium optio, commodi tempora vitae quaerat? Dolor iusto voluptas pariatur voluptatum id, laudantium veniam assumenda harum placeat, nostrum commodi laboriosam accusantium soluta repellat est reiciendis labore.
        </p>
    </div>
    <div className="individual">
        <h1>Individual Feedbacks</h1>
    <table>
    <thead>
      <tr>
        <th>Age Group</th>
        <th>Response</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td>18-25</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Positive</td>
      </tr>

   
      <tr>
        <td>26-35</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Negative</td>
      </tr>

      <tr>
        <td>18-25</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Positive</td>
      </tr>
      
      <tr>
        <td>26-35</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Negative</td>
      </tr>

      <tr>
        <td>18-25</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Positive</td>
      </tr>

   
      <tr>
        <td>26-35</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Negative</td>
      </tr>

      <tr>
        <td>18-25</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Positive</td>
      </tr>

   
      <tr>
        <td>26-35</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Negative</td>
      </tr>

      <tr>
        <td>18-25</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Positive</td>
      </tr>

   
      <tr>
        <td>26-35</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Negative</td>
      </tr>

      <tr>
        <td>18-25</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Positive</td>
      </tr>

   
      <tr>
        <td>26-35</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Negative</td>
      </tr>

      <tr>
        <td>18-25</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Positive</td>
      </tr>

   
      <tr>
        <td>26-35</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
        <td>Negative</td>
      </tr>

    

    </tbody>
    </table>
    </div>
    </Fade>
   </>
  )
}

export default viewfeed
