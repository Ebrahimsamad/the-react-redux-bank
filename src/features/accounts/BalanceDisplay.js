import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ account }) {
  return <div className="balance">{formatCurrency(account)}</div>;
}

function mapStateToProps(state) {
  return {
    account: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
