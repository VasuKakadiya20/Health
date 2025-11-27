import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

function WorkoutLogModal({ show, onHide, onSave }) {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    date: today,
    workout: "",
    type: "",
    duration: "",
    calories: "",
  });

  const workoutTypes = ["Cardio", "Strength", "Yoga", "HIIT", "Mobility"];
  const workoutname = ["Chest", "Back", "Shoulders", "Triceps", "Legs", "Glutes", "Abs", "Full Body Strength", "Running", "Cycling", "Swimming", "Yoga", "Stretching", "Boxing", "CrossFit"]


  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onHide();
  };

  return (
   <>
     <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <div>
          <h4 className="fw-bold m-0">Log Your Workout</h4>
          <small className="text-muted">
            Add workout details to track your fitness progress
          </small>
        </div>
      </Modal.Header>

      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />
        </Form.Group>

          {/* <Form.Control
            type="text"
            placeholder="Morning Run, Pushups, etc."
            value={formData.workout}
            onChange={(e) => handleChange("workout", e.target.value)}
          /> */}
        <Form.Group className="mb-3">
          <Form.Label>Workout Name</Form.Label>
          <Form.Select
          value={formData.workout}
          onChange={(e) => handleChange("workout", e.target.value)}
          >
            <option value="">Select Workout</option>
            {
              workoutname.map((t)=>(
                <option key={t}>{t}</option>
              ))}
          </Form.Select>
        </Form.Group>

        <Row>
          <Col md={6} className="mb-3">
            <Form.Label>Workout Type</Form.Label>
            <Form.Select
              value={formData.type}
              onChange={(e) => handleChange("type", e.target.value)}
            >
              <option value="">Select Type</option>
              {workoutTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </Form.Select>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Label>Duration (minutes)</Form.Label>
            <Form.Control
              type="number"
              placeholder="e.g. 30"
              value={formData.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
            />
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Calories Burned</Form.Label>
          <Form.Control
            type="number"
            placeholder="e.g. 200"
            value={formData.calories}
            onChange={(e) => handleChange("calories", e.target.value)}
          />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
   </>
  );
}

export default WorkoutLogModal;
