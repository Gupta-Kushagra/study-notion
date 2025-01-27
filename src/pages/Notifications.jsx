import React from "react";

import { Tabs } from "antd";
import { useSelector } from "react-redux";

function Notifications() {
    const {user} = useSelector((state) => state.user);
    return (
    <div >
            <h1 className="page-title">Notifications</h1>

            <Tabs className='text-white'>

                <Tabs.TabPane tab='Unseen' key={0} className='text-white'>
                    <div className='flex-column justify-content-end'>
                    <h1 className='text-white'> 
                    <a href=''>Mark all as seen</a> </h1>
                    </div>

                    {user.unseenNotifications.map(() => (
                        <div className='card p-2'>
                            <div className='card-text'> </div>
                        </div>
                    ))}
                </Tabs.TabPane>
                <Tabs.TabPane tab='Seen' key={1} className='text-white'>
                <div className='flex-column justify-content-end'>
                    <h1 className='text-white'>
                    <a href=''>Delete All</a> </h1>
                    </div>
                </Tabs.TabPane>
            </Tabs>
            </div>
    )
}
export default Notifications
