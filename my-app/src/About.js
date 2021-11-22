import React from "react"
import MyPic from "./Me.jpg"



//REACT FONT AWESOME

const Element = () => {
    return (
        <>
     
        <div className="row">
        <div className="box">
        <div class="col-lg-12">
        <hr/>
        <h2 class="intro-text text-center">
               ABOUT ME
            </h2>
            <hr/>
            <img class="center" src={MyPic} width="300" height="300"  alt=""/>
            <hr class="visible-xs"/>
            <p>Hi! My name is Ndumiso Buthelezi, I design and develop web applications. I am a well organized and determined graduate from the Durban University of Technology seeking a position as an entry level web developer/designer. I am passionate about building because I enjoy the process of piecing things together in order to produce a master piece that is at my level at that point, so this field is perfecet for me,<br/> since I am also very eager to grow and want to end up being one of the best to do it.<br/> Below I have listed my skills and experience.
            </p>
            <h3> Skills</h3>
            <hr/>
            <li>Languages: C#, Python, Html, CSS, JavaScript.</li>
            <li>Technologies: Visual Studio, .NET, ASP.NET, Azure, Azure Blob Storage, Git, Entity Framework.</li>
            <p/>
            <h3> Experience</h3>
            <hr/>
            <h5> Izinto Cleaning (Durban University of Technology Project)</h5>
            <p> July 2019 – Nov 2019</p>
            <li> Built system with ASP.NET allowing users to request services online</li>
            <li> Implemented payment sandbox using Payfast</li>
            <li> Implemented UI template using CSHTML and CSS</li>
            <li> Deployed project to Azure for online hosting</li>
            <hr/>
            <h5> Online Clothing Store (Durban University of Technology Project)</h5>
            <p> Feb 2020– Nov 2020</p>
            <li> Built system with ASP.NET allowing users to purchase and pay for goods online</li>
            <li> Implemented payment sandbox using Payfast</li>
            <li> Allows user to personalize their account with wishlist</li>
            <li> Tracking orders and confirming delivery with QR code</li>
            <li>Automated emails sent to user to update about order status</li>
            <hr/>
            <h5> Commu-Balance  (Durban University of Technology Project)	</h5>
            <p> March 2021 – April 2021</p>
            <li> Built system with ASP .NET allowing users to be donors or recipients</li>
            <li> Implemented payment sandbox using Payfast for donors to donate funds</li>
            <li> Allow donors to download receipts for donations made </li>
            <li> Implemented tracking for donations made and requests received for current month</li>
            <li> Allows recipients to track donation packages that are delivered monthly</li>
            <li> Implemented delivery confirmation with QR code</li>          
  
        </div>
        </div>

        </div>
        </>
    )
}
export default Element;
