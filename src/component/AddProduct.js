import React, { Component } from 'react'
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
const url = "http://localhost:4000/addproduct";
export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
          form: {
            productId: "",
            productName:"",
            brand:"",
            item:"",
            price:"",
            path:"",
            description:"",
          },
          formErrorMessage: {
            productId: "",
            productName:"",
            brand:"",
            item:"",
            price:"",
            path:"",
            description:"",
          },
          formValid: {
            productId: false,
            productName: false,
            brand:false,
            item:false,
            price:false,
            path:false,
            description:false,
          },
          errorMessage: "",
          successMessage: "",
        };
      }
      submitBooking = (event) => {
        const newForm = {
            ...this.state.form,
          };
        Axios
        .post(url,newForm)
        .then((res)=>{
            this.setState({
              successMessage: "Booking created successfully!!",
              errorMessage: "",
            });
        })
        .catch((error) => {
          if (error.response == undefined) {
            this.setState({
              errorMessage: "Please start your JSON Server",
              successMessage: "",
            });
          } else if (error.response.status == 404) {
            this.setState({
              errorMessage: "Booking Failed!",
              successMessage: "",
            });
          }
        });
    };
    handleSubmit = (event) => {
        alert("Product Added Successfully");
        event.preventDefault();
        this.submitBooking();
        window.location.reload(false);
      };
    
      handleChange = (event) => {
           const name = event.target.name;
            const value = event.target.value;
            const newState={
                form: {
                  ...this.state.form,
                  [name]: value,
                },
              };
              this.setState(newState);
              this.validateField(name, value)
      };
      validateField = (fieldName, value) => {
        const { formErrorMessage, formValid } = this.state;
            switch (fieldName) {
              
              case "productId":
                if (value === "") {
                  formErrorMessage.productId = "Please enter a Product Id";
                  formValid.productId = false;
                }
                else if(!value.match(/^[A-Z]{1}[0-9]{4}$/)){
                    formErrorMessage.productId="It Should start with a captial letter and followed by a 4 digit";
                    formValid.productId=false;
                  }
                 else {
                  formErrorMessage.productId= "";
                  formValid.productId = true;
                }
                break;
    
                case "productName":
                if (value === "") {
                  formErrorMessage.productName = "Please enter a Movie Name";
                  formValid.productName = false;
                }
                else if(!value.match(/^[A-Za-z]+$/)){
                    formErrorMessage.productName="Please Enter Only Alphabets";
                    formValid.productName=false;
                  } 
                else {
                  formErrorMessage.productName = "";
                  formValid.productName= true;
                }
                break;

                case "brand":
                    if (value === "") {
                      formErrorMessage.brand = "Please enter a Brand Name";
                      formValid.brand = false;
                    }
                    else if(!value.match(/^[A-Za-z]+$/)){
                        formErrorMessage.brand="Please Enter Only Alphabets";
                        formValid.brand=false;
                      } 
                    else {
                      formErrorMessage.brand = "";
                      formValid.brand= true;
                    }
                    break;

                    case "item":
                        if (value === "") {
                          formErrorMessage.item = "Please enter a Item Name";
                          formValid.item = false;
                        }
                        else if(!value.match(/^[A-Za-z]+$/)){
                            formErrorMessage.item="Please Enter Only Alphabets";
                            formValid.item=false;
                          } 
                        else {
                          formErrorMessage.item = "";
                          formValid.item= true;
                        }
                        break;

                case "price":
                    if (value === "") {
                      formErrorMessage.price = "Please enter a Product Price";
                      formValid.price = false;
                    }
                    else if(!value.match(/^[0-9]*$/)){
                        formErrorMessage.price="Please Enter Only Numbers";
                        formValid.price=false;
                      } 
                      else {
                      formErrorMessage.price = "";
                      formValid.price= true;
                    }
                    break;

                    case "path":
                    if (value === "") {
                      formErrorMessage.path = "Please enter a Movie Image Address";
                      formValid.path = false;
                    }
                    else if(!value.match(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i)){
                        formErrorMessage.path="Please Enter Only Vaild Image Address";
                        formValid.path=false;
                      } 
                      else {
                      formErrorMessage.path = "";
                      formValid.path= true;
                    }
                    break;
                    case "description":
                      if (value === "") {
                        formErrorMessage.description= "Please enter a Description";
                        formValid.description = false;
                      }
                      else {
                        formErrorMessage.description = "";
                        formValid.description= true;
                      }
                      break;
              default:
                break;
            }
      };
    
  render() {
    return (
        <form className="container" onSubmit={this.handleSubmit}>
        <div className="CreateBooking">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <br />
              <div className="card">
                <div className="card-header bg-dark">
                <center><img src="https://freebeacon.com/wp-content/uploads/2014/11/Amazon-Logo-.jpg" style={{height:"50px"}} /></center>
                  <center><h4 className='text-light'>ADD PRODUCT</h4></center>
                </div>
                <div className="card-body">
                  { 
                    <div class="form-group">
                    
                    <label className="font-weight-bold">Product ID:</label>
                    <input type="text" className="form-control" 
                    value={this.state.form.productId}
                    name="productId" placeholder="e.g.- P1001" onChange={this.handleChange}></input>
                    <p className="text-danger">{this.state.formErrorMessage.productId}</p>
                   
                     <label className="font-weight-bold">Product Name:</label>
                     <input type="text" className="form-control" value={this.state.form.productName} 
                     name="productName" 
                     onChange={this.handleChange}></input>
                    <p className="text-danger">{this.state.formErrorMessage.productName}</p>

                    <label className="font-weight-bold">Item:</label>
                     <input type="text" className="form-control" value={this.state.form.item} 
                     name="item" placeholder='Example of Shirt,Watch' 
                     onChange={this.handleChange}></input>
                    <p className="text-danger">{this.state.formErrorMessage.item}</p>

                    <label className="font-weight-bold">Product Brand:</label>
                     <input type="text" className="form-control" value={this.state.form.brand} 
                     name="brand" 
                     onChange={this.handleChange}></input>
                    <p className="text-danger">{this.state.formErrorMessage.brand}</p>
                    
                    <label className="font-weight-bold">Product Price:</label>
                     <input type="number" className="form-control" value={this.state.form.price} 
                     name="price" 
                     onChange={this.handleChange}></input>
                    <p className="text-danger">{this.state.formErrorMessage.price}</p>

                    <label className="font-weight-bold">Product Image:</label>
                     <input type="text" className="form-control" value={this.state.form.path} 
                     name="path" 
                     onChange={this.handleChange}></input>
                    <p className="text-danger">{this.state.formErrorMessage.path}</p>

                    <label className="font-weight-bold">Description:</label>
                     <textarea type="text" className="form-control" value={this.state.form.description} 
                     name="description" 
                     onChange={this.handleChange}></textarea>
                    <p className="text-danger">{this.state.formErrorMessage.description}</p>
                    <br/>
                     </div>  
                  }
                  <button type="submit" 
                  disabled={
                    !(this.state.formValid.productId && this.state.formValid.productName &&
                    this.state.formValid.item && this.state.formValid.brand &&
                    this.state.formValid.price && this.state.formValid.path&&this.state.formValid.description)
                  } className="btn btn-dark" >Add Product</button>
                 <div align="center">
                    {
                       <p className="text-success">{this.state.successMessage}</p>
                    }
                    </div>
                  <div align="center">
                    {
                       <p className="text-danger">{this.state.ErrorMessage}</p>
                    }
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
    )
  }
}
