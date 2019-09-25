import React from 'react'

const Card = ({ photo }) => {
  const imgUrl = photo.urls.small;
  const name = photo.user.name;
  const profileImgUrl = photo.user.profile_image.small;

  return (
    <div className="card card-panel">
      <img className="card-img-top" src={imgUrl} alt="" />
      <div className="card-body">
        <div className="row">
          <div className="col-sm-8 user-panel">
            <span className="profile-img">
              <img src={profileImgUrl} alt="" />
            </span>
            <span>{name}</span>
          </div>
          <div className="col-sm-4 text-right">
            <button type="button" className="btn btn-light heart-btn">
              <svg className="heart-icon" version="1.1" viewBox="0 0 32 32" width="32" height="24" aria-hidden="false">
                <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card