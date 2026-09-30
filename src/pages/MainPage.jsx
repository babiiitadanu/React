import Sidebar from "./Sidebar";

function MainPage() {
  return (
    <div className="router-page">
      <Sidebar />

      <div className="content">
        <h1>Content Area</h1>

        <div className="router-box">
          <p>Select any option from the sidebar.</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;