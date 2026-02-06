import "./paymentsuccess.css";
import { Link, useParams } from "react-router-dom";

const PaymentSuccess = ({ user }) => {
  const params = useParams();
  return (
    <div className="payment-success-page">
      {user && (
        <div className="success-card">
          <div className="success-icon">✅</div>

          <h2>Payment Successful!</h2>
          <p className="success-subtext">
            Hi <strong>{user.name}</strong>, your course subscription is now
            active.
          </p>

          <div className="success-details">
            <p>
              <strong>Reference ID:</strong> {params.id}
            </p>
            <p>
              A confirmation email has been sent to{" "}
              <strong>{user.email}</strong>
            </p>
          </div>

          <div className="success-actions">
            <Link to={`/${user._id}/dashboard`} className="common-btn">
              Go to Dashboard
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
