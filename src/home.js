import React from "react"

class home extends React.Component{

    shouldComponentUpdate(nextProps,nextState){
        if(this.props.value == nextProps.value){
            return false}
            else{
                return true
            }
        }



    render(){
        console.log(this.props.value)
    return(
        <>
        
       
        </>
       

    )
}
}

export default home;





////////////////////////////////////////////////
//   state = {
//     a : 0
//  }


//  dec = () =>{
//   this.setState({a: this.state.a -1})

//  }

//  incre = () =>{
//   this.setState({a : this.state.a +1})
//  }

//  Change = () =>{
//   this.setState({
//     a : 0
//   })
//  }
{/* <div id='main'>        <button className='btn' onClick={() => {this.dec()}}>-</button><h1 id='num'>{ this.state.a}</h1><button  className='btn' onClick={() => {this.incre()}}>+</button>
<button onClick={() =>{this.Change()}} className='btn2'>Reset</button>
</div> */}



/////////////////////////////////////////////////////////////////////////////////

// state={
//   itemsList : "",
//   cartItems : []}

// addItme(){
//   if(this.state.itemsList!=""){
//   var listcopy = [...this.state.cartItems]
//   listcopy.push(this.state.itemsList)
//   this.setState({itemsList : "", cartItems : listcopy})
//   }
//   else{
//     alert("Enter your item")
//   }
// }
// delete(index){
//   var listcopy = [...this.state.cartItems]
//   listcopy.splice(index,1);
//   this.setState({cartItems : listcopy})


// }
// editItemName = (e,index) => {
//   var listcopy = [...this.state.cartItems]
//   listcopy.splice(index,1,e.target.value);
//   this.setState({cartItems : listcopy})
// }
// storeCart = (e)=>{
//   this.setState({itemsList : e.target.value})
// }

// render(){

//   return(
//     <>
//     <input value={this.state.itemsList} placeholder='Enter your item' onChange={this.storeCart}></input>
//     <button onClick={()=>{this.addItme()}}>Add</button>
//     <ol>
//       {this.state.cartItems.map((item,i)=>{
//        return <li key={i}> {item} 
//        <input placeholder='Edit Item' 
//        onChange={ (e) => { this.editItemName(e , i) } }
//         /> <button onClick={()=>{this.delete(i)}}>delete</button></li>
//       })}
//     </ol>
//     </>
//   )
// }



//////////////////////////////////////////////////////////////////////////
// state = {
//   a : 10
// }

// Change = () =>{
//   this.setState({a : 20})
// }

// incer =() =>{
//   this.setState({ a : this.state.a +1})
// }
// decre= () =>{
//   this.setState({a : this.state.a - 1})
// }

// render (){
//   return(
//     <>
//     <button onClick={()=> {this.decre()}}> - </button> {this.state.a}
//     <button onClick={() => {this.incer()}}>+</button>
//     <Home  val = {this.state.a} changingState = {this.Change} />
//     </>
    

  
    
//   )
// }
// }



    // state={
    //   users : [],
    //   SearchedUsers : [],
    //   Typedname : "",
    //   activeUser : "2"
    // }
  
    // componentDidMount(){
    //   axios.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
    //   .then((res)=>{
    //     this.setState({users : res.data})
    //   })
    // }
  
    // changeActive=(index)=>{
    //   this.setState({activeUser : index})
    // }
  
    // Searchname=(e)=>{
    //   var Typedname=e.target.value
  
    //   var SearchedUsers = this.state.users.filter((user,i)=>{
    //     if(user.firstName.toLowerCase().includes(Typedname.toLowerCase())){
    //       return true
    //     }
    //   })
    //   this.setState({SearchedUsers, Typedname })
    //   }
  
    // render(){
    //   return(
    //     <main>
    //     <div id="table-section">
    //         <form action="/">
    //             <img src='./img/search-icon.svg' alt="Search Icon" />
    //             <input type="text" placeholder="Enter something" name="search-box" id="search-box" 
    //             onChange={(e)=>{this.Searchname(e)}}
    //             value={this.state.Typedname}/>
    //         </form>
  
    //         <div id="table-wrapper">
  
    //             <div id="table-headers">
    //                 <table>
    //                     <thead>
    //                         <tr>
    //                             <th className="column1">Id</th>
    //                             <th className="column2">FirstName</th>
    //                             <th className="column3">LastName</th>
    //                             <th className="column4">Email</th>
    //                             <th className="column5">Phone</th>
    //                         </tr>
    //                     </thead>
    //                 </table>
    //             </div>
  
    //             <div id="table-data">
    //                 <table>
    //                     <tbody>
    //                       {
    //                                               this.state.SearchedUsers.length > 0 || this.state.Typedname !=""? 
    //                                               this.state.SearchedUsers.map((user,i)=>{
    //                                                 return <TableRow 
    //                                                 changeActive = {this.changeActive}
    //                                                 id = {user.id}
    //                                                 activeUser = {this.state.activeUser}
    //                                                 index = {i}
  
    //                                                 firstName = {user.firstName}
    //                                                 lastName = {user.lastName}
    //                                                 email = {user.email}
    //                                                 phoneNo = {user.phone}
    //                                                 />
    //                                               }):
  
    //                       this.state.users.map((user,i)=>{
    //                         return <TableRow 
    //                         changeActive = {this.changeActive}
  
    //                         id = {user.id}
    //                         activeUser = {this.state.activeUser}
    //                         index = {i}
  
    //                         firstName = {user.firstName}
    //                         lastName = {user.lastName}
    //                         email = {user.email}
    //                         phoneNo = {user.phone}
    //                         />
    //                       })}
    //                     </tbody>
    //                 </table>
    //             </div>
  
    //         </div>
  
    //     </div>
    //   {this.state.users.length > 0 ? <InfoWrapper
    //       activeUserDetails = {this.state.users[this.state.activeUser]}
         
    // /> : ""}
    // </main>
    //   )
    // }
  
  
  