
import { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../components/sideNav.css';
import {AiFillDashboard,AiFillSetting} from 'react-icons/ai';
import {BsFillHandThumbsUpFill,BsFillPeopleFill} from 'react-icons/bs';
import {MdInventory2,MdSettings} from 'react-icons/md';
import {FcSalesPerformance} from 'react-icons/fc';
import {IoMdAnalytics} from 'react-icons/io';
import {TiThMenuOutline} from 'react-icons/ti';

export default function SideNav(){
    const [collBool, setCheck] = useState(false);
    function some_fun() {
        setCheck(collBool => {
           return !collBool
    })
    }

    // setCheck(collBool => !collBool)

   return (
           
        <ProSidebar className='sideBar' collapsed={collBool}>
            
            <div className='BrandName'>
                CRM
            </div>
            <button onClick={some_fun}>button</button>

            <Menu className='menus' iconShape="square">
               

                <MenuItem icon={<AiFillDashboard/>} > Dashboard</MenuItem>
                
                <MenuItem icon={<BsFillHandThumbsUpFill/>} >  Deals</MenuItem>
               
                <MenuItem icon={ <MdInventory2/>}> Inventory</MenuItem>
               
                
                <SubMenu title="Customers" icon={<BsFillPeopleFill/>}> 
                <BsFillPeopleFill/>
                    <MenuItem>Contacts</MenuItem>
                    <MenuItem>Company</MenuItem>
                    <MenuItem>Contacts Center</MenuItem>
                </SubMenu>

                <SubMenu title="Sales" icon= {<FcSalesPerformance/>}>
                    <MenuItem>Invoice</MenuItem>
                    <MenuItem>Quotes</MenuItem>
                    <MenuItem>Sales Center</MenuItem>
                </SubMenu>

                <SubMenu title="Analytics" icon={<IoMdAnalytics/>}>
                    <MenuItem>Sales Funnel</MenuItem>
                    <MenuItem>Employee performance</MenuItem>
                    <MenuItem>Call Analytics</MenuItem>
                    <MenuItem>Conversation Analytics</MenuItem>
                    <MenuItem>Sales Intelligence</MenuItem>
                    <MenuItem>Report Vizard</MenuItem>
                </SubMenu>

                <SubMenu title="Settings" icon={<MdSettings/>} >
                    <MenuItem>CRM Settings</MenuItem>
                    <MenuItem>My Company Details</MenuItem>
                    <MenuItem>Access Permissions</MenuItem>
                    <MenuItem>CRM Payment</MenuItem>
                    <MenuItem>Smart Process Automation</MenuItem>
                </SubMenu>

            </Menu>

            
        </ProSidebar>
       ) 
       
}