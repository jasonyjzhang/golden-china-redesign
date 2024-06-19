import { useState } from "react";
import jsonData from "../data.json";
import Card from "../components/Card";
import appetizersPic from '../assets/appetizers.webp';
import soupPic from '../assets/soup.webp';
import friedRicePic from '../assets/friedRice.webp';
import loMeinPic from '../assets/loMein.webp';
import meiFunPic from '../assets/meiFun.webp';
import comboPlattersPic from '../assets/comboPlatters.webp';
import localFavoritesPic from '../assets/localFavorites.webp';
import chefSpecialPic from '../assets/chefSpecials.webp';

export default function Menu() {
  const [activeTab, setActiveTab] = useState('all');
  const tabs = [
    {dataString: 'all', name: 'All',},
    {dataString: 'appetizers', name: 'Appetizers', image: appetizersPic, additionalInfo: null},
    {dataString: 'soup', name: 'Soup', image: soupPic, additionalInfo: null},
    {dataString: 'fried-rice', name: 'Fried Rice', image: friedRicePic, additionalInfo: null},
    {dataString: 'lo-mein', name: 'Lo Mein', image: loMeinPic, additionalInfo: null},
    {dataString: 'mei-fun', name: 'Mei Fun', image: meiFunPic, additionalInfo: null},
    {dataString: 'combo-platters', name: 'Combo Platters', image: comboPlattersPic, additionalInfo: 'comes with fried rice and egg roll'},
    {dataString: 'local-favorites', name: 'Local Favorites', image: localFavoritesPic, additionalInfo: 'comes with a small box of white rice'},
    {dataString: 'chef-specials', name: 'Chef Specials', image: chefSpecialPic, additionalInfo: 'comes with a small box of white rice'},
  ];
  const filteredTabs = activeTab === 'all' ? tabs.slice(1) : tabs.filter(tab => tab.dataString === activeTab);
  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    document.body.scrollTop = 0;
  }
  return (
    <div className={`mt-16`}>
      <div>
        <ul className={`w-full fixed flex overflow-x-scroll gap-x-4 text-sm text-gray-500 bg-white border-b border-dark z-20`} role="tablist">
          {tabs.map((tab, index) => {
            return <button key={index} onClick={() => handleTabChange(tab.dataString)} className={`inline-block whitespace-nowrap p-4 border-b-2 hover:text-dark ${activeTab === tab.dataString ? 'text-dark border-dark' : 'border-white'} ${tab.dataString === 'all' && 'ml-8 lg:ml-24'}`} type="button" role="tab" aria-controls={tab.dataString}>{tab.name}</button>
          })}
        </ul>
      </div>
      <div className={`pt-28 lg:pt-36`}>
      {
        filteredTabs.map(tab => (
          <div className={`px-8 lg:px-24`}>
            <div className={`relative flex flex-col items-center`}>
              <img src={tab.image} alt={tab.name} className={`mx-auto`} />
              <h1 className={`absolute whitespace-nowrap top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl lg:text-3xl`}>{tab.name}</h1>
              {
                tab.additionalInfo !== null && <h2 className={`mt-2 font-semibold`}>{tab.additionalInfo}</h2>
              }
            </div>
            <div className={`grid lg:grid-cols-2 gap-y-8 lg:gap-y-12 my-16 lg:my-24 justify-items-center`}>
              {jsonData[tab.dataString].map((item, index) => {
                return <Card key={index} name={item.dish} price={item.price} spicy={item.spicy}/>
              })}
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
};