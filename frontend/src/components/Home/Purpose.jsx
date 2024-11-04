import "./Purpose.css"

export default function Purpose() {
    return(
        <div >
        <div className="row logo-section" style={{ margin: "0"}}>
            <div className="col d-flex justify-content-center image-conatiner">
                <img src="/src/assets/images/ourPurpose.png" alt="" />
            </div>
            <div className="col second-heading" style={{ margin: "0"}}>
                <h2 className="text-center">Our Purpose </h2>
                <p className="text-center">Our purpose is to create a nurturing environment where every student can thrive intellectually, emotionally, and socially. We are dedicated to fostering a learning community that celebrates curiosity, promotes innovation, and encourages each individual to realize their fullest potential.</p>
                <p className="text-center"> At Wisdom World Academy, we aim to cultivate not only academic excellence but also lifelong values, resilience, and critical thinking skills. By focusing on personal growth and responsibility, we seek to prepare students to make meaningful contributions to society and confidently navigate the evolving challenges of our world.</p>
            </div>
            </div>
        </div>
    )
}