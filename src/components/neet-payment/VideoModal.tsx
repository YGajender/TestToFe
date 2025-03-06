import React from "react";

interface VideoModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <div
          className="modal show d-block"
          id="videoModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)} // Close modal on click
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-4">
                <div className="ratio ratio-16x9">
                  <iframe
                    id="videoFrame"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
