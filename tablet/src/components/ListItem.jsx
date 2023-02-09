import DataTable from "./DataTable"

const ListItem = () => {
  return (
    <div className="principal_container_content">
        <nav className="navbar_container">
            <span className="navbar_title">
          <span className="navbar_menu">
            <i className="fas fa-bars"></i>
          </span>
          </span>
          <span className="navbar_btn_logout">
            <i className="fas fa-sign-out-alt"></i>
          </span>
        </nav>
        <DataTable />
    </div>
  )
}
export default ListItem