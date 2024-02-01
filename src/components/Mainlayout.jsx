import React, { useEffect, useState } from 'react'
import axios from "axios"
function Mainlayout() {

    const [produits,setProduits] = useState([{name:'nissan',id:1,source:'/Images/nissan.jpg',prix:12000},{name:'mustang',id:2,source:'/Images/mstg.jpg',prix:18000},{name:'bmw',id:3,source:'/Images/bmwm5.jpg',prix:5000}]);
    const [searchTerm,setSearchTerm] = useState("");
    const [prix,setPrix] = useState(10000);

    





  return (
    <div>
        <div>
                <div className='d1'>
                    <input type="text" onChange={(e)=>setSearchTerm(e.target.value)} />
                    <div>
                    <input type="range" min={0} max={20000} step={1000} value={prix} onChange={(e)=>setPrix(parseInt(e.target.value))}  />
                        <span> {prix} </span>
                    </div>
                </div>
                <div>
                {
                    produits.filter((car)=>{
                        return  car.name.includes(searchTerm) && (car.prix <= prix);
                    })
                    .map((car)=>{
                        return (
                            <>
                                <div>
                                    <h1>
                                        {car.name}                                        
                                    </h1>
                                    <img src={car.source} alt="" width={200} />
                                </div>
                            </>
                        )
                    })
                }
                </div>
        </div>
    </div>
  )
}

export default Mainlayout