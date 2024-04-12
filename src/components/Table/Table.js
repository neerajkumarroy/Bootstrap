import React from 'react';
import "../Button/Button.css";

const Table = () => {
  return (
    <div className='container'>
        <div className='row'>
            <h2 className='text-center py-5'>Bootstrap Table Classes</h2>
            <div className='col-md-6'>
                <table className='table  table-striped table-hover table-bordered table-sm table-responsive '>
                    <thead className='table-dark'>
                        <tr>
                            <th>Row</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-primary'>
                            <td>1</td>
                            <td>Neeraj</td>
                            <td>Kumar</td>
                            <td>neeraj@test.com</td>
                        </tr>
                        <tr  className='table-warning'>
                            <td>2</td>
                            <td>Akshay</td>
                            <td>Bisht</td>
                            <td>akshay@test.com</td>
                        </tr>
                        <tr  className='table-danger'>
                            <td>3</td>
                            <td>Ranjeet</td>
                            <td>Kumar</td>
                            <td>ranjeet@test.com</td>
                        </tr >
                        <tr  className='table-secondary'>
                            <td>4</td>
                            <td>Ajeet</td>
                            <td>Rawat</td>
                            <td>ajeet@test.com</td>
                        </tr>
                        <tr className='bg-info'>
                            <td>5</td>
                            <td>Neeraj</td>                                                                                                                                                                             
                            <td>Kumar</td>
                            <td>neeraj@test.com</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Akshay</td>
                            <td>Bisht</td>
                            <td>akshay@test.com</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Ranjeet</td>
                            <td>Kumar</td>
                            <td>ranjeet@test.com</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Ajeet</td>
                            <td>Rawat</td>
                            <td>ajeet@test.com</td>
                        </tr>
                    </tbody>
                </table>                
            </div>  
            <div className='col-md-6'>
                <table className='table table-dark table-striped table-hover table-responsive'>
                    <thead className='table-light'>
                        <tr>
                            <th>Row</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Neeraj</td>
                            <td>Kumar</td>
                            <td>neeraj@test.com</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Akshay</td>
                            <td>Bisht</td>
                            <td>akshay@test.com</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ranjeet</td>
                            <td>Kumar</td>
                            <td>ranjeet@test.com</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Ajeet</td>
                            <td>Rawat</td>
                            <td>ajeet@test.com</td>
                        </tr>
                    </tbody>
                </table>                
            </div>                 
        </div>
    </div>
  )
}

export default Table;
