import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CardPage from './card/CardPage';
import projectData from './card/data.json';
function ProjectPage() {
  return (
    <div>
        <Tabs>
            <TabList>
                <Tab>Python</Tab>
                <Tab>React</Tab>
                <Tab>Flutter</Tab>
                <Tab>Java</Tab>
            </TabList>
            <TabPanel>
                <h2>Python</h2>
                <p>Pythonのプロジェクト</p>
                <CardPage projects={projectData.Python} />
            </TabPanel>
            <TabPanel>
                <h2>React</h2>
                <p>Reactのプロジェクト</p>
                <CardPage projects={projectData.React} />
            </TabPanel>
            <TabPanel>
                <h2>Flutter</h2>
                <p>Flutterのプロジェクト</p>
                <CardPage projects={projectData.Flutter} />
            </TabPanel>
            <TabPanel>
                <h2>Java</h2>
                <p>Javaのプロジェクト</p>
                <CardPage projects={projectData.Java} />
            </TabPanel>
        </Tabs>
    </div>
  )
}

export default ProjectPage