import "../../Styles/checkout-btn.css";

const CheckoutBtn = (props) => {
  let modal = document.querySelector(".hidden-checkout");
  return (
    <button
      class="sticky-bar"
      onClick={() => {
        modal.classList.add("visible-checkout");
      }}
    >
      {props.totalQty}
    </button>
  );
};

export default CheckoutBtn;
