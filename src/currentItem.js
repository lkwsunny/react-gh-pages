import React, { useState, useEffect } from 'react'
import { Table } from "antd"
import firebase from "./Firebase/firestore"

function useData() {
    const [datas, setData] = useState([])

    useEffect(() => {
        const unsubcribe = firebase.firestore().collection('itemStorage').onSnapshot((snapShot) => {
            const newData = snapShot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setData(newData)
        })

        return () => unsubcribe()
    }, [])

    return datas
}

const CurrentItem = () => {
    const datas = useData()

    const columns = [
        {
            title: 'Item Name',
            dataIndex: 'itemName',
            key: 'itemName',
            width: 120,
         

        },
        {
            title: 'Type',
            dataIndex: 'itemName',
            key: 'type',
            render: type => {
                if (type === "apple" || type === 'banana' || type === 'lemon' || type === 'orange') {
                    return "fruit";
                } else if (type === 'asparagus' || type === 'celery' || type === 'corn' || type === 'onion') {
                    return "veg";
                } else if (type === 'steak' || type === 'fish') {
                    return "meat";
                } else if (type === 'bread' || type === 'rice') {
                    return "grain";
                } else {
                    return "other";
                }
            },
            width: 120,
        },

        {
            title: 'Put in date',
            dataIndex: 'date',
            key: 'date',
            render: date => {
                date = new Date(date)
                return(date.getDate() + "/"+(date.getMonth()+1) +"/" +date.getFullYear())
            },
            width: 120,
         

        },

        {
           
            defaultFilteredValue: ["false"],
            onFilter: (value, record) => record.remove.indexOf(value) === 0,
            
        },
    ];


    return (
        <div>
            <Table dataSource={datas} columns={columns} tableLayout={"fixed"} pagination={{  position: ["none","none"]}} scroll={{ y: 400 }}>
            </Table>
        </div>
    )
}

export default CurrentItem

