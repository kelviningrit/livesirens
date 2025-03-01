import React, {useState} from 'react'
import fleetbotjson from "../../FleeBotNFT.json"
//import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
//import { ReactComponent as Close } from '../../icons/Close.svg'
import { ReactComponent as Logo } from '../../icons/Logo.svg'
import { ethers, Interface, FormatType} from 'ethers'

import header1 from '../../image/header1.png'
import header2 from '../../image/header2.png'

import './navbar.css'


const iface = new Interface(fleetbotjson.abi)
iface.format(true)

let address, signer, provider

const Navbar = () => {
  const [isConnected, toggleConnected] = useState(false)

  function setAddress(ethaddr) {
    address = ethaddr
    if (address !== null) {
      console.log("Account: ", address)
      alert("Connected: " + address)
    }

  }

  function handleButtonClick() {

    alert("")
    // toggleConnected(!isConnected)
    // if(!isConnected) {
    //   connectWallet()
    // }
    // else {mintNFT()}
  }

  async function mintNFT() {
    const nftContract = new ethers.Contract("0x5fbdb2315678afecb367f032d93f642f64180aa3", iface, signer)
    const nftdata = await nftContract.mintNFT(address, 'https://violet-gentle-jay-860.mypinata.cloud/ipfs/QmfYvBXvFAcLuYVDGeASsBfzWL1YKiTN5PVg1EkESMbicG')
    console.log("nftdata: ", nftdata)
  }

  async function connectWallet() {
    provider = new ethers.BrowserProvider(window.ethereum)

    await provider.send("eth_requestAccounts", [])
    signer = await provider.getSigner();
    setAddress(signer.address)
    let balance = await provider.getBalance(signer.address)
    console.log('balance: ',ethers.formatEther(balance))


  }
  //   const [Mobile, setMobile] = useState(false)
  //   useEffect(() => {
  //     WindowChange()
  //   }, [])

  //   //   const HandleMobileMenu = () => {
  //   //     setMobile(!Mobile)
  //   //   }

  //   const WindowChange = () => {
  //     if (window.innerWidth > 1050) {
  //       setMobile(false)
  //     }
  //   }

  //   window.addEventListener('resize', WindowChange)

  const handleMint = () => {}
  const handleAbout = () => {
    var scroll = document.getElementsByClassName('aboutBC')
    window.scroll({ behavior: 'smooth', top: scroll[0].offsetTop })
  }
  const handleRoadmap = () => {
    var scroll = document.getElementsByClassName('roadmapBC')
    window.scroll({ behavior: 'smooth', top: scroll[0].offsetTop - 20 })
  }
  const handleTeam = () => {
    var scroll = document.getElementsByClassName('teamBackGround')
    window.scroll({ behavior: 'smooth', top: scroll[0].offsetTop - 20 })
  }
  const handleFaq = () => {
    var scroll = document.getElementsByClassName('faqScroll')
    window.scroll({ behavior: 'smooth', top: scroll[0].offsetTop + 20 })
  }

  return (
    <div className='navbar'>
      {/* <div className='navbarMobile'>
        <div className='navbarCenterIcon'>
          <div className='navbarMobileTopRight '>MobileLeftTitle</div>
        </div>
      </div>
      <div className='navbarMobileButton'>
        <MobileMenu className={Mobile ? 'Mobile' : 'Mobile'} onClick={HandleMobileMenu} />
        <div className={Mobile ? 'navbarMobileContainerActive' : 'navbarMobileContainer'}>
          <div className={Mobile ? 'navbarMenu active' : 'navbarMenu'}>
            <div className='navbarMenuContainer'>
              <div className='navbarMobileTop'>
                <div className='navbarMobileTopRight menuOpen'>MobileMenuText</div>
                <div className='navbarMobileTopLeft'>
                  <Close className='CloseIcon' onClick={HandleMobileMenu} />
                </div>
              </div>
              <div className='navbarMobileMain'>
                <div className='navbarCenterLink opacity7'>MobileMenuMiddleText</div>
                <div className='navbarCenterLink navbarRightButton'>MobileMenuButton</div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}

      <div className='navbarContainer SlideRightAnimation'>
        <div className='navbarLeft'></div>
        <div className='navbarCenter'>
          <div className='navbarCenterTop'>
            {/* <Logo /> */}
          </div>
          <div className='navbarCenterBottom'>
            <div className='navbarCenterItem' onClick={handleMint}>
              Mint
            </div>
            <div className='navbarCenterItem' onClick={handleAbout}>
              About Livesirens
            </div>
            <div className='navbarCenterItem' onClick={handleRoadmap}>
              Roadmap
            </div>
            <div className='navbarCenterItem' onClick={handleTeam}>
              Team
            </div>
            <div className='navbarCenterItem' onClick={handleFaq}>
              FAQ
            </div>
          </div>
        </div>
        <div className='navbarRight'></div>
      </div>

      <div className='navbarContainer SlideRightAnimation'>
        <div className='navbarLeft'>
          <img src={header1} alt='' className='navbarBoxImage' />
        </div>
        <div className='navbarCenter'>
          <div className='navbarBox'>
            <div className='navbarBoxTitle'>
              <span className='textHighlight'>Welcome</span> to Livesirens
            </div>
            <div className='navbarBoxSubTitle'>a collection of 5,000 unique NFTs</div>
            <div className='navbarBoxButton' onClick={handleButtonClick}>{(isConnected) ? "MINT NOW" : "CONNECT WALLET"}</div>
          </div>
        </div>
        <div className='navbarRight'>
          <img src={header2} alt='' className='navbarBoxImage' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
