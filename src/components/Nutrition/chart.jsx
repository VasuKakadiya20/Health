import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Pie, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title,
} from "chart.js";
import { ChartPie } from "lucide-react";

ChartJS.register(
    ArcElement,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title
);

export default function NutritionDashboardchart({ Data = [] }) {

    const generate7DayArray = (data, key) => {
        const result = [0, 0, 0, 0, 0, 0, 0];

        data.forEach(item => {
            const date = new Date(item.date);
            if (isNaN(date)) return;
            const dayIndex = date.getDay();
            const correctedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
            result[correctedIndex] += Number(item[key]) || 0;
        });

        return result;
    };

    const weeklyCalories = generate7DayArray(Data, "calories");
    const weeklyProtein = generate7DayArray(Data, "protein");
    const weeklyCarbs = generate7DayArray(Data, "carbs");
    const weeklyFats = generate7DayArray(Data, "fats");

    const lastday = {
        protein: Data.reduce((a, b) => a + Number(b.protein || 0), 0),
        carbs: Data.reduce((a, b) => a + Number(b.carbs || 0), 0),
        fats: Data.reduce((a, b) => a + Number(b.fats || 0), 0),
    };

    const pieData = {
        labels: ["Protein", "Carbs", "Fats"],
        datasets: [
            {
                data: [lastday.protein, lastday.carbs, lastday.fats],
                backgroundColor: ["#3B82F6", "#F59E0B", "#10B981"],
                borderColor: "#fff",
                borderWidth: 2,
            },
        ],
    };

    const pieOptions = {
        plugins: {
            legend: {
                position: "bottom",
                labels: { color: "#333", font: { size: 12 } },
            },
        },
    };

    const lineData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Calories",
                data: weeklyCalories,
                borderColor: "#10B981",
                backgroundColor: "rgba(16,185,129,0.2)",
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                borderWidth: 2,
            },
            {
                label: "Protein (g)",
                data: weeklyProtein,
                borderColor: "#3B82F6",
                backgroundColor: "rgba(59,130,246,0.2)",
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                borderWidth: 2,
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: { position: "bottom", labels: { color: "#333" } },
            tooltip: { mode: "index", intersect: false },
        },
        interaction: { mode: "nearest", intersect: false },
        scales: {
            x: { grid: { display: false } },
            y: {
                grid: { color: "#f0f0f0" },
                ticks: { stepSize: 200 },
            },
        },
    };

    return (
        <>
            <Row className="mb-4 mt-5 slideUp">
                <Col md={6} className="mb-3">
                    <Card className="p-3 shadow-sm border-0 rounded-4">
                        <h6 className="mb-3 d-flex align-items-center gap-2">
                            <ChartPie style={{ color: "rgb(34 197 94)" }} />
                            7-Day Macro Distribution
                        </h6>

                        <div className="d-flex justify-content-center">
                            <div style={{ width: "390px", height: "390px" }}>
                                <Pie data={pieData} options={pieOptions} />
                            </div>
                        </div>

                        <div className="d-flex justify-content-between text-center mt-4">
                            <div className="bg-light p-3 rounded-3 flex-fill mx-1">
                                <div className="text-primary fw-semibold">Protein</div>
                                <div className="fw-bold">{lastday.protein}g</div>
                            </div>
                            <div className="bg-light p-3 rounded-3 flex-fill mx-1">
                                <div className="text-warning fw-semibold">Carbs</div>
                                <div className="fw-bold">{lastday.carbs}g</div>
                            </div>
                            <div className="bg-light p-3 rounded-3 flex-fill mx-1">
                                <div className="text-success fw-semibold">Fats</div>
                                <div className="fw-bold">{lastday.fats}g</div>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col md={6} className="mb-3">
                    <Card className="p-3 shadow-sm border-0 rounded-4">
                        <h6 className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-graph-up-arrow text-primary"></i>
                            7-Day Nutrition Trend
                        </h6>
                        <Line data={lineData} options={lineOptions} height={250} />
                    </Card>
                </Col>
            </Row>
        </>
    );
}
