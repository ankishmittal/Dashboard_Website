import React from 'react';
import './Dashboard.css';
import {
    FaBox,
    FaTruck,
    FaBan,
    FaChartPie,
    FaSearch,
    FaBell,
    FaUserCircle,
    FaStar,
    FaHome,
    FaChartBar,
    FaUtensils,
    FaTasks,
    FaChevronRight,
    FaChevronLeft,
    FaShopify,
    FaEnvelope
} from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaBowlFood, FaBullseye, FaBurger, FaGear, FaRightToBracket, FaTicket } from 'react-icons/fa6';

const data = [
    { name: '6', uv: 4000 },
    { name: '8', uv: 3000 },
    { name: '10', uv: 2000 },
    { name: '12', uv: 2780 },
    { name: '14', uv: 1890 },
    { name: '16', uv: 2390 },
    { name: '18', uv: 3490 },
];

const recentOrders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.02', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

const customerFeedback = [
    {
        customer: 'Jenny Wilson',
        feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.',
        rating: 4,
    },
    {
        customer: 'Dianne Russell',
        feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
        rating: 5,
    },
    {
        customer: 'Devon Lane',
        feedback: 'Normally wings are wings, but these are lean meaty and tender, and the service was great as always.',
        rating: 4,
    },
];

const DropdownButton = () => {
    return (
        <div className="header-container">
        <h3 className="header-text">Activity</h3>
      <button className="dropdown-button">
        Weekly
        <span className="arrow">▼</span>
      </button>
      </div>
    );
  };

const Dashboard = () => {
    const percentage = 70;

    return (
        <div className="dashboard-container">
            <aside className="dashboard-sidebar">
                <div className="sidebar-logo">
                    <FaUtensils size={30} color="#fff" />
                </div>
                <ul className="sidebar-menu">
                    <li className="menu-item active">
                        <FaHome size={20} color="#6a4fbf" />
                    </li>
                    <li className="menu-item">
                        <FaChartBar size={20} color="#f4a261" />
                    </li>
                    <li className="menu-item">
                        <FaTasks size={20} color="#2a9d8f" />
                    </li>
                    <li className="menu-item">
                        <FaTicket size={20} color="#e76f51" />
                    </li>
                    <li className="menu-item">
                        <FaShopify size={20} color="Brown" />
                    </li>
                    <li className="menu-item-2">
                        <FaRightToBracket size={20} color="white" />
                    </li>
                </ul>
            </aside>

            <div className="main-content">
                <header className="dashboard-header">
                    <div className="search-bar">
                        <FaSearch size={20} color="#fff" />
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="dashboard-header-icons">
                        <FaEnvelope size={20} color="218aff" />
                        <FaGear size={20} color="#9f9884" />
                        <FaBell size={20} color="#2a9d8f" />
                        <FaUserCircle size={20} color="#fff" />
                    </div>
                </header>

                <div className="dashboard-content">
                    <h1 className='dash'>Dashboard</h1>
                    <div className="dashboard-stats">
                        <div className="stat-box">
                            <div className="stat-info">
                                <FaBox className="stat-icon" size={30} color="#6a4fbf" />
                                <h2>Total Orders</h2>
                                <p>75</p>
                            </div>
                            <small><span className="green">↑</span> 3%</small>
                        </div>

                        <div className="stat-box">
                            <div className="stat-info">
                                <FaTruck size={30} color="#2a9d8f" />
                                <h2>Total Delivered</h2>
                                <p>70</p>
                            </div>
                            <small><span className="red">↓</span> 3%</small>
                        </div>
                        <div className="stat-box">
                            <div className="stat-info">
                                <FaBan size={30} color="#e76f51" />
                                <h2>Total Cancelled</h2>
                                <p>05</p>
                            </div>
                            <small><span className="green">↑</span> 3%</small>
                        </div>
                        <div className="stat-box">
                            <div className="stat-info">
                                <FaChartPie size={30} float="left" color="#f4a261" />
                                <h2>Total Revenue</h2>
                                <p>$12k</p>
                            </div>
                            <small><span className="red">↓</span> 3%</small>
                        </div>
                        <div className="net-container">
                            <div className="net">
                                <div className="net-info">
                                    <h2>Net Profit</h2>
                                    <p>$6759.25</p>
                                    <small><span className="green">↑</span> 3%</small>
                                </div>
                                <div className="progress-circle">
                                    <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%`}
                                        styles={buildStyles({
                                            textColor: '#fff',
                                            pathColor: '#6a4fbf',
                                            trailColor: '#d6d6d6',
                                            strokeWidth: 8, // Adjust this value if needed
                                        })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-content-wrapper">
                        <div className="activity-container">
                
                            <DropdownButton/>
                            <div className="activity-graph">
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="uv" fill="#8884d8" radius={[10, 10, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="goal-container">
                            <div className="goal">
                            <i class="fa fa-bullseye" aria-hidden="true"></i>
                                <FaBullseye className='goal-space' size={30} color="#e76f51" />
                                <span>Goals</span>
                                <FaChevronRight size={20} color="#fff" />
                            </div>
                            <div className="goal">
                            <i class="fas fa-hamburger"></i>
                            <FaBurger className='goal-space' size={30} color="#6a4fbf" />
                                <span>Popular Dishes</span>
                                <FaChevronRight size={20} color="#fff" />
                            </div>
                            <div className="goal">
                            <i class="fa fa-list-alt" aria-hidden="true"></i>
                            <FaBowlFood className='goal-space' size={30} color="#2a9d8f" /> 
                             <span>Menus</span>
                                <FaChevronRight size={20} color="#fff" />
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-tables">
                        <div className="recent-orders">
                            <h3>Recent Orders</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Order No.</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentOrders.map((order, index) => (
                                        <tr key={index}>
                                            <td>{order.customer}</td>
                                            <td>{order.orderNo}</td>
                                            <td>{order.amount}</td>
                                            <td>
                                                <span className={`status ${order.status.toLowerCase()}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="customer-feedback">
                            <h3>Customer's Feedback</h3>
                            {customerFeedback.map((feedback, index) => (
                                <div key={index} className="feedback-item">
                                    <h4>{feedback.customer}</h4>
                                    <p>{feedback.feedback}</p>
                                    <div className="rating">
                                        {Array.from({ length: feedback.rating }, (_, i) => (
                                            <FaStar key={i} size={20} color="#ffb830" />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;