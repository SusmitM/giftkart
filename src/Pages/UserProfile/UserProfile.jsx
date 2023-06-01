import { useState } from "react";
import "./UserProfile.css";
import { useAuthContext } from "../../context/auth/authContext";
import { useAddressContext } from "../../context/address/addressContext";

export const UserProfile = () => {
  const{userData,selectedValue, setSelectedValue}=useAuthContext();
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
  console.log(userData["order"][0])
  const handleFormSubmit = () => {

    if(editing){
       addressDispatch({type:"UpdateAddressState",
       payload:formData})
        setShowForm(false);
    }
    else{
      addressDispatch({type:"addToAddressState",
      payload:formData})
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
      City: 'Sample City',
      State: 'Sample State',
      Pincode: '12345',
      PhoneNo: '9876543210',
    });
  };
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
            <p className="userName">Name:{userData.firstName}{userData.lastName} </p>
            <p className="userEmail">Email:{userData.email}</p>
            
          </div>
        )}
        {/* /* Address Section */ }
        {
          selectedValue=== "Address" &&(
            <div className="addressData">
               <button className="addNewAddressBtn" onClick={() =>{ setShowForm(true);setEditing(false)}}>Add New Address</button>
              <ol className="addressList">
                {
                  addressState.address.map(addressData=><li className="individualAddress">
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
        {selectedValue==="Orders" && 
         ( userData["order"][0] ? <div className="orderData">
         <div className="orderData-heading">Total Price: ₹{userData.orderAmount}</div>
         <div className="paymentStatus">Payment: Pending</div>
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
