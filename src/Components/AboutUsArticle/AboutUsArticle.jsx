import React from 'react';
import './AboutUsArticle.css';
import {Link} from 'react-router-dom';

const pStyle = {
    marginTop: '20px',
  };
  

const AboutUsArticle = props => (
    
    <section className="article-container">
        
      <div className="article-text">
          
            <p style={pStyle}> <img className="chef-image" src="https://i.imgur.com/fzfNHnK.jpg" ></img> 
            <br></br>
            <br></br>
            
We are the McCullough-Roark family. We are bringing delicious, organic, fresh stone-milled, whole grain, sourdough bread and baked goods to greater Los Angeles and the San Fernando Valley. Organic, whole grain, sourdough is great for the body because the gluten has been pre-digested and broken down by good bacteria during a long, 3-day fermentation that removes any inflammatory response by the body yet retains the fiber and protein found in the “whole grain” living seed.  The added bonus is that the same long fermentation process builds amazing flavor, resulting in delicious bread you don't have to feel guilty about eating!  We are very excited to finally be kicking off our dream of baking organic, whole grain, artisan breads for local farmer’s markets and hope to branch out into a hot food concept using these whole grain breads very soon as well.

            <br></br> <br></br> We can be found at the Malibu Farmer’s Market on Sundays and plan to add more markets as we are able. In addition to our highest quality, artisan breads and baked goods, we eventually will open a retail space where we will sell an array of organic, whole grain and delicious food items, including organic jams, pies, cookies, sourdough whole grain pizza and beer!  
            
            <br></br> <br></br>

            Check is out on <a href="https://www.instagram.com/topangagrainco/">Instagram</a> and <a className="facebook">Facebook</a> and stop by and see us at the Malibu Farmers Market!
            </p>

            

        
      </div>
    
      
    
    </section>

);
export default AboutUsArticle;