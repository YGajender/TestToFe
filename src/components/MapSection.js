import React from "react"

const MapSection = () => {
  return (
    <section className="map">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227714.16296940277!2d75.43453789453125!3d26.902422500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a1f71d37cd%3A0xf554c077e4095a51!2sVisuti%20Career%20%3A-%20NEET%20UG%20EXPERT%20COUNSELOR%20(MBBS%2FBDS%2FBAMS%2FBHMS%2FBUMS%20)!5e0!3m2!1sen!2sin!4v1738158184124!5m2!1sen!2sin"
              // Set the iframe to take up the full width of its container
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
