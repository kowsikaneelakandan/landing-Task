import './Masterhaed.css'
export default function Masterhead(){
    return(
        <div className="Head-container">
          
            <h2>Generate more leads with a professional landing page!</h2>
            <form className="row g-3">
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