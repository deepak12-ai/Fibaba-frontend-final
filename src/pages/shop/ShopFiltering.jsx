
const ShopFiltering = ({filters, filterstate, setFilterstate, clearFilters}) => {
  return (
    <div className="space-y-5 flex-shrink-0 ">
    <h3>Filters</h3>

        {/* for category */}
        <div className="flex flex-col space-y-2">
            <h4 className="font-medium text-lg">Category</h4>
            <hr />
            {
                filters.categories.map((category)=>(
                    <label key={category} className="capitalize cursor-pointer" >
                        <input type="radio" name="category" id="category" value={category}
                        checked={filterstate.category === category}
                        onChange={(e)=> setFilterstate({...filterstate, category: e.target.value})} 
                        />
                        <span className="ml-1">{category}</span>
                    </label>
                ))
            }
        </div>

        {/* for color */}
        <div className="flex flex-col space-y-2">
            <h4 className="font-medium text-lg">Color</h4>
            <hr />
            {
                filters.colors.map((color)=>(
                    <label key={color} className="capitalize cursor-pointer" >
                        <input type="radio" name="color" id="color" value={color}
                        checked={filterstate.color === color}
                        onChange={(e)=> setFilterstate({...filterstate, color: e.target.value})} 
                        />
                        <span className="ml-1">{color}</span>
                    </label>
                ))
            }
        </div>

        {/* for price range */}
        <div className="flex flex-col space-y-2">
            <h4 className="font-medium text-lg">Price Range</h4>
            <hr />
            {
                filters.priceRanges.map((range)=>(
                    <label key={range.label} className="capitalize cursor-pointer" >
                        <input type="radio" name="priceRange" id="priceRange" 
                        value={`${range.min}-${range.max}`}
                        checked={filterstate.priceRange === `${range.min}-${range.max}`}
                        onChange={(e)=> setFilterstate({...filterstate, priceRange: e.target.value})} 
                        />
                        <span className="ml-1">{range.label}</span>
                    </label>
                ))
            }
        </div>

        {/* clear filters */}
        <button onClick={clearFilters} className="bg-primary text-white py-1 px-4 rounded">Clear All Filters</button>
    </div>
  )
}

export default ShopFiltering;
