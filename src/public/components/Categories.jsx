import React from 'react'

const Categories = () => {
    const cardArray = [
        { lable: "Doctor", icon: "person", to: "/Doctor" },
        { lable: "Clinics", icon: "Link 45deg", to: "/Clinics" },
        { lable: "Labs", icon: "", to: "/Labs" },
        { lable: "Emergency", icon: "Hospital", to: "/Emergency" },
        { lable: "Insurance", icon: "Insurance", to: "/Insurance" },
    ]

    const cardContent = cardArray.map(item => <img className='img-fluid' key={item} src={item} alt={item} />)


    return <>
        <div className='d-flex justify-content-center flex-column '>
            <p className='fs-10'>Explore By Categories</p>
            <p >Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
        </div>
        <div>
            {cardContent}
        </div>
    </>
}

export default Categories