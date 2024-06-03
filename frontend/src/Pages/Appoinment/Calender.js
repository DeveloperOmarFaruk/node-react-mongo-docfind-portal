import React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const Calender = ({ date, setDate }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={dayjs(date)}
          onChange={(e) => {
            setDate(e);
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default Calender;
