import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import OrderCard from '../../components/OrderCard';
import getOrderDetails from '../../utils/getOrderDetails';

function SellerOrders() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const getOrders = async () => {
      await getOrderDetails('sales/seller', user.id, setOrders);
    };
    getOrders();
  }, [user]);

  return (
    <div>
      <NavBar showProducts={ false } />
      {orders.map((order, i) => (
        <OrderCard
          key={ i }
          id={ order.id }
          loopIndex={ i }
          role={ user.role }
          saleDate={ order.saleDate }
          status={ order.status }
          totalPrice={ order.totalPrice }
        />
      ))}
    </div>
  );
}

export default SellerOrders;
