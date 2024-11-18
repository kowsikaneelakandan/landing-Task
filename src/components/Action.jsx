import "./Action.css"
export default function Action(){
    return(
        <div className="Action-container">
            <h4>Ready to get started? Sign up now!</h4>
            <form className="row g-4">
  <div className="col-auto">
  <input type="text" className="form-control" id="inputtext2" placeholder="Email Address"></input>
</div>
<div className="col-auto">
  <button type="submit" className="btn btn-primary mb-3">Submit</button>
</div>
</form>
        </div>
    )
}