import "/src/styles/Logo.css";

export default function Logo() {
    return(
        <>
        <div className="row logo-section">
            <div className="col d-flex justify-content-center">
                <img src="/src/assets/images/logo.png" alt="" />
            </div>
            <div className="col">
                <h2>Where imagination leads to Knowledge</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus similique quis ab blanditiis exercitationem, accusantium doloremque voluptatum vitae magni sint consequatur asperiores iure nemo dolores.</p>
            </div>
            </div>
        </>
    )
}