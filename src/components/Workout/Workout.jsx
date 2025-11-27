import React, { useState } from "react";
import { Button, Card, Row, Col, Table } from "react-bootstrap";
import { FaCalendarCheck, FaChartLine, FaFire } from "react-icons/fa";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Clock, Dumbbell } from "lucide-react";
import WorkoutLogModal from "./workoutfrom";

function Workoutpage() {
    const [showModal, setShowModal] = useState(false)
    const [Workout, setworkout] = useState([
        {
            id: 1,
            Date: "2025-11-26",
            Workout: "Morning Run",
            Type: "Cardio",
            Duration: 35,
            Calories: 320,
        },
        {
            id: 2,
            Date: "2025-11-26",
            Workout: "Pushups",
            Type: "Strength",
            Duration: 25,
            Calories: 310,
        },
        {
            id: 3,
            Date: "2025-11-27",
            Workout: "Cycling",
            Type: "Cardio",
            Duration: 20,
            Calories: 110,
        },
        {
            id: 4,
            Date: "2025-11-25",
            Workout: "Yoga Flow",
            Type: "Yoga",
            Duration: 45,
            Calories: 180,
        },
        {
            id: 5,
            Date: "2025-11-24",
            Workout: "Chest Workout",
            Type: "Strength",
            Duration: 50,
            Calories: 410,
        },
        {
            id: 6,
            Date: "2025-11-25",
            Workout: "Chest Workout",
            Type: "Strength",
            Duration: 50,
            Calories: 410,
        },
        {
            id: 7,
            Date: "2025-11-27",
            Workout: "Chest Workout",
            Type: "Strength",
            Duration: 50,
            Calories: 410,
        },
    ]);

    const today = new Date();
    const last7Days = new Date();
    last7Days.setDate(today.getDate() - 7);
    const filteredWorkouts = Workout.filter((item) => {
        const workoutDate = new Date(item.Date);
        return workoutDate >= last7Days && workoutDate <= today;
    });

    const chartData = filteredWorkouts.reduce((acc, curr) => {
        const existing = acc.find(item => item.date === curr.Date);

        if (existing) {
            existing.duration += Number(curr.Duration);
        } else {
            acc.push({
                date: curr.Date,
                duration: Number(curr.Duration)
            });
        }
        return acc;
    }, []);

    const deleteWorkout = (id) => {
        console.log(id)
        const updatedMeals = Workout.filter((workout) => workout.id !== id);
        setworkout(updatedMeals);
        console.log("Nutrition Delete!")
    }

    const editworkout = () => {
        setShowModal(true)
    }

    return (
      <>
        <div className="slideDown container py-4 Workout-page">
            <div className="slideDown d-flex justify-content-between align-items-center mb-4">
                <h1 className="fw-bold">Workout History</h1>
                <Button className="addWorkout" onClick={() => setShowModal(true)}>
                    <span className="icon">+</span>
                    <span className="text">Log Your Workout</span>
                </Button>
            </div>

            <Row className="mb-4">
                <Col md={4}>
                    <Card className="p-3 shadow-sm wicon bg-sky-subtle">
                        <h6 className="text-muted small text-sky">Today's Total Workouts <Dumbbell /></h6>
                        <h3 className="fw-bold text-sky">2</h3>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="p-3 shadow-sm wicon bg-sky-subtle">
                        <h6 className="text-muted small text-sky">Today's Calories Burned <FaFire size={24} /></h6>
                        <h3 className="fw-bold text-sky">520 kcal</h3>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="p-3 shadow-sm wicon bg-sky-subtle">
                        <h6 className="text-muted small text-sky">Today's Total Duration <Clock /></h6>
                        <h3 className="fw-bold text-sky">1h 10 min</h3>
                    </Card>
                </Col>
            </Row>

            <WorkoutLogModal
                show={showModal}
                onHide={() => setShowModal(false)}
                onSave={(newWorkout) => {
                    setworkout([...Workout, {
                        id: Workout.length + 1,
                        Date: newWorkout.date,
                        Workout: newWorkout.workout,
                        Type: newWorkout.type,
                        Duration: Number(newWorkout.duration),
                        Calories: Number(newWorkout.calories),
                    }]);
                }}

            />


            <div className="p-3 shadow-sm mb-4 weeklyprogress">
                <h5 className="fw-bold mb-3 "> <i className="bi bi-graph-up-arrow text-primary"></i> Weekly Progress</h5>
                <div style={{ width: "100%", height: 280 }}>
                    <ResponsiveContainer>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="duration"
                                stroke="#007bff"
                                strokeWidth={3}
                                dot={true}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <Card className="p-3 shadow-sm mb-4 ">
                <h5 className="fw-bold mb-3">Recent Workouts</h5>
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Workout</th>
                            <th>Type</th>
                            <th>Duration</th>
                            <th>Calories</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Workout.sort((a, b) => new Date(b.Date) - new Date(a.Date)).map((workout) => (
                            <tr key={workout.id}>
                                <td>{workout.Date}</td>
                                <td>{workout.Workout}</td>
                                <td>{workout.Type}</td>
                                <td>{workout.Duration} min</td>
                                <td>{workout.Calories} kcal</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <i className="bi bi-pencil-square text-secondary" style={{ cursor: "pointer", fontSize: "20px" }} onClick={() => { editworkout() }}></i>
                                        <i className="bi bi-trash text-danger" style={{ cursor: "pointer", fontSize: "20px" }} onClick={() => { deleteWorkout(workout.id) }}></i>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>

            <Card className="p-3 shadow-sm">
                <h5 className="fw-bold mb-3">Insights</h5>
                <Row>
                    <Col md={4}>
                        <h6 className="text-black insicon"><Dumbbell className="text-sky" />Top Exercises</h6>
                        <ul>
                            <li>Running — 25 times</li>
                            <li>Pushups — 20 times</li>
                            <li>Cycling — 15 times</li>
                        </ul>
                    </Col>

                    <Col md={4}>
                        <h6 className="text-black insicon"><FaCalendarCheck className="text-sky" />Most Active Day</h6>
                        <p>Wednesday — 520 calories burned</p>
                    </Col>

                    <Col md={4}>
                        <h6 className="text-black insicon"><FaChartLine className="text-sky" />Weekly Consistency</h6>
                        <p>87% activity score</p>
                    </Col>
                </Row>
            </Card>
        </div>
      </>
    );
}

export default Workoutpage;
