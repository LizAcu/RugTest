import { render } from "@testing-library/react";
import PickupDate from "../PickupDate/PickupDate";
import ClientForm from "../ClientForm/ClientForm";


const BarcodeForm = () => {

    return (
        <div>
            <PickupDate/>
            <ClientForm/>
        </div>  
  
      )

}


export default BarcodeForm
