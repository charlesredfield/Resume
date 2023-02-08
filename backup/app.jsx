import { Paralax, ParallaxLayer } from '@react-spring/paralax';

function App() {
    
    return (
        <div>
            <Parallax pages={4}>
                <ParallaxLayer>
            <h2>Welcome to my website</h2>
              </ParallaxLayer>
              
              <ParallaxLayer>
            <h2>Web Development is fun!</h2>
              </ParallaxLayer>
        
        
            </Parallax>
        </div
        );
}

export default App;