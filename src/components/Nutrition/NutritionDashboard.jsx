import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  Button,
  Form,
  Card,
  Row,
  Col,
  ProgressBar,
  Dropdown,
} from "react-bootstrap";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { FaDrumstickBite, FaTint, FaFire } from "react-icons/fa";
import { Apple, Droplet, Flame, TrendingUp } from "lucide-react";
import NutritionDashboardchart from "./chart";
import { mycontext } from "../../App";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function NutritionDashboard() {
  const context = useContext(mycontext)
  const [showModal, setShowModal] = useState(false);
  const [timeFilter, setTimeFilter] = useState("All Time");
  const [mealFilter, setMealFilter] = useState("All Meals");
  const [last7daydata, setLast7daydata] = useState([]);
  const [meals, setMeals] = useState([
    {
      id: 1,
      type: "Lunch",
      date: "2025-11-26",
      food: "Lunch",
      calories: 1000,
      protein: 10,
      carbs: 20,
      fats: 14,
      water: 200,
    },
    {
      id: 2,
      type: "Dinner",
      date: "2025-11-27",
      food: "Dinner",
      calories: 150,
      protein: 50,
      carbs: 20,
      fats: 14,
      water: 200,
    },
    {
      id: 3,
      type: "Lunch",
      date: "2025-11-12",
      food: "Lunch",
      calories: 1000,
      protein: 30,
      carbs: 47,
      fats: 40,
      water: 500,
    },
    {
      id: 4,
      type: "Breakfast",
      date: "2025-11-13",
      food: "Breakfast",
      calories: 400,
      protein: 45,
      carbs: 47,
      fats: 40,
      water: 500,
    },
    {
      id: 5,
      type: "Dinner",
      date: "2025-11-13",
      food: "Dinner",
      calories: 700,
      protein: 30,
      carbs: 47,
      fats: 40,
      water: 300,
    },
    {
      id: 6,
      type: "Lunch",
      date: "2025-11-13",
      food: "Lunch",
      calories: 600,
      protein: 30,
      carbs: 47,
      fats: 40,
      water: 500,
    },
    {
      id: 7,
      type: "Lunch",
      date: "2025-11-14",
      food: "Lunch",
      calories: 600,
      protein: 30,
      carbs: 47,
      fats: 40,
      water: 500,
    },
  ]);


  const today = new Date().toISOString().split("T")[0];
  const todayMeals = meals.filter((meal) => meal.date === today);
  const totals = {
    calories: todayMeals.reduce((a, b) => a + Number(b.calories), 0),
    protein: todayMeals.reduce((a, b) => a + Number(b.protein), 0),
    carbs: todayMeals.reduce((a, b) => a + Number(b.carbs), 0),
    fats: todayMeals.reduce((a, b) => a + Number(b.fats), 0),
    water: todayMeals.reduce((a, b) => a + Number(b.water), 0),
  };

useEffect(() => {
  const todayDate = new Date();
  const last7day = new Date(todayDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  const filteredData = meals.filter(meal => {
    const mealDate = new Date(meal.date);
    return mealDate >= last7day && mealDate <= todayDate;
  });

  context.setsevendaysdata(filteredData);
  setLast7daydata(filteredData)
  localStorage.setItem("sevendaysdata", JSON.stringify(filteredData));
}, [meals]);

  const [form, setForm] = useState({
    date: today,
    type: "Breakfast",
    food: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    water: 0,
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    setMeals([...meals, { id: Date.now(), ...form }]);
    setShowModal(false);
  };

  const filteredMeals = meals.filter((meal) => {
    const todayDate = new Date().toISOString().split("T")[0];
    const mealDate = new Date(meal.date).toISOString().split("T")[0];
    const matchTime =
      timeFilter === "Today"
        ? mealDate === todayDate
        : timeFilter === "Yesterday"
          ? mealDate === new Date(Date.now() - 86400000).toISOString().split("T")[0]
          : timeFilter === "Last 7 Days"
            ? new Date(meal.date) >= new Date(Date.now() - 7 * 86400000)
            : true;
    const matchType = mealFilter === "All Meals" ? true : meal.type === mealFilter;
    return matchTime && matchType;
  });

  const openedit = (id) => {
    setShowModal(true)
    console.log(id)
  };

  const deleteNutrition = (id) => {
    const updatedMeals = meals.filter((meal) => meal.id !== id);
    setMeals(updatedMeals);
    console.log("Nutrition Delete!")
  }
  return (
    <>
      <div className="container py-4 nutrition-page">
        <div className="slideDown d-flex justify-content-between align-items-center">
          <h1 className="fw-bold">My Nutrition 🥗</h1>
          <Button className="addmeal" variant="success" onClick={() => setShowModal(true)}>
            <span className="icon">+</span>
            <span className="text">Log Your Meal</span>
          </Button>

        </div>
        {/* <p className="slideDown mb-4">Track your meals, calories, and macronutrients</p> */}

        <Row className="slideDown mb-4 summary-cards mt-3">
          <h5 className="text-white">Today's Nutrition</h5>
          <Col md={2}>
            <Card className="text-center p-3">
              <FaFire size={24} />
              <h5>{totals.calories} Kcal</h5>
              <p>/ 2000 Kcal</p>
              <ProgressBar now={(totals.calories / 2000) * 100} />
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center p-3">
              <FaDrumstickBite size={24} />
              <h5>{totals.protein}g</h5>
              <p>/ 150g Protein</p>
              <ProgressBar now={(totals.protein / 150) * 100} />
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center p-3">
              <FaTint size={24} />
              <h5>{totals.water}ml</h5>
              <p>/ 2000ml Water</p>
              <ProgressBar now={(totals.water / 2000) * 100} />
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center p-3">
              <Apple size={24} />
              <h5>{todayMeals.length}</h5>
              <p>Meals Logged</p>
            </Card>
          </Col>
          <Col md={2}>
            <Card className="text-center p-3">
              <TrendingUp size={24} />
              <h5>{totals.carbs}g</h5>
              <p>Carbs</p>
            </Card>
          </Col>
        </Row>

        <div className="mt-4 slideUp">
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
            <div className="d-flex gap-2">
              <Dropdown>
                <Dropdown.Toggle variant="light" className="filter-btn">
                  {timeFilter}
                </Dropdown.Toggle>
                <Dropdown.Menu >
                  {["Today", "Yesterday", "Last 7 Days", "All Time"].map((opt) => (
                    <Dropdown.Item key={opt} onClick={() => setTimeFilter(opt)}>
                      {opt}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="light" className="filter-btn">
                  {mealFilter}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {["All Meals", "Breakfast", "Lunch", "Dinner", "Snack"].map((opt) => (
                    <Dropdown.Item key={opt} onClick={() => setMealFilter(opt)}>
                      {opt}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <small className="text-muted">
              {filteredMeals.length} meal{filteredMeals.length !== 1 && "s"} found
            </small>
          </div>

          <Row>
            {filteredMeals.length > 0 ? (
              filteredMeals.sort((a, b) => new Date(b.date) - new Date(a.date)).map((meal) => (
                <Col md={4} key={meal.id}>
                  <Card className="slideUp p-3 mb-3 shadow-sm rounded-4 border-0 meal-card">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h6 className="fw-semibold mb-1">{meal.type}</h6>
                        <small className="text-muted">
                          {new Date(meal.date).toLocaleDateString()}
                        </small>
                      </div>
                      <div className="d-flex gap-2">
                        <i className="bi bi-pencil-square text-secondary" style={{ cursor: "pointer", fontSize: "20px" }} onClick={() => { openedit(meal.id) }}></i>
                        <i className="bi bi-trash text-danger" style={{ cursor: "pointer", fontSize: "20px" }} onClick={() => { deleteNutrition(meal.id) }}></i>
                      </div>
                    </div>

                    <p className="text-muted mb-2">{meal.food}</p>

                    <div className="d-flex flex-wrap gap-2">
                      <span className="macro-box calories">🔥 {meal.calories} Cal</span>
                      <span className="macro-box protein">🥩 {meal.protein}g Protein</span>
                      <span className="macro-box carbs">🍞 {meal.carbs}g Carbs</span>
                      <span className="macro-box fats">🥑 {meal.fats}g Fats</span>
                    </div>

                    <div className="mt-2 text-primary small ">
                      <span>💧 {meal.water} ml water</span>
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
        </div>

          <NutritionDashboardchart Data={last7daydata} />
        <Modal show={showModal} onHide={() => setShowModal(false)} centered >
          <Modal.Header closeButton>
            <Modal.Title>Log Your Meal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="date" value={form.date} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Meal Type</Form.Label>
                <Form.Select name="type" onChange={handleChange}>
                  <option>Select the Meal Type</option>
                  <option>🌅 Breakfast</option>
                  <option>☀️ Lunch</option>
                  <option>🌙 Dinner</option>
                  <option>🍎 Snack</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>What did you eat?</Form.Label>
                <Form.Control as="textarea" rows={2} name="food" onChange={handleChange} />
              </Form.Group>

              <Row className="mt-3">
                <Col>
                  <Form.Label>🔥 Calories (Kcal)</Form.Label>
                  <Form.Control name="calories" onChange={handleChange} />
                </Col>
                <Col>
                  <Form.Label>🥩Protein (g)</Form.Label>
                  <Form.Control name="protein" onChange={handleChange} />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Form.Label>🍞 Carbs (g)</Form.Label>
                  <Form.Control name="carbs" onChange={handleChange} />
                </Col>
                <Col>
                  <Form.Label>🥑 Fats (g)</Form.Label>
                  <Form.Control name="fats" onChange={handleChange} />
                </Col>
              </Row>
              <Form.Group className="mt-3">
                <Form.Label>💧 Water Intake (ml)</Form.Label>
                <Form.Control name="water" onChange={handleChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
