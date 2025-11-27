// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";


// function WellnessLogModal({ show, onClose, onSave }) {
//     const [formData, setFormData] = useState({
//         date: "2025-11-14",
//         mood: "Neutral",
//         stress: 5,
//         sleep_duration: 7,
//         sleep_quality: "Good",
//         deep_sleep: "",
//         light_sleep: "",
//         rem_sleep: "",
//         meditation: 0,
//         yoga: 0,
//         notes: ""
//     });

//     const moods = [
//         { emoji: "😊", label: "Happy" },
//         { emoji: "⚡", label: "Energetic" },
//         { emoji: "😐", label: "Neutral" },
//         { emoji: "😰", label: "Stressed" },
//         { emoji: "😢", label: "Sad" }
//     ];

//     const sleepQualityOptions = ["Poor", "Average", "Good", "Excellent"];

//     const handleChange = (key, value) => {
//         setFormData({ ...formData, [key]: value });
//     };

//     const handleSave = () => {
//         onSave(formData);
//         onClose();
//     };

//     if (!show) return null;

//     return (
//       <>
//       {/* <div class="fade modal-backdrop show"></div> */}
//           <div className="slideDown modal-overlay">
//             <div className="modal-container p-4">
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                     <div>
//                         <h3 className="fw-bold">Log Today’s Wellness</h3>
//                         <small className="text-muted">
//                             Track your daily wellness metrics for better insights
//                         </small>
//                     </div>
//                     <button className="btn-close" onClick={onClose}></button>
//                 </div>

//                 <div className="modal-body-content">
//                     <div className="mb-3">
//                         <label className="form-label">Date</label>
//                         <input
//                             type="date"
//                             className="form-control"
//                             value={formData.date}
//                             onChange={(e) => handleChange("date", e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label text-sm">How are you feeling today?</label>
//                         <div className="d-flex gap-2 flex-wrap">
//                             {moods.map((m) => (
//                                 <button
//                                     key={m.label}
//                                     type="button"
//                                     className={`mood-btn ${formData.mood === m.label ? "mood-active" : ""}`}
//                                     onClick={() => handleChange("mood", m.label)}
//                                 >
//                                     <div className="fs-3">{m.emoji}</div>
//                                     <div className="small">{m.label}</div>
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="mb-3">
//                         <label className="form-label text-sm">Stress Level: {formData.stress}/10</label>
//                         <input
//                             type="range"
//                             min="0"
//                             max="10"
//                             className="form-range"
//                             value={formData.stress}
//                             onChange={(e) => handleChange("stress", e.target.value)}
//                         />
//                         <div className="d-flex justify-content-between small text-muted">
//                             <span className="text-sm">Low Stress</span>
//                             <span className="text-sm">High Stress</span>
//                         </div>
//                     </div>

//                     <div className="row">
//                         <div className="col-md-6 mb-3">
//                             <label className="form-label text-sm">Sleep Duration (hours)</label>
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 step="0.5"
//                                 min="0"
//                                 max="24"
//                                 value={formData.sleep_duration}
//                                 onChange={(e) => handleChange("sleep_duration", e.target.value)}
//                             />
//                         </div>
//                         <div className="col-md-6 mb-3">
//                             <label className="form-label text-sm">Sleep Quality</label>
//                             <select
//                                 className="form-select"
//                                 value={formData.sleep_quality}
//                                 onChange={(e) => handleChange("sleep_quality", e.target.value)}
//                             >
//                                 {sleepQualityOptions.map((q) => (
//                                     <option key={q}>{q}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>

//                     {/* <label className="fw-semibold small text-sm">Sleep Breakdown (optional)</label>
//                     <div className="row mt-3">
//                         <div className="col-md-4 mb-3">
//                             <label className="form-label small text-sm">Deep Sleep (min)</label>
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 value={formData.deep_sleep}
//                                 onChange={(e) => handleChange("deep_sleep", e.target.value)}
//                             />
//                         </div>
//                         <div className="col-md-4 mb-3">
//                             <label className="text-sm form-label small">Light Sleep (min)</label>
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 value={formData.light_sleep}
//                                 onChange={(e) => handleChange("light_sleep", e.target.value)}
//                             />
//                         </div>
//                         <div className="col-md-4 mb-3">
//                             <label className="text-sm form-label small">REM Sleep (min)</label>
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 value={formData.rem_sleep}
//                                 onChange={(e) => handleChange("rem_sleep", e.target.value)}
//                             />
//                         </div>
//                     </div> */}

