import React, { useState, useEffect } from 'react'
import firebase from '../firebase'

function useTimes() {
    const [times, setTimes] = useState([])
    useEffect(() => {
        firebase
            .firestore()
            .collection('times')
            .onSnapshot((snapshot) => {
                const newTimes = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setTimes(newTimes)
            })
    }, [])

    return times
}

const TimesList = () => {
    const times = useTimes()
    return (
        <div>
            <h2>Times List</h2>
            <div>
                <select>
                    <option>Time (Fastest first)</option>
                    <option>Time (Slowest first)</option>
                    <option disabled>---</option>
                    <option>Title (a-z)</option>
                    <option>Title (z-a)</option>
                </select>
            </div>
            <ol>
                {times.map((time) =>
                        <li key={times.id}>
                        <div className="time-entry">
                            <code className="time">{time.time_seconds} seconds</code>
                        </div>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default TimesList