import ListItem from "./ListItem";

const Sidebar = () => {
  return (
    <>
    <div className="container_principal">
        <div className="principal_container_sidebar">
            <div className="sidebar_container">
              <div className="sidebar_logo">
                <img className="sidebar_img_logo" src="http://localhost:3000/static/media/logo_lr.8d925b3a.svg"></img>
              </div>
              <div className="sidebar_menu">
                <span className="__menu">Menú</span>
              </div>
              </div>
        </div>
        <ListItem/>
    </div>
    </>
  );
};
export default Sidebar;
