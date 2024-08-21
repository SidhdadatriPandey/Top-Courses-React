function Filter({filterData,catagory,setCatagory}){
    function filterHandeler(ti){
        setCatagory(ti);
        // it.title===catagory?it.classList.add("stylebtn"):it.classList.add("notStyle");
    }
    return(
        <div className='filter-parent'>
            {
                filterData.map((item)=>{
                    return item.title===catagory?<button className="selected-btn" key={item.id} onClick={()=>filterHandeler(item.title)}>{item.title}
                    </button>:<button className="btn" key={item.id} onClick={()=>filterHandeler(item.title)}>{item.title}
                    </button>;
                })
            }
        </div>
    )
}

export default Filter;