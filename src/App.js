import React, { Component } from 'react';
import './App.css';

import Tabs from './components/tabs';

import EventsTab from './components/eventsTab';
import GeneralTab from './components/generalTab';
import ServicesTab from './components/servicesTab';
import SpeakersTab from './components/speakersTab';

import TableEvents from './components/tableEvents';
import TableGeneral from './components/tableGeneral';
import TableServices from './components/tableServices';
import TableSpeakers from './components/tableSpeakers';

import Data from './data';
import UpdateButton from './components/updateButton';
let data = Data;

class App extends Component {
      constructor(props){
          super(props);
          this.state = {
              currentTab : '0'
          };
      }

      getTabChange = (event) => {
          let id = event.target.id;
          console.log(id);
          this.setState({currentTab : id});
      };

      getCurrentTab = () => {
          switch(this.state.currentTab){
              case '0':
                  return (
                      <div>
                          <GeneralTab/>
                          <TableGeneral data={data.general}/>
                      </div>
                  );
              case '1':
                  return (
                      <div>
                          <ServicesTab speakers={data.speakers}/>
                          <TableServices services={data.services} speakers={data.speakers}/>
                      </div>
                  );
              case '2':
                  return (
                      <div>
                          <EventsTab speakers={data.speakers}/>
                          <TableEvents events={data.events} speakers={data.speakers}/>
                      </div>
                  );
              case '3':
                  return (
                      <div>
                          <SpeakersTab/>
                          <TableSpeakers data={data.speakers}/>
                      </div>
                  );
              default:
                  return null;
          }
      };

      render() {
            return (
                  <div className="App">
                      <h1 className="section-heading">Barnes Healing Church Administration Page</h1>
                      <UpdateButton/>
                      <Tabs handleClick={this.getTabChange}/>
                      <div className="main-body container">
                          {this.getCurrentTab()}
                      </div>
                  </div>
            );
      }
}

export default App;
