"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

interface InputItemProps {
  type: "source" | "destination";
}

interface Location {
  label: string;
  value: {
    description: string;
    place_id: string;
  };
}

const InputItem: React.FC<InputItemProps> = ({ type }) => {
  const [value, setValue] = useState<Location | null>(null);
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    type == "source"
      ? setPlaceholder("Pickup Location")
      : setPlaceholder("DropOff Location");
  }, []);

  const getLatandLang = (place: Location, type: string) => {
    const placeId = place.value.place_id;
    const service = new google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.getDetails({ placeId }, (place, status) => {
      if (
        status === "OK" &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {
        console.log(place.geometry.location.lat());
      }
    });
  };
  return (
    <div className="bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4">
      <Image
        src={type == "source" ? "/source.png" : "/destination.png "}
        alt="source"
        width={20}
        height={20}
      />

      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        selectProps={{
          value,
          onChange: (place) => {
            if (place) {
              getLatandLang(place, type);
              setValue(place);
            }
          },
          placeholder,
          isClearable: true,
          className: "w-full",
          components: {
            DropdownIndicator: null,
          },
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: "#00ffff00",
              border: "none",
            }),
          },
        }}
      />
    </div>
  );
};

export default InputItem;
