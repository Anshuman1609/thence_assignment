import "./footer.css";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="fItem">
        <div className="firstFooterItem">&copy; &nbsp; Talup 2023. All rights reserved</div>
        <div className="secondFooterItem">
          <span className="terms">Terms & Conditions</span>
          <span className="policy">Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer