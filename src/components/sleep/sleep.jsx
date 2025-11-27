import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Row } from "react-bootstrap";
import WellnessLogModal from './WellnessLogModal';
import HealthDashboard from './HealthDashboard.JSX';
import Footerpart from './footerpart';
import { mycontext } from '../../App';

function Sleep() {
    const context = useContext(mycontext)
    const [showModal, setShowModal] = useState(false);
    const todayDate = new Date()
    const [wellness, setwellness] = useState([
        {
            id: 1,
            date: "2025-11-26",
            mood: "😐 Neutral",
            stress: 1,
            sleep_duration: 7,
            sleep_quality: "Good",
            notes: "Abc"
        },
        {
            id: 2,
            date: "2025-11-25",
            mood: "😊 Happy",
            stress: 1,
            sleep_duration: 7,
            sleep_quality: "Good",
            notes: "Abc"
        },
        {
            id: 3,
            date: "2025-11-27",
            mood: "😐 Neutral",
            stress: 5,
            sleep_duration: 7,
            sleep_quality: "Good",
            notes: "Abc"
        },
        {
            id: 4,
            date: "2025-11-14",
            mood: "😐 Neutral",
            stress: 5,
            sleep_duration: 7,
            sleep_quality: "Good",
            notes: "Abc"
        },
        {
            id: 5,
            date: "2025-11-12",
            mood: "😐 Neutral",
            stress: 5,
            sleep_duration: 7,
            sleep_quality: "Good",
            notes: "Abc"
        },
        {
            id: 6,
            date: "2025-11-14",
            mood: "😐 Neutral",
            stress: 5,
            sleep_duration: 7,
            sleep_quality: "Good",
            notes: "Abc"
        },
    ])

    const handleSave = (data) => {
        console.log("Saved Wellness Log:", data);
    };

    useEffect(()=>{
        const last7day =  new Date(todayDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        const fillterdata = wellness.filter(wellness => {
            const wellnessdate = new Date(wellness.date);
            return wellnessdate >= last7day && wellnessdate <= todayDate;
        });
        context.setsleepchart(fillterdata)
        // console.log("chart",fillterdata)
        localStorage.setItem("sevendaysleepchart", JSON.stringify(fillterdata))
    },[])

   const filltersleepdata = wellness.filter(item => {
  return new Date(item.date).toDateString() === new Date().toDateString();
});

console.log("Sleep Data:", filltersleepdata);


    return (
        <>
            <div className="slideDown container py-4 Sleep-page">
                <div className="slideDown d-flex justify-content-between align-items-center">
                    <h1 className="fw-bold">My Wellness 🧘</h1>

                    <Button className="addmeal" onClick={() => setShowModal(true)}>
                        <span className="icon">+</span>
                        <span className="text">Log Your Wellness</span>
                    </Button>
                </div>
                <p className="slideDown mb-4">Track your mental health, sleep, stress</p>

                <WellnessLogModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    onSave={handleSave}
                />

                <HealthDashboard  value={filltersleepdata}/>
                <Row>
                    {wellness.length > 0 ? (
                        wellness.sort((a, b) => new Date(b.date) - new Date(a.date)).map((Wellness) => (
                            <Col md={4} key={Wellness.id}>
                                <Card className="slideUp p-3 mb-3 shadow-sm rounded-4 border-0 meal-card">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <div>
                                            <h6 className="fw-semibold mb-1">{Wellness.mood}</h6>
                                            <small className="text-muted">
                                                {new Date(Wellness.date).toLocaleDateString()}
                                            </small>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <i className="bi bi-pencil-square text-secondary" style={{ cursor: "pointer", fontSize: "20px" }} onClick={() => { openedit(Wellness.id) }}></i>
                                            <i className="bi bi-trash text-danger" style={{ cursor: "pointer", fontSize: "20px" }} onClick={() => { deleteNutrition(Wellness.id) }}></i>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-wrap gap-2">
                                        <span className="macro-box calories">Stress Level :- {Wellness.stress}</span>
                                        <span className="macro-box protein">Sleep Duration :- {Wellness.sleep_duration}</span>
                                        <span className="macro-box carbs">Sleep Quality :- {Wellness.sleep_quality}</span>
                                        {/* <span className="macro-box fats">{Wellness.meditation}</span> */}
                                    </div>

                                    {/* <div className="mt-2 small ">
                                       Yoga time :-<span>{Wellness.yoga}</span>
                                    </div> */}

                                    <div className='mt-2 text-primary small'>
                                        <span>Notes :- {Wellness.notes}</span>
                                    </div>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <>
                            <p className="text-muted text-center mt-3">No meals found.</p>
                            <Button variant="success" style={{ width: "200px", marginLeft: "43%" }} onClick={() => setShowModal(true)}>
                                + Log Your First Meal
                            </Button>
                        </>
                    )}
                </Row>
                <Footerpart />
            </div>
        </>
    );
}

export default Sleep;
