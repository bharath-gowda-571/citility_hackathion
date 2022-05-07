// import React from "react"

// export default function SideNav(){
//     return (<div>
//         something
//     </div>)
// }
import { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../components/sideNav.css';

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
               

                <MenuItem >Dashboard</MenuItem>
                
                <MenuItem >Deals</MenuItem>
               
                <MenuItem >Inventory</MenuItem>
               
                
                <SubMenu title="Customers" >
                    <MenuItem>Contacts</MenuItem>
                    <MenuItem>Company</MenuItem>
                    <MenuItem>Contacts Center</MenuItem>
                </SubMenu>

                <SubMenu title="Sales" >
                    <MenuItem>Invoice</MenuItem>
                    <MenuItem>Quotes</MenuItem>
                    <MenuItem>Sales Center</MenuItem>
                </SubMenu>

                <SubMenu title="Analytics" >
                    <MenuItem>Sales Funnel</MenuItem>
                    <MenuItem>Employee performance</MenuItem>
                    <MenuItem>Call Analytics</MenuItem>
                    <MenuItem>Conversation Analytics</MenuItem>
                    <MenuItem>Sales Intelligence</MenuItem>
                    <MenuItem>Report Vizard</MenuItem>
                </SubMenu>

                <SubMenu title="Settings" >
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