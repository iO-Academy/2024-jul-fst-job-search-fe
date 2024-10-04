const PostJobModal = () => {
    return (
        <div className='modal' id='postJob'>
            <div className='modal-dialog modal-lg'>
                <div className='modal-content'>
                    <div className='modal-header d-flex justify-content-between align-items-center'>
                        <p className='text-center m-0'>Post a Job</p>
                        <button type='button' className='btn btn-sm btn-outline-info border-0'
                                data-bs-dismiss='modal'>ⅹ
                        </button>
                    </div>
                    <div className={'modal-body'}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="jobTitle">Job Title</label>
                                <input required type="text" className="form-control" id="jobTitle"
                                       aria-describedby="emailHelp" placeholder="Enter Job Title (required)"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ompany">Company</label>
                                <input required type="text" className="form-control" id="company"
                                       placeholder="Enter company (required)"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="jobDescription">Job Description</label>
                                <textarea className="form-control" id="jobDescription" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="salery">Salary</label>
                                <input type="number" className="form-control" id="salery"
                                       placeholder="Enter salary"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="type">Type</label>
                                <select className="form-control" id="type">
                                    <option>Full Time</option>
                                    <option>Part Time</option>
                                    <option>Contract</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="skills">Skills - select all that apply</label>
                                <select multiple className="form-control" id="skills">
                                    <option>PHP</option>
                                    <option>JavaScript</option>
                                    <option>React</option>
                                    <option>Java</option>
                                    <option>Ruby</option>
                                    <option>Yii</option>
                                    <option>Laravel</option>
                                    <option>Python</option>
                                    <option>Bash</option>
                                    <option>HTML/CSS</option>
                                    <option>SQL</option>
                                    <option>Angular</option>
                                    <option>Vue</option>
                                    <option>Slim</option>
                                    <option>Sass</option>
                                    <option>TypeScript</option>
                                    <option>XML</option>
                                    <option>JSON</option>
                                    <option>APIs</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="logo">Company logo</label>
                                <input type="file" className="form-control-file" id="logo"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostJobModal