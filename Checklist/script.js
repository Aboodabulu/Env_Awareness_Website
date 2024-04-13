// JavaScript
function changeContent(section) {
    const contentArea = document.getElementById('content-area');
  
    // Default content for each section
    const content = {
        'instructions': `
          <h1>Instructions</h1>
          <p>Many people care deeply about the Earth but they might not be doing as much as they could because they're not sure which actions are the most important. They might feel overwhelmed or powerless, like their efforts won’t make a difference. And they might not see other people around them taking action.</p>
          <p>The Earth is My Home Initiative aims to help people take small meaningful actions that can lead to bigger ones. We do this by researching for you which actions are the most helpful, showing you that more and more people are doing these things, creating conversation starters, and giving you support and thanks for your efforts to help nature.</p>
          <p>Thank you for completing our checklist of actions that help the Earth! Many of the actions may be new to you. That's okay! We hope you will learn some helpful ideas along the way.</p>
          <p>Let’s get started!</p>
          <ol>
            <li>For the actions that you do most of the time, check the square “I do this now”</li>
            <li>If you don’t do an action now, but would like to start, check the square “I plan to do this”</li>
            <li>If you don’t do an action now and are not planning to start, leave the squares blank.</li>
            <li>To learn “how” and “why” for a checklist action, click on the little <img src='bee.png' alt='Bee' class='inline-image'>.</li>
            <li>Make a plan with your friends and family for how to support each other in your new actions.</li>
            <li>Spread the word! Share this checklist with at least 2 new people... let’s make these actions commonplace!</li>
          </ol>
          <p>All participants will be sent a personal thank you and an Earth is My Home Award by email based on their checklist scores. We will also send you our “NEW ECO-ACTIONS LIST” based on your stars. Then, in a few weeks, we will send you another email to see how you are doing with the actions on your list. You will be able to share your experiences, complete the checklist again, and earn a new award.</p>
        `,
        'nature': `
            <div id="nature-content" class="content-section">
                <div class="nature-header">
                    <img src="bee.png" alt="Bee" class="nature-image">
                    <h1>Nature</h1>
                    <button class="learn-more-btn">Learn More</button>
                </div>

                <hr class="section-divider">

                <div class="checkbox_detail">
                    <h2>I spend time in nature !</h2>
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I visit parks and other nature spaces (walks, birdwatching, gardening, harvesting food, watching the stars, etc.) in all seasons &#128029;</p>
                    </div>
                </div>

                
                <hr class="section-divider">

                <div class="checkbox_detail">
                    
                    <h2>I take care of nature in my yard and in gardens ! </h2>

                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I do not use pesticides (insecticides, herbicides, or fungicides) in my yard &#128029;</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I do not use artificial fertilizers in my yard &#128029;</p>
                    </div>
                </div>
                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I have an organic vegetable and/or fruit garden &#128029;</p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I improve the health of soil &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I incorporate cover crops, compost, and/or pollinator strips into my garden &#128029;</p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; </span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I plant trees and shrubs that are suited to my local eco-system in my yard and/or when there are community volunteer opportunities &#128029;</p>
                    </div>
                </div>

                <div class="activity8">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>My yard has native plants &#128029;</p>
                    </div>
                </div>

                <div class="activity9">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I participate in No Mow May &#128029;</p>
                    </div>
                </div>

                <div class="activity10">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I reduce mowing and mow my grass to greater than 3 inches &#128029;</p>
                    </div>
                </div>

                <div class="activity11">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I add clover  to my lawn or converted my lawn to a pollinator lawn &#128029;</p>
                    </div>
                </div>

                <div class="activity12">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I compost my leaves, mow my leaves into my lawn, and/or use leaves for mulch &#128029;</p>
                    </div>
                </div>
                


                <hr class="section-divider">

                <div class="checkbox_detail">
                    <h2>I create habitats for animals, bats, bees, insects, and birds !</h2>
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I create monarch waystations in my yard, in containers, or in other places &#128029;</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I create pollinator gardens or large-scale pollinator plantings in my yard, in containers, or in other places &#128029;</p>
                    </div>
                </div>
                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I create nesting habitats for native bees in my yard, in containers, or in other places &#128029;</p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I installed a pollinator habitat signs near plantings &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I turn off the outside lights at night or use motion-detector lights &#128029;</p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                    <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I provide habitat for bats instead of spraying for mosquitos &#128029;</p>
                    </div>
                </div>

                <div class="activity8">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I practice responsible bird feeding, including proper feed, cleaning, and upkeep &#128029;</p>
                    </div>
                </div>

                <div class="activity9">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I wait until mid-spring to clean up my garden to support wildlife &#128029;</p>
                    </div>
                </div>

                <div class="nature-header">
                    <button class="learn-more-btn">Submit</button>
                </div>

            </div>
        `,



        'home-energy': `

        <div id="nature-content" class="content-section">
        <div class="nature-header">
            <img src="home.png" alt="Home" class="nature-image">
            <h1>Home Energy</h1>
            <button class="learn-more-btn">Learn More</button>
        </div>

        <hr class="section-divider">

        <div class="checkbox_detail">
            <h2>I save energy with heating and cooling to reduce pollution!!</h2>
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">I do this now</span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">I plan to do this</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="activity2">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I keep the heat low and stay warm inside by wearing long underwear, sweaters, and hats. &#128029;</p>
            </div>
        </div>

        <div class="activity3">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I reduce my use of air conditioning and stay cool inside by wearing fewer clothes and closing the blinds. &#128029;</p>
            </div>
        </div>

        <div class="activity4">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I use an electric heat pump for heating water. &#128029;</p>
            </div>
        </div>

        <div class="activity5">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I use an electric heat pump for heating and cooling &#128029;</p>
            </div>
        </div>

        <div class="activity6">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I lower the thermostat on my hot water heater to 120 degrees F &#128029;</p>
            </div>
        </div>

        <div class="activity7">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; </span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I install high efficiency and Energy star models when heating and cooling units in my home need replacement. &#128029;</p>
            </div>
        </div>

        <div class="activity8">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                <label>
                    <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; </span>
                    <input type="checkbox" name="activity-now">
                    <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                </label>
                </div>
                <p>I installed an insulating blanket on my electric water heater. &#128029;</p>
            </div>
        </div>


        
        <hr class="section-divider">

        <div class="checkbox_detail">
            
            <h2>I save energy in other ways !!</h2>

            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">I do this now</span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">I plan to do this</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="activity2">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I had a home energy assessment. &#128029;</p>
            </div>
        </div>

        <div class="activity3">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I use energy saving compact fluorescent light bulbs. &#128029;</p>
            </div>
        </div>

        <div class="activity4">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I seal windows, doors, and leaks in my home. &#128029;</p>
            </div>
        </div>

        <div class="activity5">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I installed insulation in my attic and home. &#128029;</p>
            </div>
        </div>

        <div class="activity6">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I air dry my clothes instead of using a dryer. &#128029;</p>
            </div>
        </div>

        <div class="activity8">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I wash clothes in full loads with cold water &#128029;</p>
            </div>
        </div>

        <div class="activity7">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I install high efficiency and Energy Star appliances including refrigerators and freezers when my older ones need replacement &#128029;</p>
            </div>
        </div>

        <div class="activity9">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I install triple-pane windows with low-emissivity coatings when my windows need replacement. &#128029;</p>
            </div>
        </div>

        <div class="activity10">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I am aware of my local utility's rebates for energy efficient appliances &#128029;</p>
            </div>
        </div>

        <div class="activity11">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I use a mechanical or electric-powered mower instead of a gas-powered mower to mow my lawn &#128029;</p>
            </div>
        </div>

        <div class="activity12">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I minimize my use of power tools  &#128029;</p>
            </div>
        </div>

        <div class="activity13">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I use electric, not gas, power tools. &#128029;</p>
            </div>
        </div>

        <div class="activity14">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I rake leaves instead of using a leaf blower. &#128029;</p>
            </div>
        </div>

        <div class="activity15">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I only use my dishwasher when it is completely full. &#128029;</p>
            </div>
        </div>

        <div class="activity16">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I double up on cooking (i.e. boil eggs with pasta) and fill the oven when I turn it on.  &#128029;</p>
            </div>
        </div>

        <div class="activity17">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I unplug appliances, computers, and TV's when not in use. &#128029;</p>
            </div>
        </div>

        <div class="activity18">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I turn off the lights when no one is in a room (this is called the “halo effect”). &#128029;</p>
            </div>
        </div>

        <div class="activity19">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I limit my TV and other screen time. &#128029;</p>
            </div>
        </div>
        

        <hr class="section-divider">

        <div class="checkbox_detail">
            <h2>My home uses renewable energy (solar, wind, geothermal, or hydropower)</h2>
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">I do this now</span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">I plan to do this</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="activity2">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>The electricity for my home is powered by renewable energy. &#128029;</p>
            </div>
        </div>

        <div class="activity3">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>The water in my house is heated by renewable energy. &#128029;</p>
            </div>
        </div>
        <div class="activity4">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>The heat for my home is powered by renewable energy. &#128029;</p>
            </div>
        </div>

        <div class="activity5">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>The air conditioning for my home is powered by renewable energy. &#128029;</p>
            </div>
        </div>

        <div class="activity6">
            <div class="checkbox-container">
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                    </label>
                </div>
                <div class="checkbox-item">
                    <label>
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <input type="checkbox" name="activity-now">
                        <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                    </label>
                </div>
                <p>I am aware of Michigan Saves to finance types of renewable energy at my home. &#128029;</p>
            </div>
        </div>

        <div class="nature-header">
            <button class="learn-more-btn">Submit</button>
        </div>

    </div>
        `,








        'food': `
          

        <div id="nature-content" class="content-section">
            <div class="nature-header">
                <img src="food.png" alt="Food" class="nature-image">
                <h1>Food</h1>
                <button class="learn-more-btn">Learn More</button>
            </div>

            <hr class="section-divider">

            <div class="checkbox_detail">
                <h2>I support local, fair trade, and regenerative and indigenous agriculture. </h2>
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">I do this now</span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">I plan to do this</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="activity2">
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        </label>
                    </div>
                    <p>I eat local, organic, seasonal, and/or regenerative food. &#128029;</p>
                </div>
            </div>

            <div class="activity3">
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        </label>
                    </div>
                    <p>I purchase fair trade foods, products from B corporations, and from companies that support a living wage. &#128029;</p>
                </div>
            </div>

            <div class="activity4">
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        </label>
                    </div>
                    <p>I responsibly hunt, fish, or forage for food following state and local guidelines. &#128029;</p>
                </div>
            </div>

            <div class="activity5">
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        </label>
                    </div>
                    <p>I avoid eating palm oil. &#128029;</p>
                </div>
            </div>

            
            <hr class="section-divider">

            <div class="checkbox_detail">
                
                <h2>I eat plant-based foods and regenerative foods !!</h2>

                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">I do this now</span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">I plan to do this</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="activity2">
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        </label>
                    </div>
                    <p>The foods/drinks I consume are all or mostly plant-based (such as beans, nuts, and tofu as protein sources). &#128029;</p>
                </div>
            </div>

            <div class="activity3">
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        </label>
                    </div>
                    <p>I eat none or only small amounts of beef and lamb OR the beef and lamb I eat are regeneratively raised. &#128029;</p>
                </div>
            </div>

            <div class="activity4">
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        </label>
                    </div>
                    <p>I eat none or only small amounts of dairy foods OR the dairy foods I eat are regeneratively raised. &#128029;</p>
                </div>
            </div>

            <div class="activity5">
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        </label>
                    </div>
                    <p>I eat none or only small amounts of pork OR the pork I eat are regeneratively raised. &#128029;</p>
                </div>
            </div>

            <div class="activity6">
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        </label>
                    </div>
                    <p>I eat none or only small amounts of poultry OR the poultry I eat are regeneratively raised. &#128029;</p>
                </div>
            </div>

            <div class="activity8">
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        </label>
                    </div>
                    <p>I eat none or only small amounts of eggs OR the eggs I eat are regeneratively raised. &#128029;</p>
                </div>
            </div>

            <div class="activity7">
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; </span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        </label>
                    </div>
                    <p>I eat none or only small amounts of fish and seafood OR the fish and seafood I eat is labeled “best choices” by the Monterey Bay Aquarium Seafood Watch. &#128029;</p>
                </div>
            </div>

            <hr class="section-divider">

            <div class="checkbox_detail">
                <h2>I reduce food waste</h2>
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">I do this now</span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">I plan to do this</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="activity2">
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        </label>
                    </div>
                    <p>I reduce food waste by meal prepping, buying only what I need, preserving food, and/or eating leftovers. &#128029;</p>
                </div>
            </div>

            <div class="activity3">
                <div class="checkbox-container">
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                        </label>
                    </div>
                    <div class="checkbox-item">
                        <label>
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                            <input type="checkbox" name="activity-now">
                            <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                        </label>
                    </div>
                    <p>I compost kitchen scraps with a home compost pile or worm bin, or a municipal compost system. &#128029;</p>
                </div>
            </div>
            
            <div class="nature-header">
                <button class="learn-more-btn">Submit</button>
            </div>

        </div>
        `,








        'plastic': `

            <div id="nature-content" class="content-section">
                <div class="nature-header">
                    <img src="fish.png" alt="Fish" class="nature-image">
                    <h1>Plastic, Paper, Water, Waste, and Stuff</h1>
                    <button class="learn-more-btn">Learn More</button>
                </div>

                <hr class="section-divider">

                <div class="checkbox_detail">
                    <h2>I use less plastic to reduce pollution in oceans and waterways (there are apps that can help). </h2>
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use reusable/washable utensils, bottles, dishware, and containers instead of single-use disposable plastic for drinks and meals. &#128029;</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp;&nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I bring reusable/washable bags when I shop. &#128029;</p>
                    </div>
                </div>

                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; </span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I prefer restaurants that participate in returnable container programs or bring my own reusable containers to restaurants for take-out and leftovers. &#128029;</p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp;&nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use compostable or biodegradable plastics when I must use plastic. &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use plastic free and eco-friendly cleaning supplies like vinegar and baking soda. &#128029;</p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use plastic free and eco-friendly hygiene and cosmetic products. &#128029;</p>
                    </div>
                </div>

                <hr class="section-divider">

                <div class="checkbox_detail">
                    
                    <h2>I use less paper to save trees</h2>

                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use a bidet instead of toilet paper. &#128029;</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use recycled toilet paper that is sustainably sourced or bamboo. &#128029;</p>
                    </div>
                </div>

                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I limit my use of disposable paper towels, tissues, and napkins. &#128029;</p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use cloth towels instead of paper towels. &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use cloth napkins instead of paper napkins. &#128029;</p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use cloth handkerchiefs instead of paper tissues. &#128029;</p>
                    </div>
                </div>

                <div class="activity8">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp;&nbsp;&nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
                            </label>
                        </div>
                        <p>I use recycled paper towels. &#128029;</p>
                    </div>
                </div>

                <div class="activity9">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use recycled paper napkins. &#128029;</p>
                    </div>
                </div>

                <div class="activity10">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use recycled tissues. &#128029;</p>
                    </div>
                </div>

                <div class="activity11">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use recycled office paper. &#128029;</p>
                    </div>
                </div>

                <div class="activity12">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use scrap paper for printing/writing. &#128029;</p>
                    </div>
                </div>

                <hr class="section-divider">

                <div class="checkbox_detail">
                    <h2>I save water</h2>
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use a low flow shower head. &#128029;</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I use a low flow toilet. &#128029;</p>
                    </div>
                </div>

                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I reduce my time in the shower and bath (less than 8 minutes per shower). &#128029;</p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I repair household water leaks (shower, toilet, faucet, outdoor). &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I reduce watering my lawn. &#128029;</p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I turn off the water when it's not being used when doing dishes, brushing teeth, etc. &#128029;</p>
                    </div>
                </div>
                

                <hr class="section-divider">

                <div class="checkbox_detail">
                    <h2>I reduce waste</h2>
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I make sure the refrigerants in my old refrigerator are captured before it is thrown out. &#128029;</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I bring my old electronics and appliances to recycling centers. &#128029;</p>
                    </div>
                </div>

                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; </span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I donate or repurpose clothes, shoes, furniture, and other things I no longer use or need, rather than throwing them out. &#128029;</p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I bring my own reusable containers to shop in bulk sections. &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I avoid supporting new building construction. &#128029;</p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I refrain from littering and pick up trash when I see it. &#128029;</p>
                    </div>
                </div>



                <hr class="section-divider">

                <div class="checkbox_detail">
                    <h2>I reduce the amount of stuff I buy</h2>
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I borrow items I need from friends/family/neighbors, the library, or lending libraries instead of buying new. &#128029;</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I purchase clothes at secondhand stores. &#128029;</p>
                    </div>
                </div>

                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I purchase furniture and appliances at secondhand stores - for survey just furniture. &#128029;</p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I purchase fair trade products, products from B corporations, and from companies that support a living wage. &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I keep computers and cell phones as long as possible. &#128029;</p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>If I must buy something new, I purchase more durable items. &#128029;</p>
                    </div>
                </div>

                <div class="nature-header">
                    <button class="learn-more-btn">Submit</button>
                </div>

            </div>
    
        `,












        'transport': `

          <div id="nature-content" class="content-section">
                <div class="nature-header">
                    <img src="cycle.png" alt="Cycle" class="nature-image">
                    <h1>Transportation and Travel</h1>
                    <button class="learn-more-btn">Learn More</button>
                </div>

                <hr class="section-divider">

                <div class="checkbox_detail">
                    <h2>To get to work or school, on most days:</h2>
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I bike or walk. &#128029;</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I take public transportation. &#128029;</p>
                    </div>
                </div>

                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I carpool. &#128029;</p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I drive an electric car. &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I work or go to school from home, or I don't commute to a job or school. &#128029;</p>
                    </div>
                </div>
                
                <hr class="section-divider">

                <div class="checkbox_detail">
                    
                    <h2>For shopping and recreation, on most days: </h2>

                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I bike or walk. &#128029;</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I take public transportation. &#128029;</p>
                    </div>
                </div>

                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I carpool. &#128029;</p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I drive an electric car. &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I play close to home. &#128029;</p>
                    </div>
                </div>

                <hr class="section-divider">

                <div class="checkbox_detail">
                    <h2>I reduce my use of gas in other ways to reduce pollution</h2>
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p> try to drive as little as possible and consider alternative means of transportation when possible. &#128029;</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>My children walk, bike, or take the bus to school. &#128029;</p>
                    </div>
                </div>
                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I turn off my car when standing still and limit my use of drive-throughs at restaurants and stores. &#128029;</p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I practice “trip chaining” and minimizing driving for errands. &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I make gas mileage and reduction in pollution my most important priority when buying or renting new vehicle. &#128029;</p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I install high rolling resistance tires on my car when my tires need replacement. &#128029;</p>
                    </div>
                </div>

                <div class="activity8">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I practice routine auto maintenance including regular oil, air filter, and oxygen sensor changes, and maintaining recommended tire pressure. &#128029;</p>
                    </div>
                </div>

                <div class="activity9">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I remove excess weight from my car when I am driving. &#128029;</p>
                    </div>
                </div>

                <div class="activity10">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I avoid sudden acceleration and stops. &#128029;</p>
                    </div>
                </div>

                <div class="activity11">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I maintain less than 65 mph speed when driving on the highway. &#128029;</p>
                    </div>
                </div>




                <hr class="section-divider">

                <div class="checkbox_detail">
                    <h2>I limit air and single-person car travel to reduce pollution</h2>
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p> For work-related long-distance travel, I use video conferencing instead. &#128029;</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I carpool for long distance travel for work. &#128029;</p>
                    </div>
                </div>

                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I carpool for long distance travel for recreation. &#128029;</p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I take trains and/or buses instead of driving long distances for work. &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I take trains and/or buses instead of driving long distances for recreation. &#128029;</p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I take trains and/or buses instead of flying for work. &#128029;</p>
                    </div>
                </div>

                <div class="activity8">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I take trains and/or buses instead of flying for recreation. &#128029;</p>
                    </div>
                </div>

                <div class="activity9">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I limit my international travel for work. &#128029;</p>
                    </div>
                </div>

                <div class="activity10">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I limit my international travel for recreation. &#128029;</p>
                    </div>
                </div>

                <div class="nature-header">
                    <button class="learn-more-btn">Submit</button>
                </div>

            </div>

        `,











        'learn': `

        
                <div id="nature-content" class="content-section">
                <div class="nature-header">
                    <img src="man.png" alt="Man" class="nature-image">
                    <h1>Learn, Connect, Advocate, and Volunteer</h1>
                    <button class="learn-more-btn">Learn More</button>
                </div>

                <hr class="section-divider">

                <div class="checkbox_detail">
                    <h2>I learn about nature</h2>
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I learn about how to protect wildlife, biodiversity, native plants, pollinators, and greenspace. &#128029;</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; </span>
                            </label>
                        </div>
                        <p>I learn about indigenous knowledge, including historical and contemporary relationships and stewardship with nature in the area where I live. &#128029;</p>
                    </div>
                </div>

                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; </span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I learn about energy conservation, phasing out coal and gas-powered energy, and expanding renewable energy. &#128029;</p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
                            </label>
                        </div>
                        <p>I learn about maximizing recycling, minimizing waste of all kinds, and supporting municipal composting and closed loop manufacturing (where companies take the waste back). &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I learn about which trees and other plants are suitable for my local ecosystem. &#128029;</p>
                    </div>
                </div>
                
                <hr class="section-divider">

                <div class="checkbox_detail">
                    
                    <h2>I volunteer for nature </h2>

                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I volunteer or demonstrate for a nature-based organization. &#128029;</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I joined Homegrown National Park. &#128029;</p>
                    </div>
                </div>

                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I create nesting habitats for native bees in my yard, in containers, or in other places. &#128029;</p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I volunteer at a local park or nature center. &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I am a Master Gardener. &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I participate in nature-related citizen science projects. &#128029;</p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I educate others about which trees and other plants are suitable for my local ecosystem. &#128029;</p>
                    </div>
                </div>

                <hr class="section-divider">

                <div class="checkbox_detail">
                    <h2>I advocate for nature</h2>
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p> I encourage my city to create a Tree Advocate position. &#128029;</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I encourage my city to become a certified Bee City USA by Xerces Society. &#128029;</p>
                    </div>
                </div>
                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I took the Michigan Pledge to Help Pollinators. &#128029;</p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I am aware of Michigan Interfaith Power and Light, which supports places of worship in sustainability and energy efficiency. &#128029;</p>
                    </div>
                </div>

                <div class="sentence">
                    <p>To support 1) limiting development of natural areas to preserve wildlife, biodiversity, pollinators, and greenspace, and 2) planting vegetable and fruit gardens, trees and pollinator gardens: &#128029;</p>
                </div>

                <div class="checkbox_detail">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p> I talk with my elected and non-elected local government officials.</p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I talk with businesses. </p>
                    </div>
                </div>
                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I talk with organizations. </p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I talk with places of worship. </p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I talk with schools. </p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I write articles for media. </p>
                    </div>
                </div>

                <div class="activity7">
                    <p>To support energy conservation, phasing out coal and gas-powered energy, and expanding renewable energy: &#128029;</p>
                </div>

                <div class="checkbox_detail">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p> I talk with my elected and non-elected local government officials. </p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I talk with businesses. </p>
                    </div>
                </div>
                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I talk with organizations. </p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I talk with places of worship. </p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I talk with schools. </p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I write articles for media. </p>
                    </div>
                </div>

                <div class="activity7">
                    <p>To support maximizing recycling, minimizing waste of all kinds, and supporting municipal composting and closed loop manufacturing (where companies take the waste back): &#128029;</p>
                </div>

                <div class="checkbox_detail">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p> I talk with my elected and non-elected local government officials. </p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I talk with businesses. </p>
                    </div>
                </div>
                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I talk with organizations. </p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I talk with places of worship. </p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I talk with schools. </p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I write articles for media. </p>
                    </div>
                </div>



                <hr class="section-divider">

                <div class="checkbox_detail">
                    <h2>I talk with my family, friends, neighbors and co-workers about helping nature </h2>
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>I shared this survey with other people. </p>
                    </div>
                </div>

                <div class="sentence">
                    <p>My family/household talks about how we can work together on: &#128029;</p>
                </div>

                <div class="checkbox_detail">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p> Home Energy </p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Food </p>
                    </div>
                </div>
                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Plastic </p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Paper. </p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Water. </p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Waste</p>
                    </div>
                </div>


                <div class="activity8">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Stuff</p>
                    </div>
                </div>

                <div class="activity9">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Transportation</p>
                    </div>
                </div>

                <div class="activity10">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Travel</p>
                    </div>
                </div>

                <div class="activity11">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Nature</p>
                    </div>
                </div>

                <div class="activity12">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Learn</p>
                    </div>
                </div>

                <div class="activity13">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Advocate</p>
                    </div>
                </div>

                <div class="activity14">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Volunteer</p>
                    </div>
                </div>

                <div class="activity7">
                    <p>I talk with my friends and neighbors about how we can work together on: &#128029;</p>
                </div>

                <div class="checkbox_detail">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p> Home Energy </p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Food </p>
                    </div>
                </div>
                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Plastic </p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Paper. </p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Water. </p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Waste</p>
                    </div>
                </div>


                <div class="activity8">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Stuff</p>
                    </div>
                </div>

                <div class="activity9">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Transportation</p>
                    </div>
                </div>

                <div class="activity10">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Travel</p>
                    </div>
                </div>

                <div class="activity11">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Nature</p>
                    </div>
                </div>

                <div class="activity12">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Learn</p>
                    </div>
                </div>

                <div class="activity13">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Advocate</p>
                    </div>
                </div>

                <div class="activity14">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Volunteer</p>
                    </div>
                </div>




                <div class="activity7">
                    <p>I talk with my employer and co-workers about how we can work together on: &#128029;</p>
                </div>

                <div class="checkbox_detail">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I do this now</span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">I plan to do this</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="activity2">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p> Home Energy </p>
                    </div>
                </div>

                <div class="activity3">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Food </p>
                    </div>
                </div>
                <div class="activity4">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Plastic </p>
                    </div>
                </div>

                <div class="activity5">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Paper. </p>
                    </div>
                </div>

                <div class="activity6">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Water. </p>
                    </div>
                </div>

                <div class="activity7">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Waste</p>
                    </div>
                </div>


                <div class="activity8">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Stuff</p>
                    </div>
                </div>

                <div class="activity9">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Transportation</p>
                    </div>
                </div>

                <div class="activity10">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Travel</p>
                    </div>
                </div>

                <div class="activity11">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Nature</p>
                    </div>
                </div>

                <div class="activity12">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Learn</p>
                    </div>
                </div>

                <div class="activity13">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Advocate</p>
                    </div>
                </div>

                <div class="activity14">
                    <div class="checkbox-container">
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    </span>
                            </label>
                        </div>
                        <div class="checkbox-item">
                            <label>
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                <input type="checkbox" name="activity-now">
                                <span class="checkbox-label-text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span>
                            </label>
                        </div>
                        <p>Volunteer</p>
                    </div>
                </div>


                <div class="nature-header">
                    <button class="learn-more-btn">Submit</button>
                </div>



        `,
      };
      
  
    // Change the content of the right-side pane
    contentArea.innerHTML = content[section];
  }
  