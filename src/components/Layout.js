function Layout({macrosState, handleMacrosStateChange}) {
    return (
        <div className="container">
            <div className="d-flex justify-content-md-center align-items-center">
                <form className="form-group input-group-lg">
                    <h4 className="mt-4 text-center">Product info</h4>
                    <div className="bg-dark rounded p-2 text-white text-center">
                        <small>You will usually find it on the back of the package in a form of table.</small>
                    </div>
                    <table className="table table-hover table-bordered mt-4">
                        <tbody>
                        <tr>
                            <th>Kcal (100g)</th>
                            <td>
                                <input type="number" min="0" name="kcal" className="form-control"
                                       onChange={handleMacrosStateChange}/>
                            </td>
                        </tr>
                        <tr>
                            <th>Carbohydrates (100g)</th>
                            <td>
                                <input type="number" min="0" name="carbs" className="form-control"
                                       onChange={handleMacrosStateChange}/>
                            </td>
                        </tr>
                        <tr>
                            <th>Fats (100g)</th>
                            <td>
                                <input type="number" min="0" name="fats" className="form-control"
                                       onChange={handleMacrosStateChange}/>
                            </td>
                        </tr>
                        <tr>
                            <th>Protein (100g)</th>
                            <td>
                                <input type="number" min="0" name="protein" className="form-control"
                                       onChange={handleMacrosStateChange}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="mb-3">
                        <label className="form-label">How many grams have you consumed?</label>
                        <div className="input-group">
                            <input type="number" min="0" name="grams" className="form-control"
                                   onChange={handleMacrosStateChange}/>
                        </div>
                    </div>

                    <hr/>
                    <h4 className="text-center">Results</h4>
                    <table className="table table-hover table-bordered mt-4">
                        <tbody>
                        <tr>
                            <th>Total calories</th>
                            <td>{Math.ceil((macrosState.grams * macrosState.kcal) / 100)}</td>
                        </tr>
                        <tr>
                            <th>Total carbohydrates</th>
                            <td>{Math.ceil((macrosState.grams * macrosState.carbs) / 100)}</td>
                        </tr>
                        <tr>
                            <th>Total fats</th>
                            <td>{Math.ceil((macrosState.grams * macrosState.fats) / 100)}</td>
                        </tr>
                        <tr>
                            <th>Total protein</th>
                            <td>{Math.ceil((macrosState.grams * macrosState.protein) / 100)}</td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default Layout;