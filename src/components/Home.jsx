import {useState} from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

function Home(){
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <div className="tabview-demo">
            <div className="card">
                <TabView >
                    <TabPanel header="Pocket Post Social">
                        <p>Lorem Social.</p>
                    </TabPanel>
                    <TabPanel header="Pocket Post Business">
                        <p>Lorem Business.</p>
                    </TabPanel>
                </TabView>
            </div>
        </div>
    )
}

export default Home;