import React from 'react'
import ReactDOM from 'react-dom'
import './assets/sass/style.scss'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Provider } from 'react-redux';
import { addBlog } from './tools/action/blogAction'
import configureStore from './tools/store/configureStore'
import { ModeProvider } from './context/ModeContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from 'react-use-wishlist';


const store = configureStore();

store.subscribe(()=>{
    console.log(store.getState());
})


store.dispatch(addBlog({title:'Flower Arrangement Tips & Tricks from Floral Experts',img:'https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-blog-1.jpg.webp',desc:'Websites in professional use templating systems. Commercial publishing platforms and content management systems ensure that you can show different text, different data using the same template. When it’s about controlling hundreds of articles, product pages for web shops, or user profiles in social networks, all of them potentially with different sizes, formats, rules for differing elements things can break, designs agreed upon can have unintended consequences and look much different than expected.What’s included When you purchase a plant from Léon & George, each order is prepared with the utmost care and service: Sourced from top California growers,Hand-selected for health, shape and beauty ,Cleaned and shined with our own all-natural soaps,Trimmed and pruned for blemishes,Inspected and treated with systemic bug protection Soil is topped with preserved forest moss for a refined finished touch Carefully wrapped, packed and sealed for their journey to you When ordered with a ceramic pot.',date:'11 MAY',type:'DESIGN TIPS'}))
store.dispatch(addBlog({title:'How Often & How Much You Should Water Houseplants',img:'https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-blog-2.jpg.webp',desc:'Chances are there wasn’t collaboration, communication, and checkpoints, there wasn’t a process agreed upon or specified with the granularity required. It’s content strategy gone awry right from the start. Forswearing the use of Lorem Ipsum wouldn’t have helped, won’t help now. It’s like saying you’re a bad designer, use less bold text, don’t use italics in every other paragraph. True enough, but that’s not all that it takes to get things back on track.I’ve heard the argument that “lorem ipsum” is effective in wireframing or design because it helps people focus on the actual layout, or color scheme, or whatever. What kills me here is that we’re talking about creating a user experience that will (whether we like it or not) be DRIVEN by words. The entire structure of the page or app flow is FOR THE WORDS.',date:'30 APR',type:'DESIGN TIPS,INTERVIEWS'}))
store.dispatch(addBlog({title:'Top 10 Tips and Tricks To Beat the Winter Blues',img:'https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-blog-3.jpg.webp',desc:'You begin with a text, you sculpt information, you chisel away what’s not needed, you come to the point, make things clear, add value, you’re a content person, you like words.Design is no afterthought, far from it, but it comes in a deserved second. Anyway, you still use Lorem Ipsum and rightly so, as it will always have a place in the web workers toolbox, as things happen, not always the way you like it, not always in the preferred order.Plant Details Fiddle Leaf Figs are a popular plant with interior designers and often appear in the pages of trendy magazines as a staple of fashion brand photography. Standing at over 6 feet tall the Fiddle Leaf Fig Tree is the perfect balance of volume and grace. This plant is truly a must-have for all who appreciate style and greenery.Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy, no less. ',date:'09 APR',type:'COMMON CARE QUESTIONS'}))
store.dispatch(addBlog({title:'How to increase humidity for houseplants	',img:'https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-blog-4.jpg.webp',desc:'Sourced from top California growers,Hand-selected for health, shape and beauty ,Cleaned and shined with our own all-natural soaps,Trimmed and pruned for blemishes,Inspected and treated with systemic bug protection Soil is topped with preserved forest moss for a refined finished touch Carefully wrapped, packed and sealed for their journey to you When ordered with a ceramic pot, your set is assembled with our staging method for optimal airflow and drainage. Léon & George plants are fitted into the highest quality of small batch, hand-finished stoneware ceramic pots, which are renowned for their high-fire, waterproof, ultra-strong material.',date:'05 APR',type:'DESIGN TIPS'}))
store.dispatch(addBlog({title:'The benefits of houseplants',img:'https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-blog-5.jpg.webp',desc:'If that’s what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader. Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets.Websites in professional use templating systems. Commercial publishing platforms and content management systems ensure that you can show different text, different data using the same template. When it’s about controlling hundreds of articles, product pages for web shops, or user profiles in social networks, all of them potentially with different sizes, formats, rules for differing elements things can break, designs agreed upon can have unintended consequences and look much different than expected.',date:'23 MAR',type:'COMMON CARE QUESTIONS'}))
store.dispatch(addBlog({title:'What is biophilic design?',img:'https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-blog-6.jpg.webp',desc:'Consider this: You made all the required mock ups for commissioned layout, got all the approvals.Note: this plant is hyper-sensitive to environmental changes. The plant might shed leaves in the first weeks as it adapts to new light, humidity, and temperature conditions.Sized to fit 14″ or 7g grower pots with extra room for drainage,Glazed inside and out, completely waterproof,No drainage hole, plant should be staged, ideal for indoor or outdoor use,Elevated by a sleek wood stand – teak wood for the light and dark stained options, mahogany wood for the black stained option,Finished with non-toxic, non-VOC oil ,Chances are there wasn’t collaboration, communication, and checkpoints, there wasn’t a process agreed upon or specified with the granularity required. It’s content strategy gone awry right from the start. Forswearing the use of Lorem Ipsum wouldn’t have helped, won’t help now. It’s like saying you’re a bad designer, use less bold text, don’t use italics in every other paragraph. True enough, but that’s not all that it takes to get things back on track.',date:'01 MAR',type:'DESIGN TIPS'}))

ReactDOM.createRoot(document.getElementById('root')).render(

   <WishlistProvider>
   <CartProvider>
   <ModeProvider>
   <ProductProvider>
   <Provider store={store}>
   <App />
   </Provider>
   </ProductProvider>
   </ModeProvider>
   </CartProvider>
   </WishlistProvider>
)
