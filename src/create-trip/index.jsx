import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/ui/button";
import { AI_PROMPT, SelectBudgetOptions, SelectTravelersList } from "@/constants/options";
import { chatSession } from "@/service/AIModel";
import { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";

function CreateTrip() {
  const [place, setPlace] = useState();

  const [formData,setFormData]=useState([]);

  const handleInputChange=(name,value)=>{


    setFormData({
      ...formData,
      [name]:value
    })
  }

  useEffect(() => {
    console.log(formData);
  },[formData])

  const OnGenerateTrip=async()=>{
    if(formData?.Days>10 || !formData?.location||!formData?.budget||!formData?.traveler)
      {
        toast("Please Fill All The Fields")
        return;
      }
      
      const FINAL_PROMPT=AI_PROMPT
      .replace('{location}', formData?.location?.label)
      .replace('{days}', formData?.Days)
      .replace('{travelers}', formData?.traveler)
      .replace('{budget}', formData?.budget)
      .replace('{days}', formData?.Days)

      console.log(FINAL_PROMPT);

      const result= await chatSession.sendMessage(FINAL_PROMPT);

      console.log(result?.response?.text());

  }

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-2 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide us some basic information, and our trip planner will
        generate a customized itinerary based on your preferences{" "}
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange('location',v)
              },
            }}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days do you plan to spend on your trip?
          </h2>
          <Input placeholder={"Ex: 3"} type="number" 
            onChange={(e)=>handleInputChange('Days',e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">What is your budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div key={index}
                onClick={()=>handleInputChange('budget',item.title)}
                className={`p-4 border cursor-pointer 
                rounded-lg hover:shadow-lg
                ${formData?.budget==item.title&&'shadow-lg border-black'}
                `}>
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            Who do you plan to travel with?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelersList.map((item, index) => (
              <div
                key={index}
                onClick={()=>handleInputChange('traveler',item.people)}
                className={`p-4 border cursor-pointer rounded-lg 
                  hover:shadow-lg
                  ${formData.traveler==item.people&&'shadow-lg border-black'}
                  `}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='my-10 justify-end flex'>
      <Button onClick={OnGenerateTrip}>Generate Trip</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
