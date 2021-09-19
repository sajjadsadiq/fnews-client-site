import './Settings.css'

export const Settings = () => {
  return (
    <>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
          </div>
          <form action="" className="settingForm">
            <label htmlFor="">Profile Picture</label>
            <div className="settingProfilePicture">
              <img
                src="https://i.ibb.co/02sWdwn/Sajjad-Sadiq.png"
                alt="profile picture"
              />
              <label htmlFor="fileInput">
                <i class="settingProfilePictureIcon fas fa-user"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Sajjad" />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="sajjadsadiq@gamil.com" />
            <label htmlFor="">password</label>
            <input type="password" placeholder="*********" />
            <button className="settingSubmit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
};
