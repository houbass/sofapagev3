
import React,{useState} from "react";
import './App.css';

//imported stuffs
import Menu from './components/Menu';
import MainContent from './components/MainContent';
import Playlist from './components/Playlist';
import Releases from './components/Releases';
import Submitpage from "./components/Submitpage";
import Contact from "./components/Contact";
import Submit from "./components/Submit";
import Playlistsubmit from "./components/Playlistsubmit";
import Thanksdemo from "./components/Thanksdemo";


function App() {
  //pages visibility states
  const [homepage, setHomepage] = useState(0);
  const [releases, setReleases] = useState(-1);
  const [submit, setSubmit] = useState(-1);
  const [contact, setContact] = useState(-1);
  const [submitDemo, setSubmitDemo] = useState(-1);
  const [playlistSubmit, setPlaylistSubmit] = useState(-1);
  const [thanksDemo, setThanksDemo] = useState(-1);
  //menu font size
  const [relfontsize, setRelfontsize] = useState("100%"); 
  const [subfontsize, setSubfontsize] = useState("100%");
  const [contfontsize, setContfontsize] = useState("100%");
  const menuSizeValue = "130%"; 
  //pages transition opacity states
  const pagesTransition = "2s ease";
  const [homePageOpacity, setHomePageOpacity] = useState(1);
  const [releasesPageOpacity, setReleasesPageOpacity] = useState(0);
  const [submitPageOpacity, setSubmitPageOpacity] = useState(0);
  const [contactPageOpacity, setContactPageOpacity] = useState(0);
  const [submitDemoOpacity, setSubmitDemoOpacity] = useState(0);
  const [playlistSubmitOpacity, setPlaylistSubmitOpacity] = useState(0);
  const [thanksDemoOpacity, setThanksDemoOpacity] = useState(0);
  //states pro pohyb playlistu
  const [playlistMargin, setPlaylistMargin] = useState("700px");



  //funkce pro menu HOMEPAGE
  const homeFun = () => {
    console.log("homeFun funguje");
    //page visibility
    setHomepage(0);
    setReleases(-1);
    setSubmit(-1);
    setContact(-1);
    setSubmitDemo(-1);
    setPlaylistSubmit(-1);
    setThanksDemo(-1);
    //page opacity
    setHomePageOpacity(1);
    setReleasesPageOpacity(0);
    setSubmitPageOpacity(0);
    setContactPageOpacity(0);
    setSubmitDemoOpacity(0); 
    setPlaylistSubmitOpacity(0);
    setThanksDemoOpacity(0)
    //menu font size
    setRelfontsize("100%");
    setSubfontsize("100%");
    setContfontsize("100%");
    //playlist position
    setPlaylistMargin("700px");
  };

  //funkce pro RELEASES
  const releasesFun = () => {
    console.log("releaseFun funguje");
    //page visibility
    setReleases(0);
    setHomepage(-1);
    setSubmit(-1);
    setContact(-1);
    setSubmitDemo(-1);
    setPlaylistSubmit(-1);
    setThanksDemo(-1);
    //page opacity
    setHomePageOpacity(0);
    setReleasesPageOpacity(1);
    setSubmitPageOpacity(0);    
    setContactPageOpacity(0);
    setSubmitDemoOpacity(0);
    setPlaylistSubmitOpacity(0); 
    setThanksDemoOpacity(0)
    //menu font size
    setRelfontsize(menuSizeValue);
    setSubfontsize("100%");
    setContfontsize("100%");
    //playlist position
    setPlaylistMargin("1200px");
  
  };

  //funkce pro SUBMIT
  const submitFun = () => {
    console.log("submitFun funguje");
    //page visibility
    setSubmit(0);
    setReleases(-1);
    setHomepage(-1);
    setContact(-1);
    setSubmitDemo(-1);
    setPlaylistSubmit(-1);
    setThanksDemo(-1);  
    //page opacity
    setHomePageOpacity(0);
    setReleasesPageOpacity(0);
    setSubmitPageOpacity(1);
    setContactPageOpacity(0);
    setSubmitDemoOpacity(0); 
    setPlaylistSubmitOpacity(0); 
    setThanksDemoOpacity(0)
    //menu font size
    setRelfontsize("100%");
    setSubfontsize(menuSizeValue);
    setContfontsize("100%");
    //playlist position
    setPlaylistMargin("580px");    
  };

  //funkce pro CONTACT
  const contactFun = () => {
    console.log("contactFun funguje");
    //page visibility    
    setContact(0);
    setSubmit(-1);
    setReleases(-1);
    setHomepage(-1);
    setSubmitDemo(-1);
    setPlaylistSubmit(-1);  
    setThanksDemo(-1);  
    //page opacity
    setHomePageOpacity(0);
    setReleasesPageOpacity(0);
    setSubmitPageOpacity(0);
    setContactPageOpacity(1);     
    setSubmitDemoOpacity(0); 
    setPlaylistSubmitOpacity(0); 
    setThanksDemoOpacity(0)
    //menu font size
    setRelfontsize("100%");
    setSubfontsize("100%");
    setContfontsize(menuSizeValue);
    //playlist position
    setPlaylistMargin("600px");
  };



  //funkce pro playlistPage
  const playlistPage = () => {
    //page visibility  
    setPlaylistSubmit(0);
    setSubmit(-1);
    setThanksDemo(-1);  
    //page opacity
    setPlaylistSubmitOpacity(1);
    setSubmitPageOpacity(0);
    setThanksDemoOpacity(0);
    //playlist position
    setPlaylistMargin("1000px");
  }

  //funkce pro demoPage
  const demoPage = () => {
    //page visibility  
    setSubmitDemo(0);
    setSubmit(-1);
    setThanksDemo(-1);  
    //page opacity
    setSubmitDemoOpacity(1);
    setSubmitPageOpacity(0);
    setThanksDemoOpacity(0);
    //playlist position
    setPlaylistMargin("1000px");
  }

  //funkce pro thanks demo show
  const thanksDemoShow = () => {
    console.log("thanks demo show funguje")
    //page visibility  
    setThanksDemo(0);
    setSubmitDemo(-1);
    setPlaylistSubmit(-1);
    //page opacity
    setThanksDemoOpacity(1);
    setSubmitDemoOpacity(0);
    setPlaylistSubmitOpacity(0);
    //playlist position
    setPlaylistMargin("450px");
  }

  return (
    <div className="App">
      <Menu 
      homeClick={homeFun} 
      releasesClick={releasesFun} 
      submitClick={submitFun} 
      contactClick={contactFun} 
      subfontsize={subfontsize} 
      relfontsize={relfontsize}
      contfontsize={contfontsize}
      />
      <MainContent visibility={homepage} opacity={homePageOpacity} transition={pagesTransition}/>
      <Releases visibility={releases} opacity={releasesPageOpacity} transition={pagesTransition}/>
      <Submitpage visibility={submit} opacity={submitPageOpacity} transition={pagesTransition} demoPage={demoPage} playlistPage={playlistPage}/>
      <Playlistsubmit visibility={playlistSubmit} opacity={playlistSubmitOpacity} transition={pagesTransition} thanksDemoShow={thanksDemoShow}/>

      <Submit visibility={submitDemo} opacity={submitDemoOpacity} transition={pagesTransition} thanksDemoShow={thanksDemoShow}/>

      <Contact visibility={contact} opacity={contactPageOpacity} transition={pagesTransition}/>

      <Thanksdemo visibility={thanksDemo} opacity={thanksDemoOpacity} transition={pagesTransition} submitFun={submitFun} homeFun={homeFun}/>

      <div style={{ 
        marginTop: playlistMargin,
        transition: "2s"
        }}>
          <Playlist />
      </div>
    </div>
  );
}

export default App;
