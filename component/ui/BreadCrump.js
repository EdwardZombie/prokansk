const BreadCrump = () => (
    <section className="breadcrumb-section">
        <h2 className="sr-only">Site Breadcrumb</h2>
        <div className="container">
            <div className="breadcrumb-contents">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Shop</li>
                    </ol>
                </nav>
            </div>
        </div>
    </section>
)

export default BreadCrump;