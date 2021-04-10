import React, { useState, useEffect } from 'react'
import firebase from "../../Firebase/firestore"
import { Table } from "antd"


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

const DailyPick = ({ dateProp }) => {
    const datas = useData()

    const [filter, setFilter] = useState(dateProp);

    useEffect(() => {
        setFilter(dateProp)
        //console.log(datas)
    })




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
            filteredValue: ["true"],
            onFilter: (value, record) => record.remove.indexOf(value) === 0,
        },

        {
            filteredValue: [filter],
            onFilter: (value, record) => {

                if ((new Date(filter).getDate() === new Date(record.date).getDate()) &&
                    (new Date(filter).getMonth() === new Date(record.date).getMonth())) return true; else return false;
            },
        },
    ];


    return (
        <div>

            <Table dataSource={datas} columns={columns} tableLayout={"fixed"} pagination={{ position: ["none", "none"] }} scroll={{ y: 150 }}>
            </Table>


        </div>
    )
}

export default DailyPick

