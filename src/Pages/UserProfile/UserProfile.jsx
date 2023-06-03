import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./UserProfile.css";
import { useAuthContext } from "../../context/auth/authContext";
import { useAddressContext } from "../../context/address/addressContext";


export const UserProfile = () => {
  
  const{userData,setUserData,selectedValue, setSelectedValue,profileData}=useAuthContext();
  const {addressState,addressDispatch}=useAddressContext();
  const headings = ["Profile", "Address", "Orders"];
  
console.log(userData)
  const [showForm, setShowForm] = useState(false);
  const [editing,setEditing]=useState(false);
  const [formData, setFormData] = useState({
    Name: '',
    City: '',
    State: '',
    Pincode: '',
    PhoneNo: '',
  });
  const handleFormSubmit = () => {

    if(editing){
       addressDispatch({type:"UpdateAddressState",
       payload:formData})
        setShowForm(false);
    }
    else{
      addressDispatch({type:"addToAddressState",
      payload:formData
    })
       setShowForm(false);
       setEditing(false)
    }
  };
  const editForm=(selectedId)=>{
    setShowForm(true);
    setEditing(true);
    setFormData(addressState.address.find(item=>item.id===selectedId))

  }

  const handleCancel = () => {
    setFormData({
      Name: '',
      City: '',
      State: '',
      Pincode: '',
      PhoneNo: '',
    });
    setShowForm(false);
  };
  const handleDummyValue = () => {
    setFormData({
      Name: 'John Doe',
      City: 'Bengaluru',
      State: 'Karnataka',
      Pincode: '503971',
      PhoneNo: '9876543210',
    });
  };

  //Razorpay payment function
  const makePayment = (amount)=>{
        
    if(amount === ""){
    alert("please enter amount");
    }else{
      const options = {
        key: "rzp_test_vhFd6AzC7w7Aoy",
        key_secret:"NFGzAlZkZLHyKgeEO8RuU6zs",
        amount: amount *100,
        currency:"INR",
        name:"GiftKart",
        description:"For testing purpose",
        handler: function(response){
          setUserData(prev=>({...prev,paymentId:response.razorpay_payment_id}))

           // Toast for successful payment
        toast.success("Payment Successful 🎉🎉", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        },
        prefill: {
          name:"Susmit Mukherjee",
          email:"susmitmukherjee2001@gmail.com",
          contact:"9823651021"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <div className="profileContainer">
      <div className="headingContainer">
        <ul className="headingList">
          {headings.map((heading, index) => (
            <li
              className="headingValue"
              key={index}
              onClick={()=>setSelectedValue(heading)}
              style={{color:selectedValue===heading ? "rgb(1, 119, 253)":"black",textDecoration:selectedValue===heading ? "underline":""}}
            >
              {heading}
            </li>
          ))}
        </ul>
      </div>
      <div className="contentContainer">

        {/* //Profile Section */}

        {selectedValue=== "Profile" && (
          <div className="userData">
            <p className="userName">Name:{profileData.firstName}{profileData.lastName} </p>
            <p className="userEmail">Email:{profileData.email}</p>
            
          </div>
        )}
        {/* /* Address Section */ }
        {
          selectedValue=== "Address" &&(
            <div className="addressData">
               <button className="addNewAddressBtn" onClick={() =>{ setShowForm(true);setEditing(false)}}>Add New Address</button>
              <ol className="addressList">
                {
                  addressState.address.map(addressData=><li className="individualAddress" style={{display:addressData.userId === profileData._id || addressData.userId === "default" ? "" :"none"}}>
                    <div>Name: {addressData.Name}</div>
                    <div>City: {addressData.City}</div>
                    <div>State: {addressData.State}</div>
                    <div>PinCode: {addressData.Pincode}</div>
                    <div>PhoneNo: {addressData.PhoneNo}</div>
                    <button  className="editBtn"  onClick={()=>editForm(addressData.id)}>Edit</button>
                    </li>)
                }
              </ol>
              {showForm && (
        <div className="form-wrapper">
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.Name}
              onChange={(e) =>
                setFormData({ ...formData, Name: e.target.value })
              }
            />
            
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={formData.City}
              onChange={(e) =>
                setFormData({ ...formData, City: e.target.value })
              }
            />
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              value={formData.State}
              onChange={(e) =>
                setFormData({ ...formData, State: e.target.value })
              }
            />
            <label htmlFor="pincode">Pincode</label>
            <input
              type="number"
              id="pincode"
              value={formData.Pincode}
              onChange={(e) =>
                setFormData({ ...formData, Pincode: e.target.value })
              }
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              value={formData.PhoneNo}
              onChange={(e) =>
                setFormData({ ...formData, PhoneNo: e.target.value })
              }
            />
            
            <div className="formBtnDiv">
            <button type="button" onClick={handleFormSubmit}>Submit</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
            <button type="button" onClick={handleDummyValue}>Fill with Dummy Value</button>
            </div>
          </form>
        </div>
      )}
             
            </div>
            )
        }
        {/* //orders Section */}
        {selectedValue==="Orders" && 
         ( userData.token ===localStorage.getItem("token") && userData["order"][0] ? <div className="orderData">
         <div className="orderData-heading">Total Price: ₹{userData.orderAmount}</div>
         <div className="paymentStatus" style={{color:userData.paymentId ? "green" :"red",fontSize:"1.2rem",fontWeight:"600"}}>Payment: {userData.paymentId ? "Done":"Not Done"}</div>
         <div className="paymentId" style={{display:userData.paymentId ? "" :"none"}}>PaymentId: {userData.paymentId}</div>
         <button className="paymentBtn" style={{display:userData.paymentId ? "none" :""}} onClick={ ()=>makePayment(userData.orderAmount)}>Pay</button>
         <div className="paymentGuid" style={{display:userData.paymentId ? "none" :""}}>
          <h3>Follow the following step to make an Mock Payment.</h3>
          <ol>
            <li>Select UPI as payment mode and <b>123@sbi</b> as UPI Id.</li>
           
          </ol>
         </div>
         <hr/>
         <ul>
           {
             userData["order"][0].map(item=><li>
               <div><img style={{height:"130px",width:"110px"}} src={item.img1} alt={item.name}/></div>
               <div>{item.name}</div>
               <div>Quantity:{item.qty}</div>
             </li>)
           }
         </ul>

        </div>: <div>No orders placed</div>)
        }
      </div>
    </div>
  );
};
