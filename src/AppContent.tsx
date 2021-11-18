import { useState } from "react";
type Props = { fname: string, lname: string, dataEx: Function}
function AppContent(props:Props) {
    
    return (
        <main id="main">
            <label id="fnamel">First Name:</label>
            <input id="fnamei" value={props.fname} onChange={(event) => props.dataEx(event.target.value, props.lname)}></input>
            <label id="lnamel">Last Name:</label>
            <input id="lnamei" value={props.lname} onChange={(event) => props.dataEx(props.fname, event.target.value)}></input>
        </main>);
}

export default AppContent;

/**
 * 
 * 
 * <AppContent>
 *  <Sidebar />
 *  <RightSide>
 *    <PanelInfo />
 *      <Title>
 *       <inpur />
 *    <PanelInfo
 * </Right>
 */