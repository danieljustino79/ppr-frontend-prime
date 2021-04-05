import { TabView, TabPanel } from 'primereact/tabview';

function Home(){
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