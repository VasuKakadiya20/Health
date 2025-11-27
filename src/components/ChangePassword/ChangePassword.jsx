import React from 'react'

function ChangePassword() {
  return (
    <>
         <div className="profile-card mt-4 slideUp">
          <h5>Change Password</h5>
          <div className="row g-3 mt-2">
            <div className="col-md-12">
              <label>Current Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="col-md-12">
              <label>New Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="col-md-12">
              <label>Confirm New Password</label>
              <input type="password" className="form-control" />
            </div>
          </div>
          <div className="text-end mt-3">
            <button className="btn btn-save">Update Password</button>
          </div>
        </div>
    </>
  )
}

export default ChangePassword
