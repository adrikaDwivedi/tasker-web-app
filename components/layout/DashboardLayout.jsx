function DashboardLayout(){
    return (
        
        <div className="dashboard-grid">

        <section className="stats-row">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
        </section>

        <section classname="charts-row">
        <div className="card"></div>
        <div className="card"></div>
        </section>

        <section className="bottom-row">
        <div className="card"></div>
        <div className="card"></div>
        </section>
        </div>
        
    )
}

export default DashboardLayout;