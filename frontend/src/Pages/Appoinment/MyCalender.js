import React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const MyCalender = ({ appoDate, setAppoDate }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={dayjs(appoDate)}
          onChange={(e) => {
            setAppoDate(e);
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default MyCalender;