//                     <div className="row">
//                         <div className="col-md-6 mb-3">
//                             <label className="text-sm form-label">Meditation (minutes)</label>
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 value={formData.meditation}
//                                 onChange={(e) => handleChange("meditation", e.target.value)}
//                             />
//                         </div>

//                         <div className="col-md-6 mb-3">
//                             <label className="text-sm form-label">Yoga Sessions</label>
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 value={formData.yoga}
//                                 onChange={(e) => handleChange("yoga", e.target.value)}
//                             />
//                         </div>
//                     </div>

//                     <div className="mb-3">
//                         <label className="text-sm form-label">Notes</label>
//                         <textarea
//                             className="form-control"
//                             rows="3"
//                             placeholder="How was your day?"
//                             value={formData.notes}
//                             onChange={(e) => handleChange("notes", e.target.value)}
//                         />
//                     </div>
//                 </div>

//                 <div className="d-flex justify-content-end gap-2 border-top pt-3">
//                     <button className="btn btn-light" onClick={onClose}>Cancel</button>
//                     <button className="btn btn-primary" onClick={handleSave}>Save</button>
//                 </div>
//             </div>
//         </div>
//       </>
//     );
// }

// export default WellnessLogModal

import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function WellnessLogModal({ show, onHide, onSave }) {
     const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    date: today,
    mood: "Neutral",
    stress: 5,
    sleep_duration: 7,
    sleep_quality: "Good",
    meditation: 0,
    yoga: 0,
    notes: ""
  });

  const moods = [
    { emoji: "😊", label: "Happy" },
    { emoji: "⚡", label: "Energetic" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "😰", label: "Stressed" },
    { emoji: "😢", label: "Sad" }
  ];

  const sleepQualityOptions = ["Poor", "Average", "Good", "Excellent"];

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
          <h4 className="fw-bold m-0">Log Today's Wellness</h4>
          <small className="text-muted">
            Track your daily wellness metrics for better insights
          </small>
        </div>
      </Modal.Header>

      <Modal.Body>
        {/* DATE */}
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />
        </Form.Group>

        {/* MOOD */}
        <Form.Group className="mb-3">
          <Form.Label className="text-sm">How are you feeling today?</Form.Label>

          <div className="d-flex gap-2 flex-wrap">
            {moods.map((m) => (
              <button
                key={m.label}
                type="button"
                className={`mood-btn ${formData.mood === m.label ? "mood-active" : ""}`}
                onClick={() => handleChange("mood", m.label)}
              >
                <div className="fs-3">{m.emoji}</div>
                <div className="small">{m.label}</div>
              </button>
            ))}
          </div>
        </Form.Group>

        {/* STRESS */}
        <Form.Group className="mb-3">
          <Form.Label className="text-sm">
            Stress Level: {formData.stress}/10
          </Form.Label>

          <Form.Range
            min="0"
            max="10"
            value={formData.stress}
            onChange={(e) => handleChange("stress", e.target.value)}
          />

          <div className="d-flex justify-content-between small text-muted">
            <span>Low Stress</span>
            <span>High Stress</span>
          </div>
        </Form.Group>

        {/* SLEEP */}
        <Row>
          <Col md={6} className="mb-3">
            <Form.Label className="text-sm">Sleep Duration (hours)</Form.Label>
            <Form.Control
              type="number"
              min="0"
              max="24"
              step="0.5"
              value={formData.sleep_duration}
              onChange={(e) => handleChange("sleep_duration", e.target.value)}
            />
          </Col>

          <Col md={6} className="mb-3">
            <Form.Label className="text-sm">Sleep Quality</Form.Label>
            <Form.Select
              value={formData.sleep_quality}
              onChange={(e) => handleChange("sleep_quality", e.target.value)}
            >
              {sleepQualityOptions.map((q) => (
                <option key={q}>{q}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        {/* MEDITATION + YOGA */}
        {/* <Row>
          <Col md={6} className="mb-3">
            <Form.Label className="text-sm">Meditation (minutes)</Form.Label>
            <Form.Control
              type="number"
              value={formData.meditation}
              onChange={(e) => handleChange("meditation", e.target.value)}
            />
          </Col>

          <Col md={6} className="mb-3">
            <Form.Label className="text-sm">Yoga Sessions</Form.Label>
            <Form.Control
              type="number"
              value={formData.yoga}
              onChange={(e) => handleChange("yoga", e.target.value)}
            />
          </Col>
        </Row> */}

        {/* NOTES */}
        <Form.Group className="mb-3">
          <Form.Label className="text-sm">Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="How was your day?"
            value={formData.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>
   </>
  );
}

export default WellnessLogModal;
