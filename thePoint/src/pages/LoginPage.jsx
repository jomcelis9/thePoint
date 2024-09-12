export default function LoginPage(){
    return(
        <div className="px-4">Login page here
        <div className="container min-vh-50 d-flex justify-content-center align-items-center ">
            <form className="w-25">
                <h1 className="text-center">Login</h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                    <label>Don't have an account</label> 
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div className="d-grid">
                <button type="submit" className="btn btn-warning">Submit</button>
                </div>
            </form>
        </div>
        </div>
    )

}