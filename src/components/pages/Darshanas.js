import React from "react";
import { Table } from 'react-bootstrap';
import "../../App.css";

export default function Darshanas(){
    return(
        <>
            <h1 className="darshanas">Darshanas</h1>
            <Table striped bordered hover >
            <thead>
                <tr>
                    <th>Type of Darshanam</th>
                    <th>Timing</th>
                    <th>Cost</th>
                    <th>Entry</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dharma Darshanam</td>
                    <td><ul>  
                    <li>4:00 AM to 6:00 AM</li>
                    <li>4:00 AM to 6:00 AM</li>
                    <li>4:00 AM to 6:00 AM</li>
                    <li>4:00 AM to 6:00 AM</li>
                    </ul></td>
                    <td>Free</td>
                    <td>--</td>
                </tr>
                <tr>
                <td>Mukamandapam Darshanam	</td>
                <td><ul>
                    <li>5:00 AM to 5:45 PM</li>
                    <li>5:00 AM to 5:45 PM</li>
                </ul></td>
                <td>Rs .100/-</td>
                <td>One person</td>
                </tr>
                <tr>
                    <td>Antharalaya Darshanam</td>
                    <td><ul>  
                    <li>4:00 AM to 6:00 AM</li>
                    <li>4:00 AM to 6:00 AM</li>
                    <li>4:00 AM to 6:00 AM</li>
                    <li>4:00 AM to 6:00 AM</li>
                    </ul></td>
                    <td>Rs .300/-	</td>
                    <td>One Person</td>
                </tr>
                <tr>
                <td>Swarna Pushpaarchana (in 6th floor)	</td>
                <td><ul>
                    <li>5:00 AM to 5:45 PM</li>
                </ul></td>
                <td>Two person</td>
                <td>Rs .650/-</td>
                </tr>
                <tr>
                    <td>Shivaarchana</td>
                    <td><ul>  
                    <li>8:00 AM to 10:00 AM</li>
                    </ul></td>
                    <td>Rs .650/-</td>
                    <td>Two Person</td>
                </tr>
                <tr>
                    <td>Kadgamalarchana Pooja in Antharalayam</td>
                    <td><ul>  
                    <li>04:00 AM to 05:00 AM</li>
                    </ul></td>
                    <td>Rs .5116/-</td>
                    <td>Two person are allowed</td>
                </tr>
                <tr>
                    <td>Halt for Sri Ammavari Mahanivedana</td>
                    <td><ul>  
                    <li>11:45 AM to 12:15 PM</li>
                    </ul></td>
                    <td>--</td>
                    <td>Ekantham</td>
                </tr>
                <tr>
                    <td>Halt for Sri Ammavari Pancha Harathulu</td>
                    <td><ul>  
                    <li>05:45 PM to 06:30 PM</li>
                    </ul></td>
                    <td>Rs .500/-</td>
                    <td>Two person are allowed</td>
                </tr>
                <tr>
                    <td>Trikalarchana in Antharalayam</td>
                    <td><ul>  
                    <li>06:00 AM to 07:00 AM</li>
                    <li>11:00 AM to 11:45 AM</li>
                    <li>05:00 PM to 05:45 PM</li>
                    </ul></td>
                    <td>Rs .1500/-</td>
                    <td>Two person are allowed</td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}