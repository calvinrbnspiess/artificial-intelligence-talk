import React from 'react';
import { Slide, CodePane, Heading } from 'spectacle';
import images from './../assets';

const sources =
`https://techcrunch.com/2016/03/15/google-ai-beats-go-world-champion-again-to-complete-historic-4-1-series-victory/
https://www.thesun.co.uk/news/2683474/artificial-intelligence-is-now-smarter-than-the-average-american-researchers-reveal/
http://www.independent.co.uk/life-style/gadgets-and-tech/news/japanese-company-robot-insurance-artificial-intelligence-ai-fukoku-mutual-life-a7511416.html
http://www.digitaltrends.com/computing/ai-heart-disease/
https://electrek.co/2016/12/27/tesla-autopilot-radar-technology-predict-accident-dashcam/
http://spectrum.ieee.org/automaton/robotics/artificial-intelligence/deep-learning-ai-listens-to-machines-for-signs-of-trouble
http://thenextweb.com/artificial-intelligence/2017/01/23/poker-ai-humans-torunament/
http://www.chicagotribune.com/news/opinion/editorials/ct-ai-machines-artificial-intelligence-brain-edit-0102-md-20161229-story.html
https://www.youtube.com/watch?v=P7XHzqZjXQs&t=544s
https://en.wikipedia.org/wiki/Artificial_intelligence
https://en.wikipedia.org/wiki/Machine_learning
Https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_neural_networks.htm
https://appliedgo.net/perceptron/
https://www.youtube.com/watch?v=b99UVkWzYTQ&index=1&list=PLjJh1vlSEYgvGod9wWiydumYl8hOXixNu (whole series)
https://www.youtube.com/watch?v=bxe2T-V8XRs
https://blogs.nvidia.com/blog/2016/07/29/whats-difference-artificial-intelligence-machine-learning-deep-learning-ai/
https://www.quora.com/What-is-the-difference-between-deep-learning-and-usual-machine-learning
https://en.wikipedia.org/wiki/Human_brain
https://en.wikipedia.org/wiki/Neuron
https://en.wikipedia.org/wiki/Dendrite
https://www.quora.com/What-are-the-main-differences-between-artificial-intelligence-and-machine-learning
http://thehustle.co/machine-learning-AI
https://www.quora.com/What-are-the-subfields-of-AI
https://www.academia.edu/12302148/Artificial_Intelligence_Science_and_Impact_Slides_
https://en.wikipedia.org/wiki/Artificial_neuron
http://aiehive.com/introduction-artificial-intelligence/
https://intelligence.org/2014/01/28/how-big-is-ai/
http://machinelearningmastery.com/where-does-machine-learning-fit-in/
http://stats.stackexchange.com/questions/5026/what-is-the-difference-between-data-mining-statistics-machine-learning-and-ai
http://www.forbes.com/sites/bernardmarr/2016/09/30/what-are-the-top-10-use-cases-for-machine-learning-and-ai/#7580b6710cf9
http://www.digitaltrends.com/cool-tech/types-of-artificial-intelligence/
http://machinelearningmastery.com/classification-and-regression-trees-for-machine-learning/
https://www.analyticsvidhya.com/blog/2015/07/difference-machine-learning-statistical-modeling/
http://davidvandegrift.com/blog?id=42
https://en.wikipedia.org/wiki/Computer_vision
https://en.wikipedia.org/wiki/Pattern_recognition
https://en.wikipedia.org/wiki/Outlier#Detection
https://en.wikipedia.org/wiki/Data_mining
https://en.wikipedia.org/wiki/Artificial_philosophy
https://en.wikipedia.org/wiki/Philosophy_of_artificial_intelligence
https://en.wikipedia.org/wiki/Ethics_of_artificial_intelligence
https://en.wikipedia.org/wiki/Knowledge_representation_and_reasoning
http://europe.newsweek.com/robot-economy-artificial-intelligence-jobs-happy-ending-526467?rm=eu
http://www.forbes.com/sites/chriscancialosi/2016/10/18/how-artificial-intelligence-is-redefining-the-future-of-work/#2ed3728f742f
https://ai100.stanford.edu/sites/default/files/ai_100_report_0831fnl.pdf
http://onboardinformatics.com/blog/artificial-intelligence-real-estate-today-tomorrow-future/
http://www.predictiveanalyticsworld.com/patimes/amazon-knows-what-you-want-before-you-buy-it/3185/
http://siliconvalleynest.com/the-impact-of-artificial-intelligence-ai-in-todays-and-tomorrows-world/
https://en.wikipedia.org/wiki/AI_takeover
http://beebom.com/examples-of-artificial-intelligence/
https://s-media-cache-ak0.pinimg.com/originals/78/89/18/78891877aa411c5fd54b02131c4f1969.jpg
http://www.nickbostrom.com/ethics/ai.html
https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAATeAAAAJGI1NWMzNTQyLTdjNzYtNGRlOC1iMjkwLWIxYjExMDkxNjVmMA.png
https://appliedgo.net/perceptron/
`;

const Sources = props => (
  <Slide {...props} transition={['slide']} bgDarken={0.85} bgImage={images.bookstore}>
    <Heading caps textColor="tertiary" margin="0 0 15px 0">Sources</Heading>
    <CodePane style={{ maxHeight: 450, fontSize: '0.25em' }} source={sources} />
  </Slide>
);

export default Sources;
